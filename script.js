new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
   
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: '#dots',
    rewind:true,
    draggable:true,
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 550,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      },
      {
        // screens greater than >= 1024px
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