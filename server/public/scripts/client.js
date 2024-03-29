console.log('client.js is sourced!');

//global varible

let operator = [];

function clickMinus(event){
    event.preventDefault();
    operator = '-';
    console.log('testing minus button');

}

function clickEqual(event){
    event.preventDefault();
    operator = '=';
    console.log('testing equal button')
}



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
            <ul>
            <li>${calculations.numOne} ${calculations.operator} ${calculations.numTwo} ${'='} ${calculations.result}</li>
            </ul>
            `;
        }
    }).catch((error) =>{
        console.log(error);
    })
}

getCalculations();

//need to create a function that would submit all inputs and then
//send it to the server side

//creating function for form



function submit(event){
    event.preventDefault();
    console.log('test submit event');

    let numOneInput = document.querySelector('#numOne').value;
    let numTwoInput = document.querySelector('#numTwo').value;

    let calculationsForServer = {
        numOne: numOneInput,
        numTwo: numTwoInput,
        operator: operator
    };


    axios.post('/calculations', calculationsForServer).then((response) => {
        console.log(response);
    }).catch((error) =>{
        console.log(error);
    })
}
