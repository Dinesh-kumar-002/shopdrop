new Glider(document.querySelector('.glider'), {
   
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: '#dots',
    rewind:true,
    draggable:true,
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
    draggable:true,
    dots: '#resp-dots',
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 5,
          slidesToScroll: 0.2,
          itemWidth: 150,
          duration: 0.25
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 5.5,
          slidesToScroll: 0.2,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  });