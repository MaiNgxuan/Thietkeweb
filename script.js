var dropdownContent = document.querySelector('.dropdown-content');
var isOpen = false;

document.querySelector('.dropbtn').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Button clicked');
    console.log('isOpen before:', isOpen);
    if (isOpen) {
        dropdownContent.style.display = 'none';
        isOpen = false;
    } else {
        dropdownContent.style.display = 'grid';
        dropdownContent.style.gridTemplateColumns = '1fr';
        isOpen = true;
    }
    console.log('isOpen after:', isOpen);
});

document.addEventListener('click', function(event) {
    var dropbtn = document.querySelector('.dropbtn');
    if (isOpen && !dropdownContent.contains(event.target) && !dropbtn.contains(event.target)) {
        console.log('Clicked outside, hiding dropdown');
        dropdownContent.style.display = 'none';
        isOpen = false;
    }
});


