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
    },1000)
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
    submit();
}

// var signup=document.getElementsByClassName("signup");
// signup[0].addEventListener('click', ()=>{
// let text_reset1=document.querySelector('.text-reset1');
// let text_reset2=document.querySelector('.text-reset2');
// text_reset1.click();
// text_reset2.click();
// })
