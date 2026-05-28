// @ts-check
const { test, expect } = require('@playwright/test');

/* =========================================================
   Annie Sails — Full site audit
   ========================================================= */

const ROOT_PAGES = [
  { path: '/', title: 'Annie Stevenson' },
  { path: '/about.html', title: 'About' },
  { path: '/boat.html', title: 'Boat' },
  { path: '/races.html', title: 'Racing' },
  { path: '/sponsors.html', title: 'Sponsors' },
  { path: '/policies.html', title: 'Policies' },
];

const LEARN_PAGES = [
  { path: '/learn/engines.html', title: 'engine' },
  { path: '/learn/spinnakers.html', title: 'spinnaker' },
  { path: '/learn/introduction.html', title: 'boat' },
  { path: '/learn/Wind,current,tide.html', title: 'wind' },
  { path: '/learn/sails.html', title: 'sails' },
  { path: '/learn/inshore-offshore.html', title: 'Inshore' },
];

const ALL_PAGES = [...ROOT_PAGES, ...LEARN_PAGES];

/* ---------------------------------------------------------
   1. Every page loads with 200 and has a <title>
   --------------------------------------------------------- */
for (const pg of ALL_PAGES) {
  test(`Page loads: ${pg.path}`, async ({ page }) => {
    const response = await page.goto(pg.path);
    expect(response.status()).toBe(200);
    const title = await page.title();
    expect(title.toLowerCase()).toContain(pg.title.toLowerCase());
  });
}

/* ---------------------------------------------------------
   2. Navigation: dropdown has 6 articles on every page
   --------------------------------------------------------- */
for (const pg of ALL_PAGES) {
  test(`Nav dropdown has 6 articles: ${pg.path}`, async ({ page }) => {
    await page.goto(pg.path);
    const dropdownLinks = page.locator('.nav-dropdown a');
    await expect(dropdownLinks).toHaveCount(6);
  });
}

/* ---------------------------------------------------------
   3. Footer: all pages have Policies link + correct count
   --------------------------------------------------------- */
for (const pg of ALL_PAGES) {
  test(`Footer has Policies link: ${pg.path}`, async ({ page }) => {
    await page.goto(pg.path);
    const policiesLink = page.locator('footer a[href*="policies"]');
    await expect(policiesLink).toHaveCount(1);
    await expect(policiesLink).toHaveText('Policies');
  });
}

/* ---------------------------------------------------------
   4. Copy protection: protect.js loaded on every page
   --------------------------------------------------------- */
for (const pg of ALL_PAGES) {
  test(`protect.js loaded: ${pg.path}`, async ({ page }) => {
    await page.goto(pg.path);
    const script = page.locator('script[src*="protect.js"]');
    await expect(script).toHaveCount(1);
  });
}

/* ---------------------------------------------------------
   5. Copy protection: right-click disabled
   --------------------------------------------------------- */
test('Right-click context menu is prevented', async ({ page }) => {
  await page.goto('/');
  const prevented = await page.evaluate(() => {
    const evt = new Event('contextmenu', { cancelable: true });
    return !document.dispatchEvent(evt);
  });
  expect(prevented).toBe(true);
});

/* ---------------------------------------------------------
   6. Copy protection: user-select is none
   --------------------------------------------------------- */
test('Text selection is disabled via CSS', async ({ page }) => {
  await page.goto('/');
  const userSelect = await page.evaluate(() => {
    return window.getComputedStyle(document.body).userSelect;
  });
  expect(userSelect).toBe('none');
});

/* ---------------------------------------------------------
   7. Images: all <img> tags have alt attributes
   --------------------------------------------------------- */
for (const pg of ALL_PAGES) {
  test(`All images have alt attribute: ${pg.path}`, async ({ page }) => {
    await page.goto(pg.path);
    const imagesWithoutAlt = await page.evaluate(() => {
      const imgs = document.querySelectorAll('img');
      const missing = [];
      imgs.forEach(img => {
        if (!img.hasAttribute('alt')) {
          missing.push(img.src);
        }
      });
      return missing;
    });
    expect(imagesWithoutAlt).toEqual([]);
  });
}

/* ---------------------------------------------------------
   8. Links: no broken internal links (same-origin)
   --------------------------------------------------------- */
for (const pg of ALL_PAGES) {
  test(`No broken internal links: ${pg.path}`, async ({ page, request }) => {
    await page.goto(pg.path);
    const internalLinks = await page.evaluate(() => {
      const links = document.querySelectorAll('a[href]');
      const results = [];
      links.forEach(a => {
        const href = a.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('#') && !href.startsWith('javascript:')) {
          // Resolve relative URL
          const resolved = new URL(href, window.location.href).pathname;
          results.push({ href, resolved, text: a.textContent.trim().substring(0, 40) });
        }
      });
      return results;
    });

    const broken = [];
    for (const link of internalLinks) {
      try {
        const resp = await request.get(link.resolved);
        if (resp.status() >= 400) {
          broken.push(`${link.href} → ${link.resolved} (${resp.status()}) text: "${link.text}"`);
        }
      } catch (e) {
        broken.push(`${link.href} → ${link.resolved} (error: ${e.message}) text: "${link.text}"`);
      }
    }
    expect(broken).toEqual([]);
  });
}

/* ---------------------------------------------------------
   9. Meta: every page has <meta name="description">
   --------------------------------------------------------- */
for (const pg of ALL_PAGES) {
  test(`Has meta description: ${pg.path}`, async ({ page }) => {
    await page.goto(pg.path);
    const desc = page.locator('meta[name="description"]');
    await expect(desc).toHaveCount(1);
    const content = await desc.getAttribute('content');
    expect(content.length).toBeGreaterThan(20);
  });
}

/* ---------------------------------------------------------
   10. Favicon: every page references the SVG favicon
   --------------------------------------------------------- */
for (const pg of ALL_PAGES) {
  test(`Has favicon: ${pg.path}`, async ({ page }) => {
    await page.goto(pg.path);
    const icon = page.locator('link[rel="icon"]');
    await expect(icon).toHaveCount(1);
  });
}

/* ---------------------------------------------------------
   11. Viewport meta tag on every page
   --------------------------------------------------------- */
for (const pg of ALL_PAGES) {
  test(`Has viewport meta: ${pg.path}`, async ({ page }) => {
    await page.goto(pg.path);
    const vp = page.locator('meta[name="viewport"]');
    await expect(vp).toHaveCount(1);
  });
}

/* ---------------------------------------------------------
   12. No console errors on page load
   --------------------------------------------------------- */
for (const pg of ALL_PAGES) {
  test(`No console errors: ${pg.path}`, async ({ page }) => {
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('pageerror', err => errors.push(err.message));
    await page.goto(pg.path, { waitUntil: 'networkidle' });
    expect(errors).toEqual([]);
  });
}

/* ---------------------------------------------------------
   13. Article pages have "up next" / "back to" footer nav
   --------------------------------------------------------- */
for (const lp of LEARN_PAGES) {
  test(`Article has next-article link: ${lp.path}`, async ({ page }) => {
    await page.goto(lp.path);
    const nextBtn = page.locator('.article-body .btn');
    const count = await nextBtn.count();
    // Every article should have at least one CTA button at the bottom
    expect(count).toBeGreaterThanOrEqual(1);
  });
}

/* ---------------------------------------------------------
   14. Performance: page weight check (HTML < 100KB)
   --------------------------------------------------------- */
for (const pg of ALL_PAGES) {
  test(`HTML size < 100KB: ${pg.path}`, async ({ request }) => {
    const resp = await request.get(pg.path);
    const body = await resp.text();
    const sizeKB = Buffer.byteLength(body, 'utf8') / 1024;
    expect(sizeKB).toBeLessThan(100);
  });
}

/* ---------------------------------------------------------
   15. Performance: images have width/height (prevent CLS)
   --------------------------------------------------------- */
for (const pg of ALL_PAGES) {
  test(`Images have width+height for CLS: ${pg.path}`, async ({ page }) => {
    await page.goto(pg.path);
    const missingDimensions = await page.evaluate(() => {
      const imgs = document.querySelectorAll('img');
      const issues = [];
      imgs.forEach(img => {
        const hasWidth = img.hasAttribute('width') || img.style.width;
        const hasHeight = img.hasAttribute('height') || img.style.height;
        if (!hasWidth && !hasHeight) {
          issues.push(img.src.split('/').pop());
        }
      });
      return issues;
    });
    expect(missingDimensions).toEqual([]);
  });
}

/* ---------------------------------------------------------
   16. Performance: load time < 3s per page
   --------------------------------------------------------- */
for (const pg of ALL_PAGES) {
  test(`Page loads in < 3s: ${pg.path}`, async ({ page }) => {
    const start = Date.now();
    await page.goto(pg.path, { waitUntil: 'domcontentloaded' });
    const elapsed = Date.now() - start;
    expect(elapsed).toBeLessThan(3000);
  });
}

/* ---------------------------------------------------------
   17. Accessibility: skip-link exists on every page
   --------------------------------------------------------- */
for (const pg of ALL_PAGES) {
  test(`Has skip-to-content link: ${pg.path}`, async ({ page }) => {
    await page.goto(pg.path);
    const skipLink = page.locator('.skip-link');
    await expect(skipLink).toHaveCount(1);
  });
}

/* ---------------------------------------------------------
   18. Accessibility: page has lang attribute
   --------------------------------------------------------- */
for (const pg of ALL_PAGES) {
  test(`HTML has lang attribute: ${pg.path}`, async ({ page }) => {
    await page.goto(pg.path);
    const lang = await page.getAttribute('html', 'lang');
    expect(lang).toBe('en');
  });
}

/* ---------------------------------------------------------
   19. Accessibility: headings are in order (no skips)
   --------------------------------------------------------- */
for (const pg of ALL_PAGES) {
  test(`Heading hierarchy is valid: ${pg.path}`, async ({ page }) => {
    await page.goto(pg.path);
    const headings = await page.evaluate(() => {
      const hs = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      return Array.from(hs).map(h => ({
        level: parseInt(h.tagName[1]),
        text: h.textContent.trim().substring(0, 50),
      }));
    });

    // Check: exactly one h1
    const h1s = headings.filter(h => h.level === 1);
    expect(h1s.length).toBe(1);

    // Check: no heading level skips (h1 → h3 without h2)
    const skips = [];
    for (let i = 1; i < headings.length; i++) {
      const jump = headings[i].level - headings[i - 1].level;
      if (jump > 1) {
        skips.push(`${headings[i - 1].text} (h${headings[i - 1].level}) → ${headings[i].text} (h${headings[i].level})`);
      }
    }
    expect(skips).toEqual([]);
  });
}

/* ---------------------------------------------------------
   20. Mobile: nav toggle exists and has aria-label
   --------------------------------------------------------- */
for (const pg of ALL_PAGES) {
  test(`Mobile nav toggle accessible: ${pg.path}`, async ({ page }) => {
    await page.goto(pg.path);
    const toggle = page.locator('.nav-toggle');
    await expect(toggle).toHaveCount(1);
    const label = await toggle.getAttribute('aria-label');
    expect(label).toBeTruthy();
  });
}

/* ---------------------------------------------------------
   21. CSS: stylesheet loads successfully
   --------------------------------------------------------- */
test('styles.css loads with 200', async ({ request }) => {
  const resp = await request.get('/styles.css');
  expect(resp.status()).toBe(200);
});

/* ---------------------------------------------------------
   22. JS: protect.js loads successfully
   --------------------------------------------------------- */
test('protect.js loads with 200', async ({ request }) => {
  const resp = await request.get('/protect.js');
  expect(resp.status()).toBe(200);
});
