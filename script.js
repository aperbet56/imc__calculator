// Récupération des différents éléments
const heightInput = document.querySelector(".height");
const weightInput = document.querySelector(".weight");
const submitButton = document.querySelector(".submit__form");
const popupWindow = document.querySelector(".popup");
const imcScore = document.querySelector(".imc__score");
const imcText = document.querySelector(".imc__text");
const closeButton = document.querySelector(".btn__close");

// Ecoute de l'événement click lors de la soumission du formulaire
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  // Création de plusieurs variables
  let height = parseInt(heightInput.value);
  let weight = parseInt(weightInput.value);
  let text;

  // Constante contenant la formule pour calculer l'IMC
  const imc = (weight / ((height * height) / 10000)).toFixed(2);

  if (height === "" || height <= 0 || height === null || isNaN(height)) {
    alert("Veuillez saisir une taille valide");
    heightInput.focus();
  } else if (weight === "" || weight <= 0 || weight === null || isNaN(weight)) {
    alert("Veuillez saisir un poids valide");
    weightInput.focus();
  } else {
    if (imc < 18.5) {
      text = "Vous êtes trop maigre.";
    } else if (imc >= 18.5 && imc <= 25) {
      text = "Vous êtes en bonne santé.";
    } else if (imc > 25 && imc <= 30) {
      text = "Vous êtes en surpoids.";
    } else {
      text = "Vous êtes obèse.";
    }
  }

  // Affichage du résultat de l'IMC dans la popup
  popupWindow.style.display = "block";
  imcScore.textContent = imc;
  imcText.textContent = text;
});

// Ecoute de l'événement click sur le bouton Fermer la popup
closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  popupWindow.style.display = "none";
  // Remise à  zéro des deux inputs : effacer les valeurs saisies dans les deux champs de formulaire
  heightInput.value = "";
  weightInput.value = "";
});
