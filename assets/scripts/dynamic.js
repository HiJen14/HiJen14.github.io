var black = true;
   
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
		document.getElementById("mySidebar").style.width = "250px";
		document.getElementById("main").style.marginLeft = "250px";
	}