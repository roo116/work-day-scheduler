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
var hour = 9

var timePeriod = ""
var calHour = {};







// WHEN I view the time blocks for that day THEN each time block is color-coded to indicate whether it is in the past, present, or future





// WHEN I click into a time block THEN I can enter an event





// WHEN I click the save button for that time block THEN the text for that event is saved in local storage





// WHEN I refresh the page THEN the saved events persist