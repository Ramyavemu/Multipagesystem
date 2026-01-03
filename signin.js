import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

/* ================= FIREBASE CONFIG ================= */
const firebaseConfig = {
  apiKey: "AIzaSyAsEY59R5akMXk2wMyecgodo3nW4XHJKuo",
  authDomain: "course-52daa.firebaseapp.com",
  projectId: "course-52daa",
  storageBucket: "course-52daa.appspot.com",
  messagingSenderId: "602401707196",
  appId: "1:602401707196:web:c8d67cc001fe2cf819acb9"
};

/* ================= INIT ================= */
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* ================= ELEMENTS ================= */
const loginBtn = document.getElementById("loginBtn");
const emailInput = document.getElementById("loginEmail");
const passwordInput = document.getElementById("loginPassword");
const box = document.querySelector(".auth-box");

/* ================= SHAKE ================= */
function showError() {
  box.classList.add("shake");
  passwordInput.classList.add("input-error");

  setTimeout(() => {
    box.classList.remove("shake");
    passwordInput.classList.remove("input-error");
  }, 500);
}

/* ================= LOGIN ================= */
loginBtn.addEventListener("click", () => {

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert("All fields are required");
    showError();
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "index.html"; // ✅ LANDING PAGE
    })
    .catch((error) => {
      alert("Invalid email or password");
      showError();
    });

});
