var positionY;
var scrollTop;

var lastPositionX =0;

$( document ).ready(function() {
    //récupérer les dimension de la fenêtre :
    var hauteurFenetre = $(window).width();
    var largeurFenetre = $(window).height();
    scrollTop = $(window).scrollTop(); //récupérer la "quantité" de scroll
    
////vous pouvez rédiger vos modification ici !

  
$("#forme1").on("mouseenter", function () {
      $(this).addClass("rotate");
});

$("#forme1").on("mouseleave", function () {
      $(this).removeClass("rotate");
});

  $("#forme2").on("mouseenter", function () {
    $(this).addClass("rotate");
});

$("#forme2").on("mouseleave", function () {
    $(this).removeClass("rotate");
});

$("#forme3").on("mouseenter", function () {
  $(this).addClass("rotate");
});

$("#forme3").on("mouseleave", function () {
  $(this).removeClass("rotate");
});



 $("#forme1").on("dblclick", function() {
  if ($(this).css("filter") === "none" || $(this).css("filter") === "") {
   
    $(this).css({
      "filter": "grayscale(100%)"
    });
  } else {
   
    $(this).css({
      "filter": "none"
    });
  }
});

$("#forme2").on("dblclick", function() {
  if ($(this).css("filter") === "none" || $(this).css("filter") === "") {
   
    $(this).css({
      "filter": "grayscale(100%)"
    });
  } else {
   
    $(this).css({
      "filter": "none"
    });
  }
});

$("#forme3").on("dblclick", function() {
  if ($(this).css("filter") === "none" || $(this).css("filter") === "") {
  
    $(this).css({
      "filter": "grayscale(100%)"
    });
  } else {
  
    $(this).css({
      "filter": "none"
    });
  }
});



 $( "#forme1" ).on( "mousedown", function() {
  event.preventDefault();

    var initialX = event.pageX;
    var initialY = event.pageY;
   
    var initialPosition = $(this).position();

    $(document).on("mousemove", function(event) {
        var deltaX = event.pageX - initialX;
        var deltaY = event.pageY - initialY;

        $("#forme1").css({
            "position": "absolute", 
            "left": initialPosition.left + deltaX + "px",  
            "top": initialPosition.top + deltaY + "px"    
        });
    });

   
    $(document).on("mouseup", function() {
        $(document).off("mousemove");  
        $(document).off("mouseup");   
    });

    $( "#forme2" ).on( "mousedown", function() {
      event.preventDefault();
    
        var initialX = event.pageX;
        var initialY = event.pageY;
       
        var initialPosition = $(this).position();
        
        $(document).on("mousemove", function(event) {
            var deltaX = event.pageX - initialX;
            var deltaY = event.pageY - initialY;
    
            
            $("#forme2").css({
                "position": "absolute", 
                "left": initialPosition.left + deltaX + "px",  
                "top": initialPosition.top + deltaY + "px"    
            });
        });
    
       
        $(document).on("mouseup", function() {
            $(document).off("mousemove");  
            $(document).off("mouseup");   
        });
    
      });

      $( "#forme3" ).on( "mousedown", function() {
        event.preventDefault();
      
          var initialX = event.pageX;
          var initialY = event.pageY;
      
      
         
          var initialPosition = $(this).position();
      
          
          $(document).on("mousemove", function(event) {
              var deltaX = event.pageX - initialX;
              var deltaY = event.pageY - initialY;
      
              
              $("#forme3").css({
                  "position": "absolute", 
                  "left": initialPosition.left + deltaX + "px",  
                  "top": initialPosition.top + deltaY + "px"    
              });
          });
      
         
          $(document).on("mouseup", function() {
              $(document).off("mousemove");  
              $(document).off("mouseup");   
          });
      
        });

        $(window).on('scroll', function() {
          var scrollTop = $(window).scrollTop(); // Récupérer la quantité de scroll
      
          // Calculer une valeur d'opacité entre 1 et 0 en fonction du scroll
          var opacityValue = 1 - scrollTop / 500; // Ajuste 500 selon la distance souhaitée
          if (opacityValue < 0) opacityValue = 0; // Empêcher une opacité négative
      
          $('#forme1').css({
              'opacity': opacityValue // Utiliser opacity pour ajuster la transparence
          });
      });
      
        

/////Ci-dessous la fonction permettant de déclancher des modifications en fonction du scroll
$(window).on( 'scroll', function(){

    scrollTop = $(window).scrollTop(); //création d'une varible contenant la "quantitée de scroll"
    if (opacityValue < 0) {
      opacityValue = 0;
  }

  // Applique la valeur d'opacité calculée à #forme1
  $('#forme1').css({
      'opacity': opacityValue
  });
 });



  $(window).on('mousemove', function(){
    positionY = event.pageY - scrollTop; // corection de la valeur de event.pageY pour qu'elle ne soit pas affectée par le scroll
  })



 //////// ///ne rien écrire après ceci
});



    });