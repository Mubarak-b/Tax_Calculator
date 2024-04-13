let hasError = false;
const grossIncomeInput = document.getElementById('gross-income');
const grossIncomeError = document.getElementById('gross-income-error');
const grossIncomeTooltip = document.getElementById('gross-income-tooltip');

grossIncomeInput.addEventListener('input', function (event) {
    const inputValue = event.target.value;
    const isValid = /^\d*\.?\d*$/.test(inputValue);
    if (!isValid) {
        grossIncomeError.style.visibility = 'visible';
    } else {
        grossIncomeError.style.visibility = 'hidden';
    }
});

const deductionsIncomeInput = document.getElementById('deductions');
const deductionsIncomeError = document.getElementById('deductions-error');
const deductionsIncomeTooltip = document.getElementById('deductions-error-tooltip');

deductionsIncomeInput.addEventListener('input', function (event) {
    const inputVal = event.target.value;
    const isValid = /^\d*\.?\d*$/.test(inputVal);

    if (!isValid) {
        deductionsIncomeError.style.visibility = 'visible';
    } else {
        deductionsIncomeError.style.visibility = 'hidden';
    }
});

const extraIncomeInput = document.getElementById('extra-income');
const extraIncomeError = document.getElementById('extra-income-error');
const extraIncomeTooltip = document.getElementById('extra-income-tooltip');

extraIncomeInput.addEventListener('input', function (event) {
    const inputValu = event.target.value;
    const isValid = /^\d*\.?\d*$/.test(inputValu);

    if (!isValid) {
        extraIncomeError.style.visibility = 'visible';
    } else {
        extraIncomeError.style.visibility = 'hidden';
    }
});

function openModal() {
    const ageGroup = document.getElementById('age-group');
    const selectedOption = ageGroup.value;
    const inc1 = document.getElementById('gross-income');
    const select = inc1.value;
    const extraa = document.getElementById('extra-income');
    const selected = extraa.value;
    if (!selectedOption || selectedOption === "" || !select || select === "" || !selected || selected === "") {
        alert("Please fill all the fields before calculating tax.");
        hasError = true;
        return;
    }


    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    hasError = false;
    calculateTax();
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function calculateTax() {
    const income = parseFloat(document.getElementById('gross-income').value);
    const extraIncome = parseFloat(document.getElementById('extra-income').value);
    const totalIncome = income + extraIncome;
    const deductions = parseFloat(document.getElementById('deductions').value);
    const finalIncome = totalIncome - deductions;

    const ageGroupSelect = document.getElementById('age-group');

    const errorIcons = document.querySelectorAll('.error-icon');


    if (!hasError) {
        if (finalIncome <= 800000) {
            document.getElementById('result').innerHTML = `No Tax`;
        } else {
            let taxRate;

            switch (ageGroupSelect.value) {
                case '18-40':
                    taxRate = 0.3;
                    break;
                case '41-59':
                    taxRate = 0.4;
                    break;
                case '60':
                    taxRate = 0.1;
                    break;
                default:
                    break;
                    taxRate = 1;
            }

            const taxableIncome = finalIncome - 800000;
            const taxAmount = (taxRate * taxableIncome).toFixed(2);

            document.getElementById('result').innerHTML = `The final tax amount is: ₹${taxAmount}`;
        }
    }
}
