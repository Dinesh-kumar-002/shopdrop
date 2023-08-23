var typing = new Typed(".text-content", {
  strings: ["", " \"At Shop Drop, we're dedicated to bringing you a seamless and exciting shopping experience. With a carefully curated selection of products that cater to your diverse needs, we're here to redefine the way you shop.\""],
  typeSpeed: 60,
  // backSpeed: 10,
  // loop: true,
  showCursor: false
});

new Glider(document.querySelector('.glider'), {
   
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: '#dots',
    rewind:true,
    // draggable:true,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  });
  document.onselectstart = (event) => {
    event.preventDefault();
  }
  new Glider(document.querySelector('.glider2'), {
    // Mobile-first defaults
    slidesToShow: 5,
    slidesToScroll: 1,
    // draggable:true,
    dots: '#resp-dots',
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 600,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 4,
          slidesToScroll: 0.2,
          itemWidth: 150,
          duration: 0.25
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1224,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 0.2,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  });

  // preloader

  window.addEventListener('load', () => {
    let preloader = document.querySelector('.preloader');
    let body = document.querySelector('body');
    preloader.style.zIndex = '0';
    preloader.style.opacity = '0';
    body.style.overflow = 'visible';
    preloader.style.transition = 'opacity 2s';
  })
  function showmore(){
    var showing=document.querySelector('.showing');
    var showmore=document.querySelector('.showmore');
    var arr=['images/today/men1.jpg','images/today/men2.jpg','images/today/men3.jpg','images/today/men4.jpg','images/today/men5.jpg','images/today/men1.jpg','images/today/men2.jpg','images/today/men3.jpg','images/today/men4.jpg','images/today/men5.jpg'];
    // debugger;
  if(showmore.innerText=="Show more"){
    showing.innerHTML="";
    console.log(showing);
    for(let i=0;i<arr.length;i++){
      showing.innerHTML+=
      `<div class="col-6 col-lg-3 py-1">
      <div class="each each4">
      <img src="${arr[i]}" alt="no image avail">
      </div>
      </div>`;
    }
    showmore.innerText="Show less";
  }
  else if(showmore.innerText=="Show less"){
    console.log(showing);
    showing.innerHTML="";
    for(let i=0;i<4;i++){
      showing.innerHTML+=
      `<div class="col-6 col-lg-3 py-1">
          <div class="each each4">
          <img src="${arr[i]}" alt="no image avail">
      </div>
  </div>`;
}
showmore.innerText="Show more";
}
  
}




