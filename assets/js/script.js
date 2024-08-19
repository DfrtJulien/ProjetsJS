const DIALOGUE = [
    {user: "shin", text: "Un jours nous deviendrons des grand généraux sous les cieu !"},
    {user: "shoubunkun", text: "Vous avez encore du parcours a faire avant de devenir un général... commencez pas devenir commandant de 100 hommes!"},
    {user: "shin", text: "Je suis maintenant commandant de 1000 hommes Shin, mon nom résonera bientôt dans toute la Chine!"},
    {user: "shoubunkun", text: "Pas encore... tu n'est  toujours pas un grand général sous les cieux..."},
    {user: "shin", text: "Je suis enfin un grand général sous les cieux je peux enfin aller voir la tombre de Hyou...!"},
    {user: "shoubunkun", text: "Félicitation Shin!! Hyou serait fière de toi.."}
    ];

document.querySelector("#startBtn").addEventListener('click', (event) => {
    document.querySelector('#welcomeText').style.display = "none";
    document.querySelector('#startBtn').style.display = "none"
    document.querySelector('#nextBtn').style.display = "inline-block";
    document.querySelector('#dialogueBox').style.display = "block";
    document.querySelector('#shinImg').style.display = "block";
    document.querySelector('#shouImg').style.display = "block";
});

  
