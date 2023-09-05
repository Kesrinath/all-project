function gotoschool(callback) {
  console.log("i will  go to school");
  setTimeout(() => {
    console.log("reached to school");
    callback();
  }, 2000);
}
function takelunch(callback) {
  console.log("studyng in school");
  setTimeout(() => {
    console.log("i am taking lunch in school");
    setTimeout(() => {
      console.log("lunch completed");
      callback();
    }, 5000);
  }, 3000);
}
function returnSchool(callback) {
  console.log("returning from school");
  setTimeout(() => {
    console.log("i will prepare for coaching");
    callback();
  }, 2000);
}
function goingToCoaching(callback) {
  console.log("i am going to coaching");
  setTimeout(() => {
    console.log("reached to coaching");
    callback();
  }, 2000);
}
function returnToHome() {
  console.log("my coaching is completed ");
  setTimeout(() => {
    console.log("i have reached home from coaching");
  }, 2000);
}
