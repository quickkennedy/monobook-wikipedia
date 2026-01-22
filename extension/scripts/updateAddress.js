/** updateAddress.js
 * by Torma
 * https://github.com/torma616
 * 
 * 
 * This updates the URL on the webpage after the ?useskin=monobook query has been applied,
 * to bring us back to the good old days when monobook was default, as it should be. 
 * 
 **/ 
'use strict';

(async () => {
  const browser = chrome;
  let enabled = true;

  /**
   * Called when the settings are loaded from the local storage.
   * 
   * @param {[key: string]: any} items The items from the local storage.
   */
  function onSettingsLoaded(items) {
    parseSettings(items);
  }

  /**
   * Parses the items from the local storage to the global variables in this worker script.
   * 
   * @param {[key: string]: any} items The items from the local storage.
   */
  function parseSettings(items) {
    enabled = items.hasOwnProperty('monobook_skin_activation') ? items.monobook_skin_activation : true;
  }

  /**
   * Loads the current settings from local storage and processes the URL if needed.
   */
  browser.storage.local.get(onSettingsLoaded);
})();
