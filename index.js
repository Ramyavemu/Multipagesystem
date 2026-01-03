

/* ================= SCROLL REVEAL ================= */
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach(el => revealObserver.observe(el));


/* ================= COURSES ONE BY ONE ================= */
const courseCards = document.querySelectorAll(".courses");

const courseObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        courseCards.forEach((card, i) => {
          setTimeout(() => {
            card.classList.add("show");
          }, i * 200);
        });
        courseObserver.disconnect();
      }
    });
  },
  { threshold: 0.3 }
);

courseObserver.observe(document.querySelector("#course"));


/* ================= EXPERTS ONE BY ONE ================= */

const profiles = document.querySelectorAll(".profile");

const profileObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        profiles.forEach((profile, index) => {
          setTimeout(() => {
            profile.classList.add("show");
          }, index * 250); // 🔥 one-by-one delay
        });
        profileObserver.disconnect();
      }
    });
  },
  { threshold: 0.3 }
);

profileObserver.observe(document.querySelector("#experts"));


/* ================= REGISTRATION COUNTDOWN ================= */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains("done")) {
        entry.target.classList.add("done");

        const target = +entry.target.dataset.target;
        let count = 0;

        const speed = 120; // 🔥 BIGGER = SLOWER

        const updateCounter = () => {
          if (count < target) {
            count++;
            entry.target.innerText = count;
            setTimeout(updateCounter, speed);
          } else {
            entry.target.innerText = target;
          }
        };

        updateCounter();
      }
    });
  },
  { threshold: 0.4 }
);

counters.forEach(counter => counterObserver.observe(counter));



/* ================= REGISTRATION FORM ================= */

const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", () => {
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const phone = document.getElementById("regPhone").value.trim();

  // ✅ Mandatory check
  if (name === "" || email === "" || phone === "") {
    alert("⚠️ Please fill all the details");
    return;
  }

  // ✅ Email validation
  if (!email.includes("@")) {
    alert("⚠️ Please enter a valid email address");
    return;
  }

  // ✅ Phone validation
  if (phone.length < 10) {
    alert("⚠️ Please enter a valid phone number");
    return;
  }

  // ✅ Get existing users OR empty array
  let users = JSON.parse(localStorage.getItem("registrations")) || [];

  // ✅ Store new user
  users.push({
    name: name,
    email: email,
    phone: phone,
    registeredAt: new Date().toLocaleString()
  });

  localStorage.setItem("registrations", JSON.stringify(users));

  alert("✅ Registration Successful!");

  // ✅ Clear form
  document.getElementById("regName").value = "";
  document.getElementById("regEmail").value = "";
  document.getElementById("regPhone").value = "";
});
 


const track = document.getElementById("courseTrack");

function slideLeft(){
  if(track) track.scrollLeft -= 350;
}

function slideRight(){
  if(track) track.scrollLeft += 350;
}




const expertBox = document.querySelector(".expert-box");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const card = document.querySelector(".profile");
const cardWidth = card.offsetWidth + 20; // card width + gap

const visibleArea = document.querySelector(".carousel").offsetWidth;
const totalWidth = expertBox.scrollWidth;

let scrollAmount = 0;
const maxScroll = totalWidth - visibleArea;

nextBtn.addEventListener("click", () => {
    scrollAmount += cardWidth;
    if (scrollAmount > maxScroll) {
        scrollAmount = maxScroll;
    }
    expertBox.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener("click", () => {
    scrollAmount -= cardWidth;
    if (scrollAmount < 0) {
        scrollAmount = 0;
    }
    expertBox.style.transform = `translateX(-${scrollAmount}px)`;
});






















/* ================= SCROLL REVEAL ================= */
// const revealElements = document.querySelectorAll(".reveal");

// if (revealElements.length > 0) {
//   const revealObserver = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("active");
//         revealObserver.unobserve(entry.target);
//       }
//     });
//   }, { threshold: 0.2 });

//   revealElements.forEach(el => revealObserver.observe(el));
// }

/* ================= COURSES ONE BY ONE ================= */
// const courseSection = document.querySelector("#course");
// const courseCards = document.querySelectorAll(".courses");

// if (courseSection && courseCards.length > 0) {
//   const courseObserver = new IntersectionObserver(entries => {
//     if (entries[0].isIntersecting) {
//       courseCards.forEach((card, i) => {
//         setTimeout(() => card.classList.add("show"), i * 200);
//       });
//       courseObserver.disconnect();
//     }
//   }, { threshold: 0.3 });

//   courseObserver.observe(courseSection);
// }

/* ================= EXPERTS ONE BY ONE ================= */
// const expertSection = document.querySelector("#experts");
// const profiles = document.querySelectorAll(".profile");

// if (expertSection && profiles.length > 0) {
//   const profileObserver = new IntersectionObserver(entries => {
//     if (entries[0].isIntersecting) {
//       profiles.forEach((profile, i) => {
//         setTimeout(() => profile.classList.add("show"), i * 250);
//       });
//       profileObserver.disconnect();
//     }
//   }, { threshold: 0.3 });

//   profileObserver.observe(expertSection);
// }

/* ================= REGISTRATION COUNT ================= */
// const counters = document.querySelectorAll(".counter");

// if (counters.length > 0) {
//   const counterObserver = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting && !entry.target.classList.contains("done")) {
//         entry.target.classList.add("done");
//         let count = 0;
//         const target = +entry.target.dataset.target;

//         const update = () => {
//           if (count < target) {
//             count++;
//             entry.target.innerText = count;
//             setTimeout(update, 120);
//           }
//         };
//         update();
//       }
//     });
//   }, { threshold: 0.4 });

//   counters.forEach(c => counterObserver.observe(c));
// }

/* ================= REGISTRATION FORM ================= */
// const registerBtn = document.getElementById("registerBtn");

// if (registerBtn) {
//   registerBtn.addEventListener("click", () => {
//     const name = regName.value.trim();
//     const email = regEmail.value.trim();
//     const phone = regPhone.value.trim();

//     if (!name || !email || !phone) {
//       alert("Please fill all details");
//       return;
//     }

//     let users = JSON.parse(localStorage.getItem("registrations")) || [];
//     users.push({ name, email, phone, time: new Date().toLocaleString() });
//     localStorage.setItem("registrations", JSON.stringify(users));

//     alert("Registration successful");
//     regName.value = regEmail.value = regPhone.value = "";
//   });
// }
