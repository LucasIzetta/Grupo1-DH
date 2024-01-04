document.addEventListener('DOMContentLoaded', function() {
    // Configurar el carrusel
    var currentIndex = 0;
    var items = document.querySelectorAll('.carrusel-item');
    var totalItems = items.length;
    var track = document.querySelector('.carrusel-track');
    var itemWidth = items[0].offsetWidth;
    var indicators = document.querySelectorAll('.indicator');

    // Mostrar el primer elemento
    showItem(currentIndex);

    // Función para mostrar el elemento actual
    function showItem(index) {
        var newTransformValue = -index * items[index].offsetWidth + 'px';
        track.style.transform = 'translateX(' + newTransformValue + ')';
        indicadorActual(index);
    }

    // Función para pasar al siguiente elemento
    function sigItem() {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        showItem(currentIndex);
    }

    // Función para pasar al elemento anterior
    function antItem() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1;
        }
        showItem(currentIndex);
    }

    //Funcion para marcar el indicador actual
    function indicadorActual(index) {
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    //Funcion para desplazar segun el indice
    function goToIndex(index) {
        if (index >= 0 && index < totalItems) {
            auxIndex = index;
            showItem(auxIndex);
        }
    }
    //Funcion para dar la accion del indicador seleccionado
    indicators.forEach((indicador, index) => {
        indicador.addEventListener('click', function() {
            goToIndex(index);
        });
    });

    // Eventos de los botones
    document.getElementById('sigBtn').addEventListener('click', sigItem);
    document.getElementById('antBtn').addEventListener('click', antItem);
});