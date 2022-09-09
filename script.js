document.addEventListener('DOMContentLoaded', () => {
    // Crear variables globales
    let debug_menu = document.querySelector('.debug-menu');
    let debug_toggles = {
        'slow-load': true,
        'slow-scroll': false,
        'slow-cursor': false,
    };
    // Cambiar checkboxes en el DOM
    function updateCheckboxDOM(key) {
        if (debug_toggles[key] === true) {
            debug_menu.querySelector(`#${key}`).setAttribute('checked', true);
        } else if (debug_toggles[key] === false) {
            debug_menu.querySelector(`#${key}`).removeAttribute('checked');
        }
    }
    for (let key of Object.keys(debug_toggles)) {
        updateCheckboxDOM(key);
    }

    // Slow Load
    function toggleSlowLoad() {
        debug_toggles['slow-load'] = !debug_toggles['slow-load'];
        updateCheckboxDOM('slow-load');

        if (debug_toggles['slow-load']) {
            // Activar slow load
            console.log('Activar slow load');
        } else {
            // Desactivar
            console.log('Desactivar slow load');
        }
    }
    debug_toggles['slow-load'] = !debug_toggles['slow-load'];
    toggleSlowLoad();

    // Slow Scroll
    function toggleSlowScroll() {
        debug_toggles['slow-scroll'] = !debug_toggles['slow-scroll'];
        updateCheckboxDOM('slow-scroll');

        if (debug_toggles['slow-scroll']) {
            // Activar slow scroll
            console.log('Activar slow scroll');
        } else {
            // Desactivar
            console.log('Desactivar slow scroll');
        }
    }
    debug_toggles['slow-scroll'] = !debug_toggles['slow-scroll'];
    toggleSlowScroll();

    // Slow Cursor
    function toggleSlowCursor() {
        debug_toggles['slow-cursor'] = !debug_toggles['slow-cursor'];
        updateCheckboxDOM('slow-cursor');

        if (debug_toggles['slow-cursor']) {
            // Activar slow cursor
            console.log('Activar slow cursor');
        } else {
            // Desactivar
            console.log('Desactivar slow cursor');
        }
    }
    debug_toggles['slow-cursor'] = !debug_toggles['slow-cursor'];
    toggleSlowCursor();

    // Event listeners del menu
    function setDebugMenuClickListeners() {
        let checkbox;
        checkbox = document.querySelector(`#slow-load`);
        checkbox.parentElement.addEventListener('click', toggleSlowLoad);

        checkbox = document.querySelector(`#slow-scroll`);
        checkbox.parentElement.addEventListener('click', toggleSlowScroll);

        checkbox = document.querySelector(`#slow-cursor`);
        checkbox.parentElement.addEventListener('click', toggleSlowCursor);
    }
    setDebugMenuClickListeners();
});