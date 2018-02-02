

var results = document.getElementById("results");
var myMsg = document.getElementById("myMsg");

document.makeup.onsubmit = processForm;
document.makeup.onreset = resetForm;

function resetForm() {
  myMsg.innerHTML = "";
  results.className="hide";
}
// define process functionS
function processForm() {
    var place = document.makeup.place.value;
    var food1 = document.makeup.food1.value;
    var food2 = document.makeup.food2.value;
    var food3 = document.makeup.food3.value;
    var food4 = document.makeup.food4.value;
    var food5 = document.makeup.food5.value;

    

    results.className="show";

    myMsg.innerHTML =
    "Hi guys! So today I woke up and I literally wanted to do my makeup using ONLY the food that I have in my "+place+" – just to see if I could do it! Considering I only used "+food1+ ", "+food2+", "+food3+", "+food4+" and "+food5+", I think it turned out ok! If you guys want to create your own full makeup look using the food you have in your house, make sure to use the hashtag: #foodmakeupchallenge so I can see!!";

      
      return false;
  }

  

  



