// td4.js

function calculerSomme() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        var resultat = num1 + num2;
        document.getElementById('resultat').textContent = 'Résultat : ' + resultat;
        ajusterCouleurFond(); // Adjust background color after the addition
    } else {
        document.getElementById('resultat').textContent = 'Tu sais lire ou pas ? Une addiditon, pas des poupées russes';
    }
}

function ajusterCouleurFond() {
    var backgroundColor = getComputedStyle(document.body).backgroundColor;
    var textColor = estFondClair(backgroundColor) ? '#000' : '#fff'; // Black for light background, white for dark background
    document.body.style.color = textColor;
}

function estFondClair(color) {
    // Convert the color to RGB components
    var rgb = color.match(/\d+/g);
    var brightness = (parseInt(rgb[0]) + parseInt(rgb[1]) + parseInt(rgb[2])) / 3;
    return brightness > 128; // Check if the background is light or dark
}

function changerCouleurFond() {
    var bgColor = document.getElementById('bg-color').value;
    document.body.style.backgroundColor = bgColor;
    ajusterCouleurFond(); // Adjust text color after changing the background color
}

function afficherImage() {
    var imageSelector = document.getElementById('imageSelector');
    var selectedImage = document.getElementById('selectedImage');

    // Get the selected value from the dropdown
    var selectedValue = imageSelector.value;

    // Set the source of the image based on the selected value
    switch (selectedValue) {
        case 'image1':
            selectedImage.src = 'https://t4.ftcdn.net/jpg/02/96/15/35/360_F_296153501_B34baBHDkFXbl5RmzxpiOumF4LHGCvAE.jpg'; // Replace with the actual path to your image
            break;
        case 'image2':
            selectedImage.src = 'https://www.visittheusa.fr/sites/default/files/styles/hero_l/public/images/hero_media_image/2017-01/Getty_515070156_EDITORIALONLY_LosAngeles_HollywoodBlvd_Web72DPI_0.jpg?h=0a8b6f8b&itok=lst_2_5d'; // Replace with the actual path to your image
            break;
        case 'image3':
            selectedImage.src = 'https://www.scoltours.fr/wp-content/uploads/2015/09/NY-1-thegem-blog-default.jpg'; // Replace with the actual path to your image
            break;
    }
}

function afficherAlerte() {
    alert('Oi, pas par là !');
}

function mettreAJourHorloge() {
    var date = new Date();
    var heures = date.getHours();
    var minutes = date.getMinutes();
    var secondes = date.getSeconds();

    // Ajouter un zéro devant les chiffres < 10
    heures = heures < 10 ? '0' + heures : heures;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    secondes = secondes < 10 ? '0' + secondes : secondes;

    var tempsActuel = heures + ':' + minutes + ':' + secondes;
    document.getElementById('digitalClock').textContent = tempsActuel;

    // Mettre à jour l'horloge chaque seconde
    setTimeout(mettreAJourHorloge, 1000);
}

function demanderConfirmationSuppression() {
    // Demander à l'utilisateur de confirmer la suppression
    var confirmation = window.confirm("Voulez-vous vraiment supprimer cet élément ?");

    // Si l'utilisateur confirme, effectuer la suppression
    if (confirmation) {
        supprimerElement();
    } else {
        document.getElementById('resultatSuppression').textContent = 'Tu veux donc toujours de moi, hein ?';
    }
}

function supprimerElement() {
    // Effectuer ici la logique de suppression de l'élément
    // Dans cet exemple, nous affichons simplement un message
    document.getElementById('resultatSuppression').textContent = 'Je suis just un dummy, je supprime rien o_o';
}

function toggleElementVisibility() {
    var checkbox = document.getElementById('checkboxToggle');
    var elementToToggle = document.getElementById('elementToToggle');

    // Si la case à cocher est cochée, afficher l'élément, sinon le cacher
    if (checkbox.checked) {
        elementToToggle.style.display = 'block';
    } else {
        elementToToggle.style.display = 'none';
    }
}

function envoyerFormulaire(event) {
    // Empêcher le formulaire de se soumettre normalement
    event.preventDefault();

    // Récupérer les valeurs saisies par l'utilisateur
    var nom = document.getElementById('nom').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Afficher les informations dans la console
    console.log('Nom:', nom);
    console.log('E-mail:', email);
    console.log('Message:', message);

    // Vous pouvez ajouter ici le code pour envoyer les données à un serveur, par exemple
}
// Lancer la mise à jour de l'horloge au chargement de la page
window.onload = mettreAJourHorloge;