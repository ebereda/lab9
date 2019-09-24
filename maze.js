$(function () {
    var start = false;
    var passed;
    var boundary = $('.boundary');
    var status= $('#status');
    var statusText = status.text();
    $('#start').click(function () {
        start = true;
        passed = true;
        boundary.removeClass('youlose');
        status.text(statusText).css('color' , 'black');
    });
    $('body').mouseover(function(){
        if(start){
            passed = false;
            boundary.addClass('youlose');
        }
    });
    $('#maze').mouseover(function(){
        return false;
    });

    boundary.mouseover(function (e) {
        if (start){
            passed = false;
            $(this).addClass('youlose');
        }

    })
    $('#end').click(function () {
        if(passed){
            status.text('Bingoo!! You Win!').css('color','green');
        }else{
            status.text('Sorry!! You Lose').css('color','red');
        }
        start = false;
        passed = undefined;
    });
});