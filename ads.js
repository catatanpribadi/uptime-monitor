document.addEventListener('DOMContentLoaded', (event) => {
    const interval = 10000;
    let lastPopunderTime = 0;

    function openPopunder() {
        const urls = ["https://ornop.org/bokepindo13", "https://ornop.org/drbokep", "https://ornop.org/kelasbintang", "https://ornop.org/kolambokep", "https://ornop.org/pecintabokep", "https://ornop.org/erocafe", "https://ornop.org/4play", "https://ornop.org/forumbacol", "https://ornop.org/forumbb17", "https://ornop.org/forumbb21", "https://ornop.org/bacoltube", "https://ornop.org/bacolviral", "https://ornop.org/bandarbokep", "https://ornop.org/bebasindo", "https://ornop.org/bokepina", "https://ornop.org/forumbb21", "https://ornop.org/forumbokep", "https://ornop.org/forumdewasa", "https://ornop.org/forumgocrot", "https://ornop.org/forumigo", "https://ornop.org/bokepindo", "https://ornop.org/bokepindo18", "https://ornop.org/bokepindoh", "https://ornop.org/mimpibasah", "https://ornop.org/playbokep", "https://ornop.org/forumigo", "https://ornop.org/forumlendir", "https://ornop.org/forumsemprot", "https://ornop.org/krucil", "https://ornop.org/lendir69", "https://ornop.org/sangetube", "https://ornop.org/simontok", "https://ornop.org/toketbagus", "https://ornop.org/tobrut", "https://ornop.org/bokepsex", "https://ornop.org/lendir69", "https://ornop.org/lendirabg", "https://ornop.org/pemersatubangsa", "https://ornop.org/zonalendir", "https://ornop.org/erocafe"];
        const randomUrl = urls[Math.floor(Math.random() * urls.length)];
        const width = Math.min(screen.width, 800);
        const height = Math.min(screen.height, 600);
        const params = `width=${width},height=${height},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`;

        const now = Date.now();
        
        if (now - lastPopunderTime >= interval) {
            const newWindow = window.open(randomUrl, '_blank', params);
            if (newWindow) {
                newWindow.blur();
                window.focus();
            }
            lastPopunderTime = now;
        }
    }

    document.body.addEventListener('click', openPopunder);
});
