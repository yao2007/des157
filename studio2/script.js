// practice listening for events and then
// calling (or invoking) anonymous and named functions

// capture button into a variable
// var btn=document.getElementById('btn');
// var init=document.getElementById('init');
// var pen=document.getElementById('pen');
// var bottle=document.getElementById('bottle');
// var glass=document.getElementById('glass');
//
// // mouseover listener that changes the
// // background color with a call to an anonymous function
// btn.addEventListener ('mouseover', function() {
//   btn.style.backgroundColor='orange';
// });
//
// init.addEventListener ('mouseover', function() {
//   init.src='s2/FaceQ1517950674603.png';
// });
//
// pen.addEventListener('dblclick',
// function(){
//    init.src='s2/pen.png';
//    pen.style.backgroundColor='indigo';
// });
// bottle.addEventListener('dblclick',
// function(){
//    init.src='s2/bottle copy.png';
//    bottle.style.backgroundColor='indigo';
// });
// glass.addEventListener('dblclick',
// function(){
//    init.src='s2/glass.png';
//    glass.style.backgroundColor='indigo';
// });
//
//
// // mouseup mouseout that calls a named (custom)
// // function that changes the background color
// init.addEventListener('mouseout',mouseWentOut);
//
//
//
// // defined custom function
// function mouseWentOut(){
//    init.src='s2/FaceQ1517950309557.png';
// }
//
// // note: practice typing the following
// // by looking at the sample code provided
// // but do not just copy and paste it...type it
//
// // prompt1: add a mousedown listener that calls an
// // anonymous function to change the
// // background color to green
// btn.addEventListener('mousedown',
// function(){
//    btn.style.backgroundColor='green';
// });
// // prompt2: add a mouseup listener that calls a
// // named function, "mouseUpChange" to change the
// // background color to blue
// btn.addEventListener('mouseup',mouseUpChange);
//
// // prompt3: define the named funcion "mouseUpChange"
// function mouseUpChange(){
//    btn.style.backgroundColor='blue';
// }
// // prompt4: add a dblclick listener that calls an
// // anonymous function to change the
// // background color to indigo
// btn.addEventListener('dblclick',
// function(){
//    btn.style.backgroundColor='indigo';
// });
// // challenge: have more fun: add innerHTML content, add other css c


   // var cat = document.getElementById('cat');
   var bottle = document.getElementById('bottle');
   var pen = document.getElementById('pen');
   var glass = document.getElementById('glass');
   var results = document.getElementById("results");
   var myMsg = document.getElementById("myMsg");

   bottle.addEventListener('touchstart', function(e){
      bottle.className="show1";
   }, false);
   pen.addEventListener('touchstart', function(e){
      pen.className="show2";
   }, false);
   glass.addEventListener('touchstart', function(e){
      glass.className="show";
   }, false);
//
//    cat.addEventListener('touchstart', function(e){
//       //e.preventDefault();
//   //    var touches = e.changedTouches;
//       statusdiv.innerHTML="Ouch";
//    }, false);
//
// //Prompt 2: add another listener that increment the counter and show in the status how many times the cat was touched (touchend)
//     cat.addEventListener("touchend", function(e){
//        //e.preventDefault();
//        counter++;
//        statusdiv.innerHTML=counter;
//     }, false);
