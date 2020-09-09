$(function(){
    var $mainMenuItems = $("#main-menu ul").children("li"),
     totalMainMenuItems = $mainMenuItems.length,
     openedIndex = -1,

     init = function(){
         // opened function 1 //
            $mainMenuItems.children(".images").click(function(){
             var newIndex = $(this).parent().index(),
             $item = $mainMenuItems.eq(newIndex);

                if( openedIndex === newIndex)
                {
                    animateItem($item, false, 250);
                    openedIndex = -1;
                }
                else
                {
                    if (validIndex(newIndex) )
                    {
                        animateItem($mainMenuItems.eq(openedIndex), false, 250);
                        openedIndex = newIndex;
                        animateItem($item, true, 250);
                    }
                                                                // here I use now my animate function create before
                }
         });
     },

                                                                // creation a small verification fonction
            validIndex = function(indexTocheck){
                return (indexTocheck >=0 && indexTocheck <  totalMainMenuItems);
                },

                                                                // create parameter to used in init function
            animateItem = function($item, toOpned, speed){
            var $colorImage = $item.find(".color"),
            itemParam = toOpned ? {width: "420px"}: {width: "140px"},
            colorImageParam = toOpned ? {left: "0px"} : {left: "140px"}
            $colorImage.animate(colorImageParam,speed);
            $item.animate (itemParam,speed);
     };
    
    init();

});