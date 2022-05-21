// Implement third-party libraries such as Bootstrap, jQuery, and Moment.js
// DOM traversals and manipulations with jQuery
// jQuery to save user input in local storage
// Bootstrap grid layout in HTML.  Bootstrap components
// Add custom color styles to an existing CSS framework
// Work with custom fonts and icons via a content delivery network (CDN)


//shows current day at the top of the calendar
$("#currentDay").text(moment().format("dddd, MMMM Do"));



// color-code each time block to indicate whether it is in the past, present, or future

function marleysGhost() {

  currHour = moment().hour()

  var startOfDay = moment().hour(9);
  var endOfDay = moment().hour(17);

  // determine if they are past, present or future

  $(".hour").each(function (index) {
    hourNum = parseInt($(this).text().replace(/\D+$/g, ""));


    // make the hours into military time
    if (hourNum > 0 && hourNum < 6) {
      hourNum = hourNum + 12
    };

    if (currHour > hourNum) {
      $(this).next().addClass("past");
    } else if (currHour < hourNum) {
      $(this).next().addClass("future");
    } else {
      $(this).next().addClass("present")
    };



    // console.log("the current hour is " + currHour + ". The hour in the calendar is " + hourNum);



  });
};

marleysGhost();

setInterval(function () {
  marleysGhost();
}, (1000 * 60) * 60);


//creating/testing button click code //worked
$(".saveBtn").click(function () {

  //check if the appt field is blank.  if so reset textarea and bail.  //worked
  var txt = $("textarea").val().trim();
  if (txt === "") {
    $("textarea").val('');
    return;
  }

  // create key for localStorate //worked
  var hourEl = $(this).prev().prev().text();
  var keyHr = parseInt(hourEl.replace(/\D+$/g, ""))
  var key = moment().format("YYYYMMDD") + keyHr;

  // entry to localStorage //worked
  localStorage.setItem(key, JSON.stringify(txt));

})


// WHEN I click the save button for that time block THEN the text for that event is saved in local storage

//1. capture data
//make button event
// stringify 
// create keys and store in local storage



// WHEN I refresh the page THEN the saved events persist
//retrieve from local storage.