var black : boolean = true;
   
		function ChangeImage(x)
		{
			if(black)
			{
				document.getElementById("LinkHD").src = {{ site.baseurl }}"/Images/LinkGrey.png"; 
				black = false;
			}
			else
			{
				document.getElementById("LinkHD").src = {{ site.baseurl }}"/Images/LinkBlack.png"; 
				black = true;
			}
		}
   
		//Hey Listen
		function OpenNavi() 
		{
			document.getElementById("mySidebar").style.width = "250px";
			document.getElementById("main").style.marginLeft = "250px";
		}