const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const t4 = document.getElementById('t4');
const t5 = document.getElementById('t5');

const card = document.querySelector('.card-top');
const printbtn = document.getElementById('printcv');
const nav = document.querySelector('.navb');


t1.addEventListener('click',()=>{
    card.style.backgroundColor = 'rgb(246, 198, 8)';
    nav.style.backgroundColor = 'rgb(246, 198, 8)';
    printbtn.style.backgroundColor = 'rgba(246, 243, 77, 0.476)';
    document.body.style.backgroundColor = '#f8fea0';

});


t2.addEventListener('click',()=>{
    card.style.backgroundColor = 'rgb(29, 220, 245)';
    nav.style.backgroundColor = 'rgb(29, 220, 245)';
    printbtn.style.backgroundColor = 'rgba(29, 220, 245, 0.476)';
    document.body.style.backgroundColor = '#a0f0fe';
});

t3.addEventListener('click',()=>{
    card.style.backgroundColor = 'rgb(37, 254, 117)';
    nav.style.backgroundColor = 'rgb(37, 254, 117)';
    printbtn.style.backgroundColor = 'rgba(37, 254, 117, 0.476)';
    document.body.style.backgroundColor = '#aefea0';
});

t4.addEventListener('click',()=>{
    card.style.backgroundColor = 'rgb(255, 33, 196)';
    nav.style.backgroundColor = 'rgb(255, 33, 196)';
    printbtn.style.backgroundColor = 'rgba(255, 33, 196, 0.476)';
    document.body.style.backgroundColor = '#fea0f0';
});

t5.addEventListener('click',()=>{
    card.style.backgroundColor = '#1a253f';
    nav.style.backgroundColor = '#1a253f';
    printbtn.style.backgroundColor = 'rgba(77, 121, 246, 0.1)';
    document.body.style.backgroundColor = '#eaf0f7';
});

setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

//   const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let day = time.getDate();
  let month = time.getMonth()+1;
  let year = time.getFullYear();
  am_pm = "AM";

  if (hour >= 12) {
    if (hour > 12) hour -= 12;
    am_pm = "PM";
  } else if (hour == 0) {
    hour = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec +" "+ am_pm + "\n" + day + "/" + month + "/" + year;

  
//   let currentTime = hour + ":" + min + ":" + sec +" "+ am_pm + "\n" + day + "/" + month[m] + "/" + year;
//   let currentDate = ;

  document.getElementById("clock").innerHTML = currentTime;
//   document.getElementById("calander").innerHTML = currentDate;
}

showTime();
