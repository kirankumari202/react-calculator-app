import React from 'react';
import './basic.css';

class Calculator extends React.Component {
    calculator1 = () => {
        return (
            <>
                <div id="calculator-on-off" onClick={this.launchCalculator}>
                    <div>Click/Tap anywhere to Turn ON the calculator!</div>
                </div>
                {/* <!-- create a form (for calculator) --> */}
                <form className="calculator" onSubmit={(event) => { event.preventDefault() }}>
                    {/* <!-- onsubmit = "event.preventDefault()" stops the form from submitting and auto reloading the page when any button is pressed -->
                <!-- top buttons --> */}
                    <div className="design-close-exit">
                        <div className="circle red" onClick={() => { this.closeCalculator() }}> <i className="icons fa-solid fa-xmark white"></i> </div>
                        <div className="circle yellow" onClick={() => { this.minimizeCalculator() }}> <i className="icons fa-solid fa-minus"></i> </div>
                        <div className="circle green" onClick={() => { this.maximizeCalculator() }}> <i className="icons fa-solid fa-plus"></i></div>
                    </div>
                    {/* <!-- the input text displayer --> */}
                    {/* <!-- placeholder = 0 initially --> */}
                    <input type="text" placeholder="" readOnly />
                    {/* <!-- buttons panel --> */}
                    <div className="calculator-button">
                        {/* <!-- top panel button --> */}
                        <button className="calc-button clear-btn grey-dark" onClick={() => { this.eraseAll() }}>AC</button>
                        <button className="calc-button rem-digit-btn grey-dark" onClick={() => { this.eraseLast() }}>DEL</button>
                        <button value="/" className="calc-button oper-btn grey-dark" onClick={(e) => { this.insertOperator(e) }}>/</button>

                        <button value="*" className="calc-button oper-btn orange" onClick={(e) => { this.insertOperator(e) }}>x</button>
                        <button value="7" className="calc-button num-btn" onClick={(e) => { this.insertDigit(e) }}>7</button>
                        <button value="8" className="calc-button num-btn" onClick={(e) => { this.insertDigit(e) }}>8</button>
                        <button value="9" className="calc-button num-btn" onClick={(e) => { this.insertDigit(e) }}>9</button>
                        <button value="-" className="calc-button oper-btn orange" onClick={(e) => { this.insertOperator(e) }}>-</button>
                        <button value="4" className="calc-button num-btn" onClick={(e) => { this.insertDigit(e) }}>4</button>
                        <button value="5" className="calc-button num-btn" onClick={(e) => { this.insertDigit(e) }}>5</button>
                        <button value="6" className="calc-button num-btn" onClick={(e) => { this.insertDigit(e) }}>6</button>
                        <button value="+" className="calc-button oper-btn orange" onClick={(e) => { this.insertOperator(e) }}>+</button>
                        <button value="1" className="calc-button num-btn" onClick={(e) => { this.insertDigit(e) }}>1</button>
                        <button value="2" className="calc-button num-btn" onClick={(e) => { this.insertDigit(e) }}>2</button>
                        <button value="3" className="calc-button num-btn" onClick={(e) => { this.insertDigit(e) }}>3</button>
                        <button className="calc-button calc-btn orange" onClick={() => { this.calculateResult() }}>=</button>
                        <button value="0" className="calc-button num-btn" onClick={(e) => { this.insertDigit(e) }}>0</button>
                        <button className="calc-button decimal-btn" onClick={() => { this.insertDecimal() }}>.</button>
                    </div>
                </form>
                <div className="copyright">
                    <p>Made with &hearts;</p>
                    <a style={{color: 'white', textDecoration: 'none'}} target='_blank' href="https://github.com/kirankumari202">&copy; kirankumari202(Kiran kumari)</a>
                    
                </div>
            </>
        )
    }

    // This is javascript part --------------------------------------------------
    formInput = document.getElementsByTagName('input')[0];

    // function for AC button
    eraseAll = () => {
        this.formInput.value = "";
        this.formInput.placeholder = '0';
    }

    // function for DEL button
    eraseLast = () => {
        let inputFormValue = this.formInput.value;
        // alert(inputFormValue);

        // if multiple digits are present, remove the last one
        if (inputFormValue.length > 1) {
            let lastChar = inputFormValue.charAt(inputFormValue.length - 1);
            // if last char is an empty space, that means an operator is there, 
            // so remove 3 chars (space, operator, space)
            if (lastChar === " ") {
                inputFormValue = inputFormValue.substring(0, inputFormValue.length - 3);
            } else {
                // otherwise there would be a digit, so remove one char only (the last digit)
                inputFormValue = inputFormValue.substring(0, inputFormValue.length - 1);
            }
            this.formInput.value = inputFormValue;
        } else if (inputFormValue.length === 1) {
            // if only 1 digit is present, erase all
            this.eraseAll();
        }
        // if already nothing written, then do nothing
    }

    // function for NUMBER buttons
    insertDigit = (e) => {
        console.log('e: ', e, 'e.target: ', e.target, 'e.target.value: ', e.target.value);
        let digit = e.target.getAttribute('value');
        // if input box is empty, just write this digit
        if (this.formInput.value === "") {
            this.formInput.value = digit;
        } else {
            // append the value
            this.formInput.value = this.formInput.value + digit;
        }
    }

    // function for OPERATOR Buttons
    insertOperator = (e) => {
        let operator = e.target.getAttribute('value');
        let lastChar = this.formInput.value.charAt(this.formInput.value.length - 1);
        // alert(lastChar);
        // if input box is empty, you can't use an operator without an operand
        if (this.formInput.value === "") {
            alert("Please enter an operand first!");
        } else if (lastChar === " ") {
            // since after every operator we give a space, so space means last i/p was operator
            // so if already the last entered value was an operator, you cannot push an operator again
            // like 3455 + (now another operator after plus will be invalid)
            alert("Invalid input! \nCannot Enter an operator directly after another!");
        } else {
            // if last entered char is a decimal point like 234. 45. 
            // then remove the decimal, it doesn't make any sense in such manner
            if (lastChar === ".") {
                this.eraseLast();
            }
            this.formInput.value = this.formInput.value + " ";
            this.formInput.value = this.formInput.value + operator;
            this.formInput.value = this.formInput.value + " ";
        }
    }


    // function for inserting DECIMAL (point)
    insertDecimal = () => {
        let lastChar = this.formInput.value.charAt(this.formInput.value.length - 1);
        if (lastChar >= "0" && lastChar <= "9") {
            this.formInput.value = this.formInput.value + ".";
        } else {
            alert("Invalid insertion of decimal point!");
        }
    }

    // function to calculate final result
    calculateResult = () => {
        let inputData = this.formInput.value;
        // if enter is processed without any data, then nothing to do ! 
        if (inputData === "") {
            alert("Nothing to process !");
            return;
        } else if (inputData.charAt(inputData.length - 1) === " ") {
            /* since +, -, *, / are all binary operators, 
               so last value should be a digit if not so, then error !
            */
            alert("Please enter an operand after last operator!");
            return;
        }

        /* split the input from spaces; eg: 546 + 62 * 233.3 / 546
           [546, +, 62, *, 233.3, /, 546]
        */
        let fields = inputData.split(" ");
        // if there is no operator, only a number is there, then nothing to do
        if (fields.length === 1) {
            return;
        }

        // applying BODMAS to calculate result 
        for (let i = 0; i < fields.length; ++i) {
            if (fields[i] === "/") {
                // if the divisor is 0, show error
                if (fields[i + 1] === "0") {
                    this.eraseAll();
                    this.formInput.placeholder = "Division By Zero Error!";
                    return;
                }
                let tmpResult = parseFloat(fields[i - 1]) / parseFloat(fields[i + 1]);

                // remove the '/' operator and its operands
                fields.splice(i - 1, 3, tmpResult);  // remove from i-1, and remove 3 items in line
                // continue the loop to find next division if any
            }
        }
        // alert(result);
        // alert(fields);
        for (let i = 0; i < fields.length; ++i) {
            if (fields[i] === "*") {
                let tmpResult = parseFloat(fields[i - 1]) * parseFloat(fields[i + 1]);

                // remove the '/' operator and its operands and insert the result
                fields.splice(i - 1, 3, tmpResult);
                // continue the loop to find next division if any
            }
        }

        for (let i = 0; i < fields.length; ++i) {
            if (fields[i] === "+") {
                let tmpResult = parseFloat(fields[i - 1]) + parseFloat(fields[i + 1]);

                // remove the '/' operator and its operands
                fields.splice(i - 1, 3, tmpResult);  // remove from i-1, and remove 3 items in line
                // continue the loop to find next division if any
            }
        }

        for (let i = 0; i < fields.length; ++i) {
            if (fields[i] === "-") {
                let tmpResult = parseFloat(fields[i - 1]) - parseFloat(fields[i + 1]);

                // remove the '/' operator and its operands
                fields.splice(i - 1, 3, tmpResult);  // remove from i-1, and remove 3 items in line
                // continue the loop to find next division if any
            }
        }
        //only one element will remain in fields[] array at last, and that would be final ans
        // alert(fields[0]);
        this.formInput.value = fields[0];
    }

    // ---------------------JS for improving dynamic design of calculator-----------------------------
    calculatorButtons = document.getElementsByClassName("calculator-button")[0];
    closeCalculator = () => {
        this.calculatorButtons.style.opacity = "0";
        let overlay = document.getElementById("calculator-on-off");
        overlay.style.display = "block";
        this.formInput.value = "";
        this.formInput.placeholder = "";
    }

    launchCalculator = () => {
        this.calculatorButtons.style.opacity = "1";
        let overlay = document.getElementById("calculator-on-off");
        overlay.style.display = "none";
        this.formInput.placeholder = "0";
    }

    minimizeCalculator = () => {
        this.calculatorButtons.style.display = "none";
        this.formInput.placeholder = "";
        this.formInput.value = "";
    }

    maximizeCalculator = () => {
        this.calculatorButtons.style.display = "grid";
        this.formInput.placeholder = "0";
    }
    // js part ends here ------------------------------------------------------------ 

    render() {
    return (
        <div id="calc1">
            {this.calculator1()}
        </div>
    )};

    componentDidMount() {
        // after the component is mounted, then we update these variables, so they are valid, and not undefined
        // this is how i am doing the defer part of js (workaround)
        this.formInput = document.getElementsByTagName('input')[0];
        this.calculatorButtons = document.getElementsByClassName("calculator-button")[0];
    }
}

export default Calculator;