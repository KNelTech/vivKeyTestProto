import { initWebcamModule } from "./webcamModule.js";
import { initAudioModule } from "./audioModule.js";
import { initBatteryModule } from "./batteryModule.js";
import { initKeyboardModule } from "./keyboardModule.js";

document.addEventListener("contextmenu", (event) => event.preventDefault());

document.addEventListener("DOMContentLoaded", function () {
  initKeyboardModule();

  initWebcamModule();

  initAudioModule();

  initBatteryModule();
});
