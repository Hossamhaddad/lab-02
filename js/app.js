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
    this.image_url = value.image_url;
    this.description = value.description;
    this.keyword = value.keyword;
    this.horns = value.horns;
   allImg.push(this);
}

TemplateImages.prototype.render = function () {
    
    let imageClone = $('#photo-template').clone();
    imageClone.removeAttr('id');
    imageClone.find('h2').text(this.title);
    imageClone.find('img').attr('src', this.image_url);
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
$('main').html('<div id="photo-template"> <h2></h2> <img src="" alt=""> <p></p></div>') ;
allImg.forEach(item=>{
 if(item.keyword==$('select').val() ){
     
    let newImage = new TemplateImages(item) ; 
   
    newImage.render() ; 
   
 }
})
})