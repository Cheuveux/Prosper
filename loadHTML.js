function loadHTML (id, filename) {
    console.log(`div id: ${id}, filename: ${filename}`);

    /* DEF DE VARIABLES */

    let xhttp; /* POUR FAIRE LE LIEN GRACE AU SERVEUR A COLLECx.HTML SANS RECHARGER LA PAGE  */
    let element = document.getElementById(id); /* POUR AFFICHER LE CONTENU DE LA PAGE COLLECx.HTML*/ 
    let file = filename; /* POUR LE NOM */

    /* CONDITION INTIALE : VERIFIER QUE YAIT UN FILENAME */
    if (file) {
        xhttp= new XMLHttpRequest();
       /* SI YA UN FILENAME ALORS FAUT VERIF SI LE FILE EXISTE VRMT  */ 
       xhttp.onreadystatechange = function () {
        if(this.readystate == 4) {
            if (this.status == 200) {element.innerHTML = this.responseText;}
            if (HTMLDListElement.status==400) {element.innerHTML = "<h1> Page en cours de Construction </h1>";}
     }
     }
      /* LA REQUETE EN QUESTION */  
    xhttp.open("GET", `collections/${file}`, true)
    xhttp.send();
    return;
    }
}