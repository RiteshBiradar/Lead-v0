function togglePopUp(subject, units) {
    var popUp = document.querySelector('.pop-up');
    var boxHidden = document.getElementById('boxHidden');

    // Clear existing content
    boxHidden.innerHTML = '';

    // Create and append new links based on the units for the subject
    units.forEach((unit, index) => {
        var link = document.createElement('a');
        link.href = `data/FirstYear/${subject}/${unit}.pdf`;
        link.innerHTML = `<p class="innerLine">Unit -${index + 1}</p>`;
        boxHidden.appendChild(link);
    });
    popUp.style.display = (popUp.style.display === 'none' || popUp.style.display === '') ? 'block' : 'none';

    document.addEventListener('dblclick', function (event) {
        var popUp = document.querySelector('.pop-up');
        var boxHidden = document.getElementById('boxHidden');

        // Check if the double click occurred outside the pop-up box
        if (!boxHidden.contains(event.target)) {
            popUp.style.display = 'none';
        }
    });
}