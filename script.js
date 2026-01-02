window.addEventListener("load", () => {

  /* ===== Musik (fade in aman browser) ===== */
  const audio = document.getElementById("birthdayAudio");

  if (audio) {
    audio.volume = 0;

    const playAudio = () => {
      audio.play().catch(() => {});
    };

    // play pertama (jika browser mengizinkan)
    playAudio();

    // fallback: klik sekali di mana saja
    document.body.addEventListener("click", playAudio, { once: true });

    // fade in volume
    let vol = 0;
    const fadeIn = setInterval(() => {
      if (vol < 0.5) {
        vol += 0.02;
        audio.volume = vol;
      } else {
        clearInterval(fadeIn);
      }
    }, 180);
  }

  /* ===== Confetti pembuka (lembut) ===== */
  if (typeof confetti === "function") {
    confetti({
      particleCount: 160,
      spread: 90,
      origin: { y: 0.65 }
    });
  }

  /* ===== Scroll reveal (langsung cek awal) ===== */
  revealOnScroll();
});


/* ===== Modal kejutan ===== */
const lastGift = document.querySelector(".cheers-gif");
const modal = document.getElementById("surpriseModal");

if (lastGift && modal) {
  lastGift.addEventListener("click", () => {
    modal.style.display = "flex";

    if (typeof confetti === "function") {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.7 }
      });
    }
  });
}

function closeModal() {
  if (modal) modal.style.display = "none";
}


/* ===== Scroll reveal logic ===== */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 120;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
