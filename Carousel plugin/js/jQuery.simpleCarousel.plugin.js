$(document).ready(function() {
    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');
 
    var pixelsOffset = 125;
    var currentLeftValue = 0;
 var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;
    
     $.fn.simpleCarousel = function(options) {

        var defaults = {
            captionColor: 'black'
        }; 

        var settings = $.extend(defaults, options);


        $('.caption').css({
            color: settings.captionColor,
            'font-size': settings.captionSize
        });

        leftUIEl.click(function() {        
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += 125;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            }        
        });
     
        rightUIEl.click(function() {        
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= 125;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            }        
    });
    }
    return this;
});