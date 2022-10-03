const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  //   window.deferredPrompt = event;
  butInstall.style.visibility = "visible";

  butInstall.addEventListener("click", () => {
    console.log("👍", "butInstall-clicked");
    event.prompt();
    butInstall.setAttribute("disabled", true);
    butInstall.textContent = "Installed!";
  });
});

// TODO: Implement a click event handler on the `butInstall` element
// butInstall.addEventListener("click", async () => {
//   console.log("👍", "butInstall-clicked");
//   const promptEvent = window.deferredPrompt;
//   if (!promptEvent) {
//     return;
//   }
//   promptEvent.prompt();
//   const result = await promptEvent;
//   console.log("👍", "result", result);
//   window.deferredPrompt = null;
//     butInstall.setAttribute("disabled", true);
//     butInstall.textContent = "Installed!";
// });

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("👍", "appinstalled", event);
});
