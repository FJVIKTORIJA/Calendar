var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));




var eventFormEl = $('#Todo');
var eventListEl = $('#userinput');

function handleFormSubmit(event) {
    event.preventDefault();

    var myevent = $('input[name="plan-input"]').val();

    if (!myevent) {
        console.log('No event added!');
        return;
      }
      var myeventlistEl = $(

      );
      myeventlistEl.text(myevent);

      myeventlistEl.append(
        
      );
      eventlistEl.append(myeventlistEl);
      
}