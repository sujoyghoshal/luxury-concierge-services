document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for navbar links
    document.querySelectorAll(".navbar a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetId === "home") {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            } else if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for fixed navbar
                    behavior: "smooth"
                }); 
            }
        }); 
    });

    // Smooth scroll for service items
    document.querySelectorAll(".service-item").forEach(item => {
        item.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust based on navbar height
                    behavior: "smooth"
                });
            }
        });
    });

    // Scroll-to-Top Button
    const scrollToTopBtn = document.getElementById("scroll-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("visible");
        } else {
            scrollToTopBtn.classList.remove("visible");
        }
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});