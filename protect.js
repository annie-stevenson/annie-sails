/* =========================================================
   Annie Sails - Copy Protection
   Disables right-click, view-source shortcuts, and drag
   ========================================================= */
(function () {
  'use strict';

  // Disable right-click context menu
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  // Block keyboard shortcuts: Ctrl+U, Ctrl+Shift+I, Ctrl+Shift+J, F12
  // Also handles Cmd variants on Mac
  document.addEventListener('keydown', function (e) {
    // F12 - Developer Tools
    if (e.key === 'F12') {
      e.preventDefault();
      return;
    }
    // Ctrl+U / Cmd+U - View Source
    if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
      e.preventDefault();
      return;
    }
    // Ctrl+Shift+I / Cmd+Option+I - Inspect Element
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') {
      e.preventDefault();
      return;
    }
    // Ctrl+Shift+J / Cmd+Option+J - Console
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'J') {
      e.preventDefault();
      return;
    }
    // Ctrl+Shift+C / Cmd+Option+C - Inspect Element (Chrome)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
      e.preventDefault();
      return;
    }
    // Ctrl+S / Cmd+S - Save Page
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault();
      return;
    }
  });

  // Disable drag on images
  document.addEventListener('dragstart', function (e) {
    e.preventDefault();
  });
})();
