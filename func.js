const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const hi = document.querySelector('.hh');

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e) {
        if(e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id;
            hi.style.color = "white";
        }
        if(e.target.id === "cyan") {
            body.style.backgroundColor = e.target.id;
            hi.style.color = "";
        }
        if(e.target.id === 'orange') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
        }
    });
});