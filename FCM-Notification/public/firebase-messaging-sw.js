
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCIcYCw1nBR9CLSFsssi7zil-Q3kEWlNyU",
  authDomain: "notification-cd1ac.firebaseapp.com",
  projectId: "notification-cd1ac",
  storageBucket: "notification-cd1ac.appspot.com",
  messagingSenderId: "217909737706",
  appId: "1:217909737706:web:c2c8d36a29ce189a097f93",
  measurementId: "G-2HD40PSVQQ"
};


firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload){
  console.log("[firebase-messaging-sw.js] Received background message ",

    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body
  };

  //self.registration.showNotification(notificationTitle, notificationOptions);
});