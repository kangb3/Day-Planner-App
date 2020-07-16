//Function for retrieving today's date to jumbotron on page
function getCurrentDate(){
    var currentDate = moment().format('dddd, MMMM Do YYYY');
    $("#currentDay").text(currentDate);

}

//Call function to retieve current date
getCurrentDate();

//Used to store data in planner
businessHours = [
    {
        id: "0",
        hour: "09",
        time: "09",
        timeOfDay: "AM",
        input: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        timeOfDay: "AM",
        input: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        timeOfDay: "AM",
        input: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        timeOfDay: "PM",
        input: ""
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        timeOfDay: "PM",
        input: ""
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        timeOfDay: "PM",
        input: ""
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        timeOfDay: "PM",
        input: ""
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        timeOfDay: "PM",
        input: ""
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        timeOfDay: "PM",
        input: ""
    }
]


//Used for creating fields and display scheduler
businessHours.forEach(function(hour) {
    
    // used for creating the time blocks row
    var timeBlock = $("<form>").attr({"class": "row"});
    
    $(".container").append(timeBlock);

    // used for time text field
    var hourLabel = $("<div>").text(`${hour.hour}${hour.timeOfDay}`)
        .attr({"class": "col-md-2 hour"
    });




//Used for task fields withon time block
var hourTask = $("<div>").attr({"class": "col-md-9 description p-0"});

    var taskInfo = $("<textarea>");

    hourTask.append(taskInfo);


    taskInfo.attr("id", hour.id);

    if (hour.time < moment().format("HH")) {
        taskInfo.attr ({"class": "past", })

    } else if (hour.time === moment().format("HH")) {
        taskInfo.attr({"class": "present"})

    } else if (hour.time > moment().format("HH")) {
        hour.attr({"class": "future"})
    }

    var saveButton = $("<i class='fa fa-save'></i>")


    var saveTask = $("<button>").attr({"class": "col-md-1 saveBtn"});


    saveTask.append(saveButton);

    timeBlock.append(hourLabel, hourTask, saveTask)

});


//setting data of localStorage to page if data is present
function init() {
    var savedHours = JSON.parse(localStorage.getItem("businessHours"));

    if (savedHours) {
        businessHours = savedHours;
    }

    saveTasks();
    showTasks();
}



// stores user input to localStorage
function saveTasks() {

    localStorage.setItem("businessHours", JSON.stringify(businessHours));
}

function showTasks() {
        businessHours.forEach(function (hour) {
            $(`#${hour.id}`).val(hour.input);
        })
    }

//calls function for saving task
init();
// saves data to be used in localStorage
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var index = $(this).siblings(".description").children(".future").attr("id");
    businessHours[index].input = $(this).siblings(".description").children(".future").val();
    //console.log(index);
    saveTasks();
    showTasks();
})


