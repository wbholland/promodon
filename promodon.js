const proModeButton = document.getElementsByClassName("mini-meta-pro-mode-div")[0].childNodes[1];
const saveSettingsButton = document.getElementById("settings-button");
const click = new Event("click");

setTimeout(() => proModeButton.dispatchEvent(click), 100);
setTimeout(() => saveSettingsButton.dispatchEvent(click), 200);

