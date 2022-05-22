
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
var currDate = moment().format("YYYYMMDD");



function init() {


  tasks = JSON.parse(localStorage.getItem("tasks"));


  if (!tasks) {
    tasks = {
      key: [],
      date: [],
      hour: [],
      text: []
    };
    return;
  }

  console.log(tasks.key.length);
  for (i = 0; i < tasks.key.length; i++) {
    if (tasks.date[i] === currDate) {
      hr = tasks.hour[i]
      console.log(hr)
      if (hr > 0 && hr < 6) {
        hr = hr + 12;
      }
      var tgtId = "#hour" + hr;
      console.log(tgtId);
      document.querySelector(tgtId).textContent = tasks.text[i];
    }

  };
};

init();

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
  });
};

marleysGhost();


// every hour update the color code.
setInterval(function () {
  marleysGhost();
}, (1000 * 60) * 60);


$(".saveBtn").click(function () {

  txt = $(this).prev().val().trim();
  console.log(txt)

  if (txt === "") {
    $("textarea").val('');
    return;
  }

  var dateKey = moment().format("YYYYMMDD");
  var hrKey = (parseInt($(this).prev().prev().text().replace(/\D+$/g, "")));

  tasks.key.push(dateKey + hrKey);
  tasks.date.push(dateKey);
  tasks.hour.push(hrKey);
  tasks.text.push(txt);

  localStorage.setItem("tasks", JSON.stringify(tasks));

});