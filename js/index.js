//スクロール発火イベント
window.addEventListener( "scroll" ,function(){

  //スクロールの高さを取得
  let scroll = window.pageYOffset;
  
  if( scroll > 2900 ){
    document.body.style.backgroundColor = '#35DDCA';
  }else if( scroll > 2250 ){
    document.body.style.backgroundColor = '#DDDDDD';
  }else if( scroll > 1440 ){
    document.body.style.backgroundColor = '#FFA866';
  }else if( scroll > 650 ){
    document.body.style.backgroundColor = '#005FFF';
  }else{
    document.body.style.backgroundColor = '#CC66FF';
  }
})



window.onscroll = onScroll;
function onScroll() {
    var removeActiveClass = function (elements) {
        for (var i = 0; i < elements.length; ++i) {
            elements[i].classList.remove('active');
        }
    }
    var anchors = document.querySelectorAll('#menu-center a');
    var previousRefElement = null;
    for (var i = 0; i < anchors.length; ++i) {
        var currentRefElement = document.getElementById(anchors[i].getAttribute('href').substring(1));
        var currentRefElementTop = currentRefElement.getBoundingClientRect().top;
        if (currentRefElementTop <= 0) {
            previousRefElement = anchors[i];
            if (i == anchors.length - 1) {
                emoveActiveClass(anchors);
                anchors[i].classList.add("active");
            }
        } else {
            removeActiveClass(anchors);
            previousRefElement.classList.add("active");
            break;
        }
    }
}