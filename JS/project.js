window.onload = function(){
    $('.menu-btn').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('menu-btn-active');
        $('.menu').toggleClass('menu-active')

    });

    $('.menu a').on('click', function(){
        $('.menu-btn').toggleClass('menu-btn-active');
        $('.menu').toggleClass('menu-active')
    });
}