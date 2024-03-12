# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

CHECK LIST

***Client Side**

[ ] axios get
    [ ] grab calculations from server
    [ ] append calculations onto DOM (query selector, innerHTML)
[ ] append most recent calculation onto DOM
[ ] create object from user inputs
[ ] create axios.post 
    [ ] should include objects that look like {numOne: numOne, numTwo: numTwo, operator: operator}
[ ] create function (?) for button C to clear inputs
[ ] functions for operators?

***Server Side**

[ x] create calculations array
    *will contain all calculations that will be sent to client server side to be appended on DOM*
[ ] post route
    [ ] need route
    [ ] needs to do the math
    [ ] needs push method to push into calculations array. (calculations.push(newData))
[ x] app get route
[ ] a function that can do the math
    [ ] numOne
    [ ] numTwo
    [ ] operator
    [ ] result


    QUESTIONS

    -How to write a function to do the math?
    -How do I get the operator buttons to function on the client side? 
        -Confused about it working on the server side
    -If I enter the inputs on the client side, should the result render on the DOM? 
    And should it disappear right away?