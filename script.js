
// Funktion showRecipe() wird aufgerufen, sobald Seite geladen hat und wenn man auf den Button klickt 

let amountsChili = [200, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 125, '', '', '', ''];                                                                  // Array für die jeweiligen Mengen; falls keine Mengenangabe vorhanden dann ''
let ingredientsChili = [' g Rinderhackfleisch',' mittelgroße Zwiebel(n)',' Zehe(n) Knoblauch', ' EL Öl zum Braten', ' Paprikaschote(n)', ' EL Tomatenmark', ' große Dose Tomaten (800 g)', ' Dose Kidneybohnen (480 g)', ' Dose Mais (200 g)', ' ml Brühe', 'Cayennepfeffer', 'Paprikapulver', 'Salz', 'Tabasco'];  // Array für die jeweiligen Zutaten

let amountsPesto = [125, 30, 25, 10, 1, 10, 10, 0.25];
let ingredientsPesto = [' g Spaghetti', ' ml Milch (1,5 % Fett)', ' g Saure Sahne', ' g Parmesan', ' Zehe(n) Knoblauch', ' g Basilikum', ' g Pinienkerne', ' TL Salz'];

let amountsBruschetta = [2, 0.5, 1.5, 1, ''];
let ingredientsBruschetta = [' Tomaten', ' Knoblauchzehe(n)', ' EL Olivenöl', ' Ciabatta', 'Salz und Pfeffer'];



function showRecipe(amounts, ingredients) {                                         // als Parameter werden die Arrays vom jeweiligen Gericht überreicht                                                  

    let persons = document.getElementById('input').value;                         
    document.getElementById('zutaten').innerHTML = '';                              // Tabelle für Zutatenliste (div-Container) wird wieder zurückgesetzt

    if(persons > 12 || persons < 1) {
        alert('Bitte Portionen zwischen 1 und 12 angeben !');
    } else {

    for(let i=0; i<amounts.length; i++) {                                         
        if(amounts[i] == '') {                                                                            // falls keine Mengenangabe vorhanden, zB bei Gewürzen 
            document.getElementById('zutaten').innerHTML += `<div id=${i}>${ingredients[i]}</div>`;   // jeweiliger Container bekommt eine id mitgegeben                                                                 
        } else {
        let amount = amounts[i] * persons;                                                              
        document.getElementById('zutaten').innerHTML += `<div id=${i}>${amount}${ingredients[i]}</div>`;   
        }

        if(i%2 == 0) {                                                                            // falls i ungerade, wird ein grauer Background vergeben
            document.getElementById(i).classList.add('container-gerade');
        } else {
            document.getElementById(i).classList.add('container-ungerade');
        }    
    }
}

}

