
var nombreProfesseurs = profs.length;

var listHTML = document.getElementById("profList");

for(var i = 0; i < nombreProfesseurs; i++) {
    var prof = profs[i];
    if(prof.username != "Admin"){
        var optionHTML = document.createElement("option");
        optionHTML.value = prof.username;
        optionHTML.innerHTML = prof.nom +"(" + prof.specialite +")";
        listHTML.appendChild(optionHTML)
    }
}

function noter() {
    var noteHTML = document.getElementById("note");
    if(noteHTML.value > 0) {
        var commentHTML = document.getElementById("comment");
        const username =listHTML.value;
        
        const evaluation = {
            profUsername: username,
            note: noteHTML.value,
            comment:commentHTML.value
        }
    
        const evaluationsString = localStorage.getItem(username);
    
        if(evaluationsString != null) {
            const oldEvaluations = JSON.parse(evaluationsString);
            // oldEvaluations.push(evaluation);
            oldEvaluations.unshift(evaluation);
            localStorage.setItem(username , JSON.stringify(oldEvaluations))
        }else {
            localStorage.setItem(username , JSON.stringify([ evaluation ]))
        }
    
        alert("Merci de votre participation, l'avis a été enregistré")
        noteHTML.value = ""
        commentHTML.value = ""
        listHTML.value=""
    }else {
        alert("La note ne peut pas être égale à 0 ! Soyez indulgent !")
        noteHTML.value = ""
    }
    
}

