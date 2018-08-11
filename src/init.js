// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
var aboutMe = {
  firstName: "Jason",
  lastName: "Jiron",
  jobTitle: "Premier Partner / Traveler Care",
  homeOffice: "RPP",
  moreInfo: "I'm really excited to learn web/software development with HomeAway!"
}
// console.log(aboutMe);
// using jQuery and the object above, display the information as the appropriate button is clicked
$(".btn1").click(function() {
    $("#first-name").text(aboutMe.firstName);
});

$(".btn2").click(function() {
  $("#last-name").text(aboutMe.lastName);
});

$(".btn3").click(function() {
  $("#job-title").text(aboutMe.jobTitle);
});

$(".btn4").click(function() {
  $("#home-office").text(aboutMe.homeOffice);
});

$(".btn5").click(function() {
  $("#first-name").hide();
  $("#last-name").hide();
  $("#job-title").hide();
  $("#home-office").hide();
  $("#more-info").text(aboutMe.moreInfo);
});

