//this file is to animate stickey header for main page

//caaling function when scrolling
window.onscroll=function(){myFunction()};

//getting html elements
var header=document.getElementById("header");
var title=document.getElementById("nav-title");
var anchor=document.getElementById("nav-anc");
var mainTitle=document.getElementById("main-title");
var headicon=document.getElementById("h-icon");
var sticky=header.offsetTop;

//function to change css clases
function myFunction()
{
    if(window.pageYOffset>sticky)
    {
        //change to stickey classes
        header.classList.add("sticky");
        title.classList.add("st-title");
        anchor.classList.add("st-anc");
        mainTitle.classList.add("main-sticky");
        headicon.src="img/logo2.png";
    }
    else
    {
        //chnage header to normal classes
        header.classList.remove("sticky");
        title.classList.remove("st-title");
        anchor.classList.remove("st-anc");
        mainTitle.classList.remove("main-sticky");
        headicon.src="img/logo.png";
    }
}

/*Reference
https://www.w3schools.com/howto/howto_js_sticky_header.asp

*/