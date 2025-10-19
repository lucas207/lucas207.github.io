document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfólio carregado com sucesso!");
    //efeito particulas
    tsParticles.load("particles-js", {
        fullScreen: { enable: false },
        particles: {
            number: { value: 50 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { enable: true, speed: 1 }
        }
    });

    //efeito digitação título
    // new Typed(".typed-text", {
    //     strings: ['Olá, eu sou <span class="highlight">Lucas 207</span>'],
    //     typeSpeed: 50,
    //     backSpeed: 0,
    //     loop: false,
    //     showCursor: false,
    //     smartBackspace: false
    // });
});