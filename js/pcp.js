//smoothscrool
$('a.js-scroll-trigger[href*="index.php#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: (target.offset().top - 48)
      }, 1000, "easeInOutExpo");
      return false;
    }
  }
});

//card rotation
$().ready(function(){
            $('[rel="tooltip"]').tooltip();

            });

            function rotateCard(btn){
            var $card = $(btn).closest('.card-container');
            console.log($card);
                if($card.hasClass('hover')){
                    $card.removeClass('hover');
                } else {
                    $card.addClass('hover');
                }
            }
