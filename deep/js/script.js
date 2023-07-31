"use strict"

const upButton = document.querySelector('.footer__up-button');
const header = document.querySelector('.header');

document.addEventListener("click", documentActions);

function documentActions(e) {
   const targetElement = e.target;
   if (targetElement.closest('.footer__up-button')) {
      console.log('це link');
      scrollToBlock(header);
   }
}

function scrollToBlock(header) {
   header.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth"
   });
}



