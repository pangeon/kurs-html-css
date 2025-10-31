// prosty klient-side submit (symulacja)
const form = document.getElementById('contactForm');
const success = document.getElementById('success');

form.addEventListener('submit', function(e){
    e.preventDefault();
    // podstawowa walidacja HTML5
    if (!form.checkValidity()){
        form.reportValidity();
        return;
    }
    // tutaj wyślij dane np. fetch('/send', {method:'POST', body: new FormData(form)})
    // na potrzeby ćwiczenia pokażemy komunikat sukcesu:
    success.style.display = 'block';
    form.scrollIntoView({behavior:'smooth', block:'center'});

    // opcjonalnie zresetuj formularz po chwili:
    setTimeout(()=> {
        form.reset();
    }, 1500);
});