const selectUnit = () => {
    let unit = document.querySelector('#measures');
    unit.addEventListener('input', () => {
        let unitVal = unit.value;
        let weightValue = document.querySelector('#weight').value;
        let heightValue = document.querySelector('#height').value;
        let BMI = weightValue/(heightValue*heightValue);
        let inCm = Math.round(weightValue/(((heightValue/100) * (heightValue/100))));
        let reselectUnit = document.querySelector('#reselect');
        let outputBox = document.querySelector('#inputTextOnContainer');
        let container = document.querySelector('#container');
        let titleH1 = document.querySelector('#title');
        let randomMessageForUnderweight = ['Please eat well!', 'Please take care of your health', 'Please eat nutritious food!', `Eating well is the best way to stay fit!`];
        let randomMessageForNormal = ['Wow! You are in good shape!', `What's your daily diet?`, `Congratulations! You are in good health`, `Nice BMI!`];
        let randomMessageForObese = ['Going to gym is one of the best way to stay fit!', `You can do it!`, `You need to exercise!`, `You're not well 😭!`];
        
        let rando = Math.floor(Math.random()*4);
        
       
        if (unitVal == 'Reset unit') {
            outputBox.innerText = `Please reselect the unit you like.`;
            container.style.background = 'transparent';
            container.style.visibility = 'visible';
            reselectUnit.innerHTML = 'Reset unit';
       }
        else if (unitVal == 'meter') {
           if (heightValue <= 3) {
               outputBox.innerHTML = heightValue;
               container.style.visibility = 'visible';

               if (BMI <= 18.5) {
                    outputBox.innerText = 'You are underweight!';
                    container.style.backgroundColor = 'lightblue';
                    container.style.visibility = 'visible';
                    reselectUnit.innerHTML = 'Reset unit';
                    titleH1.innerText = randomMessageForUnderweight[rando];
            }
                else if (BMI <= 25) {
                    outputBox.innerText = `You're normal!`;
                    container.style.backgroundColor = 'lightgreen';
                    container.style.visibility = 'visible';
                    reselectUnit.innerHTML = 'Reset unit';
                    titleH1.innerText = randomMessageForNormal[rando];
            }
                else if (BMI > 25 && BMI <= 30) {
                    outputBox.innerText= `Overweight`;
                    container.style.backgroundColor = 'lightyellow';
                    container.style.visibility = 'visible';
                    reselectUnit.innerHTML = 'Reset unit';
                    titleH1.innerText = randomMessageForObese[rando];
            } 
                else if (BMI > 30) {
                    outputBox.innerText = `Obese`;
                    container.style.backgroundColor = 'red';
                    container.style.visibility = 'visible';
                    reselectUnit.innerHTML = 'Reset unit';
                    titleH1.innerText = randomMessageForObese[rando];
            } 
            else {
                outputBox.innerText = `Please reset the unit and enter your weight in kilogram and height in meter`;
                container.style.background = 'skyblue';
                container.style.visibility = 'visible';
                reselectUnit.innerHTML = 'Reset unit';
            }
           }
           else {
                outputBox.innerText = `Please enter height in meter.`;
                container.style.background = 'red';
                container.style.visibility = 'visible';
                reselectUnit.innerHTML = 'Reset unit';
           }
           
       }
       else if (unitVal = 'centimeter') {
           if (heightValue <= 300 && heightValue >= 25) {
               outputBox.innerHTML = heightValue;
               container.style.visibility = 'visible';

               if (inCm <= 18.5) {
                    outputBox.innerText = 'You are underweight!';
                    container.style.backgroundColor = 'lightblue';
                    container.style.visibility = 'visible';
                    titleH1.innerText = randomMessageForUnderweight[rando];
                    reselectUnit.innerHTML = 'Reset unit';
            }
                else if (inCm <= 25) {
                    outputBox.innerText = `You're normal!`;
                    container.style.backgroundColor = 'lightgreen';
                    container.style.visibility = 'visible';
                    reselectUnit.innerHTML = 'Reset unit';
                    titleH1.innerText = randomMessageForNormal[rando];
            }
                else if (inCm > 25 && inCm <= 30) {
                    outputBox.innerText= `Overweight`;
                    container.style.backgroundColor = 'lightyellow';
                    container.style.visibility = 'visible';
                    reselectUnit.innerHTML = 'Reset unit';
                    titleH1.innerText = randomMessageForObese[rando];
            } 
                else if (inCm > 30) {
                    outputBox.innerText = `Obese`;
                    container.style.backgroundColor = 'red';
                    container.style.visibility = 'visible';
                    reselectUnit.innerHTML = 'Reset unit';
                    titleH1.innerText = randomMessageForObese[rando];
            } 
                else {
                    outputBox.innerText = `Please reset the unit and enter your weight and height in centimeter`;
                    container.style.background = 'transparent';
                    container.style.visibility = 'visible';
                    reselectUnit.innerHTML = 'Reset unit';
            }
       }
            else {
                outputBox.innerText = `Please reset the unit and enter weight and a valid height in centimeter.`;
                container.style.background = 'lightcoral';
                container.style.visibility = 'visible';
                reselectUnit.innerHTML = 'Reset unit';
       }
           
       }
       //console.log(BMI);
       console.log(inCm);
    })
}