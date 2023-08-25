// const email=document.getElementById("email");
// const password=document.getElementById("password");
// const uname=document.getElementById("uname");
// uname.focus();   
// var form=document.getElementsByClassName("myform")[0];
// var eyebtn=document.getElementById("eye");
// var clear=document.getElementById("clear");
// var abs=document.getElementsByClassName("abs")[0];

// // eye button that reveals the password

// eyebtn.addEventListener('click', ()=>{
//    password.classList.toggle("show");
    
//    if(password.classList.contains("show")){
//        password.setAttribute("type","text");
//        eyebtn.src="images/eyeopen.png";
//     }
//     else if(!(password.classList.contains("show"))) {
//         password.setAttribute("type","password");
//         eyebtn.src="images/eyeclose.png"
//    }
// })

// //form submit event and localstorage assigining

// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     if(localStorage.getItem("username")){
//         abs.classList.add("abs2");
//         setTimeout(() => {
//         abs.classList.remove("abs2");
//     }, 4000);
//     setTimeout(()=>{
//         window.location.assign("index2.html");
//     },3000)
//     }
//     else{
        // const userName=uname.value;
        // const userEmail=email.value;
        // const userPassword=password.value;
        // localStorage.setItem("username",userName);
        // localStorage.setItem("useremail",userEmail);
        // localStorage.setItem("userpassword",userPassword);
        // window.location.assign("index2.html");
//     }
// });
// clear.addEventListener('click',()=>{
//     const data_array=["username","useremail","userpassword"];
//     data_array.forEach((item)=>{
//         localStorage.removeItem(item);
//     })
// })


submit();

function submit(){
    var display_none=document.querySelector('.account-login');
    if(localStorage.getItem("username")){
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
    <input type="text" class="user_email" placeholder="Email" id="uname" required>
    <input type="text" class="user_name" placeholder="Name" id="email" required>
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