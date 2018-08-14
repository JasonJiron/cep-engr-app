// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
var aboutMe = {
  firstName: "Jason",
  lastName: "Jiron",
  jobTitle: "Premier Partner / Traveler Care",
  homeOffice: "RPP",
  tellMeMore: "I'm really excited about the potential of this program. I completed the Software Development \"Bootcamp\" offered by Austin Community College Nearly 6 months ago. Since then, I've been revisiting the fundamentals of JavaScript to help gain a deeper understanding of programming. I can't wait to start working on the curriculum and projects in this program with HomeAway!"
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
  $("#more-info").text(aboutMe.tellMeMore);
});

