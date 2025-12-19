const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // run once
        }else
            observer.IntersectionObserver.remove("show")
    });
}, {
    threshold: 0.1
});

const navLinksElements = document.querySelectorAll(".nav-links");
navLinksElements.forEach(el => observer.observe(el));