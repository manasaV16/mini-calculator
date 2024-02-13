/*    This function takes a value as a parameter.
It finds the HTML element with the ID 'display' 
using document.getElementById('display').
It appends the provided value to the current value of the 'display' element.
 In the context of a calculator, this function is likely used to add numbers, operators, or
  other characters to the display.*/

        function appendToDisplay(value) {
            document.getElementById('display').value += value;
        }

//it's clearDisplay function clears the before enterd the values 
        function clearDisplay() {
            document.getElementById('display').value = '';
        }

        function calculateResult() {
            try {
                document.getElementById('display').value = eval(document.getElementById('display').value);
            } catch (error) {
                document.getElementById('display').value = 'Error';
            }
        }
       
