$(function(){
    var $mainMenuItems = $("#main-menu ul").children("li"),
     totalMainMenuItems = $mainMenuItems.length,
     openedIndex = 2,

     init = function(){
        bindEnvent();
                                                                    // 6°) Overture de l'item de l'index 2 au demarage
        if (validIndex=(openedIndex)){
            animateItem($mainMenuItems.eq(openedIndex), true, 700);
         }
     },
        bindEnvent = function(){
                                                                    // 1°) opened function 1 //
                                                                    // 3°) here I use now my animate function create before
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
                    if (validIndex(newIndex) )                       // 5°) I use my indexTocheck parameter
                    {                                                                
                        animateItem($mainMenuItems.eq(openedIndex), false, 250);
                        openedIndex = newIndex;
                        animateItem($item, true, 250);
                    }                                          
                }
         });

        },
                                                                    // 4°) creation a small verification fonction
            validIndex = function(indexTocheck){
                return (indexTocheck >=0 && indexTocheck <  totalMainMenuItems);
                },
                                                                    // 2°) create parameter to used in init function
            animateItem = function($item, toOpned, speed){
            var $colorImage = $item.find(".color"),
            itemParam = toOpned ? {width: "420px"}: {width: "140px"},
            colorImageParam = toOpned ? {left: "0px"} : {left: "140px"}
            $colorImage.animate(colorImageParam,speed);
            $item.animate (itemParam,speed);
     };
    
    init();

});