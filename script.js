// script.js

// TYPING EFFECT

const typingText = document.querySelector(".typing-text");

const text = "BLOCKCHAIN & SMART CONTRACT DEVELOPER";

let i = 0;

function typingEffect() {

  if(i < text.length){

    typingText.innerHTML += text.charAt(i);

    i++;

    setTimeout(typingEffect, 70);

  }

}

window.onload = typingEffect;


// ACTIVE NAVIGATION

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".side-nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop;

    if(scrollY >= sectionTop - 300){

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if(link.getAttribute("href").includes(current)){

      link.classList.add("active");

    }

  });

});


// SCROLL ANIMATION

const hiddenElements = document.querySelectorAll(
  ".glass-card, .education-card, .skill-box, .timeline-content, .project-card, .contact-card"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

});

hiddenElements.forEach((el) => {

  el.classList.add("hidden");

  observer.observe(el);

});