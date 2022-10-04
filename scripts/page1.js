// variabelen //

const openButton = document.querySelector("header > div");
const menu = document.querySelector("header>div p");
const scrollLeft = document.querySelector(".page1 section:nth-of-type(3) button:first-of-type ");
const scrollRight = document.querySelector(".page1 section:nth-of-type(3) button:last-of-type");

// Event Listeners //

openButton.addEventListener("click", openMenu)
scrollLeft.addEventListener("click", moveleft)
scrollRight.addEventListener("click", moveright)

// Hamburger Menu Toggle

function openMenu() {
  const deNav = document.querySelector("nav");

  deNav.classList.toggle("toonMenu");

  const initialText = 'Menu';

  if (menu.textContent.includes(initialText)) {
    menu.textContent = 'Close';
  } else {
    menu.textContent = initialText;
  }
}

// Moving gallery items

function moveleft() {
  console.log("moving left")
  document.querySelector('#carousel-container').scrollBy(-100, 0)

}
function moveright() {
  console.log("moving right")
  document.querySelector('#carousel-container').scrollBy(+100, 0)
}

//.page1 Animation Observer

const observerB = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("hey");
      entry.target.classList.add('SlideInB-animation');
    }
  });
});

observerB.observe(document.querySelector(".page1 section:nth-of-type(2)"));
observerB.observe(document.querySelector(".page1 section:nth-of-type(4)"));

const observerL = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("hey");
      entry.target.classList.add('SlideInL-animation');
    }
  });
});

observerL.observe(document.querySelector(".page1 section:nth-of-type(5)"));