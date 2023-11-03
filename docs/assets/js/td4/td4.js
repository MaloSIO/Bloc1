const qs=(selector)=>document.querySelector(selector);
const AEL=(selector,type,callback)=>{
    qs(selector).addEventListener(type,callback);
};

const KeyPressFunction=function(e) {
    qs("#nameOutput").innerHTML=event.target.value;
};

document.addEventListener("DOMContentLoaded", function() {
qs('#NameInput').addEventListener("keyup", KeyPressFunction);
});