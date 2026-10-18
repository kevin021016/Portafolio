/* ============================================================
   Vista de detalle de proyecto
   Se abre con: proyecto.html?p=sitio-web | sistema-net | sistema-vue
   ============================================================ */

const PROYECTOS = {
    'sitio-web': {
        titulo: 'Sitio Web Funeraria',
        tipo: 'Sitio web',
        resumen: 'Portal web responsivo con información de servicios, catálogos, carrozas, instalaciones y pólizas.',
        tech: [['HTML', 'html'], ['CSS', 'css'], ['JavaScript', 'js']],
        imagenes: [
            { src: '/assets/img/device-shot.png', alt: 'Sitio web en laptop y celular', pie: 'Versión de escritorio y móvil' },
            { src: '/assets/img/mockup1-pag-web-funeraria.PNG', alt: 'Sitio web en celular', pie: 'Sección de pólizas en el celular' }
        ],
        descripcion: [
            'Sitio informativo para una funeraria de mascotas, pensado para que las familias consulten servicios, catálogo, carrozas, instalaciones y pólizas desde cualquier dispositivo.',
            'Está diseñado primero para celular y se adapta a tabletas y computadoras.'
        ],
        caracteristicas: [
            'Diseño responsivo para celular, tableta y escritorio',
            'Catálogo de productos con categorías',
            'Secciones de servicios, instalaciones y carrozas',
            'Planes de pólizas de seguro',
            'Botón flotante de WhatsApp y enlaces a redes sociales'
        ],
        enlaces: [
            { texto: 'Ver repositorio ↗', url: '#', tipo: 'primary' },
            { texto: 'Ver sitio en vivo ↗', url: '#', tipo: 'outline' }
        ],
        detalles: { Rol: 'Diseño y desarrollo', Año: '2026', Estado: 'Terminado', Tipo: 'Sitio web' }
    },

    'sistema-net': {
        titulo: 'Sistema funerario de mascotas en .NET',
        tipo: 'Aplicación de escritorio',
        resumen: 'Panel de control para usuarios, clientes, contratos e inventario para una funeraria de mascotas.',
        tech: [['Laravel', 'laravel'], ['API REST', 'api'], ['PHP', 'php'], ['MySQL', 'mysql'], ['.NET', 'dotnet'], ['WPF', 'wpf'], ['C#', 'csharp'], ['Railway', 'railway']],
        imagenes: [
            { src: '/assets/img/panel_funeraria.png', alt: 'Lista de contratos', pie: 'Lista de contratos' }
            // Agrega más: { src: '/assets/img/usuarios.png', alt: '...', pie: '...' },
        ],
        descripcion: [
            'Aplicación de escritorio hecha con WPF y C# para administrar una funeraria de mascotas: usuarios, clientes, contratos, inventario y reportes.',
            'Se conecta a una API REST hecha en Laravel, con base de datos MySQL y desplegada en Railway.'
        ],
        caracteristicas: [
            'Gestión de usuarios, clientes, contratos e inventario',
            'Lista de contratos con búsqueda por folio',
            'Reportes del negocio',
            'Consumo de una API REST propia',
            'API desplegada en la nube con base de datos MySQL'
        ],
        enlaces: [
            { texto: 'Repositorio de la app (WPF) ↗', url: '#', tipo: 'primary' },
            { texto: 'Repositorio de la API (Laravel) ↗', url: '#', tipo: 'outline' }
        ],
        detalles: { Rol: 'Desarrollo full stack', Año: '2026', Estado: 'Terminado', Tipo: 'Aplicación de escritorio' }
    },

    'sistema-vue': {
        titulo: 'Sistema funerario de mascotas en Vue.js',
        tipo: 'Aplicación web',
        resumen: 'Panel de usuarios, clientes, contratos e inventario para una funeraria de mascotas.',
        tech: [['Laravel', 'laravel'], ['API REST', 'api'], ['PHP', 'php'], ['Vue', 'vue'], ['JavaScript', 'js']],
        imagenes: [
            { src: '/assets/img/panel-vue.png', alt: 'Lista de contratos en el panel web', pie: 'Lista de contratos' }
        ],
        descripcion: [
            'Versión web del panel administrativo, hecha con Vue.js y conectada a la misma API REST en Laravel.',
            'Permite llevar el control de usuarios, clientes, contratos e inventario desde el navegador.'
        ],
        caracteristicas: [
            'Panel web con tema oscuro',
            'Lista de contratos con búsqueda y acciones rápidas',
            'Gestión de clientes, usuarios e inventario',
            'Comparte la misma API que la app de escritorio'
        ],
        enlaces: [
            { texto: 'Repositorio del panel (Vue.js) ↗', url: '#', tipo: 'primary' },
            { texto: 'Repositorio de la API (Laravel) ↗', url: '#', tipo: 'outline' }
        ],
        detalles: { Rol: 'Desarrollo full stack', Año: '2026', Estado: 'Terminado', Tipo: 'Aplicación web' }
    }
};

/* ------------------------------------------------------------ */

(function () {
    const $ = (id) => document.getElementById(id);
    const slug = new URLSearchParams(location.search).get('p');
    const claves = Object.keys(PROYECTOS);
    const p = PROYECTOS[slug];

    if (!p) { $('pdVacio').hidden = false; return; }
    $('pdContenido').hidden = false;
    document.title = p.titulo + ' | Kevin Parra';

    function el(tag, clase, texto) {
        const e = document.createElement(tag);
        if (clase) e.className = clase;
        if (texto != null) e.textContent = texto;
        return e;
    }

    // Encabezado
    $('pdTipo').textContent = p.tipo;
    $('pdTitulo').textContent = p.titulo;
    $('pdResumen').textContent = p.resumen;
    p.tech.forEach(([nombre, clase]) => $('pdTech').appendChild(el('span', 'badge skill-badge ' + clase, nombre)));

    // Texto
    p.descripcion.forEach((t) => $('pdDesc').appendChild(el('p', '', t)));
    p.caracteristicas.forEach((t) => $('pdFeat').appendChild(el('li', '', t)));

    // Enlaces (los que tengan url "#" se muestran apagados hasta que pongas el enlace real)
    p.enlaces.forEach((l) => {
        const a = el('a', 'pd-btn ' + l.tipo + (l.url === '#' ? ' disabled' : ''), l.texto);
        a.href = l.url;
        if (l.url !== '#') { a.target = '_blank'; a.rel = 'noopener'; }
        $('pdLinks').appendChild(a);
    });

    // Detalles
    Object.entries(p.detalles).forEach(([k, v]) => {
        $('pdMeta').appendChild(el('dt', '', k));
        $('pdMeta').appendChild(el('dd', '', v));
    });

    // Anterior / siguiente
    const i = claves.indexOf(slug);
    const anterior = PROYECTOS[claves[(i - 1 + claves.length) % claves.length]];
    const siguiente = PROYECTOS[claves[(i + 1) % claves.length]];
    if (claves.length > 1) {
        [['prev', anterior, '← Proyecto anterior', claves[(i - 1 + claves.length) % claves.length]],
         ['next', siguiente, 'Siguiente proyecto →', claves[(i + 1) % claves.length]]].forEach(([cls, proy, etiqueta, clave]) => {
            const a = el('a', cls);
            a.href = 'proyecto.html?p=' + clave;
            a.appendChild(el('small', '', etiqueta));
            a.appendChild(document.createTextNode(proy.titulo));
            $('pdPager').appendChild(a);
        });
    }

    /* ---------------- Galería ---------------- */
    const imgs = p.imagenes;
    let actual = 0;
    const lb = $('lightbox');

    imgs.forEach((im, n) => {
        const b = el('button', 'gallery-thumb');
        b.type = 'button';
        b.setAttribute('aria-label', 'Ver imagen ' + (n + 1) + ': ' + im.alt);
        const t = document.createElement('img');
        t.src = im.src; t.alt = '';
        b.appendChild(t);
        b.addEventListener('click', () => mostrar(n));
        $('galThumbs').appendChild(b);
    });

    function mostrar(n) {
        actual = (n + imgs.length) % imgs.length;
        const im = imgs[actual];
        $('galImg').src = im.src;
        $('galImg').alt = im.alt;
        $('galPie').textContent = im.pie || '';
        $('galCount').textContent = (actual + 1) + ' / ' + imgs.length;
        $('lbImg').src = im.src;
        $('lbImg').alt = im.alt;
        $('lbPie').textContent = im.pie || '';
        $('galThumbs').querySelectorAll('.gallery-thumb').forEach((b, k) =>
            b.setAttribute('aria-current', k === actual ? 'true' : 'false'));
    }

    // Con una sola imagen se ocultan flechas, contador y miniaturas
    if (imgs.length < 2) {
        ['galPrev', 'galNext', 'galCount', 'galThumbs', 'lbPrev', 'lbNext'].forEach((id) => { $(id).hidden = true; });
    }

    $('galPrev').addEventListener('click', () => mostrar(actual - 1));
    $('galNext').addEventListener('click', () => mostrar(actual + 1));
    $('lbPrev').addEventListener('click', () => mostrar(actual - 1));
    $('lbNext').addEventListener('click', () => mostrar(actual + 1));
    $('galAbrir').addEventListener('click', () => lb.showModal());
    $('lbCerrar').addEventListener('click', () => lb.close());
    lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); }); // clic fuera

    // Flechas del teclado
    document.addEventListener('keydown', (e) => {
        const enGaleria = lb.open || document.querySelector('.gallery').contains(document.activeElement);
        if (!enGaleria || imgs.length < 2) return;
        if (e.key === 'ArrowLeft') mostrar(actual - 1);
        if (e.key === 'ArrowRight') mostrar(actual + 1);
    });

    // Deslizar con el dedo en el celular
    let x0 = null;
    const principal = document.querySelector('.gallery-main');
    principal.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    principal.addEventListener('touchend', (e) => {
        if (x0 === null || imgs.length < 2) return;
        const dx = e.changedTouches[0].clientX - x0;
        if (Math.abs(dx) > 40) mostrar(actual + (dx < 0 ? 1 : -1));
        x0 = null;
    });

    mostrar(0);
})();