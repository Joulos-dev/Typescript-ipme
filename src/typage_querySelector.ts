
// récupérer un id
let btn: HTMLButtonElement | null = document.querySelector('#btn');

// récupérer une classe
let input: HTMLInputElement | null = document.querySelector('.test-input');

// récupérer un container en classe
let container: HTMLDivElement | null = document.querySelector('.container');

// le point ? veux dire si il n'est pas null
// event de click
btn?.addEventListener('click', () => {


    if(input !== null){
        let value = input.value;
        // createElement = créer une div mais pas encore afficher
        let divElement: HTMLDivElement = document.createElement('div');
        divElement.innerHTML = value;

        if (container !== null){
            // appendChild = afficher une div avec la valeur préalablement créer
            container.appendChild(divElement);
        }

    }

})