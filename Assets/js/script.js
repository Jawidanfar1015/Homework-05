var hour9 = $("#duty_1");
var hour10 = $("#duty_2");
var hour11 = $("#duty_3");
var hour12 = $("#duty_4");
var hour13 = $("#duty_5");
var hour14 = $("#duty_6");
var hour15 = $("#duty_7");
var hour16 = $("#duty_8");
var hour17 = $("#duty_9");
var saveBton = $('.saveBtn');
var saveBton2 = $('.btn2');
var saveBton3 = $('#btn3');
var saveBton4 = $('#btn4');
var saveBton5 = $('#btn5');
var saveBton6 = $('#btn6');
var saveBton7 = $('#btn7');
var saveBton8 = $('#btn8');
var saveBton9 = $('#btn9');

var aryB = [saveBton, saveBton2, saveBton3, saveBton4, saveBton5, saveBton6, saveBton7, saveBton8, saveBton9];
var ary = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];
 
function calculateTime(){
    var d = new Date();
    var hour = d.getHours();
    $("#current").text(d);
    for (var i = 0; i < ary.length; i++){
    if (hour == (i+9)){
        ary[i].addClass("present")
     }else if(hour > (i+9)){
         ary[i].addClass("past")
     }else {
         ary[i].addClass("future");
     }      
}}


for (var j = 0; j < aryB.length; j++){
aryB[j].on('click', function(event){
    event.preventDefault();
    localStorage.setItem('save', hour9.val());
    for (var i = 0; i < ary.length; i++){
    localStorage.setItem('save'+i, ary[i].val());
    }
 }); 
}
 
 window.onload = function(){
for (var j = 0; j < aryB.length; j++){
    savedNote+j;
    var savedNote = localStorage.getItem('save'+j)
    if (savedNote !== null) ary[j].val(savedNote)
    console.log(savedNote+j)
}
var savedNote = localStorage.getItem("save");
    if (savedNote !== null) hour9.val(savedNote);
}
setInterval(calculateTime, 1000);