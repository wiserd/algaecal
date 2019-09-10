export default function speakToSpecialistsShowHide(isProd) 
{

	let moment = require("moment-timezone");

  	var optionsURL;
	if (!isProd){
	  optionsURL= "options.json";
	}else{
	  optionsURL="https://www.algaecal.com/wp-json/acf/v3/options/options";
	}

  	let now = moment();
  	var weeklyOfficeHours;

	function hideChat(hoursInfo){
		let currentHour = moment.tz("America/Los_Angeles").format("H")* 100;
		let time= moment.tz("America/Los_Angeles").format("M");

		if (  (currentHour > hoursInfo.closing_time) || ( currentHour < hoursInfo.starting_time)  )
		{
			document.getElementById("speakToSpecialists").style.visibility="hidden";
		}
		if (time==10){
			document.getElementsByClassName("US")[0].style.visibility="hidden";
		}
    }

    var xmlhttp = new XMLHttpRequest();
    var weeklyOfficeHours;
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
		        var text = xmlhttp.responseText; 
		        var parsedText = JSON.parse( text);
		        weeklyOfficeHours= parsedText.acf["office_hours"];
		        let currentDay = moment.tz("America/Los_Angeles").format("d") ;
		        hideChat(weeklyOfficeHours[currentDay]);
           }
           else if (xmlhttp.status == 400) {
            	console.err('There was an error 400');
           }
           else {
            	console.err('something else other than 200 was returned', xmlhttp.status);
           }
        }
    };


    xmlhttp.open("GET", optionsURL, true);
    xmlhttp.send();




//	https://www.algaecal.com/wp-json/acf/v3/options/options
	


}
