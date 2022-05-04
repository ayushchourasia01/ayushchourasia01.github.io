
if('#bar'){
    $('#bar').on('click', function(){
        $('#navbar').addClass('active');
    })
}
if('#close'){
    $('#close').on('click', function(){
        $('#navbar').removeClass('active');
    })
}
var colors = ['Silver','Green','Gold','Graphite']
$('.small-img').each(function(i,obj){
    $('.small-img-col').eq(i).on('click', function(){
        $('#MainImg').attr('src',obj.getAttribute('src'));
        $('#color').html(colors[i]);
    })
});
$('#variant').on('change', function(){
    $('#size').html(this.value);
});

$('.ques-heading').each(function(i){
    $('.ques-heading').eq(i).on('click',function(){
        $('.ques-content').eq(i).toggleClass('active1');
        $('.ques-heading').eq(i).toggleClass('active2');
        $('.rot').eq(i).toggleClass('active3');
    });
});
    


