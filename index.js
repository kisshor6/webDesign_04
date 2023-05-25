AOS.init({
    offset: 120,
    delay: 0,
    duration: 1500,
    easing: 'ease',
    once: true, 
    mirror: true, 
    anchorPlacement: 'top-bottom', 
});

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".navlist").css("background" , "#C8C5B7");
        }
        else{
            $(".navlist").css("background" , "");  	
        }
    })
  })

// popup 


  const loginPopup = document.querySelector(".popup");
  const close = document.querySelector(".close");
  
  
  window.addEventListener("load",function(){
  
   showPopup();
   // setTimeout(function(){
   //   loginPopup.classList.add("show");
   // },5000)
  
  })
  function showPopup(){
    const timeLimit = 1 // seconds;
    let i=0;
    const timer = setInterval(function(){
     i++;
     if(i == timeLimit){
      clearInterval(timer);
      loginPopup.classList.add("show");
     } 
     console.log(i)
    },1000);
}

close.addEventListener("click",function(){
loginPopup.classList.remove("show");
})


function signup(){
  document.getElementById("container90").style.display = "none";
  document.getElementById("container91").style.display = "block";
}
function login(){
  document.getElementById("container90").style.display = "block";
  document.getElementById("container91").style.display = "none";
}



function login_up(){
    let f01 = document.getElementById('form_01').value;
    let f02 = document.getElementById('form_02').value;
    let namecheck = /^[A-Za-z. ]{2,30}$/;
    let f03 = document.getElementById('form_03').value;
    let emailcheck = /^[A-Za-z_]{3,10}[0-9]{0,10}@[a-z]{3,10}[.]{1}[A-Za-z]{2,5}$/;
    let f04 = document.getElementById('form_04').value;
    let passwordcheck = /^[A-Za-z., /?@#$&*!0-9]{8,18}$/;
    let f05 = document.getElementById('form_05').value;
    let addresscheck = /^[A-Za-z-_ .()]{5,}$/;


    if(namecheck.test(f01)){
        document.getElementById("namerror").innerHTML = "";
    }else{
        document.getElementById("namerror").innerHTML = "invalid name";
        return false;
    }
    if(namecheck.test(f02)){
        document.getElementById("namerror").innerHTML = "";
    }else{
        document.getElementById("namerror").innerHTML = "invalid surname";
        return false;
    }
    if(emailcheck.test(f03)){
        document.getElementById("emailerror").innerHTML = "";
    }else{
        document.getElementById("emailerror").innerHTML = "invalid email address"; 
        return false;
    }
    if(passwordcheck.test(f04)){
        document.getElementById("passerror").innerHTML = "";
    }else{
        document.getElementById("passerror").innerHTML = "please create 8 character password"; 
        return false;
    }
    if(addresscheck.test(f05)){
        document.getElementById("locationerror").innerHTML = "";
    }else{
        document.getElementById("locationerror").innerHTML = "invalid street address";  
        return false;
    }
}

function sign_up(){
    let f06 = document.getElementById("form_06").value;
    let emailcheck2 = /^[A-Za-z_]{3,10}[0-9]{0,10}@[a-z]{3,10}[.]{1}[A-Za-z]{2,5}$/;
    let f07 = document.getElementById("form_07").value;
    let passwordcheck2 = /^[A-Za-z., /?@#$&*!0-9]{8,18}$/;


    if(emailcheck2.test(f06)){
        document.getElementById("Emailerror").innerHTML = "";
    }else{
        document.getElementById("Emailerror").innerHTML = "Invalid Email address";
        return false;
    }
    if(passwordcheck2.test(f07)){
        document.getElementById("passworderror").innerHTML = "";
    }else{
        document.getElementById("passworderror").innerHTML = "incorrect password";
        return false;
    }

}