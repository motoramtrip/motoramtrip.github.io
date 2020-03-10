//Animate smooth scroll - Little help by Miguel Cosme => https://github.com/MiguelCosme 
function scrollDown(elementId) { 
    const y = document.getElementById(elementId).offsetTop;
    window.scroll({ top: y, behavior: 'smooth' });
}

// header backgroung toggle
window.onscroll = function () {
    if (window.pageYOffset > 130 ) {
        document.getElementById("header").style.background = "#444";
    } else {
        document.getElementById("header").style.background = "none";
    }
}

function submitGoogleForm(form) {
    try {
        var data = [].slice.call(form).map(function (control) {
            return 'value' in control && control.name ?
                control.name + '=' + (control.value === undefined ? '' : control.value) :
                '';
        }).join('&');
        var xhr = new XMLHttpRequest();

        xhr.open('POST', form.action + '/formResponse', true);
        xhr.setRequestHeader(
            'Accept',
            'application/xml, text/xml, */*; q=0.01'
        );
        xhr.setRequestHeader(
            'Content-type',
            'application/x-www-form-urlencoded; charset=UTF-8'
        );
        xhr.send(data);
        form.reset();

        displaySuccess();
    } catch (e) {
        console.error(e);
    }
    return false;
}

function displaySuccess() {
    document.getElementById('cta-message-header').style.display = 'none';
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('contacts-succes').style.display = 'block';

    setTimeout(function () {
        document.getElementById('cta-message-header').style.display = 'block';
        document.getElementById('contact-form').style.display = 'block';
        document.getElementById('contacts-succes').style.display = 'none'; 
    }, 3000);
}
