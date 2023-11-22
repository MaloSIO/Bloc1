const qs=(selector)=>document.querySelector(selector);
const AEL=(selector,type,callback)=>{
    qs(selector).addEventListener(type,callback);
};

const KeyPressFunction=function(e) {
    qs("#nameOutput").innerHTML=event.target.value;
};

document.addEventListener("DOMContentLoaded", function() {
    AEL("#NameInput","keyup", KeyPressFunction);
    AEL("#Créer","click",()=>{
        const li=document.createElement("li");
        li.innerText=qs("#elm").value;
        li.style.color=qs("#Color").value;
        qs("#ul-elms").appendChild(li);
    });
});

// Récupérez l'élément d'entrée de couleur et le bouton "Add Background"
const bgColorInput = document.getElementById("bg-color");
const addBgButton = document.getElementById("Add Background");

// Ajoutez un gestionnaire d'événement pour le bouton "Add Background"
addBgButton.addEventListener("click", function() {
  // Récupérez la couleur sélectionnée
  const selectedColor = bgColorInput.value;

  // Changez la couleur de fond du corps de la page
  document.body.style.backgroundColor = selectedColor;
});