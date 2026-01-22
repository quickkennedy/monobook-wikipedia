"use strict";

//for compatibility reasons
var browser = chrome;

var monobookSkinActivationSwitch = document.getElementById("monobookSkinActivationSwitch");
var autoReloadSwitch = document.getElementById("autoReloadSwitch");

var monobookSkinActivation = true;
var autoReload = true;

// load stored settings from local storage
browser.storage.local.get((items) => {
	monobookSkinActivation = items.hasOwnProperty('monobook_skin_activation') ? items.monobook_skin_activation : true;
	autoReload = items.hasOwnProperty('auto_reload') ? items.auto_reload : true;

	monobookSkinActivationSwitch.checked = monobookSkinActivation;
	autoReloadSwitch.checked = autoReload;
	
	monobookSkinActivationSwitch.addEventListener("change", switchChanged);
	autoReloadSwitch.addEventListener("change", switchChanged);
});

/**
 * Changes the settings.
 */
function switchChanged() {
	// apply skin or not
	monobookSkinActivation = monobookSkinActivationSwitch.checked;	
	autoReload = autoReloadSwitch.checked;

	browser.storage.local.set({
		monobook_skin_activation: monobookSkinActivationSwitch.checked,
		auto_reload: autoReloadSwitch.checked
	});
}
