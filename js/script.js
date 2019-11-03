$(document).ready(function () {

    $(function () {

        var topoffset = 70; //variable for menu height

        //Use smooth scrolling when clicking on navigation
        $('.navbar-nav a').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                var target = $(this.hash);

                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                if (target.length) {

                    $('html,body').animate({

                        scrollTop: target.offset().top - topoffset

                    }, 700);

                    return false;
                } //target.length
            } //click function
        }); //smooth scrolling

    });

    //closes the navbar toggler after selection. Uses because first section was overlapping with open list before the style was applied
    $(".navbar-nav a").on('click', function () {

        $('.navbar-toggler').click();
    })

    var $animation_elements = $('#animateBook');
    var $window = $(window);

    $window.on('scroll', check_if_in_view);

    $window.on('scroll resize', check_if_in_view);

    $window.trigger('scroll');

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();

        var window_bottom_position = (window_top_position + window_height);
        $.each($animation_elements, function() {
          var $element = $(this);
          var element_height = $element.outerHeight();

          var element_top_position = $element.offset().top;

          var element_bottom_position = (element_top_position + element_height);

          //check to see if this current container is within viewport
          if ((element_bottom_position >= window_top_position) &&
              (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view')
          } else {
           
          }
        });
      }
});