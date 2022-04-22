$(function(){
    $('ul.parent > li').click(function(){
        $(this).find('ul.child').show(200);
    });

    $('ul.parent > li').hover(
        function(){
            // $(this).find('ul.child').show(200);
            console.log('Hovering')
        },

        function(){
            $(this).find('ul.child').hide(200);
            console.log('Not hovering');
        }
    );


});