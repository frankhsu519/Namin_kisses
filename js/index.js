
$(function () {
})

function GetData () {
    axios.get('https://script.google.com/macros/s/AKfycbyp7XvRHHzgY9WY0yvOZ1YdMj50MU-f0-PPtieouBxxvo-l6bBGEvGVzEs5F4wIQUXn_A/exec')
            
        .then(res => {
            // console.log(res);
            if(res.status == 200) {
                test_show_(res.data)
            }else{
                alert('讀取資料失敗')
            }
        })
}

function test_show_(data) {
    var render_str = '';
    Object.values(data).forEach((item) =>{
        var slice_date = item.DATE.slice(0,10)
            render_str +=`
                            <div class="col-6 col-md-4 col-lg-2 mb-2 mb-md-3 mb-lg-5">
                                <div class="card px-2 py-2" data-aos='fade-up' data-aos-duration="1500">
                                    <a href="${item.URL}" target='_blank'>
                                        <img src="${item.IMG}" alt="" class="card-imh-top w-100">
                                    </a>
                                    <div class="card-body">
                                        <h5 class="card-title">${slice_date}</h5>
                                    </div>
                                </div>
                            </div>
                        `                      
    })
    $('.js_append').append(render_str)
    // // AOS 初始化
    AOS.init();
}

// 未使用 api
// function show_ () {

//     var render_str = '';
//     for(let i = 0 ; i < data.length ; i++){
//         // console.log(data[i]);
//         render_str +=`
//                         <div class="col-6 col-md-4 col-lg-2 mb-2 mb-md-3 mb-lg-5">
//                             <div class="card px-2 py-2" data-aos='fade-up' data-aos-duration="1500">
//                                 <a href="${data[i].url}" target='_blank'>
//                                     <img src="${data[i].img}" alt="" class="card-imh-top w-100">
//                                 </a>
//                                 <div class="card-body">
//                                     <h5 class="card-title">${data[i].date}</h5>
//                                 </div>
//                             </div>
//                         </div>
//                     `                      
//     }
//     $('.js_append').append(render_str)
    
//     // // AOS 初始化
//     AOS.init();
// }
