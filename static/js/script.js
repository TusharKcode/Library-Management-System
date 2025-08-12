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

document.getElementById('forgotForm').addEventListener('submit', function(e){
    e.preventDefault();
    let emailInput = document.getElementById('forgotEmail').value.trim();
    let alertBox = document.getElementById('forgotAlert');

    if(emailInput === "" || !emailInput.include('@')){
        alertBox.innerHTML = '<div class="alert alert-danger">Please Enter a valid email address.</div>';
    } else{
        alertBox.innerHTML = '<div class="alert alert-success">Reset link sent. Redirecting....</div>';
        setTimeout(() => {
            window.location.href = "/loginForm/resetPassword.html";
        }, 1500);
    }
});

document.getElementById('resetForm').addEventListener('submit', function(e){
    e.preventDefault();
    let pass1 = document.getElementById('newPassword').value.trim();
    let pass2 = document.getElementById('confirmPassword').value.trim();
    let alertBox = document.getElementById('resetAlert');

    if(pass1 === "" || pass2 === ""){
        alertBox.innerHTML = '<div class="alert alert-danger">Please fill in all fields</div>';
    } else if(pass1 != pass2){
        alertBox.innerHTML = '<div class="alert alert-danger">Password do not match.</div>'
    } else{
        alertBox.innerHTML = '<div class="alert alert-success">Password successfully reset. Redirecting to login....</div>';
        setTimeout(() => {
            window.location.href = "/loginForm/loginForm.html";
        }, 1500);
    }
});