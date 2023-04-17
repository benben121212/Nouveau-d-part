// Créer un élément <select> 
    var select = document.createElement("select"); 
    
    // Créer les éléments <option>
    var option1 = document.createElement("option");    
    option1.value = "index.html"; 
    option1.text = "Page 1"; 
   
    var option2 = document.createElement("option");   
    option2.value = "page2.html";
    option2.text = "Page 2"; 
     
// Ajouter les éléments <option> à l'élément <select> 
    select.appendChild(option1);
    select.appendChild(option2);
     
// Mettre à jour la valeur sélectionnée en fonction de la page actuelle 
     if (window.location.pathname.endsWith("index.html")) { select.value = "index.html"; } 
     else if (window.location.pathname.endsWith("page2.html")) { select.value = "page2.html"; }   
     
 // Ajouter un écouteur d'événements pour détecter la sélection dans le menu déroulant 
 
 select.addEventListener("change", function() {window.location = select.value; }); 

// Ajouter l'élément <select> à la page
 document.body.appendChild(select); 


