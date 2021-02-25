'use strict';



window.addEventListener('DOMContentLoaded', () => {

    const calculatorForm = document.querySelector('.calce'),
        resultWindow = calculatorForm.querySelector('.calce__hours-sum'),
        calceInput = calculatorForm.querySelector('.calce__input');

        function getHours (allSum) {
            let minutes = allSum % 60;
            let hours = (allSum - minutes) / 60 + `:${minutes}`;
            return hours;

        }


        calculatorForm.addEventListener('submit', (event) => {
                event.preventDefault();

                let newSum = calceInput.value;

                resultWindow.innerHTML = `
                    <span> ${getHours(newSum)} <span>
                `;

                event.target.reset();

            
        });


        


        


});