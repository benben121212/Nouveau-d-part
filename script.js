// Créer un élément <select> 
var select = document.createElement("select"); 
    
// Créer l'élément <option> pour la page unique
var option1 = document.createElement("option");    
option1.value = "index.html"; 
option1.text = "Page unique"; 

// Ajouter l'élément <option> à l'élément <select> 
select.appendChild(option1);
     
// Mettre à jour la valeur sélectionnée en fonction de la page actuelle 
if (window.location.pathname.endsWith("index.html")) { 
    select.value = "index.html"; 
} 

// Ajouter un écouteur d'événements pour détecter la sélection dans le menu déroulant 
select.addEventListener("change", function() {
    window.location = select.value; 
}); 

// Ajouter l'élément <select> à la page
document.body.appendChild(select);
