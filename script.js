//Function for retrieving today's date to jumbotron on page
function getCurrentDate(){
    var currentDate = moment().format('dddd, MMMM Do YYYY');
    $("#currentDay").text(currentDate);

}


getCurrentDate();

