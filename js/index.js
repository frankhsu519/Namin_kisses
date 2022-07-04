$(function () {
    
    var render_str = '';
    for(let i = 0 ; i < data.length ; i++){
        // console.log(data[i]);
        render_str +=`
                        <div class="col-6 col-md-4 col-lg-2 mb-2 mb-md-3 mb-lg-5">
                            <div class="card px-2 py-2" data-aos='fade-up' data-aos-duration="1500">
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
    
    // AOS 初始化
    AOS.init();
})

