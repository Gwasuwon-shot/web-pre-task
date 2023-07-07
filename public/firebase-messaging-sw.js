// importScripts("https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/9.5.0/firebase-messaging.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");
const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_API_KEY,
  authDomain: "pre-gwasuoneshot.firebaseapp.com",
  projectId: "pre-gwasuoneshot",
  storageBucket: "pre-gwasuoneshot.appspot.com",
  messagingSenderId: import.meta.env.REACT_APP_MESSAGING_ID,
  appId: import.meta.env.REACT_APP_APP_ID,
  measurementId: import.meta.env.REACT_APP_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(messaging, (payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);

  // Customize notification here
  const notificationTitle = "Tutice";
  const notificationOptions = {
    body: payload,
    icon: "/fruit.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
