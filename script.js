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
var hourTask = $("<div>").attr({"class": "col-md-9 description"});

    var taskInfo = $("<textarea>");

    hourTask.append(taskInfo);


    taskInfo.attr("id", hour.id);

    var saveButton = $("<i class='fa fa-save'></i>")


    var saveTask = $("<button>")
    
    .attr({"class": "col-md-1 saveBtn"});


    saveTask.append(saveButton);

    timeBlock.append(hourLabel, hourTask, saveTask)

});


