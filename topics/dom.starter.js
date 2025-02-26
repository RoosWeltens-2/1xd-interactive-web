/*
______ ________  ___
|  _  \  _  |  \/  |
| | | | | | | .  . |
| | | | | | | |\/| |
| |/ /\ \_/ / |  | |
|___/  \___/\_|  |_/
            
*/

// 1 - get an element by id
// select the second paragraph and figure out a way to make the backround color yellow
// hint: use the style property and .backgroundColor
// hint: use the querySelector or getElementById function
let secondParagraph = document.querySelector('p:nth-of-type(2)');
secondParagraph.style.backgroundColor = 'green';

// 2 - select the element with id #paragraph3 and change the text to "Never gonna run around and desert you"
// hint: use the innerHTML property
let paragraph3 = document.getElementById('paragraph3');
paragraph3.innerHTML = "Never gonna run around and desert you";

// 3 - get multiple elements by class
// select all the span elements by their classname and log the result to your console, what type of object is it?
// next, loop over the elements and change the innerHTML to another emoji
// hint: use the querySelectorAll function, use the .forEach method (or a for loop), and the .innerHTML property
let spans = document.querySelectorAll('span');
console.log(spans);
spans.forEach(span => {
    span.innerHTML = '🫥';
})

// 4 - change the CSS class
// select the element with the id "message" and change the css class to "error"
// hint: use the setAttribute function, or use the className property, or use the classList property
let message = document.getElementById('message');
message.className = 'error';

// render a ul with li elements
let ul = document.createElement('ul');
for (let i = 1; i <= 5; i++) {
    let li
}