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



// addtocart
var p_array=[];
function addtocart(btn){
  var parent=btn.closest(".trend");
  var product_image=parent.querySelector('img').src;
  var product_name=parent.querySelector('.text').innerText;
  var id_value=parent.querySelector('input').value;
  var product_price=parseFloat(parent.querySelector('.original').textContent.substring(1));
  addtocartpage(product_image,product_name,product_price,id_value)
}
var realcart=document.querySelector('.realcart');
function addtocartpage(p_image,p_name,p_price,p_id){
  if(p_array.includes(p_id)){
    return;
  }
  else{
    p_array.push(p_id);
    realcart.innerHTML+=`
  <div class="products d-flex mt-2">
                                <div class="product">
                                    <img src="${p_image}" alt="">
                                </div>
                                <div class="nameandquantity d-flex flex-column justify-content-around">
                                    <h6 class="text product-name">${p_name}</h6>
                                    <h6 class="text product-id">${p_id}</h6>
                                    <h6 class="text price-id" style="display:none;">${p_price}</h6>
                                    <div class="quantity d-flex align-items-end" >
                                    <button class="btn-secondary minus" onclick="minus(this)">-</button>
                                    <input type="number" class="input ps-2" value="1">
                                    <button class="btn-secondary add" onclick="add(this)">+</button>
                                   </div>
                                </div>
                                <div class="individual-price d-flex justify-content-center align-items-center ms-5 ps-4">
                                    ${p_price}
                                </div>
                            </div>
  `;
  total(p_price)
  }
  
}
var price=0;
function total(p_price){
  var displaying_total=document.querySelector('.total-value');
  price+=p_price;
  displaying_total.textContent=price;


}
function minus(btn){
  if(btn.nextElementSibling.value==0){
    btn.closest('.product').remove();
  }
  else{
    var minusbtn=btn.nextElementSibling.value--;
  subtotal(btn,minusbtn);
  console.log(minusbtn);
  }
  
}
function add(btn){
  var addbtn=btn.previousElementSibling.value++;
  console.log(addbtn);
  subtotal(btn,addbtn);
}

function subtotal(btn,val){
  // debugger;
  var subtotal_parent=btn.closest(".products");
  var subtotal_id=parseInt(subtotal_parent.querySelector(".price-id").innerText);
  var subtotal=subtotal_parent.querySelector(".individual-price");
  subtotal.innerText=subtotal_id*val;
  console.log(subtotal,subtotal_id,btn);
}