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


$("#forme1").on("mouseenter", function () {
  $(this).addClass("rotate");
});

$("#forme1").on("mouseleave", function () {
  $(this).removeClass("rotate");
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

$(document).ready(function() {
  // Fonction pour calculer l'opacité en fonction du scroll
  function setOpacity() {
      var scrollTop = $(window).scrollTop(); // Récupérer la position du scroll
      var opacityValue = 1 - scrollTop / 500; // Calculer l'opacité
      if (opacityValue < 0) opacityValue = 0; // Empêcher l'opacité de devenir négative

      // Appliquer l'opacité à #forme1, #forme2, #forme3
      $('#forme1, #forme2, #forme3').css({
          'opacity': opacityValue
      });

      console.log("Scroll détecté :", scrollTop); // Afficher le scroll dans la console
  }

  // Appliquer l'opacité initiale à partir du scroll au moment du chargement
  setOpacity();

  // Gérer l'événement de scroll pour changer l'opacité
  $(window).on('scroll', function() {
      setOpacity(); // Recalculer et appliquer l'opacité au scroll
  });

  // Gérer le mouvement de la souris (si nécessaire pour autre logique)
  $(window).on('mousemove', function(event) {
      var positionY = event.pageY - $(window).scrollTop(); // Correction de la position de la souris par rapport au scroll
      console.log("Position Y de la souris :", positionY); // Afficher la position Y de la souris
  });
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



      

        
 //////// ///ne rien écrire après ceci
});



    });