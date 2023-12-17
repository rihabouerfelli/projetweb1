
document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
	
		
		var emailInput = document.getElementById("email");
        var emailValue = emailInput.value.trim();
        var emailRegex = /^\S+@\S+\.\S+$/;

        if (!emailRegex.test(emailValue)) {
            event.preventDefault();
            alert("Please enter a valid email address.");
            return;
        }
        var firstName = document.getElementById('fname').value;
        var lastName = document.getElementById('lname').value;
        var nameRegex = /^[a-zA-Z]{3,}$/;
        
        if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
            alert('First Name and Last Name should contain only letters and be at least 3 characters long.');
            event.preventDefault();
            return;
        }
        var salary = document.getElementById('sal').value;
        var salaryRegex = /^\d{4,}$/;

        if (!salaryRegex.test(salary)) {
            alert('Salary should be a minimum of 4 digits.');
            event.preventDefault();
            return;
        }
        var negotiation = document.querySelector('input[name="ng"]:checked');
        var nonNegotiation = document.querySelector('input[name="non"]:checked');

        if (!negotiation && !nonNegotiation) {
            alert('Please select Salary Negotiation option.');
            event.preventDefault();
            return;
        }
        var healthInsurance = document.querySelector('input[name="perk"][value="Health insurance"]');
        var paidTimeOff = document.querySelector('input[name="per"][value="Paid time off"]');

        if (!healthInsurance && !paidTimeOff) {
            alert('Please select at least one perk or benefit.');
            event.preventDefault();
            return;
        }
    });
});
