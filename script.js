function openNav(){
    let x=document.getElementsByClassName("side-panel");
    x[0].style.width = "250px";
}
function closeNav(){
    let y=document.getElementsByClassName("side-panel");
    y[0].style.width = "0px";
    let c=document.getElementsByClassName("open-btn")
    c[0].style.marginLeft = "0";
}

let span = document.getElementById('span');

function time() {
  let d = new Date();
  let s = d.getSeconds();
  let m = d.getMinutes();
  let h = d.getHours();
  span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);

let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
