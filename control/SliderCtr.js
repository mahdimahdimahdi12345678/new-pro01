loadSlider = async () =>{
    let sliderTemplate = document.getElementById("slider-item-template").innerHTML;
    let sliderHolder = document.getElementById("slider-box");
    let sliderApi = new SliderApi();
    await sliderApi.getAll(function(data){
    for(let index = 0; index < data.length; index++){
        let template = sliderTemplate;
        template = template.replace('__IMG__', data[index].image);
        template = template.replace(/__TITLE__/g, data[index].title);
        template = template.replace('__SUBTITLE__', data[index].subTitle);
        template = template.replace('__LINK__', data[index].link);
        sliderHolder.innerHTML += template
    }
    perper()
})
}

perper = () =>{
    $('.slideshow').slideshowPlugin({
      effect: 'sliding',
      slideSpeed: 800,
      ratio: "keep",
    });

    var content = $('.copy-title').text();

    var ele = '<span>' + content.split('').join('</span><span>') + '</span>';

    $(ele).hide().appendTo('.main-title').each(function (i) {
      $(this).delay(100 * i).css({
        display: 'inline',
        opacity: 0
      }).animate({
        opacity: 1
      }, 100);
    });
}