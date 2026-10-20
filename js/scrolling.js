
(function () {
    const SECCIONES = [
        { id: 'seccion_inicio',      etiqueta: 'INICIO' },
        { id: 'seccion_sobre_mi',    etiqueta: 'SOBRE MÍ' },
        { id: 'seccion_habilidades', etiqueta: 'HABILIDADES' },
        { id: 'seccion_proyectos',   etiqueta: 'PORTAFOLIO' }
    ];

    const items = SECCIONES
        .map((s) => ({ ...s, el: document.getElementById(s.id) }))
        .filter((s) => s.el);
    if (!items.length) return;

    const enlaces = document.querySelectorAll('.topbar-item, .topbar-menu-item');
    const tituloMovil = document.querySelector('.topbar-mobile-title');
    const topbar = document.querySelector('.topbar');
    const menuMovil = document.getElementById('mobileMenu');

    let actual = null;
    let bloqueado = false;   // evita parpadeos mientras el scroll va hacia un enlace
    let timer = null;

    const idDe = (a) => (a.getAttribute('href') || '').replace('#', '');

    function activar(id) {
        if (id === actual) return;
        actual = id;
        enlaces.forEach((a) => a.classList.toggle('active', idDe(a) === id));
        const s = items.find((x) => x.id === id);
        if (tituloMovil && s) tituloMovil.textContent = s.etiqueta;
    }

    function detectar() {
        if (bloqueado) return;
        // Línea de referencia: justo debajo del topbar
        const linea = (topbar ? topbar.offsetHeight : 64) + 24;
        let id = items[0].id;
        items.forEach((s) => {
            if (s.el.getBoundingClientRect().top <= linea) id = s.id;
        });
        // Al llegar al final de la página, queda activa la última sección
        const alFinal = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
        if (alFinal) id = items[items.length - 1].id;
        activar(id);
    }

    function soltar() {
        clearTimeout(timer);
        bloqueado = false;
        detectar();
    }

    // Al hacer clic: se marca de inmediato y se cierra el menú móvil
    enlaces.forEach((a) => {
        a.addEventListener('click', () => {
            const id = idDe(a);
            if (!document.getElementById(id)) return;
            activar(id);
            bloqueado = true;
            clearTimeout(timer);
            timer = setTimeout(soltar, 1200);
            window.addEventListener('scrollend', soltar, { once: true });
            if (menuMovil && menuMovil.classList.contains('show') && window.bootstrap) {
                bootstrap.Collapse.getOrCreateInstance(menuMovil).hide();
            }
        });
    });

    let pendiente = false;
    window.addEventListener('scroll', () => {
        if (pendiente) return;
        pendiente = true;
        requestAnimationFrame(() => { pendiente = false; detectar(); });
    }, { passive: true });
    window.addEventListener('resize', detectar);

    detectar();
})();