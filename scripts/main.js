//使用严格模式
'use strict';

//图片选择器
var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
//缩略图连接选择器
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

//设置大图的图片和标题
function setDetails(imageUrl,titleText) {
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src',imageUrl);
  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

//返回缩略图的imageurl
function imageFromThumbnail(thumbnail) {
  return thumbnail.getAttribute('data-image-url');
}

//返回缩略图的title
function titleFromThumbnail(thumbnail) {
  return thumbnail.getAttribute('data-image-title');
}

//设置详细显示的图片信息
function setDetailsFromThumbnail(thumbnail){
  setDetails(imageFromThumbnail(thumbnail),titleFromThumbnail(thumbnail));
}


//缩略图点击函数
function addThumbnailClickHandler(thum){
  console.log("thum:"+thum);
  thum.addEventListener('click',function(event){
    //阻止链接调到另外一个界面
    event.preventDefault();
    //此处就是闭包
    setDetailsFromThumbnail(thum);
  });
}

//返回缩略图数组
function getThumbnailsArray(){
  var thumbnailList = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  //结点列表转换为数组
  var thumbnailArray = Array.prototype.slice.call(thumbnailList,0);
  return thumbnailArray;
}

//初始化事件
function initEvents(){
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbnailClickHandler);
}

//调用函数
initEvents();
