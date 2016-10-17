var d,h,m,s,time;

function displayTime(){
	d = new Date();
	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();

	if(h > 12) h = h - 12;
	if(m <= 9) m = '0'+m;
	if(s <= 9) s = '0'+s;
   
 
    
	
    


	time = h + ':' + m + ':' + s
	document.body.style = time;
	document.getElementById("clock").innerHTML = time;

	setTimeout(displayTime, 1000)
}	displayTime();
//add colons
//change to regular time
// 