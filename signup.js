import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword
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

/* ================= INIT FIREBASE ================= */
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* ================= ELEMENTS ================= */
const signupBtn = document.getElementById("signupBtn");
const emailInput = document.getElementById("signupEmail");
const passwordInput = document.getElementById("signupPassword");
const box = document.querySelector(".auth-box");

/* ================= SHAKE ANIMATION ================= */
function showError() {
  box.classList.add("shake");
  passwordInput.classList.add("input-error");

  setTimeout(() => {
    box.classList.remove("shake");
    passwordInput.classList.remove("input-error");
  }, 500);
}

/* ================= SIGN UP ================= */
signupBtn.addEventListener("click", () => {

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  /* Required fields */
  if (!email || !password) {
    alert("All fields are required");
    showError();
    return;
  }

  /* Password length */
  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    showError();
    return;
  }

  /* Firebase Signup */
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Account created successfully 🎉");
      window.location.href = "signin.html";
    })
    .catch((error) => {

      /* Account already exists */
      if (error.code === "auth/email-already-in-use") {
        alert("Account already exists. Please sign in.");
        window.location.href = "signin.html";
      } 
      else {
        alert(error.message);
        showError();
      }

    });

});
