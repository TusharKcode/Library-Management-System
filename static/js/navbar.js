document.addEventListener('DOMContentLoaded', function(){
    fetch('/static/includes/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Navbar load error:', error))
});