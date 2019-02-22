$(document).ready(function(){
    var time = 3000;
    var numofItems = $('.testimonial-item').length;
    for(var i=0;i<numofItems;i++){
        if(i==0){
            $('.button-list').append(' <li class="button-item active"><a class="button-link" data-index="'+i+'" href="#"></a></li>');
        }
        else{
            $('.button-list').append(' <li class="button-item"><a class="button-link" data-index="'+i+'" href="#"></a></li>');
        }
    }
    $('.testimonial-content').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed: time
    });
    $('.testimonial-content').on('afterChange',function(s,c){
        var index = $(this).slick('slickCurrentSlide');
        $('.button-item').removeClass('active');
        $('.button-item')[index].classList.add('active');
    })
    $('.button-item').click(function(e){
        e.preventDefault();
        var index = this.children[0].dataset.index;
        $('.testimonial-content').slick('slickGoTo',index);
        $('.button-item').removeClass('active');
        $(this).addClass('active');
    })
})