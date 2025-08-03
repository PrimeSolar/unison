// The Library of Custom Reusable Web Elements
// This file is the library containing my collection of custom, reusable web elements
// that can be used across different parts of the project. These elements go beyond what browsers provide,
// allowing for expanded capabilities and functionality in the project.

// Scroll to Top Button
class scrollToTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <a href="#" class="to-top" aria-label="Scroll to top" title="Scroll to top">
      <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11.5" fill="none" stroke="white" stroke-width="1"/>
        <path d="M6 15L12 9L18 15" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
    `;
  }
}
customElements.define("scroll-to-top-button", scrollToTop);

const scrollToTopButton = document.createElement("scroll-to-top-button");
document.querySelector("main").appendChild(scrollToTopButton);

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 430) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// Cards
let cards = document.querySelectorAll(".card");

let stackArea = document.querySelector("#stack-area");

function rotateCards() {
  let angle = 0;
  cards.forEach((card, index) => {
    if (card.classList.contains("away")) {
      card.style.transform = `translateY(-120vh) rotate(-48deg)`;
    } else {
      card.style.transform = ` rotate(${angle}deg)`;
      angle = angle - 10;
      card.style.zIndex = cards.length - index;
    }
  });
}

rotateCards();

window.addEventListener("scroll", () => {
  let distance = window.innerHeight * 0.5;

  let topVal = stackArea.getBoundingClientRect().top;

  let index = -1 * (topVal / distance + 1);

  index = Math.floor(index);

  for (i = 0; i < cards.length; i++) {
    if (i <= index) {
      cards[i].classList.add("away");
    } else {
      cards[i].classList.remove("away");
    }
  }
  rotateCards();
});

// Footer

const year = new Date().getFullYear();

class footerContainer extends HTMLElement {
  connectedCallback() {
    // Define Footer Content:
    this.innerHTML += `
    <section id="contact" class="gradient-background">
      <div class="container pt-4 mt-2">
        <footer>
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="index.html" class="px-2">Home</a></li>
            <li class="nav-item"><a href="about.html" class="px-2">About</a></li>
            <li class="nav-item"><a href="features.html" class="px-2">Features</a></li>
            <li class="nav-item"><a href="pricing.html" class="px-2">Pricing</a></li>
            <li class="nav-item"><a href="faqs.html" class="px-2">FAQs</a></li>
          </ul>
          <p class="text-center">Copyright © <a href="https://primesolar.github.io/web-developer/">Vladislav Kazantsev</a> ${year}</p>
        </footer>
      </div>
    </section>`;
  }
}
customElements.define("footer-container", footerContainer);
