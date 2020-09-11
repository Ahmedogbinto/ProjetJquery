$(function(){
    var $mainMenuItems = $("#main-menu ul").children("li"),
     totalMainMenuItems = $mainMenuItems.length,
     openedIndex = 2,

     init = function(){
        bindEvents();
                                                                    // 6°) Overture de l'item de l'index 2 au demarage
        if (validIndex(openedIndex))
         {
            animateItem($mainMenuItems.eq(openedIndex), true, 700);
         }
     },
             bindEvents = function(){
                                                                    // 1°) opened function 1 //
                                                                    // 3°) here I use now my animate function create before
                $mainMenuItems.children(".images").click(function(){
                var newIndex = $(this).parent().index();
                    checkAndAnimateItem(newIndex);
                });

                                                                    // 7°) button activation
                $(".button").hover(
                    function(){
                        $(this).addClass("hovered");
                    },
                    function(){
                        $(this).removeClass("hovered");
                    });
                    
                $(".button").click(function(){
                    var newIndex = $(this).index();
                    checkAndAnimateItem(newIndex);

                });
            },
                                                                    // 4°) creation a small verification fonction
            validIndex = function(indexToCheck){
                return (indexToCheck >=0) && (indexToCheck <  totalMainMenuItems);
            },

                                                                    // 2°) create parameter to used in init function
            animateItem = function($item, toOpned, speed){
                var $colorImage = $item.find(".color"),
                itemParam = toOpned ? {width: "420px"}: {width: "140px"},
                colorImageParam = toOpned ? {left: "0px"} : {left: "140px"}
                $colorImage.animate(colorImageParam,speed);
                $item.animate (itemParam,speed);
            };
                                                                    // 8°) Recfactoring code repeat.... 
                                                                    // 5°) I use my indexToCheck parameter)
                checkAndAnimateItem = function(indexToCheckAndAnimate){
                    if(openedIndex === indexToCheckAndAnimate)
                    {
                        animateItem($mainMenuItems, false, 250);
                        openedIndex = -1;
                    }
                    else
                    {
                        if(validIndex(indexToCheckAndAnimate))                        // 5°) I use my indexToCheck parameter
                        {                                                                
                            animateItem($mainMenuItems.eq(openedIndex), false, 250);
                            openedIndex = indexToCheckAndAnimate;
                            animateItem($mainMenuItems.eq(openedIndex), true, 250);
                        }                                          
                    }   

                 };
    
    init();

});