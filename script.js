function calculer() {
    var valeur1 = document.getElementById("number1").value;
    var valeur2 = document.getElementById("number2").value;

    var premierNombre = Number(valeur1);
    var deuxiemeNombre = Number(valeur2);

    var resultat;

    if (
        valeur1 === "" ||
        valeur2 === "" ||
        !Number(valeur1) ||
        !Number(valeur2)
    ) {
        montrerErreur("SVP, entrez des nombres valides.");
        return;
    }

    var operateur = document.getElementById("operation").value;

    if (operateur === "+") {
        resultat = premierNombre + deuxiemeNombre;
    } else if (operateur === "-") {
        resultat = premierNombre - deuxiemeNombre;
    } else if (operateur === "*") {
        resultat = premierNombre * deuxiemeNombre;
    } else if (operateur === "/") {
        if (deuxiemeNombre === 0) {
            montrerErreur("La division par zéro n'est pas autorisée.");
            return;
        }
        resultat = premierNombre / deuxiemeNombre;
    } else {
        montrerErreur("Opérateur non valide.");
        return;
    }

    afficherResultat(resultat);
}

function afficherResultat(resultat) {
    document.getElementById("results").textContent =
        "Le résultat est : " + resultat;
}

function montrerErreur(message) {
    document.querySelector(".error").textContent = message;
}

function reinitialiser() {
    document.getElementById("calculatriceForm").reset();
    document.getElementById("results").textContent = "";
    document.querySelector(".error").textContent = "";
}

document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("calculatriceForm")
        .addEventListener("submit", function (e) {
            e.preventDefault();
            calculer();
        });

    document
        .getElementById("resetButton")
        .addEventListener("click", reinitialiser);
});
