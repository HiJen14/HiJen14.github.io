var black = true;
var menuOpen = true;
   
	window.onload = (event) => 
	{
		if(window.screen.width <= 768)
		{
			document.getElementById("LinkHD").width = 300;
			document.getElementById("LinkHD").height = 125;
		}
	};
	
	function ChangeImage(x)
	{
		if(black)
		{
			document.getElementById("LinkHD").src = "/Images/LinkGrey.png"; 
			black = false;
		}
		else
		{
			document.getElementById("LinkHD").src = "/Images/LinkBlack.png"; 
			black = true;
		}
	}
   
	//Hey Listen
	function OpenNavi() 
	{
		if(menuOpen)
		{
			document.getElementById("sidebar").style.display = "none"; 
			document.getElementById("sidebarIcon").style.display = "block";
			
			document.getElementById("SidebarRail").style.width = "50px";
			menuOpen = false;
		}
		else
		{
			document.getElementById("sidebar").style.display = "block"; 
			document.getElementById("sidebarIcon").style.display = "none";

			
			document.getElementById("SidebarRail").style.width = "300px";
			menuOpen = true;
		}
	}