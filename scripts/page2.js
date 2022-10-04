// variabelen //

const openButton = document.querySelector("header > div");
const menu = document.querySelector("header>div p");

const sprigatito = document.querySelector(".page2 section li:nth-of-type(1) img");
const fuecoco = document.querySelector(".page2 section li:nth-of-type(2) img");
const quaxly = document.querySelector(".page2 section li:nth-of-type(3) img");
const korai = document.querySelector(".page2 section li:nth-of-type(4) img");
const mirai = document.querySelector(".page2 section li:nth-of-type(5) img");

// audio //

const SprigatitoMeow = [new Audio('./audio/meow1.mp3'), new Audio('./audio/meow2.mp3'), new Audio('./audio/meow3.mp3')]
const FuecocoCroc = [new Audio('./audio/fuecoco1.mp3'), new Audio('./audio/fuecoco2.mp3'), new Audio('./audio/fuecoco3.mp3')]
const QuaxlyQuack = [new Audio('./audio/quaxly1.mp3'), new Audio('./audio/quaxly2.mp3'), new Audio('./audio/quaxly3.mp3')]
const KoraiRoar = [new Audio('./audio/korai1.mp3'), new Audio('./audio/korai2.mp3'), new Audio('./audio/korai3.mp3')]
const MiraiRoar = [new Audio('./audio/mirai1.mp3'), new Audio('./audio/mirai2.mp3'), new Audio('./audio/mirai3.mp3')]

// Event Listeners //

openButton.addEventListener("click", openMenu)

sprigatito.addEventListener("mouseover", MeowSound)
fuecoco.addEventListener("mouseover", CrocSound)
quaxly.addEventListener("mouseover", DuckSound)
korai.addEventListener("mouseover", LoudRoar)
mirai.addEventListener("mouseover", SparklingRoar)


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

// Meow SFX

function MeowSound() {
  const randomNumber = Math.floor(Math.random() * 3);
  const randomMeowNoises = SprigatitoMeow[randomNumber];
  randomMeowNoises.play();
}

// Croc SFX

function CrocSound() {
  const randomNumber = Math.floor(Math.random() * 3);
  const randomCrocSound = FuecocoCroc[randomNumber];
  randomCrocSound.play();
}

// Duck SFX

function DuckSound() {
  const randomNumber = Math.floor(Math.random() * 3);
  const randomDuckSound = QuaxlyQuack[randomNumber];
  randomDuckSound.play();
}

// Loud Roar SFX

function LoudRoar() {
  const randomNumber = Math.floor(Math.random() * 3);
  const randomRoarSound = KoraiRoar[randomNumber];
  randomRoarSound.play();
}

// Sparkling Roar SFX

function SparklingRoar() {
  const randomNumber = Math.floor(Math.random() * 3);
  const randomRoarSound = MiraiRoar[randomNumber];
  randomRoarSound.play();
}

const observerB = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("element in view");
      entry.target.classList.add('SlideInB-animation');
    }
  });
});

observerB.observe(document.querySelector("section:nth-of-type(2)"));

