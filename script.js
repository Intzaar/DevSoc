const textElement = document.querySelector('#dev');
const originalText = "Developer's Society";
const newText = "BITS Goa";
let currentText = "";
let isOriginalText = true;
let index = 0;

function typeText() {
  if (index < currentText.length) {
    textElement.innerHTML += currentText.charAt(index);
    index++;
    setTimeout(typeText, 100); 
  } else {
    setTimeout(() => deleteText(), 1000); 
  }
}

function deleteText() {
  if (index > 0) {
    textElement.innerHTML = textElement.innerHTML.slice(0, -1);
    index--;
    setTimeout(deleteText, 50); 
  } else {
    isOriginalText = !isOriginalText;
    currentText = isOriginalText ? originalText : newText;
    index = 0;
    setTimeout(typeText, 500); 
  }
}


currentText = originalText;


var tl = gsap.timeline();

tl.from("#name", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 1
})
.from("ul li", {
  y: -30,
  opacity: 0,
  duration: 0.5,
  stagger: 0.25
})
.from(".content", {
  y: -30,
  opacity: 0,
  duration: 1,
})
.from(".a1", {
  opacity: 0,
  y: 50,
  duration: 0.7,
  stagger: 0.2,

})
.to(".text", {
  opacity: 1,
  duration: 0.8,
  oncComplete:typeText()

});
