$(function () {
    // $('.card').click(function(){
    //     console.log($(this).find('img').attr('src'));

    //     call_video()
    //     $('#staticBackdrop').modal('show')
    // })
    
    // $('.btn-close').click(function(){
    //     $('.modal-body').html('')
    // })
    var render_str = '';
    for(let i = 0 ; i < data.length ; i++){
        console.log(data[i]);
        render_str +=`
                        <div class="col-6 col-md-4 col-lg-3 mb-3">
                            <div class="card px-2 py-2">
                                <a href="${data[i].url}" target='_blank'>
                                    <img src="${data[i].img}" alt="" class="card-imh-top w-100">
                                </a>
                                <div class="card-body">
                                    <h5 class="card-title">${data[i].date}</h5>
                                </div>
                            </div>
                        </div>
                    `
    }
    $('.js_append').append(render_str)
})


// function call_video(){
//     var str ='<iframe width="100%" height="315" src="https://www.youtube.com/embed/1vcy7pncG-Y?autoplay=1" allow="autoplay;"></iframe>'
//     $('.modal-body').html(str)
// }
