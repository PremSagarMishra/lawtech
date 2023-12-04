

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav li a');
    function updateActiveLink() {
        const scrollPosition = window.scrollY;
        document.querySelectorAll('section').forEach((section, index) => {
            const sectionTop = section.offsetTop - 50; 
            const sectionBottom = sectionTop + section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                
                navLinks.forEach(link => link.classList.remove('active'));

                navLinks[index].classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
});