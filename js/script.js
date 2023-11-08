// cette ligne permet d'être sûr que le document est prêt à utiliser jQuery
$(function() {
    /*  
    Quand je clique sur un élément de la navigation, 
    le composant : 
    1. met en avant le lien sur lequel je viens de cliquer
    2. affiche l'image adéquate
    3. affiche le paragraphe adéquat
    */

    $(".js-links a").on('click', function() {
        event.preventDefault();
        console.log('click')
    });
    $(document).ready(function() {
        $(".nav-item").click(function(event) {
          event.preventDefault();          
          $(".nav-item").removeClass("actif");          
          $(this).addClass("actif");
        });
      });
      
      $(document).ready(function() {
        $(".images img:not(.active)").hide();     
        $(".nav-item").click(function(event) {
          event.preventDefault();      
          $(".images img").removeClass("active").hide();      
          var index = $(this).index();
          $(".images img:eq(" + index + ")").addClass("active").show();
        });
      });
      
      $(document).ready(function() {
        $(".text article:not(.active)").hide();
        $(".nav-item").click(function(event) {
          event.preventDefault();
          $(".text article").removeClass("active").hide();
          var index = $(this).index();
          $(".text article:eq(" + index + ")").addClass("active").show();
        });
      });
});