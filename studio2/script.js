
   var bottle = document.getElementById('bottle');
   var pen = document.getElementById('pen');
   var glass = document.getElementById('glass');
   var results = document.getElementById("results");
   var myMsg = document.getElementById("myMsg");
   var myImg = document.getElementById("myImg");

   bottle.addEventListener('touchstart', function(e){
      bottle.className="show1";
      myMsg.innerHTML = "This is a bottle I got it form The International 2015 of DOTA2."
      myImg.src ="s2/20180208_111402.jpg";
      results.className="show";
   }, false);
   pen.addEventListener('touchstart', function(e){
      pen.className="show3";
      myMsg.innerHTML = "I got this pencil when I was in highschool."
      myImg.src ="s2/20180206_130859.jpg";
      results.className="show";
   }, false);
   glass.addEventListener('touchstart', function(e){
      glass.className="show4";
      myMsg.innerHTML = "It is the glasses I wear everyday~ ."
      myImg.src ="s2/20180206_130920.jpg";
      results.className="show";
   }, false);
