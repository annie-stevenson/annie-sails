# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site-audit.spec.js >> Page loads: /learn/introduction.html
- Location: tests/site-audit.spec.js:32:3

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "boat"
Received string:    "the campaign - annie stevenson"
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to content" [ref=e2] [cursor=pointer]:
    - /url: "#main"
  - banner [ref=e3]:
    - generic [ref=e4]:
      - link "Annie Sails" [ref=e5] [cursor=pointer]:
        - /url: ../index.html
        - img [ref=e6]
        - text: Annie Sails
      - navigation [ref=e10]:
        - list [ref=e11]:
          - listitem [ref=e12]:
            - link "Learn" [ref=e13] [cursor=pointer]:
              - /url: ../index.html
          - listitem [ref=e14]:
            - link "The Boat" [ref=e15] [cursor=pointer]:
              - /url: ../boat.html
          - listitem [ref=e16]:
            - link "Racing" [ref=e17] [cursor=pointer]:
              - /url: ../races.html
          - listitem [ref=e18]:
            - link "Partners" [ref=e19] [cursor=pointer]:
              - /url: ../sponsors.html
          - listitem [ref=e20]:
            - link "About Annie" [ref=e21] [cursor=pointer]:
              - /url: ../about.html
  - main [ref=e22]:
    - generic [ref=e24]:
      - generic [ref=e25]: Campaign · Long read
      - heading "Running a campaign" [level=1] [ref=e26]
      - paragraph [ref=e27]: An introduction to Employment Hero Alliance - the Dehler 30 OD we're racing, and the double-handed campaign I'm building around her.
      - generic [ref=e28]:
        - generic [ref=e29]: 📅 Published May 2026
        - generic [ref=e30]: ⏱ 6 min read
        - generic [ref=e31]: 🏷️ Campaign
    - link "Tap to watch on @_annie_sails →" [ref=e33] [cursor=pointer]:
      - /url: https://www.instagram.com/p/DXBfGxij0c1/
      - generic [ref=e36]: Tap to watch on @_annie_sails →
    - article [ref=e37]:
      - paragraph [ref=e38]:
        - link "Employment Hero Alliance" [ref=e39] [cursor=pointer]:
          - /url: ../boat.html
        - text: is a Dehler 30 OD, launched back in 2020 and built in Germany. She's 30ft long (or 9.14m for those who also struggle with the conversion, like me). She was designed for one-design offshore racing, meaning every boat is the same - same hull, same keel, same rig, same sail plan.
      - paragraph [ref=e40]: The class was designed by Judel/Vrolijk, the same naval architecture firm behind a long list of successful racing and cruising yachts. They drew a boat that's fast enough to be exciting, stable enough to be safe offshore, and simple enough that two people can handle her.
      - figure "The Dehler 30 OD - designed by Judel/Vrolijk" [ref=e41]:
        - img "Technical sail plan drawing of a Dehler 30 OD showing hull, keel, rig, and sail layout" [ref=e42]
        - generic [ref=e43]: The Dehler 30 OD - designed by Judel/Vrolijk
      - heading "The key specs" [level=2] [ref=e44]
      - paragraph [ref=e45]: "Alliance is compact but she packs a lot into 30 feet. Here's what you're looking at:"
      - generic [ref=e46]:
        - heading "Alliance at a glance" [level=3] [ref=e47]
        - list [ref=e48]:
          - listitem [ref=e49]:
            - strong [ref=e50]: Length
            - text: "- 30 feet (9.14 m) overall"
          - listitem [ref=e51]:
            - strong [ref=e52]: Displacement
            - text: "- 2,800 kg"
          - listitem [ref=e53]:
            - strong [ref=e54]: Rig
            - text: "- carbon fibre mast and boom"
          - listitem [ref=e55]:
            - strong [ref=e56]: Keel
            - text: "- deep fin keel with lead bulb for stability"
          - listitem [ref=e57]:
            - strong [ref=e58]: Rudders
            - text: "- twin rudders for control at high heel angles"
          - listitem [ref=e59]:
            - strong [ref=e60]: Sails
            - text: "- mainsail, reefable jib, staysail, two asymmetric spinnakers, and a code zero"
      - heading "What does \"double-handed\" actually mean?" [level=2] [ref=e61]
      - paragraph [ref=e62]: Double-handed means two crew. That's it. Two people to do everything - sail changes, navigation, cooking, helming, sleeping, keeping watch, fixing whatever breaks at 3am. On a fully crewed boat you might have eight or ten people sharing those jobs. On Employment Hero Alliance, it's me and Pete, and the ocean doesn't care that we're short-staffed.
      - generic [ref=e63]: The ocean doesn't care that you're short-staffed.
      - paragraph [ref=e64]: Double-handed racing is a growing discipline of offshore sailing, and for good reason. It's more accessible - you don't need to recruit and coordinate a crew of ten. It's more personal - every decision, every mistake, every good call is yours. And it's more demanding, which makes it more rewarding. There's nowhere to hide when there are only two of you.
      - heading "The campaign" [level=2] [ref=e65]
      - paragraph [ref=e66]:
        - text: The 2026 Winter season is built around
        - link "two key races" [ref=e67] [cursor=pointer]:
          - /url: ../races.html
        - text: ": the"
        - strong [ref=e68]: Sydney to Gold Coast
        - text: and the
        - strong [ref=e69]: Gold Coast to Mackay
        - text: ". Both are solid offshore passages - hundreds of nautical miles up the coast, through the kinds of conditions that test everything: 3 knots of southerly current, unpredictable winds, sleep deprivation, and the ability to keep making good decisions when you're tired and wet and the horizon won't stay still."
      - paragraph [ref=e70]: These races are the foundation. They're where we build the miles, the experience, and the record that opens the door to bigger events down the track. Every serious offshore campaign starts with races like these - learning the boat, learning each other, learning what works and what falls apart when you're 50 miles from shore at midnight.
      - generic [ref=e71]: "Every serious offshore campaign starts the same way: miles, mistakes, and midnight."
      - paragraph [ref=e72]: "To compete, we need to sort everything: IRC, ORC certificates, category 2 safety audit requirements, rig, hull and keel checks, electronics and engine maintenance. The list goes on."
      - link "See our race calendar →" [ref=e73] [cursor=pointer]:
        - /url: ../races.html
        - text: See our race calendar
        - generic [ref=e74]: →
      - separator [ref=e75]
      - generic [ref=e76]:
        - generic [ref=e77]:
          - generic [ref=e78]: Up next in the library
          - heading "Reading wind, current & tide" [level=3] [ref=e79]
        - link "Read next →" [ref=e80] [cursor=pointer]:
          - /url: Wind,current,tide.html
          - text: Read next
          - generic [ref=e81]: →
    - generic [ref=e82]:
      - paragraph [ref=e83]: If you found this useful, there's more where it came from. Short reels, behind-the-scenes, and race updates.
      - link "Follow @_annie_sails →" [ref=e84] [cursor=pointer]:
        - /url: https://www.instagram.com/_annie_sails/
        - text: Follow @_annie_sails
        - generic [ref=e85]: →
  - contentinfo [ref=e86]:
    - generic [ref=e87]:
      - generic [ref=e88]: © 2026 Annie Stevenson
      - navigation [ref=e89]:
        - link "Learn" [ref=e90] [cursor=pointer]:
          - /url: ../index.html
        - link "The Boat" [ref=e91] [cursor=pointer]:
          - /url: ../boat.html
        - link "Partners" [ref=e92] [cursor=pointer]:
          - /url: ../sponsors.html
        - link "About" [ref=e93] [cursor=pointer]:
          - /url: ../about.html
        - link "Policies" [ref=e94] [cursor=pointer]:
          - /url: ../policies.html
        - link "Instagram" [ref=e95] [cursor=pointer]:
          - /url: https://www.instagram.com/_annie_sails/
  - generic: In Development
```

# Test source

```ts
  1   | // @ts-check
  2   | const { test, expect } = require('@playwright/test');
  3   | 
  4   | /* =========================================================
  5   |    Annie Sails — Full site audit
  6   |    ========================================================= */
  7   | 
  8   | const ROOT_PAGES = [
  9   |   { path: '/', title: 'Annie Stevenson' },
  10  |   { path: '/about.html', title: 'About' },
  11  |   { path: '/boat.html', title: 'Boat' },
  12  |   { path: '/races.html', title: 'Racing' },
  13  |   { path: '/sponsors.html', title: 'Sponsors' },
  14  |   { path: '/policies.html', title: 'Policies' },
  15  | ];
  16  | 
  17  | const LEARN_PAGES = [
  18  |   { path: '/learn/engines.html', title: 'engine' },
  19  |   { path: '/learn/spinnakers.html', title: 'spinnaker' },
  20  |   { path: '/learn/introduction.html', title: 'boat' },
  21  |   { path: '/learn/Wind,current,tide.html', title: 'wind' },
  22  |   { path: '/learn/sails.html', title: 'sails' },
  23  |   { path: '/learn/inshore-offshore.html', title: 'Inshore' },
  24  | ];
  25  | 
  26  | const ALL_PAGES = [...ROOT_PAGES, ...LEARN_PAGES];
  27  | 
  28  | /* ---------------------------------------------------------
  29  |    1. Every page loads with 200 and has a <title>
  30  |    --------------------------------------------------------- */
  31  | for (const pg of ALL_PAGES) {
  32  |   test(`Page loads: ${pg.path}`, async ({ page }) => {
  33  |     const response = await page.goto(pg.path);
  34  |     expect(response.status()).toBe(200);
  35  |     const title = await page.title();
> 36  |     expect(title.toLowerCase()).toContain(pg.title.toLowerCase());
      |                                 ^ Error: expect(received).toContain(expected) // indexOf
  37  |   });
  38  | }
  39  | 
  40  | /* ---------------------------------------------------------
  41  |    2. Navigation: dropdown has 6 articles on every page
  42  |    --------------------------------------------------------- */
  43  | for (const pg of ALL_PAGES) {
  44  |   test(`Nav dropdown has 6 articles: ${pg.path}`, async ({ page }) => {
  45  |     await page.goto(pg.path);
  46  |     const dropdownLinks = page.locator('.nav-dropdown a');
  47  |     await expect(dropdownLinks).toHaveCount(6);
  48  |   });
  49  | }
  50  | 
  51  | /* ---------------------------------------------------------
  52  |    3. Footer: all pages have Policies link + correct count
  53  |    --------------------------------------------------------- */
  54  | for (const pg of ALL_PAGES) {
  55  |   test(`Footer has Policies link: ${pg.path}`, async ({ page }) => {
  56  |     await page.goto(pg.path);
  57  |     const policiesLink = page.locator('footer a[href*="policies"]');
  58  |     await expect(policiesLink).toHaveCount(1);
  59  |     await expect(policiesLink).toHaveText('Policies');
  60  |   });
  61  | }
  62  | 
  63  | /* ---------------------------------------------------------
  64  |    4. Copy protection: protect.js loaded on every page
  65  |    --------------------------------------------------------- */
  66  | for (const pg of ALL_PAGES) {
  67  |   test(`protect.js loaded: ${pg.path}`, async ({ page }) => {
  68  |     await page.goto(pg.path);
  69  |     const script = page.locator('script[src*="protect.js"]');
  70  |     await expect(script).toHaveCount(1);
  71  |   });
  72  | }
  73  | 
  74  | /* ---------------------------------------------------------
  75  |    5. Copy protection: right-click disabled
  76  |    --------------------------------------------------------- */
  77  | test('Right-click context menu is prevented', async ({ page }) => {
  78  |   await page.goto('/');
  79  |   const prevented = await page.evaluate(() => {
  80  |     const evt = new Event('contextmenu', { cancelable: true });
  81  |     return !document.dispatchEvent(evt);
  82  |   });
  83  |   expect(prevented).toBe(true);
  84  | });
  85  | 
  86  | /* ---------------------------------------------------------
  87  |    6. Copy protection: user-select is none
  88  |    --------------------------------------------------------- */
  89  | test('Text selection is disabled via CSS', async ({ page }) => {
  90  |   await page.goto('/');
  91  |   const userSelect = await page.evaluate(() => {
  92  |     return window.getComputedStyle(document.body).userSelect;
  93  |   });
  94  |   expect(userSelect).toBe('none');
  95  | });
  96  | 
  97  | /* ---------------------------------------------------------
  98  |    7. Images: all <img> tags have alt attributes
  99  |    --------------------------------------------------------- */
  100 | for (const pg of ALL_PAGES) {
  101 |   test(`All images have alt attribute: ${pg.path}`, async ({ page }) => {
  102 |     await page.goto(pg.path);
  103 |     const imagesWithoutAlt = await page.evaluate(() => {
  104 |       const imgs = document.querySelectorAll('img');
  105 |       const missing = [];
  106 |       imgs.forEach(img => {
  107 |         if (!img.hasAttribute('alt')) {
  108 |           missing.push(img.src);
  109 |         }
  110 |       });
  111 |       return missing;
  112 |     });
  113 |     expect(imagesWithoutAlt).toEqual([]);
  114 |   });
  115 | }
  116 | 
  117 | /* ---------------------------------------------------------
  118 |    8. Links: no broken internal links (same-origin)
  119 |    --------------------------------------------------------- */
  120 | for (const pg of ALL_PAGES) {
  121 |   test(`No broken internal links: ${pg.path}`, async ({ page, request }) => {
  122 |     await page.goto(pg.path);
  123 |     const internalLinks = await page.evaluate(() => {
  124 |       const links = document.querySelectorAll('a[href]');
  125 |       const results = [];
  126 |       links.forEach(a => {
  127 |         const href = a.getAttribute('href');
  128 |         if (href && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('#') && !href.startsWith('javascript:')) {
  129 |           // Resolve relative URL
  130 |           const resolved = new URL(href, window.location.href).pathname;
  131 |           results.push({ href, resolved, text: a.textContent.trim().substring(0, 40) });
  132 |         }
  133 |       });
  134 |       return results;
  135 |     });
  136 | 
```