// ================================================================
//  eHapot - Shared Configuration File
//  Version: 2.0.0
//  Purpose: Centralizes all environment variables for the eHapot
//           Q&A system (Audience, Moderator, and Projector).
// ================================================================

// ⚠️  CRITICAL: Upload this file to the ROOT directory of your 
//     GitHub Pages repository (same folder as index.html, 
//     submit.html, moderator.html, and projector.html).

const CONFIG = {

  // --------------------------------------------------------------
  // 1. APPLICATION NAME (Branding across all interfaces)
  // --------------------------------------------------------------
  APP_NAME: 'eHapot',


  // --------------------------------------------------------------
  // 2. BACKEND ENDPOINT (Google Apps Script Web App URL)
  // --------------------------------------------------------------
  // 🔑 HOW TO GET THIS URL:
  //    1. Open your Google Sheet (eHapot_QnA_Database).
  //    2. Click Extensions → Apps Script.
  //    3. In the Apps Script editor, click "Deploy" (top-right).
  //    4. Select "Manage deployments".
  //    5. Find your active Web App deployment.
  //    6. COPY the "Web App URL" (starts with 
  //       https://script.google.com/macros/s/... and ends with /exec).
  //    7. PASTE it below, replacing the placeholder URL.
  // --------------------------------------------------------------
  ENDPOINT: 'https://script.google.com/macros/s/AKfycbwBxCzLRBd1inBCwXuekBoVQDcnW6_XOZaPoas3pu-LZgsJV2Ql6IUwcjag5Oq4fvyVTA/exec', // ⬅️ REPLACE THIS!

  // --------------------------------------------------------------
  // 3. POLLING INTERVALS (in milliseconds)
  // --------------------------------------------------------------
  //    These control how often the frontend asks the backend for updates.
  //    Lower = faster updates, but uses more of your daily Google quota.
  //    Higher = saves quota, but slightly slower to show new questions.
  // --------------------------------------------------------------
  PROJECTOR_POLL_INTERVAL: 3000,   // 3 seconds (big screen updates)
  MODERATOR_POLL_INTERVAL: 4000,   // 4 seconds (moderator dashboard)

};

// ================================================================
//  DIAGNOSTIC: Logs the loaded endpoint to the browser console.
//  Helps you verify the URL is correct.
// ================================================================
if (typeof console !== 'undefined') {
  console.log('[eHapot] Configuration loaded successfully.');
  console.log('[eHapot] Endpoint:', CONFIG.ENDPOINT);
  
  // Warn the user if the placeholder is still present
  if (CONFIG.ENDPOINT.includes('YOUR_DEPLOYMENT_ID')) {
    console.warn('[eHapot] ⚠️  WARNING: You are still using the placeholder ENDPOINT!');
    console.warn('[eHapot] Please replace it with your actual Apps Script Web App URL.');
  }
}

// ================================================================
//  END OF FILE
// ================================================================
