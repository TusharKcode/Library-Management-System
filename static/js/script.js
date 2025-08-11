document.addEventListener('DOMContentLoaded', function(){
    console.log("Library Management Scripts loaded.");

    // Forgot Password form handling
    const forgotForm = document.getElementById('forgotForm');
    if (forgotForm){
        const emailInput = document.getElementById('forgotEmail');
        const alertBox = document.getElementById('forgotAlert');
        const submitBtn = document.getElementById('forgotSubmit');

        forgotForm.addEventListener('submit', function(e){
            e.preventDefault();
            alertBox.innerHTML = '';

            const email = (emailInput.value || '').trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(!email) {
                alertBox.innerHTML = '<div class="alert alert-danger">Please enter your email address</div>';
                emailInput.focus();
                return;
            }
            if(!emailRegex.test(email)) {
                alertBox.innerHTML = '<div class="alert alert-danger">Please enter a valid email address</div>';
                emailInput.focus();
                return;
            }

            // Simulate Sending
            submitBtn.disabled = true;
            submitBtn.innerText = 'Sending....';
            // Simulate delay
            setTimeout(function(){
                alertBox.innerHTML = '<div class="alert alert-success">If an account with that email exists, a reset link has been sent. Check your inbox.</div>';
                submitBtn.disabled = false;
                submitBtn.innerText = 'Send Reset Link';
            },1000);
        });
    }
});