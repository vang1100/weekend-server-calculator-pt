console.log('client.js is sourced!');


function getCalculations(){
    
    axios.get('/calculations').then((response) => {
        console.log(response);
        let calculationsFromServer = response.data;
        console.log(calculationsFromServer);

        let calcHistoryDIV = document.querySelector('#calcHistory');

        for (let calculations of calculationsFromServer){
            calcHistoryDIV.innerHTML += `
            <p>${calculations.numOne} ${operator} ${numTwo} ${result}</p>
            `;
        }
    }).catch((error) =>{
        console.log(error);
    })
}

getCalculations();

// function add(numOne, numTwo){
//     console.log('add operator testing');
//     return answer = numOne + numTwo 

// }


//function minus() {

//}

// function multiply(){

// }

// function divide(){

// }

// function equal(){

// }

// function clearAll(){

// }