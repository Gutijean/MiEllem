
const miAmor = "Ellem"

function mandarBesito (){
    alert(`Besito para ${miAmor}, mi niña hermosa, muuuuak ♥`)
}

function masBesito (){
    alert(`Otro besito más para ${miAmor}, mi niña hermosa, muuuuak ♥`)
}

mandarBesito()
let respuesta = "NO"


while(respuesta =="NO"){
    let decision = prompt('¿Estas satisfecha, mi niña preciosa? ¿Sí o No?', 'Tu respuesta, HERMOSA.')
    respuesta = decision.toUpperCase()
    if(respuesta == "SI"){
        alert(`♥ Te amooooo mucho, ${miAmor} ♥`)
        alert(`Que bueno que te complací :v`)
    }else{
        masBesito()
    }
}


