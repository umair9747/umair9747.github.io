var blink_speed = 1300;
var wordArray = ['Student', 'Web Developer', 'Security Researcher'];
var count=0;
var t = setInterval(function () {
    var ele = document.getElementById('changingtext');

    ele.innerHTML = wordArray[count++];

   if(count===wordArray.length)
     count=0;

}, blink_speed);
