const greetingButton = document.getElementById("greeting-button");
const skills = document.getElementById("skills");
const skillsIconsContainer = document.querySelector(".skills-icons");
const aboutChevronDown = document.querySelector(".fa-chevron-down");
const aboutWrap = document.querySelector(".about-wrap");
const aboutContent = document.getElementById("about");
const aboutIcon = document.querySelector(".about-gif");

greetingButton.addEventListener("click", heroScroll);

function heroScroll() {
  window.scrollTo(0, 800);
  skillsFadeInOnScroll();
}

function skillsFadeInOnScroll() {
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    let yPos = skills.scrollHeight;
    if (scrolled >= yPos) {
      skillsFadeEffect();
    }
  });
}

skillsFadeInOnScroll();

function skillsFadeEffect() {
  let icons = [...skillsIconsContainer.children];
  icons.forEach((icon) => {
    icon.classList.add("skills-fade");
  });
}

aboutChevronDown.addEventListener("click", () => {
  aboutWrap.classList.add("display-about-section");
  aboutContent.classList.add("display-about-content");
  aboutIcon.classList.add("display-about-gif");
  aboutScroll();
  typingEffect();
});

function aboutScroll() {
  aboutWrap.scrollIntoView({ behavior: "smooth", block: "center" });
}

let i = 0;
let text = `I am a passionate web developer with a true love for the craft that is web development.I hope that you enjoy my work and that you would consider me as your next potential developer.`;

function typingEffect() {
  if (i < text.length) {
    let textElement = document.querySelector(".typing-effect");
    textElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 10);
  }
}
