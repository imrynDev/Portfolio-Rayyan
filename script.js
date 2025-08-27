function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
// Pastikan semua kode JavaScript berada di dalam satu blok 'DOMContentLoaded'
document.addEventListener('DOMContentLoaded', () => {

    // --- Efek Typewriter ---
    const texts = [
        " FRONT-END DEVELOPER",
        " SISWA SMKN 69 JAKARTA",
    ];
    let speed = 100;
    const textElements = document.querySelector(".typewriter-text");
    let textIndex = 0;
    let characterIndex = 0;

    function typeWriter() {
        if (characterIndex < texts[textIndex].length) {
            textElements.innerHTML += texts[textIndex].charAt(characterIndex);
            characterIndex++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(eraseText, 1000);
        }
    }

    function eraseText() {
        if (textElements.innerHTML.length > 0) {
            textElements.innerHTML = textElements.innerHTML.slice(0, -1);
            setTimeout(eraseText, 50);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            characterIndex = 0;
            setTimeout(typeWriter, 500);
        }
    }

    // --- Hamburger Menu ---
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const cancelIcon = document.getElementById('cancel-icon');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const dropdownLinks = dropdownMenu.querySelectorAll('.links a');

    function toggleDropdown() {
        dropdownMenu.classList.toggle('show');
        document.body.classList.toggle('no-scroll', dropdownMenu.classList.contains('show'));
    }

    if (hamburgerIcon) {
        hamburgerIcon.addEventListener('click', toggleDropdown);
    }

    if (cancelIcon) {
        cancelIcon.addEventListener('click', toggleDropdown);
    }

    dropdownLinks.forEach(link => {
        link.addEventListener('click', () => {
            dropdownMenu.classList.remove('show');
            document.body.classList.remove('no-scroll');
        });
    });

    // --- Lainnya ---

    // Disable right-click on the home image
    const homeImage = document.getElementById('home-image');
    if (homeImage) {
        homeImage.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
    }

    // Hindari duplikasi event listener, cukup panggil di sini
    window.onload = typeWriter;
});
