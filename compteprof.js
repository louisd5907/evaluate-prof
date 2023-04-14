const username = localStorage.getItem('user')
//chercher le prof avec ce username
var nombreProfesseurs = profs.length;

var prof = null;

for(var i = 0; i < nombreProfesseurs; i++) {
    if( profs[i].username == username) {
        prof = profs[i];
        break;
    }
}


const namematiereHTML = document.getElementById("Namematiere")
namematiereHTML.innerHTML = prof.nom;

const usernameHTML = document.getElementById("username")
usernameHTML.innerHTML = "@" + prof.username;

const descriptionHTML = document.getElementById("description")
descriptionHTML.innerHTML = prof.description;


const avatarHTML = document.getElementById("avatar")
// avatarHTML.src = "media/" + prof.genre + ".png"
if(prof.genre == "F") {
    avatarHTML.src = "media/F.png"
}else {
    avatarHTML.src = "media/M.png"
}

// if(prof===admin){
//     crea
// }

const avisHTML = document.getElementById("avis");
const evaluationsString = localStorage.getItem(prof.username);

var moyenne = 0;

if(evaluationsString != null) {
    const evaluations = JSON.parse(evaluationsString);
    var somme = 0;
    //i=0 c'est le premier element
    for(var i = 0; i < evaluations.length; i++) {
        const li = document.createElement("li");

        const img = document.createElement("img");
        img.src = "https://static.thenounproject.com/png/2998612-200.png";

        const div = document.createElement("div");
        div.classList.add("info")

        const noteImg = document.createElement('img')
        noteImg.src = "./media/" + evaluations[i].note + ".png"
        noteImg.style.width = "100px"

        const p = document.createElement("p");
        p.innerHTML = evaluations[i].comment;

        div.appendChild(noteImg)
        div.appendChild(p)

        li.appendChild(img)
        li.appendChild(div)

        avisHTML.appendChild(li)

        somme  = somme  + parseInt(evaluations[i].note)
    }

    moyenne = somme / evaluations.length;
}

const moyenneHTML=document.getElementById('moyenne')
moyenneHTML.innerHTML = "votre moyenne est de "  + moyenne.toFixed(2) + "/5";