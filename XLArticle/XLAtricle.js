const fadeSections = document.querySelectorAll(
    'main > section[id="1"], main > section[id="2"], main > section[id="3"], main > section[id="4"], main > section[id="5"]'
);

if ("IntersectionObserver" in window) {
    document.body.classList.add("scrollFadesReady");

    const fadeObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle("isVisible", entry.isIntersecting);
            });
        },
        {
            threshold: 0.15,
            rootMargin: "0px 0px -8% 0px"
        }
    );

    fadeSections.forEach((section) => fadeObserver.observe(section));
}