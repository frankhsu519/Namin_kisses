$(function () {
    $('.card').click(function(){
        console.log($(this).find('img').attr('src'));

        call_video()
        $('#staticBackdrop').modal('show')
    })
    
    $('.btn-close').click(function(){
        $('.modal-body').html('')
    })
})


function call_video(){
    var str ='<iframe width="100%" height="315" src="https://www.youtube.com/embed/LSNoRzojcQo?autoplay=1" allow="autoplay;"></iframe>'
    $('.modal-body').html(str)
}