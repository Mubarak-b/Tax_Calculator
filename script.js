
    function calculateTax() {
        const income = parseFloat(document.getElementById('gross-income').value);
        const extraIncome = parseFloat(document.getElementById('extra-income').value);
        const totalIncome = income + extraIncome;
        const deductions = parseFloat(document.getElementById('deductions').value);
        const finalIncome = totalIncome - deductions;
    
        if (finalIncome <= 800000) {
            document.getElementById('result').innerHTML = `No Tax`;
        } else {
            var ageSelect = document.getElementById("age-group");
            var selectedAge = ageSelect.value;
            var taxRate;
    
            switch (selectedAge) {
                case "18-40":
                    taxRate = 0.3;
                    break;
                case "41-59":
                    taxRate = 0.4;
                    break;
                case "60":
                    taxRate = 0.1;
                    break;
                default:
                    taxRate = 1; 
            }
    
            const taxableIncome = finalIncome - 800000;
            var taxAmount = taxRate * taxableIncome;
    
            document.getElementById('result').style.boxShadow= '0 0 10px rgba(0, 0, 0, 0.1)'.innerHTML = `The final tax amount is: &#8377${taxAmount}`;
        
        document.getElementById('result').innerHTML = `The final tax amount is: ₹${taxAmount}`;
        document.getElementById('result').style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        document.getElementById('result').style.backgroundColor ='#fff';
        


    }
    }