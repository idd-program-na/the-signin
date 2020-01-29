//Complete these steps to create a 'signin' prototype:

//"Listen" for when the user clicks the #signin button, display the #modal window
// Make the button function
let close = document.querySelector (`.signin`)

signin.addEventListener(`click`, (event) => {

  console.log(`!click!`)

})
// Find element you want to change 
let bodyElement = document.querySelector(`.modal`)

// Assign a change tot he element
bodyElement.style.display = `block`;


/*Modal class is the div, change display attribute to ignore display*/

//"Listen" for when the user clicks the #close button, display (or fade out) out the #modal window
//"Listen" for when the user clicks the #submit button, add an .error class to both input.field elements
//Easy: First add the .error class to each individually using getElementById() or querySelector()
//Advanced: Once successful, try applying to both input.field using querySelectorAll() and a forEach() (or another type of traversal loop)
//Remove the .error class from any individual <input> when the cursor gives it focus
//Easy: First try writing one event listener/handler per input element
//Advanced: Then do this by writing only ONE event listener/handler for all input elements and applying it using a traversal loop

//Test as you go!!!!