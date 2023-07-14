$(function(){
    
    abrirJanela();
    fechaJanela();
    
  
       
   function abrirJanela(){
       
       $('.botao').click(function(){
           
           $('.form').fadeIn('slow');  
           $('.fechar').fadeIn('slow');    
           $('.botao').fadeOut('slow');  
       });
           
   }
   
   function fechaJanela(){

    $('.fechar').click(function(){

        $('.form').fadeOut('slow')
        $('.botao').fadeIn('slow'); 
        $('.fechar').fadeOut('slow');
   });

   }



     
    
    
    
    
});
