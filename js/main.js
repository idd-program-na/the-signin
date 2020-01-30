//Complete these steps to create a 'signin' prototype:
let signInBtn = document.querySelector (`.signin`)
let closeBtn = document.querySelector (`.close`)
let submitBtn = document.querySelector (`.submit`)
let user = document.querySelector(`#user`)
let pass = document.querySelector(`#pass`)
//"Listen" for when the user clicks the #signin button, display the #modal window
// Make the button function
// Modal class is the div, change display attribute to ignore display


signInBtn.addEventListener(`click`, (event) => {

  console.log(`Show modal`);
  let bodyElement = document.querySelector(`.modal`);
  bodyElement.style.display = `block`;

})
//"Listen" for when the user clicks the #close button, display (or fade out) out the #modal window



closeBtn.addEventListener(`click`, (event) => {

  console.log(`Close modal`);
  let bodyElement = document.querySelector(`.modal`);
  bodyElement.style.display = `none`;

})
//"Listen" for when the user clicks the #submit button, add an .error class to both input.field elements

/*

submitBtn.addEventListener(`click`, (event) => {

  console.log(`Submit input`);
  let bodyElement = document.querySelector (`.field`)
  bodyElement.classList.add = `error`;

})*/

//Easy: First add the .error class to each individually using getElementById() or querySelector()



//Advanced: Once successful, try applying to both input.field using querySelectorAll() and a forEach() (or another type of traversal loop)
//Remove the .error class from any individual <input> when the cursor gives it focus
//Easy: First try writing one event listener/handler per input element
//Advanced: Then do this by writing only ONE event listener/handler for all input elements and applying it using a traversal loop

// add class .error to #user



user.classList.add(`.error`)

user.classList.remove(`.error`)

// add class .error to #pass


pass.classList.add(`.error`)

pass.classList.remove(`.error`)

// clickable .submit

// remove class .error to #user

// remove class .error to #pass

// focus #user

user.addEventListener(`focus`, (event) => { console.log(`focus!`) })

// focus #pass

pass.addEventListener(`focus`, (event) => { console.log(`focus!`) })