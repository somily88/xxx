importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);
// // Initialize the Firebase app in the service worker by passing the generated config

const firebaseConfig = {
  apiKey: "AIzaSyAbCO7mhhNOxjA2L-WS-S8jDpiih1rWz_Y",
  authDomain: "harajazan-960f5.firebaseapp.com",
  projectId: "harajazan-960f5",
  storageBucket: "harajazan-960f5.firebasestorage.app",
  messagingSenderId: "293776448688",
  appId: "1:293776448688:web:8dd6792623afbadac16f75",
  measurementId: "G-KZPCDJTEMD"
};

firebase?.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

self.addEventListener("install", function (event) {
  console.log("Hello world from the Service Worker :call_me_hand:");
});
