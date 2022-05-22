// Implement third-party libraries such as Bootstrap, jQuery, and Moment.js
// DOM traversals and manipulations with jQuery
// jQuery to save user input in local storage
// Bootstrap grid layout in HTML.  Bootstrap components
// Add custom color styles to an existing CSS framework
// Work with custom fonts and icons via a content delivery network (CDN)

// var appt = {};
var tasks = {}
var appt = [];
var hr = ""
var hrArr = [];
var tasks = {};
var txt = ""
var hourNum = ""
var count = 0;
var newArray = []


$("#currentDay").text(moment().format("dddd, MMMM Do"));



function init() {

  checkHr = document.querySelectorAll(".hour");
  for (i = 0; i < checkHr.length; i++) {
    hrArr.push(checkHr[i].innerHTML)
  };
  console.log(hrArr);


  tasks = JSON.parse(localStorage.getItem("tasks"));
  console.log(tasks.hour);

  for (i = 0; i < tasks.hour.length; i++){
  var tasksHr = tasks.hour[i];
  hr = parseInt(tasksHr.replace(/\D+$/g, ""));
  console.log(hr);
 
 
  };



  // if (!tasks) {
  //   tasks = {
  //     hour: [],
  //     text: []
  //   };
  // };




  // for (var i = 0; i < hrArr.length; i++) {
  //   // we want to know if a[i] is found in b
  //   var match = false; // we haven't found it yet
  //   for (var tr = 0; tr < tasks.length; tr++) {
  //     if (hrArr[i] == tasks.hour[tr]) {
  //       // we have found a[i] in b, so we can stop searching
  //       match = true;
  //       break;
  //     }
  //     // if we never find a[i] in b, the for loop will simply end,
  //     // and match will remain false
  //   }
  //   // add a[i] to newArray only if we didn't find a match.
  //   if (!match) {
  //     newArray.push(hrArr[i]);
  //   }
  // }

  // for (i = 0; i < hrArr.length; i++) {
  //   var eventHr = hrArr[i]
  //   var tasksHr = tasks.hour[i]
  //   // if (hrArr[i].indexOf(tasksHr) !== -1) {
  //     console.log(">>eventHr = ", eventHr);
  //     console.log(">>tasksHr = ", tasksHr);
  //     if (eventHr === tasksHr) {
  //       console.log("this is ", true) } else {
  //         console.log("this is ", false);
  //       }
  //     }
};
// else {
//   console.log(false);

// }
// }





// for (i = 0; i < tasks.length; i++) {
//   for (th = 0; th < tasks.hour.length; th++) {
//     // if (tasks.hour[th] === hrArr[i]) {
//     console.log(tasks.hour[th], " : ", hrArr[i]);
//     if (tasks.hour[th] == hrArr[i]); {
//       var restoreEvent = tasks.text[i];
//       console.log(">>> restoreEvent is ", restoreEvent);
//     }
//     // }
//   }
// }

// } else {
//   for (count = 0; i < tasks.hour.length; count++) {
//     for (i = 0; i < hrArr.length; i++) {
//       if (tasks.hour[count] === hrArr[i]) {
//         console.log(true);
//       };
//     };
//   };
// };
// this WORKS for getting through arrays so DON"T DELETE!!!
// $.each(tasks.hour), function (index, value) {
//   alert(index + ": " + value);
// });

// for(count=0; i<9; i++) {


//   console.log(checkHr);


// hr = tasks.hour[count];


// var result = 0;

// for (var i = 0; i < hrArr.length; i++) {

//   if (hrArr.indexOf(tasks) !== -1) {
//     console.log(">>> ", hrArr, " ", tasks);
//   }
// }












// else {
//   $(".hour").each(function (index) {
//     console.log($(".hour").text(index));
//   });
// };




init();

//shows current day at the top of the calendar




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
  txt = $(this).prev().val().trim();
  hr = $(this).prev().prev().text();

  if (txt === "") {
    $("textarea").val('');
    return;
  }

  tasks.text.push(txt);
  // // tasks.hour.push(parseInt($(this).prev().prev().text().replace(/\D+$/g, "")));
  tasks.hour.push(hr);

  localStorage.setItem("tasks", JSON.stringify(tasks));

});


// // get localStorage/persistence
// I need to get the appropriate keys out of localStorage. 
// key doesn't work because it just has the last key.  so is there away to 
// a) get all the pertinent keys back from localStorage into an array,
// b) cycle through the array and capture the associate value
// c) make sure it's in the right location

// var appts = Object.keys(localStorage);
// console.log(appts.length);
// for (var i = 0; i < appts.length; i++) {
//   txtContent = localStorage.getItem(appts[i]);
//   txtContent = JSON.parse(txtContent);
//   console.log(txtContent);
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