var descriptionEl = document.querySelector(".description");
var tasks = {};

var saveTasks = function() {
    console.log(tasks)
    localStorage.setItem("tasks", JSON.stringify(tasks));
};
var classRemover = function(blockValue) {
    $(blockValue.children[1]).removeClass("past");
    $(blockValue.children[1]).removeClass("future");
    $(blockValue.children[1]).removeClass("present");
    console.log("the classRemover function has stripped a class");
};

var blockShading = function() { //handles initial shading of the time blocks
    var currentTime = new Date(); //gets current time from browser
    var currentHour = currentTime.getHours(); //this identifies the current hour as a numerical value
    for (let i=9; i <=17; i++) {
        var blockValue = document.getElementById(i);
        var timeValue = document.getElementById(i).id;
        classRemover(blockValue); //reset the time-based classes
        if (timeValue < currentHour) {
            $(blockValue.children[1]).addClass("past"); //if the value of the target time block is less than the value of the current hour (0-23), then the target time block is in the past, corresponding class added
        } else if (timeValue > currentHour) {
            $(blockValue.children[1]).addClass("future"); //if value of target block is greater than current hour, time block is in the future, corresponding class added
        } else if (timeValue == currentHour) {
            $(blockValue.children[1]).addClass("present"); //if value of target block is equal to the current hour, time block is in the present, corresponding class added
        };
    };
};

blockShading();

setInterval(function () {
    $(".description").each(function(i, descriptionEl) { //loops through each Time Block Description element (9AM-5PM)
        refreshShading(descriptionEl); //passes element to refreshShading function
    });
}, 60000); //refreshes every minute to update block shading as needed

var refreshShading = function(blockDescription) {
    var blockValue = blockDescription;
    var timeValue = blockDescription.parentElement.id;
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    classRemover(blockValue);
    if (timeValue < currentHour) {
        $(blockValue.children[1]).addClass("past");
    } else if (timeValue > currentHour) {
        $(blockValue.children[1]).addClass("future");
    } else if (timeValue == currentHour) {
        $(blockValue.children[1]).addClass("present");
    };
};

//description element click listener to add & edit text
$(".description").on("click", function() {
    var blockText = $(this).find("p").text().trim(); //get existing text value
    console.log(blockText)
    //get block ID too?
    //replace p element with a new text area
    var textInput = $("<textarea>").addClass("w-100").val(blockText);
    $(this).find("p").replaceWith(textInput);
    //autofocus on new text area
    textInput.trigger("focus");
    //enable save button at this point?
});

//way to make the input field stay active when clicked away? like on blur: do nothing?

//save button clicked 
$(".saveBtn").on("click", function() {
    var descriptionText = $(".description textarea").val();
    console.log(this.descriptionText);
    // var blockText = $(this).siblings(".description-text").find("p").text(); //get current value of text area
    var timeBlock = $(this).closest(".time-block").attr("id");
    console.log("The save button that was just clicked is for timeBlock: " + timeBlock + ", and the text says: " + descriptionText);
    if (descriptionText) {
        var textAreaEl = $("<p>").text(descriptionText);
        $(".description textarea").replaceWith(textAreaEl);
        var newTask = {
            content: descriptionText,
            id: timeBlock
        };
        tasks.push(newTask);
        saveTasks();
    } else {
        var textAreaEl = $("<p>");
        $(".description textarea").replaceWith(textAreaEl);
    }
    });

    // $(".time-block").on("click", ".saveBtn", function() {

    
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks) {
        tasks = [];
    } else {
        $.each(tasks, function (e) {
            var blockID = $(this).attr("id");
            var blockDescription = $(this).attr("content");
            var blockText = $("#" + blockID).find("p");
            blockText.text(blockDescription);
        })
    }
}




//add new class if time is in the future
//1. identify current time in relative context (by hour)
//2. identify past/present/future variables
//2. establish rules for how often to check time (setInterval)
//3. establish rules for how to address past, present, future
//4. loop continuously
//5. reset each day at midnight

//CODE GRAVEYARD
// console.log($(".description"));
//syntax for targeting 2nd child: $(target).children("div.second")

//     // console.log(blockValue.parentElement.id);
//     // var timeBlockValue = $(this).closest('div').attr('id');
//     // console.log($(this).parent('div'));
//     // console.log("the current time-block being checked has an ID of: " + timeBlockValue);
// }