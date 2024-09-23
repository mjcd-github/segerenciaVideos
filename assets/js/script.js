const VideoModule = (function () {
    // Función privada que inserta el video en el iframe
    function insertarVideo(url, id) {
        const iframe = document.getElementById(id);
        if (iframe) {
            iframe.setAttribute('src', url);

        } else {
            console.error(`No se encontró un iframe con el ID: ${id}`);
        }
    }

    // Función pública que permite mostrar el video
    return {
        mostrarVideo: function (url, id) {
            insertarVideo(url, id);
        }
    };
})();


class Multimedia {
    constructor(url) {
        let _url = url; // URL protegida por closure

        // Método privado que permite acceder a la URL
        this.getUrl = function () {
            return _url;
        };
    }

    // Método setInicio que retorna un mensaje
     setInicio() {
         return "Este método es para realizar un cambio en la URL del video";
     }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url); // Llamada al constructor de la clase padre
        this.id = id; // Asignamos el id al iframe correspondiente
    }

    // Método que usa el módulo para reproducir el video
    playMultimedia() {
        
        const autoplayUrl = `${this.getUrl()}?autoplay=1`; // Agregar autoplay 

        VideoModule.mostrarVideo(autoplayUrl, this.id); // Llama a la función del módulo IIFE
    }

    // Método para establecer el tiempo de inicio
    setInicio(tiempo) {
        const iframe = document.getElementById(this.id);
        const nuevaUrl = `${this.getUrl()}?start=${tiempo}`;
        iframe.setAttribute('src', nuevaUrl);
    }
}

// Instancias de Reproductor para música, película y serie

const musica = new Reproductor("https://www.youtube.com/embed/CuNeHaeeNc0", "musica");
const peliculas = new Reproductor("https://www.youtube.com/embed/Zm6xZ1cdHMQ", "peliculas");
const series = new Reproductor("https://www.youtube.com/embed/pDHqAj4eJcM", "series");

// Establece el inicio en segundos de cada video
musica.setInicio(10);

peliculas.setInicio(93);

series.setInicio(30);