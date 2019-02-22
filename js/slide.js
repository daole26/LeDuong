$(document).ready(function(){
    var time = 3000;
    var numofItems = $('.slide-article').length;
    for(var i=0;i<numofItems;i++){
        if(i==0){
            $('.control-btn-list').append('<a href="#" class="control-btn-item active">'+(i+1)+'</a>')
        }
        else{
            $('.control-btn-list').append('<a href="#" class="control-btn-item">'+(i+1)+'</a>')
        }
    }
    $('.slide-content').slick({
        prevArrow:'.chev-left',
        nextArrow:'.chev-right',
        autoplay:true,
        autoplaySpeed: time
    });
    $('.slide-content').on('afterChange',function(s,c){
        var index = $(this).slick('slickCurrentSlide');
        $('.control-btn-item').removeClass('active');
        $('.control-btn-item')[index].classList.add('active');
    })
    $('.control-btn-item').click(function(e){
        e.preventDefault();
        var index = this.innerText;
        $('.slide-content').slick('slickGoTo',index-1);
        $('.control-btn-item').removeClass('active');
        $(this).addClass('active');
    })
})