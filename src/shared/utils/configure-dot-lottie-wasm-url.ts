import { setWasmUrl } from "@lottiefiles/dotlottie-react";

let isDotLottieWasmConfigured = false;

export const configureDotLottieWasmUrl = () => {
  if (isDotLottieWasmConfigured) {
    return;
  }

  setWasmUrl("/dotlottie-player.wasm");
  isDotLottieWasmConfigured = true;
};
