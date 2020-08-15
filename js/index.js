//スクロール発火イベント
window.addEventListener( "scroll" ,function(){

  //スクロールの高さを取得
  let scroll = window.pageYOffset;
  
  if( scroll > 2900 ){
    document.body.style.backgroundColor = '#40E0D0';
  }else if( scroll > 2250 ){
    document.body.style.backgroundColor = '#DDDDDD	';
  }else if( scroll > 1440 ){
    document.body.style.backgroundColor = '#FF8856';
  }else if( scroll > 650 ){
    document.body.style.backgroundColor = '#005FFF';
  }else{
    document.body.style.backgroundColor = '#CC66FF';
  }
})

