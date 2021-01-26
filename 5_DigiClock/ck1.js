onload=()=>{
const retime=()=>{
  setTimeout(retime,1000)
  const nt=new Date()
  
  // 個位數
  const hd=nt.getHours()%10
  const md=nt.getMinutes()%10
  const sd=nt.getSeconds()%10
  
  // 十位數
  const ht=Math.floor(nt.getHours()/10)
  const mt=Math.floor(nt.getMinutes()/10)
  const st=Math.floor(nt.getSeconds()/10)
  
  document.getElementById("ck1").className="c"+ht
  document.getElementById("ck2").className="c"+hd
  document.getElementById("ck3").className="c"+mt
  document.getElementById("ck4").className="c"+md
  document.getElementById("ck5").className="c"+st
  document.getElementById("ck6").className="c"+sd
  
  document.getElementsByClassName("cc")[0].style.opacity=1
  document.getElementsByClassName("cc")[1].style.opacity=1
  setTimeout(function(){
    document.getElementsByClassName("cc")[0].style.opacity=0
    document.getElementsByClassName("cc")[1].style.opacity=0
  },500)
}

retime()



const retime2=()=>{
  let day = ['SUN', 'MON', 'TUS', 'WED', 'THR', 'FRI', 'SAT'];
  const nt =new Date()
  
  const ch=nt.getHours()
  const cm=nt.getMinutes()
  const cs=nt.getSeconds()

  const yy=nt.getFullYear()
  const mm=nt.getMonth()
  const da=nt.getDate()
  const dy=nt.getDay()
  
  function chk0(num) {
    return (num < 10) ? "0" + num : num;
  }
  document.getElementById("clkTime").textContent = `${chk0(ch)}:${chk0(cm)}:${chk0(cs)}`
  document.getElementById("clkDate").textContent =`${yy}-${mm+1}-${da}-${day[dy]}`
}

retime2()
setInterval(retime2,1000)

}
