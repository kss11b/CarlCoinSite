$(document).ready(function(){

    function revealText(selector){
      $(selector).removeClass('hidden')
      $(selector).addClass('slideInLeft')
    }



  var options = [

    {selector: '#info1', offset: 200, callback: function() {
      revealText('#info1');
    } },
    {selector: '#info2', offset: 250, callback: function() {
      revealText('#info2');
    } },     {selector: '#info3', offset: 250, callback: function() {
      revealText('#info3');
    } },         {selector: '#info4', offset: 200, callback: function() {
      revealText('#info4');
    } },

   {selector: '#info5', offset: 250, callback: function() {
      revealText('#info5');
    } },

   {selector: '#info6', offset: 200, callback: function() {
      revealText('#info6');
    } },

   {selector: '#info7', offset: 200, callback: function() {
     const cssChoice = Math.random() * 100
     $('#info7').removeClass('hidden')
     if(cssChoice <= 25){
       $('#info7').addClass('fadeInDownBig');
     }
     else if(cssChoice <= 50){
       $('#info7').addClass('lightSpeedIn');
     }
     else if(cssChoice <= 75){
       $('#info7').addClass('rollIn');
     }
     else{
       $('#info7').addClass('rotateIn');
     }
    } },

   {selector: '#info8', offset: 100, callback: function() {
      revealText('#info8');
    } },

   {selector: '#info9', offset: 100, callback: function() {
      revealText('#info9');
    } },







  ];
  Materialize.scrollFire(options);

  $('.parallax').parallax();

});
