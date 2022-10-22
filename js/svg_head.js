window.onscroll=function(){myFunction()};

var header=document.getElementById("header");
var title=document.getElementById("nav-title");
var anchor=document.getElementById("nav-anc");
//var mainTitle=document.getElementById("main-title");
var headicon=document.getElementById("h-icon");
var sticky=header.offsetTop;
function myFunction()
{
    if(window.pageYOffset>sticky)
    {
        header.classList.add("sticky-p");
        title.classList.add("st-title");
        anchor.classList.add("st-anc");
        //mainTitle.classList.add("main-sticky");
        headicon.src="img/logo2.png";
    }
    else
    {
        header.classList.remove("sticky-p");
        title.classList.remove("st-title");
        anchor.classList.remove("st-anc");
        //mainTitle.classList.remove("main-sticky");
        headicon.src="img/logo.png";
    }
}