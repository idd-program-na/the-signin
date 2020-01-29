//Complete these steps to create a 'signin' prototype:

//"Listen" for when the user clicks the #signin button, display the #modal window
// Make the button function
// Modal class is the div, change display attribute to ignore display
let signInBtn = document.querySelector (`.signin`)

signInBtn.addEventListener(`click`, (event) => {

  console.log(`Show modal`);
  let bodyElement = document.querySelector(`.modal`);
  bodyElement.style.display = `block`;

})
//"Listen" for when the user clicks the #close button, display (or fade out) out the #modal window

let closeBtn = document.querySelector (`.close`)

closeBtn.addEventListener(`click`, (event) => {

  console.log(`Close modal`);
  let bodyElement = document.querySelector(`.modal`);
  bodyElement.style.display = `none`;

})
//"Listen" for when the user clicks the #submit button, add an .error class to both input.field elements
/*let submitBtn = document.querySelector (`.submit`)

submitBtn.addEventListener(`click`, (event) => {

  console.log(`Submit input`);
  let bodyElement.style.input.field.error = `
})*/

//Easy: First add the .error class to each individually using getElementById() or querySelector()
//Advanced: Once successful, try applying to both input.field using querySelectorAll() and a forEach() (or another type of traversal loop)
//Remove the .error class from any individual <input> when the cursor gives it focus
//Easy: First try writing one event listener/handler per input element
//Advanced: Then do this by writing only ONE event listener/handler for all input elements and applying it using a traversal loop

//Test as you go!!!!