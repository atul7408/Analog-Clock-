let hr=document.getElementById('hour');
let min=document.getElementById('minute');
let sec=document.getElementById('second');
 function displayTime()
 {
    let date=new Date();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    let hRot=30*hh+mm/2;
    let mRot=6*mm;
    let sRot=6*ss;

hr.style.transform=`rotate(${hRot}deg)`;
min.style.transform=`rotate(${mRot}deg)`;
sec.style.transform=`rotate(${sRot}deg)`;
}
setInterval(displayTime,1000);