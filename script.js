'use strict';



window.addEventListener('DOMContentLoaded', () => {

    const calculatorForm = document.querySelector('.calce'),
        resultWindow = calculatorForm.querySelector('.calce__hours-sum'),
        calceInput = calculatorForm.querySelector('.calce__input'),
        btn = calculatorForm.querySelector('.button');

        function getHours (allSum) {
            let minutes = allSum % 60;
            let hours = (allSum - minutes) / 60 + `:${minutes}`;
            return hours;

        }

        function calc (parent,sum) {

            parent.textContent = `
                    ${getHours(sum)}
                `;
        }

        calculatorForm.addEventListener('submit', (event) => {
                event.preventDefault();
                
                let newSum = calceInput.value;
                calc(resultWindow,newSum);

                btn.addEventListener('click', () => {
                calc(resultWindow,newSum);

                });
        
                event.target.reset();
            
        });

    
    
        


        


});