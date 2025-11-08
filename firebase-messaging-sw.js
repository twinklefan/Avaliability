// Import Firebase compat scripts (these expose the namespaced global used below)
importScripts("https://www.gstatic.com/firebasejs/12.5.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.5.0/firebase-messaging-compat.js");

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBDQVLVHlNMtit_X2lrtNp5_nqVaY7vWY0",
  projectId: "avaliability",
  messagingSenderId: "163231772068",
  appId: "1:163231772068:web:291a0be7ec337e45632531"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function (payload) {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "check.png",
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
