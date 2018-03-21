$('.form').find('input, textarea').on('keyup blur focus', function (e) {

  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight');
			} else {
		    label.removeClass('highlight');
			}
    } else if (e.type === 'focus') {

      if( $this.val() === '' ) {
    		label.removeClass('highlight');
			}
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {

  e.preventDefault();

  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');

  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();

  $(target).fadeIn(600);

});

function init() {
    // Retrieving the text input's value which was stored into a cookie
    setTimeout(function(){ alert("Welcome to this online text font editor for dyslexia. No need to install fonts, just enter links or paragraphs, and you can instantly use the fonts that are easy for you to read anytime, anywhere. "); }, 1);
    //document.write("<div>"+"<p style='font-family:OpenDyslexic3-Bold,sans-serif;'>"+ "passed value = "+mytext+"</p>"+"</div>");
    //document.getElementById("mytext").style.fontFamily = "OpenDyslexic-Regular,sans-serif";
}
var bt = document.getElementById("buttonT");
bt.addEventListener("mouseover", warntip());
bt.addEventListener("mouseout", closewarntip());
var tipw;
function warntip(){
  tipw=setTimeout(tipalert(), 1);
}

function closewarntip(){
  clearTimeout(tipw);
}
function tipalert(){
  alert("Since this is an asynchronous request and technical limitation, the link must be clicked twice");
}

function openTab1(evt, tab1Name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab1Name).style.display = "block";
    evt.currentTarget.className += " active";
}

function openTab2(evt, tab1Name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab1Name).style.display = "block";
    evt.currentTarget.className += " active";
}



function redirect() {
    //var url = document.getElementById("ForLink").value;
    //window.open("https://mercury.postlight.com/web-parser/");
    //console.log("Hello Print!");
    //setTimeout(() => window.open('newurl'), 30);
    var link = document.getElementById("ForLink").value;
    // broke this string down so you don't have to scroll
    var newurl = "https://mercury.postlight.com/parser?" +
                 "url=" + link ;
                 //link="http://www.businessinsider.com/joel-spolsky-stack-exchange-interview-2016-12"
    // set your api key
    var apiKey = "qkqEY2g2zCZci9HmVxQ5RnY5zUrYY0j2Kbwk342m";
    var output = "";
    $.ajax({
            url: newurl,
            dataType: "json",

            beforeSend: function(xhr){
                console.log(apiKey);
                xhr.setRequestHeader('x-api-key', apiKey);
            },

            success: function(data){
                console.log("debugging")
                console.log(data.title);
                output=data.title;
                datatitle(data.title);
                databody(data.content);
              //  $("h1").html(data.title);
                return data;
            },
            error: function (error) {
                console.log(error)
                alert("An error occured" );
            }
        })

    var myWindow= window.open("", "MsgWindow", "width=200,height=100");
    //setTimeout(() => myWindow =window.open("", "MsgWindow", "width=200,height=100"), 0.01);
    //myWindow.close();
    opennewwindow(myWindow);

  }
function opennewwindow(myWindow){
  myWindow = window.open("", "MsgWindow", "width=200,height=100");
  //myWindow.document.write("<p>"+ console.log(data.title) + "</p>");
  myWindow.document.write('<html><head><title>Result</title><link rel="stylesheet" type="text/css" href="css/styles.css"></head><body>');
  myWindow.document.write("<div><h1>"+datatitle+"</h1>"+"<p>"+ databody+"</p></div>");
  myWindow.document.write('</body></html>');
}
var datatitle;
function datatitle(title){
  datatitle =title;
}
var databody;
function databody(e){
  databody=e;
}

function redirect2() {
    var x = document.getElementById("ForText").value;
    //document.getElementById("demo").innerHTML = x; //result.html
    var myWindow = window.open("", "MsgWindow", "width=200,height=100");
    myWindow.document.write('<html><head><title>Result</title><link rel="stylesheet" type="text/css" href="css/styles.css"></head><body>');
    myWindow.document.write("<div><p>"+ x +"</p></div>");
    myWindow.document.write('</body></html>');
    myWindow.document.close();
    myWindow.focus();
}

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var svg = Snap("#svg");
var c = svg.paper.rect(20, 20, 60, 60, 10).attr({
    fill: "#000",
});

var rot = 0;
document.getElementById("buttonR").onclick = function() {
  alert('WORK');
  console.log(click);
    Snap.animate(rot, rot + 180, function(value) {
console.log(svg);
        rot = value;
        c.transform(new Snap.Matrix().rotate(value, 50, 50));
    }, 500);
};
