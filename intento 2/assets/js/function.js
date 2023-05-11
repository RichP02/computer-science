const peliculas = [
    {
        "name": "CAPTAIN AMERICA THE FIRST AVENGER",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "22 de Julio de 2011",
        "image": "https://es.web.img3.acsta.net/pictures/14/01/31/16/12/220933.jpg"
    },
    {
        "name": "CAPTAIN MARVEL",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "8 de Marzo de 2019",
        "image": "https://m.media-amazon.com/images/I/71K3S+Tk4OL.jpg"
    },
    {
        "name": "IRON MAN 1",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "2 de Mayo de 2008",
        "image": "https://pics.filmaffinity.com/Iron_Man-108960873-large.jpg"
    },
    {
        "name": "IRON MAN 2",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "7 de Mayo de 2010",
        "image": "https://m.media-amazon.com/images/M/MV5BZGVkNDAyM2EtYzYxYy00ZWUxLTgwMjgtY2VmODE5OTk3N2M5XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg"
    },
    {
        "name": "THE INCREIBLE HULK",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "13 de Junio de 2008",
        "image": "https://image.tmdb.org/t/p/original/vcFeElC8eXI668WSIxcDNkJSBxv.jpg"
    },
    {
        "name": "THOR",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "6 de Mayo de 2011",
        "image": "https://cdn.shopify.com/s/files/1/0265/2769/4934/products/thor_ver5_xxlg_1200x1200.jpg?v=1576002103"
    },
    {
        "name": "THE AVENGERS",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "4 de Mayo de 2012",
        "image": "https://m.media-amazon.com/images/I/71u9+g9J1pL._AC_UF894,1000_QL80_.jpg"
    },
    {
        "name": "THOR: THE DARK WORLD",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "8 de Noviembre de 2013",
        "image": "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_.jpg"
    },
    {
        "name": "IRON MAN 3",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "3 de Mayo de 2013",
        "image": "https://pics.filmaffinity.com/Iron_Man_3-473505612-large.jpg"
    },
    {
        "name": "CAPTAIN AMERICA THE WINTER SOLDIER",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "4 de Abril de 2014",
        "image": "https://es.web.img3.acsta.net/medias/nmedia/18/84/79/82/20099009.jpg"
    },
    {
        "name": "THE GUARDIANS OF THE GALAXY",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "1 de Agosto de 2014",
        "image": "https://m.media-amazon.com/images/I/71lbFfxfMtL._AC_UF894,1000_QL80_.jpg"
    },
    {
        "name": "THE GUARDIANS OF THE GALAXY VOL. 2",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "5 de Mayo de 2017",
        "image": "https://http2.mlstatic.com/D_NQ_NP_979005-MLM27394320996_052018-O.jpg"
    },
    {
        "name": "THE AVENGERS AGE OF ULTRON",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "1 de Mayo de 2015",
        "image": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg"
    },
    {
        "name": "ANT-MAN",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "17 de Julio de 2015",
        "image": "https://m.media-amazon.com/images/I/71E9abm2ayL.jpg"
    },
    {
        "name": "CAPTAIN AMERICA CIVIL WAR",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "6 de Mayo de 2016",
        "image": "https://www.cinemascomics.com/wp-content/uploads/2016/03/Capitán-América-Civil-War-poster.jpg"
    },
    {
        "name": "SPIDER-MAN HOMECOMING",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "7 de Julio de 2017",
        "image": "https://m.media-amazon.com/images/I/A1mjWWH6mFL.jpg"
    },
    {
        "name": "BLACK WIDOW",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "9 de Julio de 2021",
        "image": "https://m.media-amazon.com/images/I/71K2XEK0DVS._AC_UF894,1000_QL80_.jpg"
    },
    {
        "name": "BLACK PANTHER",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "3 de Noviembre de 2017",
        "image": "https://cdn.shopify.com/s/files/1/0265/2769/4934/products/black_panther_ver4_xlg_1024x1024@2x.jpg?v=1585589828"
    },
    {
        "name": "DOCTOR STRANGE",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "4 de Noviembre de 2016",
        "image": "https://m.media-amazon.com/images/I/A12-NFRep6L.jpg"
    },
    {
        "name": "THOR RAGNAROK",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "3 de Noviembre de 2017",
        "image": "https://m.media-amazon.com/images/I/A1HBBNzBdxL.jpg"
    },
    {
        "name": "ANT-MAN AND THE WASP",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "26 de Junio de 2018",
        "image": "https://i0.wp.com/frikipunch.com/wp-content/uploads/2018/06/Ant-Man-and-The-Wasp_poster-LatAm.jpg?fit=2756%2C3937"
    },
    {
        "name": "AVENGERS INFINITY WAR",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "27 de Abri de 2018",
        "image": "https://m.media-amazon.com/images/I/71eHZFw+GlL.jpg"
    },
    {
        "name": "AVENGERS ENDGAME",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "25 de Abri de 2019",
        "image": "https://i.etsystatic.com/13367669/r/il/db21fd/2198543930/il_570xN.2198543930_4qne.jpg"
    },
    {
        "name": "LOKI",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "(Disney+) 9 de Junio de 2021",
        "image": "https://m.media-amazon.com/images/I/812p2RUxeQS._AC_UF894,1000_QL80_.jpg"
    },
    {
        "name": "WHAT IF...?",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "(Disney+) 11 de Agosto de 2021",
        "image": "https://cdn.marvel.com/content/1x/online_2_0.jpg"
    },
    {
        "name": "WandaVision",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "(Disney+) 15 de Enero de 2021",
        "image": "https://m.media-amazon.com/images/I/71nwO6MO0vS.jpg"
    },
    {
        "name": "THE FALCON AND THE WINTER SOLDIER",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "(Disney+) 19 de Marzo de 2021",
        "image": "https://m.media-amazon.com/images/I/71Ce39r24pS._AC_UF894,1000_QL80_.jpg"
    },
    {
        "name": "SHANG-CHI ANT THE LEGEND OF THE TEN RINGS",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "3 de Septiembre de 2021",
        "image": "https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
    },
    {
        "name": "ETERNALS",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "5 de Noviembre de 2021",
        "image": "https://cdn.marvel.com/content/1x/online_10.jpg"
    },
    {
        "name": "SPIDER-MAN FAR FROM HOME",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "2 de Julio de 2019",
        "image": "https://m.media-amazon.com/images/I/81BiQGa2aIL.jpg"
    },
    {
        "name": "SPIDER-MAN NO WAY HOME",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "17 de Diciembre de 2021",
        "image": "https://m.media-amazon.com/images/I/815IBWT+WeL.jpg"
    },
    {
        "name": "DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "6 de Mayo de 2022",
        "image": "https://static.cinepolis.com/resources/mx/movies/posters/414x603/39033-562654-20220503052138.jpg"
    },
    {
        "name": "Hawkeye",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "(Disney+) 24 de Noviembre de 2021",
        "image": "https://as01.epimg.net/meristation/imagenes/2021/10/25/noticias/1635161355_352592_1635161449_sumario_normal.jpg"
    },
    {
        "name": "MOON KNIGHT",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "(Disney+) 30 de Marzo de 2022",
        "image": "https://i.etsystatic.com/18242346/r/il/fafd96/3848402393/il_570xN.3848402393_dl9c.jpg"
    },
    {
        "name": "SHE-HULK ATTORNEY AT LAW",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "(Disney+) 18 de Agosto de 2022",
        "image": "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/LXR4DQCCMFFW7CEWUE7QRUGJTU.jpg"
    },
    {
        "name": "MS. MARVEL",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "(Disney+) 8 de Junio 2022",
        "image": "https://m.media-amazon.com/images/I/81tuzM9RUYL._AC_UF894,1000_QL80_.jpg"
    },
    {
        "name": "THOR LOVE AND THUNDER",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "8 de Julio de 2022",
        "image": "https://cdn.shopify.com/s/files/1/0265/2769/4934/products/thor_love_and_thunder_ver3_xxlg_1024x1024@2x.jpg?v=1653427383"
    },
    {
        "name": "BLACK PANTHER WAKANDA FOREVER",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "11 de Noviembre de 2022",
        "image": "https://assets-prd.ignimgs.com/2022/07/24/fyzqjuevsaexgth-1658626858209.jpg"
    },
    {
        "name": "ANT-MAN AND THE WASP QUANTUMANIA",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "17 de Febrero de 2023",
        "image": "https://lumiere-a.akamaihd.net/v1/images/ant-man_and_the_wasp_quantumania_poster_2_la_6eea32a6.jpeg?region=0,0,743,1100"
    },
    {
        "name": "THE GUARDIANS OF THE GALAXY HOLIDAY SPECIAL",
        "reparto":"",
        "directores":"",
        "actores":"",
        "estreno": "(Disney+) 25 de Noviembre de 2022",
        "image": "https://i0.wp.com/www.tomosygrapas.com/wp-content/uploads/2022/10/Poster-Guardianes-Christmas.jpg?w=743&h=1100&ssl=1"
    }
]



const contenedor = document.querySelector('.contenedor');

for (let i = 0; i < peliculas.length; i++) {
    const pelicula = peliculas[i];

    const divCard = document.createElement('div');
    divCard.className = 'image-card';

    const imagen = document.createElement('img');
    imagen.src = pelicula.image;
    imagen.className = 'imagen';
    imagen.addEventListener('click', mostrarImagen);

  // Crea un nuevo elemento div para el título de la película
    const titulo = document.createElement('div');
    titulo.textContent = pelicula.name;
    titulo.className = 'titulo';

    divCard.appendChild(imagen);
    divCard.appendChild(titulo);
    contenedor.appendChild(divCard);
}

const input = document.getElementById('input-peliculas');
input.addEventListener('input', buscarPeliculas);

function buscarPeliculas() {
    const valorInput = input.value.toUpperCase();
    const tarjetasPeliculas = document.getElementsByClassName('image-card');

    for (let i = 0; i < tarjetasPeliculas.length; i++) {
        const pelicula = tarjetasPeliculas[i];
        const nombrePelicula = pelicula.querySelector('.titulo').textContent.toUpperCase();
        if (nombrePelicula.includes(valorInput)) {
            pelicula.style.display = 'block';
        } else {
            pelicula.style.display = 'none';
        }
    }
}






function mostrarImagen() {
    const pelicula = peliculas.find(pelicula => pelicula.image === this.src); 

    const ventanaEmergente = document.createElement('div');
    ventanaEmergente.className = 'ventana-emergente';

    const imagenVentana = document.createElement('img');
    imagenVentana.src = this.src;
    imagenVentana.className = 'imagen-ventana';

    const contenidoVentana = document.createElement('div');
    contenidoVentana.className = 'contenido-ventana';
  
    const tituloVentana = document.createElement('h2');
    tituloVentana.textContent = pelicula.name;

    const repartoVentana = document.createElement('p');
    repartoVentana.textContent = `Reparto: ${pelicula.reparto}`;

    const directoresVentana = document.createElement('p');
    directoresVentana.textContent = `Directores: ${pelicula.directores}`;

    const actoresVentana = document.createElement('p');
    actoresVentana.textContent = `Actores: ${pelicula.actores}`;

    const estrenoVentana = document.createElement('p');
    estrenoVentana.textContent = `Estreno: ${pelicula.estreno}`;

    contenidoVentana.appendChild(tituloVentana);
    contenidoVentana.appendChild(repartoVentana);
    contenidoVentana.appendChild(directoresVentana);
    contenidoVentana.appendChild(actoresVentana);
    contenidoVentana.appendChild(estrenoVentana);
  
    ventanaEmergente.appendChild(imagenVentana);
    ventanaEmergente.appendChild(contenidoVentana);


    const botonCerrar = document.createElement('button');
    botonCerrar.textContent = 'Cerrar';
    botonCerrar.className = 'boton-cerrar';
    ventanaEmergente.appendChild(botonCerrar);

    document.body.appendChild(ventanaEmergente);

    botonCerrar.addEventListener('click', cerrarImagen);
}




function cerrarImagen() {
    this.parentNode.remove();
}