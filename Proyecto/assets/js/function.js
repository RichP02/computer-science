const peliculas = [
    {
        "name": "CAPTAIN AMERICA THE FIRST AVENGER",
        "actores":"Chris Evans, Hayley Atwell, Sebastian Stan, Hugo Weaving, Stanley Tucci, Joe Johnston",
        "directores":"Joe Johnston",
        "personajes":"Steve Rogers, Peggy Carter, Bucky Barnes, Cráneo Rojo, Abraham Erskine, Nick Fury",
        "estreno": "22 de Julio de 2011",
        "image": "https://es.web.img3.acsta.net/pictures/14/01/31/16/12/220933.jpg"
    },
    {
        "name": "CAPTAIN MARVEL",
        "actores":"Brie Larson, Joe Johnston, Gemma Chan, Jude Law, Lashana Lynch, Mckenna Grace",
        "directores":"Anna Borden, Ryan Fleck",
        "personajes":"carol Danvers, Nick Fury, Doctora, Minerva, Yon-Rogg, Maria Rambeau, Carol Danvers",
        "estreno": "8 de Marzo de 2019",
        "image": "https://m.media-amazon.com/images/I/71K3S+Tk4OL.jpg"
    },
    {
        "name": "IRON MAN 1",
        "actores":"Robert Downey Jr., Jon Favreau, Gwyneth Paltrow, Terrence Howard, Jeff Bridges, Leslie Bibb, Paul Bettany",
        "directores":"Jon Favreau",
        "personajes":"Tony Stark, Happy Hogan, Pepper Potts, James Rhodes, Iron Monger, Christine Everhart, Jarvis",
        "estreno": "2 de Mayo de 2008",
        "image": "https://pics.filmaffinity.com/Iron_Man-108960873-large.jpg"
    },
    {
        "name": "IRON MAN 2",
        "actores":"Robert Downey Jr., Jon Favreau, Mickey Rourke, Don Cheadle, Scarlett Johansson, Gwyneth Paltrow, Sam Rocwell, Stan Lee",
        "directores":"Jon Favreau",
        "personajes":"Tony Stark, Happy Hogan, Látigo Negro, James Rhodes, Natasha Romanoff, Pepper Potts, Justin Hammer",
        "estreno": "7 de Mayo de 2010",
        "image": "https://m.media-amazon.com/images/M/MV5BZGVkNDAyM2EtYzYxYy00ZWUxLTgwMjgtY2VmODE5OTk3N2M5XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg"
    },
    {
        "name": "THE INCREIBLE HULK",
        "actores":"Edward Norton, Liv Tyler, Tim Roth, Tim Blake Nelson, Ty Burrell y William Hurt",
        "directores":"Louis Leterrier",
        "personajes":"Bruce Banner, Betty Ross, Emil Blonsky, Samuel Sterns, Leonard Sterns, Thaddeus Ross",
        "estreno": "13 de Junio de 2008",
        "image": "https://image.tmdb.org/t/p/original/vcFeElC8eXI668WSIxcDNkJSBxv.jpg"
    },
    {
        "name": "THOR",
        "actores":"Chris Hemsworth, Natalie Portman, Tom Hiddleston, Stellan Skarsgård, Colm Feore, Ray Stevenson, Idris Elba y Anthony Hopkins",
        "directores":"Kenneth Branagh",
        "personajes":"Thor, Jane Foster, Loki, Erik Selving, Laufey, Volstagg, Heimdall, Odin",
        "estreno": "6 de Mayo de 2011",
        "image": "https://cdn.shopify.com/s/files/1/0265/2769/4934/products/thor_ver5_xxlg_1200x1200.jpg?v=1576002103"
    },
    {
        "name": "THE AVENGERS",
        "actores":" Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson and Jeremy Renner as the titular team, along with Tom Hiddleston, Clark Gregg, Cobie Smulders, Stellan Skarsgård, Samuel L. Jackson",
        "directores":"Joss Whedon",
        "personajes":"Tony Star, Steve Rogers, Bruce Banner, Thor, Natasha Romanoff, Clint Barton, Loki, Phil Coulson, Maria Hill, Erick Selving, Nick Fury",
        "estreno": "4 de Mayo de 2012",
        "image": "https://m.media-amazon.com/images/I/71u9+g9J1pL._AC_UF894,1000_QL80_.jpg"
    },
    {
        "name": "THOR: THE DARK WORLD",
        "actores":"Chris Hemsworth, Natalie Portman, Tom Hiddleston, Zachary Levi, Christopher Eccleston, Kat Dennings, Jaime Alexander, Anthony Hopkins",
        "directores":"Alan Taylor",
        "personajes":"Thor, Jane Foster, Loki, Fandral, Malekith el Maldito, Darcy Lewis, Sif, Odín",
        "estreno": "8 de Noviembre de 2013",
        "image": "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_.jpg"
    },
    {
        "name": "IRON MAN 3",
        "actores":"Robert Downey Jr., Ben Kingsley, Jon Favreau, Gwyneth Paltrow, Guy Pearce, Don Cheadle, Ty Simpkins, Rebecca Hall",
        "directores":"Shane Black",
        "personajes":"Tony Stark, Trevor Slattery, Happy Hogan, Pepper Potts, Aldrich Killian, Máquina de Guerra, Harley, Maya Hansen",
        "estreno": "3 de Mayo de 2013",
        "image": "https://pics.filmaffinity.com/Iron_Man_3-473505612-large.jpg"
    },
    {
        "name": "CAPTAIN AMERICA THE WINTER SOLDIER",
        "actores":"Chris Evans, Sebastian Stan, Anthony Mackie, Scarlett Johansson, Samuel L. Jackson, Emily Vancamp, Frank Grillo, Joe Russo",
        "directores":"Anthony Russo",
        "personajes":"Steve Rogers, Bucky Barnes, Falcon, Natasha Romanoff, Nick Fury, Sharon Carter, Calavera, Dr. Fine",
        "estreno": "4 de Abril de 2014",
        "image": "https://es.web.img3.acsta.net/medias/nmedia/18/84/79/82/20099009.jpg"
    },
    {
        "name": "THE GUARDIANS OF THE GALAXY",
        "actores":"Chris Pratt, Zoe Saldaña, Vin Diesel, Sean Gunn, karen Gillan, Dave Bautista Cooper, Michael Rooker",
        "directores":"James Gunn",
        "personajes":"Peter Quill, Gamora, Groot, Kraglin, Nébula, Drax, Rocket, Yondu",
        "estreno": "1 de Agosto de 2014",
        "image": "https://m.media-amazon.com/images/I/71lbFfxfMtL._AC_UF894,1000_QL80_.jpg"
    },
    {
        "name": "THE GUARDIANS OF THE GALAXY VOL. 2",
        "actores":"Chris Pratta, Zoe Saldaña, Kurt Russell, Michael Rooker, Karen Gillan Vin Diesel, Sean Gunn, Pom Klementieff, Dave Bautista, Bradley Cooper",
        "directores":"James Gunn",
        "personajes":"Peter Quill, Gamora, Ego, Yondu, Nébula, Groot, Kraglin, Mantis, Drax, Rocket",
        "estreno": "5 de Mayo de 2017",
        "image": "https://http2.mlstatic.com/D_NQ_NP_979005-MLM27394320996_052018-O.jpg"
    },
    {
        "name": "THE AVENGERS AGE OF ULTRON",
        "actores":"Robert Downey Jr., Chris Evans, Scarlett Johansson, Mark Ruffalo, Jeremy Renner, Chris Hemsworth, James Spader, Elizabeth Olsen, Aaron Taylor-Johnson, Paul Bettany, Samuel L. Jackson",
        "directores":"Joss Whedon",
        "personajes":"Tony Stark, Steve Rogers, Natasha Romanoff, Bruce Banner, Clint Barton, Thor, Ultron, Wanda Maximoff, Prieto Maximoff, Visión, Nick Fury",
        "estreno": "1 de Mayo de 2015",
        "image": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg"
    },
    {
        "name": "ANT-MAN",
        "actores":"Paul Rudd, Evangeline Lilly, Corey Stoll, Michael Douglas, Michael Peña",
        "directores":"Peyton Reed",
        "personajes":"Scott Lang, Hope Van Dyne, Darren Cross, Dr. Hank Pym, Luis",
        "estreno": "17 de Julio de 2015",
        "image": "https://m.media-amazon.com/images/I/71E9abm2ayL.jpg"
    },
    {
        "name": "CAPTAIN AMERICA CIVIL WAR",
        "actores":"Chris Evans, Robert Downey Jr., Anthony Mackie, Sebastian Stan, Jeremy Renner, Scarlett Johansson, Elizabeth Olsen, Paul Rudd, Paul, Bettany, Daniel Bruhl, Don Cheadle, Chadwick Boseman, Emily Vancamp, Tom Holland, Frank Grillo",
        "directores":"Anthony Russo",
        "personajes":"Steve Rogers, Tony Stark, Falcon, Bucky Bames, Clint Barton, Natasha Romanoff, Wanda Maximoff, Scott Lang, Vision, Helmut Zemu, Máquina de Guerra, T'Challa, Sharon Carter, Peter Parker, Calavera",
        "estreno": "6 de Mayo de 2016",
        "image": "https://www.cinemascomics.com/wp-content/uploads/2016/03/Capitán-América-Civil-War-poster.jpg"
    },
    {
        "name": "SPIDER-MAN HOMECOMING",
        "actores":"Tom Holland, Zendaya, Michael Keaton, Robert Downey Jr., Marisa Tomei, Laura Harrier, Jacob Batalon, Jon Favreau",
        "directores":"Jon Watts",
        "personajes":"Peter Parker, Mj, Adrian Toomes, Tony Stark, May Parker, Liz Allan, Ned Leeds, Happy Hogan",
        "estreno": "7 de Julio de 2017",
        "image": "https://m.media-amazon.com/images/I/A1mjWWH6mFL.jpg"
    },
    {
        "name": "BLACK WIDOW",
        "actores":"Scarlett Johanson, Florence Pugh, Rachel Weisz, David Harbour, Olga Kurylenko",
        "directores":"Cate Shortland",
        "personajes":"Natasha Romanoff, Viuda Negra, Melina, Red Guardian, Taskmaster",
        "estreno": "9 de Julio de 2021",
        "image": "https://m.media-amazon.com/images/I/71K2XEK0DVS._AC_UF894,1000_QL80_.jpg"
    },
    {
        "name": "BLACK PANTHER",
        "actores":"Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o, Lititia Wright, Danai Gurira, Winston Duke, Angela Bassett, Daniel Kaluuya",
        "directores":"Ryan Coogler",
        "personajes":"T'Challa, Erik Killmonger, Nakia, Shuri, Okoye, M'Bauke, Ramonda, W'Kabi",
        "estreno": "3 de Noviembre de 2017",
        "image": "https://cdn.shopify.com/s/files/1/0265/2769/4934/products/black_panther_ver4_xlg_1024x1024@2x.jpg?v=1585589828"
    },
    {
        "name": "DOCTOR STRANGE",
        "actores":"Benedict Cumberbatch, Benedict wong, Rachel McAdams, Chiwetel Ejifor, Tilda Swinton, Mads Mikkelsen, Michael Stunhlbarg",
        "directores":"Scott Derrickson",
        "personajes":"Stephen Strange, Wong, Christine Palmer, Báron Mordo, Ancestral, Kaecilius, Nicodemus West",
        "estreno": "4 de Noviembre de 2016",
        "image": "https://m.media-amazon.com/images/I/A12-NFRep6L.jpg"
    },
    {
        "name": "THOR RAGNAROK",
        "actores":"Chirs Hemsworth, Cate Blanchett, Jeff Golblum, Taika Waititi, Tessa Thompson, Karl Urban, Mark Ruffalo, Tom Hiddleston, Idris Elba",
        "directores":"Taika waititi",
        "personajes":"Thor, Hela, Gran Maestro, Korg, Valquiria, Ejecutor, Bruce Banner, Loki, Heimdall",
        "estreno": "3 de Noviembre de 2017",
        "image": "https://m.media-amazon.com/images/I/A1HBBNzBdxL.jpg"
    },
    {
        "name": "ANT-MAN AND THE WASP",
        "actores":"Paul Rudd, Evangeline Lily, Michelle Pfeiffer, Michael Douglas, Hannah John-Kamen, Michael Peña, Abby Ryder Fortson",
        "directores":"Peyton Reed",
        "personajes":"Scott Lang, Hope Van Dyne, Janet Van Dyne, Henry Pym, Ava Starr, Luis, Casse Lang",
        "estreno": "26 de Junio de 2018",
        "image": "https://i0.wp.com/frikipunch.com/wp-content/uploads/2018/06/Ant-Man-and-The-Wasp_poster-LatAm.jpg?fit=2756%2C3937"
    },
    {
        "name": "AVENGERS INFINITY WAR",
        "actores":"Robert Dawney Jr., Josh Brolin, Scarlett Johansson, Chris Hemsworth, Chris Evans, Tom Holland, Mark Ruffalo, Elizabeth Olse, Paul Bettany, Benedict Cumberbacth, Antony Mackie, Tom Hiddleston, Chris Pratt, Don Cheadle, Sebastian Stan, Zoe Saldaña, Karen Gillan, Vin Diesel, Chadwick Boseman, Danai Guirira, Pom Klementieff, Benicio del Toro, Bradley Cooper, Peter DrinkLage, Jeremy Renner, Benedict Wong, Stan Lee, Letitia Wright, Idris Elba",
        "directores":"Anthony Russo, Joe Russo",
        "personajes":"Tony Stark, Thanos, Natasha Romanoff, Thor, Steve Rogers, Peter Parker, Bruce Wayne, Wanda Maximoff, Vision, Stepehen Strange, Falcon, Loki, Peter Quil, Máquina de Guerra, Bucky Games, Gamora, Nébula, Groot, T'Chara, Okoye, Mantis, Coleccionista, Rocket, Eltri, Clint Barton, Wong, Bus Driver, Shuri, Heimdall",
        "estreno": "27 de Abri de 2018",
        "image": "https://m.media-amazon.com/images/I/71eHZFw+GlL.jpg"
    },
    {
        "name": "AVENGERS ENDGAME",
        "actores":"Robert Downey Jr., Scarlet Johansson, Chris evans, Chirs Hemsworth, Mark Ruffalo, Jeramy Renner, Brie Larson, Paul Rudd, Don Cheadle, Elizabeth Olsen, Chadwick Boseman, Tom Holland, Josh Brolin, Christ Pratt, Sebastian Stan, Zoe Saldaña, John Favreau, Gwyneth Paltrow, Evangeline Lily, Havlet Atwell, Anthony Mackie, Tom Hiddleston, Tessa Thompson, Benedict Wong, Tilda Swinton, Pom Klementieff, Benedict Cumberbatch, Sean Gunn, Danai Gurira, Michelle Pfeiffer, Drave Bautista, Wiston Duke, Letitia Wright, Linda Cardellini, Hiroyuki Sanada, Samuel L. Jackson, Karen Gillan",
        "directores":"Anthony Russo, Joe Russo",
        "personajes":"Tony Star, Natasha Romanoff, Steve Rogers, Thor, Bruce Banner, Clint Barton, Carol Danvers, Scot Lang, Máquina de Guerra, Wanda Maximoff, T'Chara, Peter Parker, Thanos, Star-Lord, Bucky Barnes, Gamora, Happy Hogan, Pepper Potts, Hope Van Dyne, Peggy Carter, Falcon, Loki, Valquiria, Wong, Ancestral, Mantis, Stephen Strange, Rocket, Okoye, Janet Van Dynem Drax, M'Bauke, Shuri, Nick Fury, Nébula ",
        "estreno": "25 de Abri de 2019",
        "image": "https://i.etsystatic.com/13367669/r/il/db21fd/2198543930/il_570xN.2198543930_4qne.jpg"
    },
    {
        "name": "LOKI",
        "actores":"Tom Hidlleston, Jonathan Majors, Sophia Di Martino, Owen Wilson, Tara Strong, Gugu Mbatha-Raw, Sasha Lane",
        "directores":"Kate Herron",
        "personajes":"loki, Victor Timely, Sylvie Laufeydottir, Mobius, Miss Minute, Ravonna, Hunter C-20",
        "estreno": "(Disney+) 9 de Junio de 2021",
        "image": "https://m.media-amazon.com/images/I/812p2RUxeQS._AC_UF894,1000_QL80_.jpg"
    },
    {
        "name": "WHAT IF...?",
        "actores":"Chadwick Boseman, Hayley Atwell, Jeffrey Wright, karen Gillan, Michael Rooker, Tom Hiddleston, Michael B. Jordan, Jeremy Renner, Chris Hemsworth, Sebastian Stan, Paul Rudd",
        "directores":"Bryan Andrews",
        "personajes":"T'Chala, Peggy Carter, Observador, Nébula, Yondu, Erik Killmonger, Clint Barton, Thor, Bucky Barnes, Scott Lang",
        "estreno": "(Disney+) 11 de Agosto de 2021",
        "image": "https://cdn.marvel.com/content/1x/online_2_0.jpg"
    },
    {
        "name": "WandaVision",
        "actores":"Elizabeth Olse, Kathryn Hahn, Kat Dennings, Evan Peters, Paul Bettany, Teyonah Parris, Randall Park, Julian Hillard, Jett Klyne",
        "directores":"Matt Shakman",
        "personajes":"Wanda Maximoff, Agnes, Darcy Lewis, Prieto Maximoff, Vision, Monica Rambeau, Jimmy Woo, Billy Maximoff, Thomas Maximoff ",
        "estreno": "(Disney+) 15 de Enero de 2021",
        "image": "https://m.media-amazon.com/images/I/71nwO6MO0vS.jpg"
    },
    {
        "name": "THE FALCON AND THE WINTER SOLDIER",
        "actores":"Anthony Mackie, Sebastian Stan, Erin Kellyman, Wyatt Russell, Emily Vancamp, Daniel Bruhl, Danny ",
        "directores":"Kari Skogland",
        "personajes":"Falcon, Bucky Barnes, Karli Morgenthaus, U.S. Agent, Sharon Carter, Barón Zemo",
        "estreno": "(Disney+) 19 de Marzo de 2021",
        "image": "https://m.media-amazon.com/images/I/71Ce39r24pS._AC_UF894,1000_QL80_.jpg"
    },
    {
        "name": "SHANG-CHI ANT THE LEGEND OF THE TEN RINGS",
        "actores":"Simu Liu, Awkwafina, Michelle Yeoh, Tony Leung, Ronny Chieng, Meng'er Zhang, Ben kingsley, Florian Munteanu",
        "directores":"Destin Daniel Cretton",
        "personajes":"Shang-Chi, Katy, Ying Nan, Wenwu, Jon, Xu Xialing, Trevor Slattery, Razor Fist",
        "estreno": "3 de Septiembre de 2021",
        "image": "https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
    },
    {
        "name": "ETERNALS",
        "actores":"Gemma Chan, Richard Madden, Salma Hayek, Angelina Jolie, Barry Keoghan, Kumail Nanjiani, Brian Tyre Henry, Ma Dong-seok",
        "directores":"Chloé Zhao",
        "personajes":"Sersi, Ikaris, Ajak, Thena, Druig, Kingo, Phastos, Gilgamesh",
        "estreno": "5 de Noviembre de 2021",
        "image": "https://cdn.marvel.com/content/1x/online_10.jpg"
    },
    {
        "name": "SPIDER-MAN FAR FROM HOME",
        "actores":"Tom Holland, Zendaya, Jake Gyllenhaal, Samuel L. Jackson, Marisa Tomei, Jon Favreau",
        "directores":"Jon Watts",
        "personajes":"Peter Parker, MJ, Mysterio, Nick Fury, May Parker, Happy Hogan",
        "estreno": "2 de Julio de 2019",
        "image": "https://m.media-amazon.com/images/I/81BiQGa2aIL.jpg"
    },
    {
        "name": "SPIDER-MAN NO WAY HOME",
        "actores":"Tobey Maguire, Andrea Garfield, Tom Holland, Zendaya, Marisa Tomei, Wiliem Dafoe, Jamie Foxx, Alfred Molina, Tom Hardy, Charlie Coz, Jon Favreau, Bendict Cumberbatch",
        "directores":"Jon watts",
        "personajes":"Peter Parker, MJ, May Parker, Duende Verde, Electro, Otto Octaviues, Venom, Matt Murdock, Happy,Stephen Strange",
        "estreno": "17 de Diciembre de 2021",
        "image": "https://m.media-amazon.com/images/I/815IBWT+WeL.jpg"
    },
    {
        "name": "DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS",
        "actores":"Elizabeth Olsen, Xochitl Gomez, Benedict Cumberbatch, John Krasinski, Rachel Mcadams, Hayley Atwell, Lashana Lych, Benedict Wong, patrick Stewar, Anson Mount",
        "directores":"Wanda Maximoff, América Chavez, Stephen Strange, Reed Richards, Chirtine Palmer, Capitana Carter, Wong, Charles Xavier, Rayo Negro",
        "personajes":"Sam Raimi",
        "estreno": "6 de Mayo de 2022",
        "image": "https://static.cinepolis.com/resources/mx/movies/posters/414x603/39033-562654-20220503052138.jpg"
    },
    {
        "name": "Hawkeye",
        "actores":"Jeremy Renner, Hailee Steinfeld, Vera Farmiga, Tony Dalton, Fraa Fee",
        "directores":"Bert & Bertie",
        "personajes":"Clint Barton, Kate Bishop, Eleanor Bishop, Jack Duquesne",
        "estreno": "(Disney+) 24 de Noviembre de 2021",
        "image": "https://as01.epimg.net/meristation/imagenes/2021/10/25/noticias/1635161355_352592_1635161449_sumario_normal.jpg"
    },
    {
        "name": "MOON KNIGHT",
        "actores":"Oscar Isaac, May Calamawy, Ethan Hawke, Gasper Ulliel, F.Murray Abraham",
        "directores":"Mohamed Diab, Justin Benson, Aaron Moorhead",
        "personajes":"Marc Spector, Layla El-Faouley, Arthur Harrow, Anton Mogart, Kidogo",
        "estreno": "(Disney+) 30 de Marzo de 2022",
        "image": "https://i.etsystatic.com/18242346/r/il/fafd96/3848402393/il_570xN.3848402393_dl9c.jpg"
    },
    {
        "name": "SHE-HULK ATTORNEY AT LAW",
        "actores":"Tatiana Maslany, Ginger Gonzage, Jameela Jamil, Josh Segarra, Mark Ruffalo",
        "directores":"Kat Coiro, Anu Valia",
        "personajes":"She-hulk, Nikki Ramos, Titania, Augustus, Bruce Banner",
        "estreno": "(Disney+) 18 de Agosto de 2022",
        "image": "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/LXR4DQCCMFFW7CEWUE7QRUGJTU.jpg"
    },
    {
        "name": "MS. MARVEL",
        "actores":"Iman Vellani, Matt Lintz, Yasmeen Fletcher, Zenobia Shroff, Mohan kapur, Sasgar Shaikh, Rish Shah, Lauren Marsden",
        "directores":"Sharmeen Obaid-Chinoy, Meera Menon, Adil El Arbi",
        "personajes":"Kamala Khan, Bruno Carrelli, Nakia, Muneeba Khan, Yusuf Khan, Aamir Khan, Kamran, Zoe Zimmer",
        "estreno": "(Disney+) 8 de Junio 2022",
        "image": "https://m.media-amazon.com/images/I/81tuzM9RUYL._AC_UF894,1000_QL80_.jpg"
    },
    {
        "name": "THOR LOVE AND THUNDER",
        "actores":"Chris Hemsworth, Natalie Portman, Taika Waititi, Tessa Thompson, Russell Crowne",
        "directores":"Taika Waititi",
        "personajes":"Thor, Jane Foster, Korg, Valquiria, Zeus",
        "estreno": "8 de Julio de 2022",
        "image": "https://cdn.shopify.com/s/files/1/0265/2769/4934/products/thor_love_and_thunder_ver3_xxlg_1024x1024@2x.jpg?v=1653427383"
    },
    {
        "name": "BLACK PANTHER WAKANDA FOREVER",
        "actores":"Letitia wright, Michael B. Jordan, Angela Bassett, Tenoch Huerta, Lupita Nyong'o, Danai Gurira",
        "directores":"Ryan Coogler",
        "personajes":"Shuri, Erik Killomonger, Ramonda, Namor, Nakia, Okoye",
        "estreno": "11 de Noviembre de 2022",
        "image": "https://assets-prd.ignimgs.com/2022/07/24/fyzqjuevsaexgth-1658626858209.jpg"
    },
    {
        "name": "ANT-MAN AND THE WASP QUANTUMANIA",
        "actores":"Kathryn Newton, Jonathan Majors, Michelle Pfeiffer, Paul Rudd",
        "directores":"",
        "personajes":"Cassie Lang, Kang el conquistador, Janet Van Dyne, Hope Van Dyne, Scott Lang",
        "estreno": "17 de Febrero de 2023",
        "image": "https://lumiere-a.akamaihd.net/v1/images/ant-man_and_the_wasp_quantumania_poster_2_la_6eea32a6.jpeg?region=0,0,743,1100"
    }
]


/*Formato imagenes*/
const contenedor = document.querySelector('.contenedor');

for (let i = 0; i < peliculas.length; i++) {
    const pelicula = peliculas[i];

    const divCard = document.createElement('div');
    divCard.className = 'image-card';

    const imagen = document.createElement('img');
    imagen.src = pelicula.image;
    imagen.className = 'imagen';
    imagen.addEventListener('click', mostrarImagen);

    const titulo = document.createElement('div');
    titulo.textContent = pelicula.name;
    titulo.className = 'titulo';

    divCard.appendChild(imagen);
    divCard.appendChild(titulo);
    contenedor.appendChild(divCard);
}


/*Buscador peliculas*/
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


/*Muestra las imagenes*/
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

    const personajesVentana = document.createElement('p');
    personajesVentana.textContent = `Personajes: ${pelicula.personajes}`;

    const actoresVentana = document.createElement('p');
    actoresVentana.textContent = `Actores: ${pelicula.actores}`;

    const directoresVentana = document.createElement('p');
    directoresVentana.textContent = `Directores: ${pelicula.directores}`;

    const estrenoVentana = document.createElement('p');
    estrenoVentana.textContent = `Estreno: ${pelicula.estreno}`;

    contenidoVentana.appendChild(tituloVentana);
    contenidoVentana.appendChild(personajesVentana);
    contenidoVentana.appendChild(actoresVentana);
    contenidoVentana.appendChild(directoresVentana);
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


/*Cierra imagen*/
function cerrarImagen() {
    this.parentNode.remove();
}