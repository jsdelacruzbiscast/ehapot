// ================================================================
// eHapot - Shared Configuration
// Version: 2.1.0 Hardened
// No secrets belong in this file.
// ================================================================
'use strict';

const CONFIG = Object.freeze({
  APP_NAME: 'eHapot',
  VERSION: '2.1.1',

  // Google Apps Script Web App
  ENDPOINT: 'https://script.google.com/macros/s/AKfycbwBxCzLRBd1inBCwXuekBoVQDcnW6_XOZaPoas3pu-LZgsJV2Ql6IUwcjag5Oq4fvyVTA/exec',

  // Administrative reference only
  SHEET_URL: 'https://docs.google.com/spreadsheets/d/1mq64Mm6_WXSiSv0I_XnSIMQwY8NAj3l51yfJ-CMSdHE/edit',

  PROJECTOR_POLL_INTERVAL: 3000,
  PROJECTOR_HIDDEN_POLL_INTERVAL: 30000,
  MODERATOR_POLL_INTERVAL: 4000,
  REQUEST_TIMEOUT: 30000,
  MODERATOR_REQUEST_TIMEOUT: 45000,

  MIN_QUESTION_LENGTH: 3,
  MAX_QUESTION_LENGTH: 500,
  RATE_LIMIT_MS: 10000,

  // Public event/session code only. This is NOT a moderator credential.
  EVENT_PIN_PATTERN: '^[0-9]{4,6}$'
});

(function validateConfig() {
  if (typeof console === 'undefined') return;

  console.log(`[eHapot ${CONFIG.VERSION}] Configuration loaded.`);

  const endpointOk =
    typeof CONFIG.ENDPOINT === 'string' &&
    /^https:\/\/script\.google\.com\/macros\/s\/[^/]+\/exec$/.test(CONFIG.ENDPOINT) &&
    !CONFIG.ENDPOINT.includes('YOUR_DEPLOYMENT_ID');

  if (!endpointOk) {
    console.error('[eHapot] Invalid or placeholder Apps Script ENDPOINT in config.js.');
  }
})();
