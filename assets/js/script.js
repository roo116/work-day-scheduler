// Implement third-party libraries such as Bootstrap, jQuery, and Moment.js
// DOM traversals and manipulations with jQuery
// jQuery to save user input in local storage
// Bootstrap grid layout in HTML.  Bootstrap components
// Add custom color styles to an existing CSS framework
// Work with custom fonts and icons via a content delivery network (CDN)


//shows current day at the top of the calendar
$("#currentDay").text(moment().format("dddd, MMMM Do"));


// WHEN I scroll down THEN I am presented with time blocks for standard business hours
// show timeblocks for standard business hours


// WHEN I view the time blocks for that day THEN each time block is color-coded to indicate whether it is in the past, present, or future

function scrooge() {

  // i need to get the hour number and determine if it is past, present or future
  //what is the current hour I am testing against?
  // currHour = 10 //test variable
  var currHour = moment().hour() //return the current hour 0-15
  var startOfDay = moment().hour(9);
  var endOfDay = moment().hour(17);

  // if not during the work day, go home!!! live life!!!
  // if (currHour < startOfDay || currHour > endOfDay) {
  //   console.log("after hours");
  //   return;
  // }

  //what am I testing?  The time-blocks.  
  //so I want to test all time blocks against currHour and
  // determine if they are past, present or future

  $(".hour").each(function (index) {
    // hourArray.push($(this).text())
    hourNum = parseInt($(this).text().replace(/\D+$/g, ""));
    // console.log(hourNum);

    // make the hours into military time
    if (hourNum > 0 && hourNum < 6) {
      hourNum = hourNum + 12
      // console.log(hourNum);
    };

    if (currHour > hourNum) {
      $(this).next().addClass("past");
    } else if (currHour < hourNum) {
      $(this).next().addClass("future");
    } else {
      $(this).next().addClass("present")
    };



    console.log("the current hour is " + currHour + ". The hour in the calendar is " + hourNum);

    //   else if (currHour > hourNum{

    //   }
    // }
    // console.log(hourNum);

  });
};


scrooge();


// if the time block is the same number as 
// as the time block in the calender that equals "present"
// else is the time block < or > present.
//if < then that equals past.
// and if it's not present and not past then it's future.






// $(this)
//       .children()
//       .each(function() {
//         // save values in temp array
//         tempArr.push({
//           text: $(this)
//             .find("p")
//             .text()
//             .trim(),
//           date: $(this)
//             .find("span")
//             .text()
//             .trim()
//         });
//       });

// $(".time-block").text().each(function() {
//   console.log($("span").text());
// });














// WHEN I click into a time block THEN I can enter an event
$(".time-block").on("click", "input", function () {
  var text = $(this).text()
})




// WHEN I click the save button for that time block THEN the text for that event is saved in local storage





// WHEN I refresh the page THEN the saved events persist