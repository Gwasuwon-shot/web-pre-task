self.addEventListener("install", function (e) {
  console.log("fcm sw install,,,");
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  console.log("fcm sw activate,,,");
});

self.addEventListener("push", function (e) {
  console.log("push:", e.data.json());
  if (!e.data.json()) return;

  const resultData = e.data.json().notification;
  const notificationTitle = resultData.title;
  const notificationOptions = {
    body: resultData.body,
    ...resultData,
  };
  console.log("push", { resultData, notificationTitle, notificationOptions });

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("notificationclick", function (e) {
  console.log("notification click");

  const url = "/";
  e.notification.close();
  e.waitUntil(clients.openWindow(url));
});
