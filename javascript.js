$(document).ready(function(){
   
    $(window).scroll( function(){
    
       $(".fadeInBlockLeft, .fadeInBlockRight").each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
    
            bottom_of_window = bottom_of_window + 50;  
          
            if( bottom_of_window > bottom_of_object ){
               
                $(this).animate({'opacity':'1'},1000);
                if($(this).hasClass('fadeInBlockLeft')){
                	$(this).addClass("animate-inLeft");
                }
                if($(this).hasClass('fadeInBlockRight')){
                	$(this).addClass("animate-inRight");
                }
            }
         }); 
       });
     });