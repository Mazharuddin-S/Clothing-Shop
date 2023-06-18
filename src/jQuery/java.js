	var date=new Date()
	let months=["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]
	let days = ["sunday","monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
	var yyyy = date.getFullYear();console.log(yyyy)
	var mm = date.getMonth()
	var dd = date.getDay();
	var hour= date.getHours();
	var am_pm;
	var minute=date.getMinutes();
	var seconds=date.getSeconds();
	if(hour > 12){
		if(hour > 12){am_pm = "PM"}else{am_pm = "AM"}
		hour = hour - 12
	}else if(hour == 12){hour = hour;}
	
	document.write("<b>Today is </b> : " + days[dd] + "<br>")
	document.write("<b>Current Time is</b> : " + hour +" " + am_pm + " : " + minute + " : " + seconds  + "<br>" )
	document.write("<b>Current Date is</b> : " + months[mm] +"-"+days[dd]+"-"+yyyy+ "<br>")

	function area(a,b,c){
		let S=(a+b+c)/2
		document.write("<b>" + Math.sqrt(S*(S-a)*(S-b)*(S-c))+ "<b>"+ "<br>")
		}	
	area(3,4,5);
	
	if(yyyy % 4 == 0 && yyyy % 100 != 0){
		document.write("<b> Given Year is Leap Year </b>")
	}else{document.write("<b> Given Year is Not a Leap Year </b>")}
