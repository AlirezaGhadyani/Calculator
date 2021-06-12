// Make Selectors
const $ = document;
const $selector = name => $.querySelector(name);
const $selectorAll = names => $.querySelectorAll(names);

// Dom Selection
const keys = $selectorAll('.key-row div');
const numberInput = $selector('.calculator');
const calcResult = $selector('.calcResults');

// Function
keys.forEach(key => {
    key.addEventListener('click', event => {
        if(event.currentTarget.innerHTML == "=")
        {
            numberInput.value = eval(numberInput.value)
        }

        else if(event.currentTarget.innerHTML == "C")
        {
            numberInput.value = ""
        }

        else
        {
            numberInput.value += event.currentTarget.innerHTML;
        }
    })
})