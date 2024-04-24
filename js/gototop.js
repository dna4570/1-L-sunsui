window.addEventListener('scroll',function(){
  const scroll = window.scrollY;
  // console.log(scroll);
  if(scroll > 300){
    document.getElementById('go_top').classList.add('visible');
  }else{
    document.getElementById('go_top').classList.remove('visible');

  }
});
