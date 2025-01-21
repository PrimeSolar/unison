class scrollToTop extends HTMLElement{connectedCallback(){this.innerHTML+='\n    <a href="#" class="to-top" aria-label="Scroll to top" title="Scroll to top">\n      <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <circle cx="12" cy="12" r="11.5" fill="none" stroke="white" stroke-width="1"/>\n        <path d="M6 15L12 9L18 15" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>\n      </svg>\n    </a>\n    '}}customElements.define("scroll-to-top-button",scrollToTop);const scrollToTopButton=document.createElement("scroll-to-top-button");document.querySelector("main").appendChild(scrollToTopButton);const toTop=document.querySelector(".to-top");window.addEventListener("scroll",(()=>{window.pageYOffset>430?toTop.classList.add("active"):toTop.classList.remove("active")}));const year=(new Date).getFullYear();class footerContainer extends HTMLElement{connectedCallback(){this.innerHTML+=`\n    <section id="contact" class="gradient-background">\n      <div class="container pt-4 mt-2">\n        <footer class="">\n          <ul class="nav justify-content-center border-bottom pb-3 mb-3">\n            <li class="nav-item"><a href="index.html" class="px-2">Home</a></li>\n            <li class="nav-item"><a href="about.html" class="px-2">About</a></li>\n            <li class="nav-item"><a href="features.html" class="px-2">Features</a></li>\n            <li class="nav-item"><a href="pricing.html" class="px-2">Pricing</a></li>\n            <li class="nav-item"><a href="faqs.html" class="px-2">FAQs</a></li>\n          </ul>\n          <p class="text-center">Copyright © <a href="https://primesolar.github.io/web-developer/">Vladislav Kazantsev</a> ${year}</p>\n        </footer>\n      </div>\n    </section>`}}customElements.define("footer-container",footerContainer);
