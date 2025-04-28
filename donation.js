document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const fullNameInput = document.getElementById('full-name');
    const emailInput = document.getElementById('email');
    const donationAmountInput = document.getElementById('donation-amount');
    const paymentMethodSelect = document.getElementById('payment-method');

    form.addEventListener('submit', function (event) {
        let isValid = true;

        // Validate Full Name
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(fullNameInput.value.trim())) {
            alert("Full Name must only contain letters and spaces.");
            isValid = false;
        } else {
            alert("Full Name entered: " + fullNameInput.value.trim());
        }

        // Validate Email Address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            alert("Please enter a valid email address.");
            isValid = false;
        } else {
            alert("Email Address entered: " + emailInput.value.trim());
        }

        // Validate Minimum Donation Amount
        const donationAmount = parseFloat(donationAmountInput.value);
        if (isNaN(donationAmount) || donationAmount < 10) {
            alert("Minimum donation amount is RM10.");
            isValid = false;
        } else {
            alert("Donation Amount entered: RM" + donationAmount.toFixed(2));
        }

        // Validate Payment Method
        if (paymentMethodSelect.value === '') {
            alert("Please select a payment method.");
            isValid = false;
        } else {
            alert("Payment Method selected: " + paymentMethodSelect.value);
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if any validation fails
        } else {
            alert("Donation successful. Thank you!");
            // In a real application, you would proceed with form submission here
            console.log('Form submitted successfully!');
            // Optionally, you could redirect the user or clear the form
        }
    });
});
