var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var eventFormEl = $("#Todo");
var eventListEl = $("#userinput");

function handleFormSubmit(event) {
  event.preventDefault();

  var myevent = $('input[name="plan-input"]').val();

  if (!myevent) {
    console.log("No event added!");
    return;
  }
  var myeventlistEl = $();
  myeventlistEl.text(myevent);

  myeventlistEl.append();
  eventlistEl.append(myeventlistEl);
}

//Galbut
const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);

/*
Any time an html form submits, the default behavior is that it makes a post request and reloads the page. So to prevent the page from reloading, we need that line you have that says event.preventDefault(); because it stops the page from reloading.
white_check_mark
eyes
raised_hands





2:56
But if the function is not connected to the form, then the code inside the function will not run when the form submits
2:56
And the default reload will not be prevented
New
2:57
So make sure to add some code to your javascript file that selects all the forms from the DOM and then add your function as an event listener to the forms

//use
https://api.jquery.com/submit/

You can also use jQuery’s .on method, which can be used to assign any kind of event listener. You just have to specify that you want a submit event listener by passing it a string as the first argument https://api.jquery.com/on/
*/
