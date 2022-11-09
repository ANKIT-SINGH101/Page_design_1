var menubtn = document.getElementById("menubtn");
var sidenav = document.getElementById("side-nav");
sidenav.style.right = "-250px";
menubtn.onclick = function()
{
    if(sidenav.style.right == "-250px")
    {
        sidenav.style.right = "0";
    }
    else
    {
        sidenav.style.right = "-250px";
    }
}

	var scroll = new SmoothScroll('a[href*="#"]');