console.log('client.js is sourced!');


//where i would append all calculations
//grabbing the calculations from the calculations route 
function getCalculations(){
    
    axios.get('/calculations').then((response) => {
        console.log(response);
        let calculationsFromServer = response.data;
        console.log(calculationsFromServer);

        let calcHistoryDIV = document.querySelector('#calcHistory');

        for (let calculations of calculationsFromServer){
            calcHistoryDIV.innerHTML += `
            <p>${calculations.numOne} ${calculations.operator} ${calculations.numTwo} ${'='} ${calculations.result}</p>
            `;
        }
    }).catch((error) =>{
        console.log(error);
    })
}

getCalculations();

//need to create a function that would submit all inputs and then
//send it to the server side

// function add(){
//  }

// function minus() {
// }

// function multiply(){
// }

// function divide(){

// }

// function equal(){

// }

// function clearAll(){

// }