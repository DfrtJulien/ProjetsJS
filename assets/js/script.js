const DIALOGUE = [
    {user: "shin", text: "Moi et Hyou un jours, nous deviendrons des grand généraux sous les cieux !"},
    {user: "shoubunkun", text: "Vous avez encore du parcours a faire avant de devenir un général... commencer par devenir commandant de 100 hommes!"},
    {user: "shin", text: "Je suis maintenant commandant de 1000 hommes, mon nom résonera bientôt dans toute la Chine!"},
    {user: "shoubunkun", text: "Pas encore... tu n'es  toujours pas un grand général sous les cieux..."},
    {user: "shin", text: "Je suis enfin un grand général sous les cieux je peux enfin aller voir la tombre de Hyou...!"},
    {user: "shoubunkun", text: "Félicitation Shin!! Hyou serait fière de toi.."}];


let currentIndex = 0;

document.querySelector("#startBtn").addEventListener('click', (event) => {

    document.querySelector('#welcomeText').style.display = "none";
    document.querySelector('#startBtn').style.display = "none"

    // afficher la boîte de dialogue 
    document.querySelector('#dialogueBox').style.display = "block";

    // afficher le boutton suivant
    document.querySelector('#nextBtn').style.display = "inline-block";

    // afficher les images
    document.querySelector('#shinImg').style.display = "block";
    document.querySelector('#shouImg').style.display = "block";

    displayNextLine()
});


document.getElementById('nextBtn').addEventListener('click', displayNextLine);


function displayNextLine(){
    if(currentIndex < DIALOGUE.length){
        // récupérer l'objet de dialogue a l'index actuel
        const LINE = DIALOGUE[currentIndex];

        //Sélectioner la boite de dialogue dans le DOM
        const DIALOGUE_BOX = document.getElementById("dialogueBox");

        //Supprimer le contenue dans la boîte de dialogue
        DIALOGUE_BOX.innerHTML = "";

        // Crée un nouvel élément de type paragraphe
        const P = document.createElement("p");

        //Remplire le paragraphe avec le texte du dialogue actuel.
        P.textContent = `${LINE.text}`;

        //Ajoutez le paragraphe dans la boite de dialogue
        DIALOGUE_BOX.appendChild(P);


        console.log(LINE.text);     
        currentIndex++;
     } else {
        document.querySelector("#nextBtn").style.display = "none";
        document.querySelector("#restartBtn").style.display = "inline-block";
        currentIndex = 0;
     }

    // Changez les images
     if(currentIndex == 3){
        document.querySelector('#shinImg').src = "assets/img/shin2.webp";
        document.querySelector('#shouImg').src = "assets/img/shoubunkun.jpg";
     }else if(currentIndex == 5){
        document.querySelector('#shinImg').src = "assets/img/shin3.png";
     }

}







