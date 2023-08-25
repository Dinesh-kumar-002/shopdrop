var typing = new Typed(".text-content", {
  strings: [
    "",
    " \"At Shop Drop, we're dedicated to bringing you a seamless and exciting shopping experience. With a carefully curated selection of products that cater to your diverse needs, we're here to redefine the way you shop.\"",
  ],
  typeSpeed: 20,
  showCursor: false
});

new Glider(document.querySelector(".glider"), {
  slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  dots: "#dots",
  rewind: true,
  responsive: [
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25,
      },
    },
  ],
});
document.onselectstart = (event) => {
  event.preventDefault();
};
new Glider(document.querySelector(".glider2"), {
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: "#resp-dots",
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 0.2,
        itemWidth: 150,
        duration: 0.25,
      },
    },
    {
      breakpoint: 1224,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 0.2,
        itemWidth: 150,
        duration: 0.25,
      },
    },
  ],
});

// preloader

window.addEventListener("load", () => {
  let preloader = document.querySelector(".preloader");
  let body = document.querySelector("body");
  preloader.style.zIndex = "0";
  preloader.style.opacity = "0";
  body.style.overflow = "visible";
  preloader.style.transition = "opacity 2s";
});
function showmore() {
  var showing = document.querySelector(".showing");
  var showmore = document.querySelector(".showmore");
  var arr = [
    "assets/images/today/men1.jpg",
    "assets/images/today/men2.jpg",
    "assets/images/today/men3.jpg",
    "assets/images/today/men4.jpg",
    "assets/images/today/men5.jpg",
    "assets/images/today/men1.jpg",
    "assets/images/today/men2.jpg",
    "assets/images/today/men3.jpg",
    "assets/images/today/men4.jpg",
    "assets/images/today/men5.jpg",
  ];
  // debugger;
  if (showmore.innerText == "Show more") {
    showing.innerHTML = "";
    console.log(showing);
    for (let i = 0; i < arr.length; i++) {
      showing.innerHTML += `<div class="col-6 col-lg-3 py-1">
      <div class="each each4">
      <img src="${arr[i]}" alt="no image avail">
      </div>
      </div>`;
    }
    showmore.remove();
  }
}

// addtocart
var realcart = document.querySelector(".realcart");
var p_array = [];
function addtocart(btn) {
  var parent = btn.closest(".trend");
  var product_image = parent.querySelector("img").src;
  var product_name = parent.querySelector(".text").innerText;
  var id_value = parent.querySelector("input").value;
  var product_price = parseFloat(
    parent.querySelector(".original").textContent.substring(1)
  );
  addtocartpage(product_image, product_name, product_price, id_value);
}


var item_count = document.querySelector(".items-count");
function addtocartpage(p_image, p_name, p_price, p_id) {
  if (p_array.includes(p_id)) {
    var alerting_already = document.querySelector(".alerting-already");
    alerting_already.style.display = "block";
    setTimeout(() => {
      alerting_already.style.display = "none";
    }, 1000);
    return;
  } else {
    var alert = document.querySelector(".alerting-add");
    alert.style.display = "block";
    setTimeout(() => {
      alert.style.display = "none";
    }, 1000);
    p_array.push(p_id);
    empty();
    item_count.innerHTML = p_array.length;
    realcart.innerHTML += `
    <div class="products d-flex mt-2">
        <div class="product">
              <img src="${p_image}" alt="">
        </div>
            <div class="nameandquantity d-flex flex-column justify-content-around ms-2">
                <h6 class="text product-name">${p_name}</h6>
                <p class="text product-id" style="display:none;">${p_id}</p>
                <h6 class="text price-id" style="display:none;">${p_price}</h6>
                    <div class="quantity d-flex align-items-end" >
                          <button class="btn-secondary minus" onclick="minus(this)">-</button>
                          <input type="number" class="input ps-2" value="1" disabled>
                          <button class="btn-secondary add" onclick="add(this)">+</button>
                    </div>
            </div>
            <div class="individual-price d-flex justify-content-end align-items-end ms-5 ps-4">
                        ${p_price}
            </div>
      </div>
  `;
    totals();
  }
}
function totals() {
  var total = 0;
  var totaling = document.querySelectorAll(".individual-price");
  var displaying_total = document.querySelector(".total-value");
  totaling.forEach((value) => {
    total += parseInt(value.textContent);
  });
  displaying_total.textContent = total;
}
empty();
function empty(){
  var hide_checkout=document.querySelector('.total');
  var emptyOrnot=document.querySelector('.emptyOrnot');
  if(p_array.length<1){
    hide_checkout.classList.add("emptyed")
    hide_checkout.classList.remove("notemptyed")
    emptyOrnot.classList.add("emptyed");
    emptyOrnot.classList.remove("notemptyed");
  }
  else{
    hide_checkout.classList.remove("emptyed")
    hide_checkout.classList.add("notemptyed")
    emptyOrnot.classList.remove("emptyed");
    emptyOrnot.classList.add("notemptyed");

  }
}
function minus(btn) {
  if (btn.nextElementSibling.value <= 1) {
    btn.value = 0;
    var summa = btn.closest(".nameandquantity");
    var summa2 = summa.querySelector(".product-id").innerHTML;
    p_array.forEach((element, index) => {
      if (element == summa2) {
        p_array.splice(index, 1);
      }
      item_count.innerHTML = p_array.length;
    });
    empty();
    var alert_delete = document.querySelector(".alerting-delete");
    alert_delete.style.display = "block";
    setTimeout(() => {
      alert_delete.style.display = "none";
    }, 1000);
    btn.closest(".products").remove();
    subtotal(btn, minusbtn);
  } else {
    console.log(p_array);
    var minusbtn = btn.nextElementSibling.value--;
    minusbtn--;
  }
  subtotal(btn, minusbtn);
}
function add(btn) {
  var addbtn = btn.previousElementSibling.value++;
  addbtn++;
  subtotal(btn, addbtn);
  console.log(p_array);
}

function subtotal(btn, val) {
  var subtotal_parent = btn.closest(".products");
  var subtotal_id = parseInt(
    subtotal_parent.querySelector(".price-id").innerText
  );
  var subtotal = subtotal_parent.querySelector(".individual-price");
  subtotal.innerText = subtotal_id * val;
  console.log(subtotal, subtotal_id, btn);
  totals();
}
function heart(heart_paren) {
  if (heart_paren.style.color == "white") {
    heart_paren.style.color = "red";
    heart_paren.style.backgroundColor = "rgba(255, 255, 255, 0.304)";
  } else {
    heart_paren.style.color = "white";
    heart_paren.style.backgroundColor = "transparent";
  }
}



function continueshop(){
  var continue_shop=document.querySelector('.continue_shopping');
  continue_shop.addEventListener('click', ()=>{
    let text_reset1=document.querySelector('.text-reset1');
  // let text_reset2=document.querySelector('.text-reset2');
  text_reset1.click();
  // text_reset2.click();
  })
}

submit();

function submit(){
    var display_none=document.querySelector('.account-login');
    var userNameShowing=document.querySelector('.userNameShowing');
    if(localStorage.getItem("username")){
        userNameShowing.innerHTML=`<h4><b>hi ${localStorage.getItem("username")}!</b></h4>`;
        setTimeout(()=>{
        display_none.innerHTML=
        `<div class="user_details d-flex flex-column align-items-center justify-content-center">
        <div class="detail1">
        <i class="fa-solid fa-user p-5" style="color: #a9a9a9;background-color: white;border-radius: 50%;font-size:30px;"></i>
        </div>
        <h5 class="detail2">${localStorage.getItem("username")}</h5>
        <h5 class="detail3">${localStorage.getItem("useremail")}</h5>
        <button class="btn-warning border-0 rounded-pill px-3 py-2 logout-btn" onclick="logout()"><b>LOGOUT</b></button>
        </div>`;
    },500)
}
else{
    display_none.innerHTML=
    `
    <form onsubmit="submitted()">
    <div class="account-input d-flex flex-column justify-content-center align-items-center">
    <input type="text" class="user_name" placeholder="User Name" id="uname" required>
    <input type="email" class="user_email" placeholder="Email" id="email" required>
    <input type="password" class="user_password" placeholder="Password" id="password" required>
    <button class="btn btn-success"  >LOGIN</button>
    </div>
    </form>
    
    `;
    
} 
}
function submitted(){
      
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    var uname=document.getElementById("uname");
    var userName=uname.value;
    var userEmail=email.value;
    var userPassword=password.value;
    localStorage.setItem("username",userName);
    localStorage.setItem("useremail",userEmail);
    localStorage.setItem("userpassword",userPassword);
    submit();
    }
 
function logout(){
    const data_array=["username","useremail","userpassword"];
    data_array.forEach((item)=>{
        localStorage.removeItem(item);
    })
    window.location.reload();
    submit();
}
