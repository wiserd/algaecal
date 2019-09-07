export default function hideZeroDiscount() {
  
var testGlobalPercentLabels;
  
    var percentOff = [].slice.call( document.querySelectorAll( '.percent-off .label .amount') );  
    //console.log( 'd percentOff= ', percentOff, 'length=', percentOff.length);
    let checkIfZero = ( percentLabels) =>
    {

      //console.log( 'running checkIfZero ');
      for (var i=0; i< percentLabels.length; i++)
      {
 
          //console.log('original savings data' , percentLabels[i].dataset["originalSavings"]);

          //console.log('original savings data-parent' , percentLabels[i].parentElement.dataset["originalSavings"]);
          // [1].dataset["originalSavings"] );
         // console.log('labelPercentOff.amount', percentLabels.amount);//.dataset.original-savings

          if(percentLabels[i].dataset["originalSavings"] <= 0)
          { 

            percentLabels[i].parentElement.parentElement.style.display='none'; 

            console.log('set invisible ',percentLabels[i].parentElement.parentElement); 
          }
          else{
            percentLabels[i].parentElement.parentElement.style.display="block"; 
            console.log('set visible', percentLabels[i].parentElementparentElement);
          }   
        
      }         
    }

    checkIfZero(percentOff);
    console.log( 'percentOff= ', percentOff);
}
