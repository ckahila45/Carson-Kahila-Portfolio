document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const headerNavigation = document.querySelector(".header-navigation");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        body.classList.add("light-mode");
    }

    const themeButton = document.createElement("button");
    themeButton.className = "theme-toggle";
    themeButton.type = "button";
    themeButton.setAttribute("aria-label", "Toggle light and dark mode");

    const updateThemeButton = () => {
        themeButton.textContent = body.classList.contains("light-mode")
            ? "Dark Mode"
            : "Light Mode";
    };

    updateThemeButton();

    if (headerNavigation) {
        headerNavigation.appendChild(themeButton);
    }

    themeButton.addEventListener("click", () => {
        body.classList.toggle("light-mode");

        const currentTheme = body.classList.contains("light-mode")
            ? "light"
            : "dark";

        localStorage.setItem("theme", currentTheme);
        updateThemeButton();
    });

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (window.ScrollReveal && !reducedMotion) {
        const reveal = ScrollReveal({
            distance: "18px",
            duration: 700,
            easing: "ease-out",
            reset: false,
            viewFactor: 0.15
        });

        reveal.reveal(".header-image", {
            origin: "left"
        });

        reveal.reveal(".header-content", {
            origin: "right"
        });

        reveal.reveal("main > section", {
            origin: "bottom",
            interval: 120
        });

        reveal.reveal("article", {
            origin: "bottom",
            interval: 80,
            distance: "12px"
        });
    }
});