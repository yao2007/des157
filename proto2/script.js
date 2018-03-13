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
    setTimeout(() => window.open('https://mercury.postlight.com/web-parser/'), 1000);
  }

function redirect2() {
    var x = document.getElementById("ForText").value;
    //document.getElementById("demo").innerHTML = x; //result.html
    var myWindow = window.open("", "MsgWindow", "width=200,height=100");
    myWindow.document.write("<p>"+ x + "</p>");
    myWindow.document.write("<p style='width:100%;'>");
    myWindow.document.write("<select id='cboprintSize' onchange='document.getElementById(\"divContainer\").style.width = document.getElementById(\"cboprintSize\").value + \"px\";'><option value=\"300\">A4</option><option value=\"500\">A5</option></select>");
    myWindow.document.write("<div id='divContainer' style='width:500; height:700; background-color:white'>");
    myWindow.document.write("<table width='100%'><tr><td>");
    myWindow.document.write(document.getElementById('printForm').innerHTML);
    myWindow.document.write("</td></tr><table>");
    myWindow.document.write("</div>");
    myWindow.document.write("</div>");
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
