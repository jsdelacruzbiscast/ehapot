// ================================================================
// eHapot - Shared Configuration
// Version: 2.4.1 Hardened
// No secrets belong in this file.
// ================================================================
'use strict';

const CONFIG = Object.freeze({
  APP_NAME: 'eHapot',
  VERSION: '2.4.1',

  // Google Apps Script Web App
  ENDPOINT: 'https://script.google.com/macros/s/AKfycbwBxCzLRBd1inBCwXuekBoVQDcnW6_XOZaPoas3pu-LZgsJV2Ql6IUwcjag5Oq4fvyVTA/exec',

  // v2.4.1: the raw Sheet URL is no longer stored here. Holding
  // MODERATOR_SECRET used to be enough to reach it via this file; now it's
  // only ever returned by the backend's 'verifyAdmin' action, gated behind
  // the separate ADMIN_SECRET. See moderator.html's Admin Access flow.

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
