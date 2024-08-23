let showTime = ()=>{
    let hour = document.getElementById("hour");
    let minute = document.getElementById("minute");
    let second = document.getElementById("second");
    let amPm = document.querySelector(".am-pm");

    let hh = new Date().getHours();
    let mm = new Date().getMinutes();
    let ss = new Date().getSeconds();

    let slot = "AM";
    if(hh > 12){hh=hh-12; slot = "PM";}

    let doubleNum = (num) => {
        num = num < 10 ? "0" + num : num;
        return num;
    }
    hh = doubleNum(hh);
    mm = doubleNum(mm);
    ss = doubleNum(ss);

    hour.innerHTML = hh;
    minute.innerHTML = mm;
    second.innerHTML = ss;
    amPm.innerHTML = slot;
}

setInterval(showTime, 1000);






document.querySelector(".whatsapp").addEventListener("click", ()=>{
    message = 'Hello Mostafa!'
    link = `https://wa.me/01152274612?text=${message}`
    window.open( link , "_blank")
})
document.querySelector(".instagram").addEventListener("click", ()=>{
    link = `https://www.instagram.com/mustafakobesy/`
    window.open( link , "_blank")
})
document.querySelector(".github").addEventListener("click", ()=>{
    link = `https://github.com/Kobesy0`
    window.open( link , "_blank")
})
document.querySelector(".linkedin").addEventListener("click", ()=>{
    link = `https://www.linkedin.com/in/mostafa-kobesy-984b8831a/`
    window.open( link , "_blank")
})