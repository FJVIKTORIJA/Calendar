var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  var value = $(this).parent().find("#userinput").val();
  var time = $(this).parent().find("label").attr("id");
  localStorage.setItem(time, value);
});

updateHour();
function updateHour() {
  var timeNow = moment().hour();

  $(".row").each(function () {
    var currentHour = parseInt($(this).find("label").attr("id").split("-")[1]);
    console.log(currentHour);
    if (currentHour < timeNow) {
      $(this).addClass("past");
    } else if (currentHour === timeNow) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}

document.getElementById("userinput").value = getSavedValue("userinput"); // set the value to this input

/* Here you can add more inputs to set value. if it's saved */

//Save the value function - save it to localStorage as (ID, VALUE)
function saveValue(e) {
  var id = e.id; // get the sender's id to save it .
  var val = e.value; // get the value.
  localStorage.setItem(id, val); // Every time user writing something, the localStorage's value will override .
}

//get the saved value function - return the value of "v" from localStorage.
function getSavedValue(v) {
  if (!localStorage.getItem(v)) {
    return ""; // You can change this to your defualt value.
  }
  return localStorage.getItem(v);
}
// function that checks localStorage and updates each input for the time
