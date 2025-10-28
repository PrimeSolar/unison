/*
 * The Library of Custom Reusable Web Components
 * This file is the library containing my collection of custom, reusable web components
 * that can be used across different parts of the project. These components go beyond what browsers provide,
 * allowing for expanded capabilities and functionality in the project.
 *
 * Copyright © Vladislav Kazantsev
 * All rights reserved.
 * This code is the intellectual property of Vladislav Kazantsev.
 * You are welcome to clone the related repository and use the code for exploratory purposes.
 * However, unauthorized reproduction, modification, or redistribution of this code (including cloning of related repository or altering it for activities beyond exploratory use) is strictly prohibited.
 * Code snippets may be shared only when the original author is explicitly credited and a direct link to the original source of the code is provided alongside the code snippet.
 * Sharing the link to the file is permitted, except when directed toward retrieval purposes.
 * Any form of interaction with this file is strictly prohibited when facilitated by the code, except when such interaction is for discussion or exchange purposes with others.
 * This copyright notice applies globally.
 * For inquiries about collaboration, usage outside exploratory purposes, or permissions, please contact: hypervisor7@pm.me
 */

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
      card.style.transform = `translateY(-170vh) rotate(-48deg)`;
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

  let index;
  if (window.innerWidth > 450) {
    index = -1 * (topVal / distance + 1);
  } else {
    index =
      -1 *
      (stackArea.getBoundingClientRect().top / (window.innerHeight * 0.035));
  }

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
          <a type="button" href="https://www.buymeacoffee.com/CocaCola" class="bmc-button" target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee" role="button">☕ Buy me a coffee</a>
        </footer>
      </div>
    </section>`;
  }
}
customElements.define("footer-container", footerContainer);

console.log("components.js is completed");
