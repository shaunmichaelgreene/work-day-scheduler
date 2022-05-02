//define global variables
var descriptionEl = document.querySelector(".description");
console.log(descriptionEl);
console.log(descriptionEl.parentElement.id);

var currentTime = new Date(); //gets current time from browser (will need to make this account for time zones)
console.log("the current time is: " + currentTime);
var currentHour = currentTime.getHours()
console.log("the current hour of the day is: " + currentHour); //this identifies the current hour as a numerical value

var timeShader = function() {
    var blockValue = document.querySelector(".description")
    // console.log(blockValue.parentElement.id);
    var currentTime = new Date();
    var currentHour = currentTime.getHours()
    // var timeBlockValue = $(this).closest('div').attr('id');
    // console.log($(this).parent('div'));
    // console.log("the current time-block being checked has an ID of: " + timeBlockValue);
    if (blockValue < currentHour) {
        $(descriptionEl).addClass("past");
    } else if (blockValue > currentHour) {
        $(descriptionEl).addClass("future");
    } else if (blockValue == currentHour) {
        $(descriptionEl).addClass("present");
    }
}

setInterval(function () {
    $(".description").each(function(i, descriptionEl) {
        console.log(descriptionEl);
      
    });
}, 1500);

// console.log($(".description"));

timeShader();
//syntax for targeting 2nd child: $(target).children("div.second")

var initialShading = function() {
    //reset all classes
    for (let i=9; i <=17; i++) {
        // console.log("the current value of i is: " + i);
        var initialBlock = document.getElementById(i);
        var timeValue = document.getElementById(i).id;
        // console.log("the current value of the timeValue id is: " + timeValue);
        // console.log("same, but using JQ: " + $(initialBlock).children("div.second"));
        var initialTime = new Date();
        var initialHour = initialTime.getHours();
        // console.log(initialBlock.children);
        if (timeValue < initialHour) {
            $(initialBlock.children[1]).addClass("past");
        } else if (timeValue > initialHour) {
            $(descriptionEl).addClass("future");
        } else if (timeValue == initialHour) {
            $(descriptionEl).addClass("present");
        }
    }
};

//setter function? - sets/removes classes as needed

initialShading();
// console.log(current.getHours()); 

// if (moment().isAfter(currentTime)) {
//     $(descriptionEl).addClass("future");
// } else if (moment().isBefore(currentTime)) {
//     $(descriptionEl).addClass("past");
// } else if (moment().isSame(currentTime, 'hour')) {
//     $(descriptionEl).addClass("present");
// }



//add new class if time is in the future
//1. identify current time in relative context (by hour)
//2. identify past/present/future variables
//2. establish rules for how often to check time (setInterval)
//3. establish rules for how to address past, present, future
//4. loop continuously
//5. reset each day at midnight

