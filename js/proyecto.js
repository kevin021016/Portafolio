
const PROYECTOS = {
    'sitio-web': {
        titulo: 'Sitio Web Funeraria',
        tipo: 'Sitio web',
        resumen: 'Portal web responsivo con información de servicios, catálogos, carrozas, instalaciones y pólizas.',
        tech: [['HTML', 'html'], ['CSS', 'css'], ['JavaScript', 'js']],
        imagenes: [
            { src: 'assets/img/device-shot.png', alt: 'Sitio web en laptop y celular', pie: 'Versión de escritorio y móvil' },
            { src: 'assets/img/mockup1-pag-web-funeraria.PNG', alt: 'Sitio web en celular', pie: 'Sección de pólizas en el celular' }
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
            { texto: 'Ver repositorio ↗', url: 'https://github.com/kevin021016/paginaWeb-funeraria.git', tipo: 'primary' },
            { texto: 'Ver sitio en vivo ↗', url: 'https://kevin021016.github.io/paginaWeb-funeraria/', tipo: 'outline' }
        ],
        detalles: { Rol: 'Diseño y desarrollo', Año: '2026', Estado: 'Terminado', Tipo: 'Sitio web' }
    },

    'sistema-net': {
        titulo: 'Sistema funerario de mascotas en .NET',
        tipo: 'Aplicación de escritorio',
        resumen: 'Panel de control para usuarios, clientes, contratos e inventario para una funeraria de mascotas.',
        tech: [['Laravel', 'laravel'], ['API REST', 'api'], ['PHP', 'php'], ['MySQL', 'mysql'], ['.NET', 'dotnet'], ['WPF', 'wpf'], ['C#', 'csharp'], ['Railway', 'railway']],
        imagenes: [
            { src: 'assets/img/panel_funeraria.png', alt: 'Lista de contratos', pie: 'Lista de contratos' }
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
            { texto: 'Repositorio de la app (WPF) ↗', url: 'https://github.com/kevin021016/Sistema-funerario-mascotas.git', tipo: 'primary' },
            { texto: 'Repositorio de la API (Laravel) ↗', url: 'https://github.com/kevin021016/Sistema-Funerario-Mascotas-API.git', tipo: 'outline' }
        ],
        detalles: { Rol: 'Desarrollo full stack', Año: '2026', Estado: 'En curso', Tipo: 'Aplicación de escritorio' }
    },

    'sistema-vue': {
        titulo: 'Sistema funerario de mascotas en Vue.js',
        tipo: 'Aplicación web',
        resumen: 'Panel de usuarios, clientes, contratos e inventario para una funeraria de mascotas.',
        tech: [['Laravel', 'laravel'], ['API REST', 'api'], ['PHP', 'php'], ['Vue', 'vue'], ['JavaScript', 'js']],
        imagenes: [
            { src: 'assets/img/mockup-sistema-web.png', alt: 'Lista de contratos en el panel web', pie: 'Lista de contratos' }
        ],
        descripcion: [
            'Versión web del panel administrativo, hecha con Vue.js y conectada a la misma API REST en Laravel.',
            'Permite llevar el control de usuarios, clientes, contratos e inventario desde el navegador.'
        ],
        caracteristicas: [
            'Panel web con tema oscuro',
            'Lista de contratos con búsqueda y acciones rápidas',
            'Gestión de clientes, contratos, usuarios e inventario',
        ],
        enlaces: [
            { texto: 'Repositorio del panel (Vue.js) ↗', url: 'https://github.com/kevin021016/sistema-funerario-web.git', tipo: 'primary' },
            { texto: 'Repositorio de la API (Laravel) ↗', url: 'https://github.com/kevin021016/API-sistema-funerario-web.git', tipo: 'outline' }
        ],
        detalles: { Rol: 'Desarrollo full stack', Año: '2026', Estado: 'Suspendido', Tipo: 'Aplicación web' }
    },

    /* ------------------ Proyectos universitarios (trabajo en equipo, rol front-end) ------------------ */

    'huella-verde': {
        titulo: 'Aplicación Huella Verde',
        tipo: 'Aplicación móvil · Proyecto universitario',
        resumen: 'Aplicación en React Native que permite conocer la huella de carbono de los usuarios, generar estadísticas y mostrar consejos para reducirla.',
        tech: [['API REST', 'api'], ['React', 'react'], ['JavaScript', 'js']],
        imagenes: [
            { src: 'assets/img/login-portrait.png', alt: 'Pantallas de inicio de sesión y estadísticas de Huella Verde', pie: 'Inicio de sesión' },
            { src: 'assets/img/inicio-portrait.png', alt: 'Pantallas de inicio o home screen', pie: 'Pantalla de inicio' },
            { src: 'assets/img/cuestionario-left.png', alt: 'Pantalla de cuestionario', pie: 'Pantalla de cuestionario' },
            { src: 'assets/img/estadísticas-left.png', alt: 'Pantalla de estadísticas del usuario', pie: 'Estadísticas de usuario' }
        ],
        descripcion: [
            'Huella Verde calcula la huella de carbono que genera cada usuario a partir de un cuestionario sobre sus hábitos cotidianos, como alimentación, consumo en casa y transporte.',
            'Los resultados se muestran con gráficas y datos, incluyendo una comparación con el promedio de México, y la app sugiere consejos para reducirla.',
            'Fue un proyecto universitario en equipo, donde mi rol fue el de desarrollador front-end.'
        ],
        caracteristicas: [
            'Registro e inicio de sesión de usuarios',
            'Cuestionario sobre hábitos cotidianos',
            'Gráficas y estadísticas de la huella de carbono',
            'Comparación con el promedio de México',
            'Consejos para reducir la huella',
            'Consumo de una API REST'
        ],
        enlaces: [
            { texto: 'Ver repositorio ↗', url: 'https://github.com/kevin021016/Sistema-Huella-de-Carbono.git', tipo: 'primary' }
        ],
        detalles: { Rol: 'Desarrollador front-end', Modalidad: 'Proyecto universitario en equipo', Tipo: 'Aplicación móvil' }
    },

    'pixoly': {
        titulo: 'Aplicación Pixoly (Red social)',
        tipo: 'Aplicación móvil · Proyecto universitario',
        resumen: 'Red social inspirada en Instagram para crear un perfil, compartir publicaciones e interactuar con otros usuarios.',
        tech: [['API REST', 'api'], ['React', 'react'], ['JavaScript', 'js']],
        imagenes: [
            { src: 'assets/img/login2-portrait.png', alt: 'Pantallas de inicio de sesión', pie: 'Inicio de sesión' },
            { src: 'assets/img/post-left.png', alt: 'Pantalla de feed de publicaciones', pie: 'Feed de publicaciones' },
            { src: 'assets/img/perfil-portrait.png', alt: 'Pantallas opciones de usuario', pie: 'Perfil de usuario' }

        ],
        descripcion: [
            'Pixoly es una aplicación de red social similar a Instagram. Permite crear una cuenta, publicar contenido, comentar, dar like y guardar las publicaciones que más te gustan.',
            'Fue un proyecto universitario en equipo, donde mi rol fue el de desarrollador front-end.'
        ],
        caracteristicas: [
            'Registro e inicio de sesión',
            'Perfil de usuario y ajustes de la cuenta',
            'Publicaciones con imagen',
            'Likes y caja de comentarios en cada publicación',
            'Publicaciones guardadas',
            'Consumo de una API REST'
        ],
        enlaces: [
            { texto: 'Ver repositorio ↗', url: 'https://github.com/kevin021016/ProyectoRedSocial.git', tipo: 'primary' }
        ],
        detalles: { Rol: 'Desarrollador front-end', Modalidad: 'Proyecto universitario en equipo', Tipo: 'Aplicación móvil' }
    },

    'reservas-mesas': {
        titulo: 'Sistema de reservación de mesas',
        tipo: 'Aplicación web · Proyecto universitario',
        resumen: 'Sistema para restaurantes donde un administrador gestiona clientes, mesas y reservaciones.',
        tech: [['Laravel', 'laravel'], ['API REST', 'api'], ['PHP', 'php'], ['HTML', 'html'], ['CSS', 'css'], ['JavaScript', 'js']],
        imagenes: [
            { src: 'assets/img/restaurante-mockup.png', alt: 'Panel de clientes del sistema de reservaciones', pie: 'Panel de clientes' }
            // Agrega más pantallas: { src: 'assets/img/reservas-mesas-2.png', alt: '...', pie: '...' },
        ],
        descripcion: [
            'Sistema hecho con Laravel para un restaurante. Un usuario administrador puede registrar clientes, mesas y reservaciones desde un panel de control.',
            'Fue un proyecto universitario en equipo, donde mi rol fue el de desarrollador front-end.'
        ],
        caracteristicas: [
            'Acceso para un usuario administrador',
            'Registro, edición y eliminación de clientes',
            'Gestión de mesas del restaurante',
            'Registro y control de reservaciones',
            'Panel con navegación lateral'
        ],
        enlaces: [
            { texto: 'Ver repositorio ↗', url: 'https://github.com/kevin021016/ProyectoFinalReservas.git', tipo: 'primary' }
        ],
        detalles: { Rol: 'Desarrollador front-end', Modalidad: 'Proyecto universitario en equipo', Tipo: 'Aplicación web' }
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