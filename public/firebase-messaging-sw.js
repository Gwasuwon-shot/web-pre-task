/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
self.addEventListener("install", function (e) {
  console.log("fcm sw install..");
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  console.log("fcm sw activate..");
});

// self.addEventListener("push", function (e) {
//   console.log("push: ", e.data.json());
//   if (!e.data.json()) return;

//   const resultData = e.data.json().notification;
//   const notificationTitle = resultData.title;
//   const notificationOptions = {
//     body: resultData.body,
//     icon: "/tutice.png",
//     tag: resultData.tag,
//     ...resultData,
//   };
//   console.log("notificationOptions: ", { resultData, notificationTitle, notificationOptions });

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

self.addEventListener("push", (event) => {
  consoleMessage(`${event}`);

  const message = event.data?.json();
  event.waitUntil(
    self.registration.showNotification(message.title, {
      body: message.body,
      icon: "/tutice.png",
    }),
  );
});

self.addEventListener("notificationclick", function (event) {
  console.log("notification click");
  const url = "/";
  event.notification.close();
  event.waitUntil(clients.openWindow(url));
});
