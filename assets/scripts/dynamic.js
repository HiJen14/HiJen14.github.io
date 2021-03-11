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
			document.getElementById("sidebar").style.width = "50px";
			document.getElementById("sidebar").style.height = "50px";
			document.getElementById("sidebar").style.font-size = "0px";
			
			document.getElementById("SidebarRail").style.width = "50px";
			menuOpen = false;
		}
		else
		{
			document.getElementById("sidebar").style.width = "300px";
			document.getElementById("sidebar").style.height = "150px";
			document.getElementById("sidebar").style.font-size = "12px";
			
			document.getElementById("SidebarRail").style.width = "300px";
			menuOpen = true;
		}

	}