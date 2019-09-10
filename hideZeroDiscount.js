export default function hideZeroDiscount() {
  
var testGlobalPercentLabels;
  
    var percentOff = [].slice.call( document.querySelectorAll( '.percent-off .label .amount') );  

    let checkIfZero = ( percentLabels) =>
    {

      //console.log( 'running checkIfZero ');
      for (var i=0; i< percentLabels.length; i++)
      {
 
          

          if(percentLabels[i].dataset["originalSavings"] <= 0)
          { 

            percentLabels[i].parentElement.parentElement.style.display='none'; 

            
          }
          else{
            percentLabels[i].parentElement.parentElement.style.display="block"; 
            
          }   
        
      }         
    }

    checkIfZero(percentOff);
   
}
