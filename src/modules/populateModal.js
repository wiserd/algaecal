export default function populateModal(isProd) {
  var modalURL;
if (!isProd){
  modalURL= "options.json";
}else{
  modalURL="https://www.algaecal.com/wp-json/acf/v3/options/options";
}

  // this is to draw from the algaecal site. It's possible ot also 

    var modalDiv;


    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
            var text = xmlhttp.responseText;
               modalDiv = document.getElementById("indexModal");
            var parsedText = JSON.parse( text);


        
            modalDiv.innerHTML= parsedText.acf["7yr_full_copy"].replace("300", "807");
            
           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned', xmlhttp.status);
               console.log(xmlhttp);
           }
        }
    };




    xmlhttp.open("GET", modalURL, true);
    xmlhttp.send();




}
