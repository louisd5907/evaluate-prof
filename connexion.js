var nombreProfesseurs = profs.length;

function submit(){
    const passwordHTML=document.getElementById('password')
    const loginHTML=document.getElementById('login')
    var username = loginHTML.value
    var password = passwordHTML.value

    var prof = null;

    for(var i = 0; i < nombreProfesseurs; i++) {
        if( profs[i].username == username) {
            prof = profs[i];
            break;
        }
    }
    
    if(prof != null) {
       if(password == prof.password) {
            localStorage.setItem("user", username)
            document.location.href="./compteprof.html"; 
       }else {
           alert("mot de passe incorrect")
       }
    }else {
        alert("identifiant incorrect")
    }

}



