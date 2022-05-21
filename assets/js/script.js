// Implement third-party libraries such as Bootstrap, jQuery, and Moment.js
// DOM traversals and manipulations with jQuery
// jQuery to save user input in local storage
// Bootstrap grid layout in HTML.  Bootstrap components
// Add custom color styles to an existing CSS framework
// Work with custom fonts and icons via a content delivery network (CDN)

// var appt = {};
var tasks = {}
var txt = ""
hourNum = ""

function init() {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  console.log(tasks);
  if (!tasks) {
    tasks = {
      hour: [],
      text: []
    };
  }
  // $.each(tasks, function(list, arr) {
  //   // then loop over sub-array
  //   arr.forEach(function(task) {
  //     createTask(task.text, task.date, list);
  //   });
  // });
}
init();


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
    console.log(hourNum)

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
  txt = $(this).prev().val().trim();

  if (txt === "") {
    $("textarea").val('');
    return;
  }

  tasks.text.push(txt);
  tasks.hour.push(parseInt($(this).prev().prev().text().replace(/\D+$/g, "")));
  localStorage.setItem("tasks", JSON.stringify(tasks));
})

// // get localStorage/persistence
// I need to get the appropriate keys out of localStorage. 
// key doesn't work because it just has the last key.  so is there away to 
// a) get all the pertinent keys back from localStorage into an array,
// b) cycle through the array and capture the associate value
// c) make sure it's in the right location

// function getTasks() {

// }

// $(".hour").each(function (index) {
//   hourNum = parseInt($(this).text().replace(/\D+$/g, ""));
//   if(hourNum === txtContent) {
//     ((this).next().innerHTML)
//   }
// });









  // got the key so compare that to hourEl.  If key === hourEl
  //  update the elment after to be .hour elment with the value of the corresponding key.
  // test to see if you have to do this on load.






// WHEN I click the save button for that time block THEN the text for that event is saved in local storage

//1. capture data
//make button event
// stringify 
// create keys and store in local storage



// WHEN I refresh the page THEN the saved events persist
//retrieve from local storage.