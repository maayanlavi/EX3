
var firstName="Maayan";
var lastName="lavi";
var firstNameLen=firstName.length;
var lastNameLen=lastName.length;


makeRecs(firstNameLen * lastNameLen);    

function makeRecs(num)
{
    var main3 = document.getElementById("main3");
    var arr = "";

    arr += '<section onmouseover="mouseOnTheFirstLetter()" onmouseout="mouseOffTheFirstLetter()"></section>';
    for (i=1; i < num; i++)
        arr += '<section></section>';

    main3.innerHTML = arr;
}

var main3 = document.getElementById("main3");
var arr = main3.getElementsByTagName("section");

function changeColor()
{
    for (i = 0; i < firstNameLen; i++) 
        arr[i].style.backgroundColor = "black";  
}

function ResetColor()
{
    for (i = 0; i < firstNameLen; i++) 
        arr[i].style.backgroundColor = "white";  
}


var section = main3.getElementsByTagName("section")[0];

function mouseOnTheFirstLetter()
{
    section.style.backgroundImage = "url('images/M.png')";
}

function mouseOffTheFirstLetter()
{  
    section.style.backgroundImage = "none";
}



