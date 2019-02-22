$(window).on('load',function(){
    var link = $('.menu-link');
    var arr_top = [];
    $.each(link,function(index,value){
        var element = {};
        element.id = value.dataset.id;
        console.log($(element.id).position());
        
        element.top =($(element.id).position())? $(element.id).position().top:1;
        arr_top.push(element);
    })
    var add_active = function(){
        var top  = $(window).scrollTop();
        for(var i=0;i<arr_top.length;i++){
            if(top<arr_top[i].top){
                break;
            }
        }
        link.removeClass('active');
        $(link[--i]).addClass('active');
    }
    add_active();
    $(window).scroll(function(){
        add_active();
    })
    link.click(function(e){
        e.preventDefault();
        $('html,body').stop().animate({
            scrollTop:($($(this).data('id')).position())?$($(this).data('id')).position().top:0+10
        },500);
    })
})