var black = true;
   
	window.onload = (event) => 
	{
		console.log('page is fully loaded ' + window.screen.height);
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