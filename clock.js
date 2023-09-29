const dt=document.getElementById("dt")
const hr=document.getElementById("hr")
const mn=document.getElementById("mn")
const sc=document.getElementById("sc")

// clock.addEventListener("click",function(){
//     if(clock.textContent === "Clock-IN"){
//         let dat=new Date();
//         dt.innerHTML=dat.toLocaleDateString();
    
//        let hou=dat.toLocaleTimeString();
//        hr.innerHTML=hou;
//        clock.innerHTML=`Clock-Out`
//     }else{
//         let dat=new Date();
//        let min=dat.toLocaleTimeString();
//        mn.innerHTML=min;
//        clock.innerHTML=`Clock-IN`
//     }
// })



const clock=document.getElementById("clock")

clock.addEventListener("click", function(){
    if(clock.textContent === "Clock-IN"){
      login();
      let time=new Date();
      dt.innerHTML=time.toLocaleDateString();
      hr.innerHTML=time.toLocaleTimeString();
      clock.innerHTML="Clock-Out";

    }else if(clock.textContent === "Clock-Out"){
      logout();
      let time2=new Date();
      mn.innerHTML=time2.toLocaleTimeString();

      let time3=calculateDuration();
      sc.innerHTML=time3;
      clock.innerHTML="Clock-IN";
      // alert("You have successfuly Logout")
    }

})


let loginTime;
let logoutTime;

function login() {
    loginTime = new Date();
    return loginTime;
  }

  function logout() {
    logoutTime = new Date();
    return logoutTime;
  }

  function calculateDuration() {
    if (loginTime && logoutTime) {
      const durationInMilliseconds = logoutTime - loginTime;
      
      const seconds = Math.floor(durationInMilliseconds / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);


      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      return formattedTime;

  
      // console.log('Duration: ' + hours + ' hours, ' + minutes % 60 + ' minutes, ' + seconds % 60 + ' seconds');
    } else {
      console.log('Please log in and log out to calculate the duration.');
    }
  }
  




// function createDate() {
//   return new Date();
// }

// var currentDate = createDate();

// if (currentDate.getHours() < 12) {
//   console.log("Good morning! The current time is: " + currentDate.toLocaleTimeString());
// } else if (currentDate.getHours() < 18) {
//   console.log("Good afternoon! The current time is: " + currentDate.toLocaleTimeString());
// } else {
//   console.log("Good evening! The current time is: " + currentDate.toLocaleTimeString());
// }
