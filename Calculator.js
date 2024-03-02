const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //This function returns a value in a string so we "parceInt" to convert it to an integer.
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    //you can also use getElementById in place of querySelector 
    // const height = parseInt(document.getElementById('height').value);
    // const weight = parseInt(document.getElementById('weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = 'Please enter a valid height!!';
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Please enter a valid weight!!';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi}</span>`;

        //your current situation
        if (bmi < 18.6) {
            results.innerHTML = 'you are under weight!';
        } else if (bmi == 18.6 && bmi <= 24.9) {
            results.innerHTML = 'you are in normal range.';
        } else {
            results.innerHTML = 'you are over weight!!';
        }
    }
});