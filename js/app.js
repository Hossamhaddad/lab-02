'use strict';
$.ajax('../data/page-1.json')
    .then(data => {
    data.forEach(element => {
    let newImage = new TemplateImages(element);
    newImage.render();
    if (!allKeyword.includes(element.keyword)) {
        allKeyword.push(element.keyword);
    }


    });
    select();

    });
let allImg=[];
let allKeyword = [];
function TemplateImages(value) {
    this.title = value.title;
    this.url = value.image_url;
    this.description = value.description;
    this.keyword = value.keyword;
    this.horns = value.horns;
   allImg.push(this);
}

TemplateImages.prototype.render = function () {
    let imageClone = $('#photo-template').clone();
    imageClone.removeAttr('id');
    imageClone.find('h2').text(this.title);
    imageClone.find('img').attr('src', this.url);
    imageClone.find('p').text(this.description);
    $('main').append(imageClone);
}

function select() {
    allKeyword.forEach(each => {

    $('select').append(`<option> ${each}</option>`);


    });
}
$('#select').on('change',function(){
$('main').html('');
$("main").append('<div></div>')
let div=$("div").attr('id','#photo-template')

allImg.forEach(item=>{
      if(item.keyword==$("#select").val()){
      console.log("d");
$('main').append(div);      
$(div).append('<h2></h2>');
$(div).append('<img>');
$(div).append('<p></p>');
let imageClone = $('#photo-template').clone();
    imageClone.find('h2').text(item.title);
    imageClone.find('img').attr('src', item.url);
    imageClone.find('p').text(item.description);
    $('main').append(imageClone);
    
      }  
})

})