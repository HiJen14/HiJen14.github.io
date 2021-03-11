var black : boolean = true;
   
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