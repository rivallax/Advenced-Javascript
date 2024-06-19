// function tampilkanPesan(callback){
//     const nama = prompt ('masukan nama :')
//     callback(nama);

// };

// tampilkanPesan((nama) => alert (`hallo nama saya ${nama}`))


// function namaTampil(zyrexx){
//     const nama= prompt ('masukan nama :')
//    zyrexx(nama);
// }

// namaTampil((nama) => alert (`nama saya ${nama}`));



// ***************************************
//menggunakan method ajax 
//dan librery jQuery
// ***************************************
// $('.search-button').on('click', function(){

//     $.ajax({
//        url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=' + $('.input-keyword').val(),
//        success: results =>{
//         const movies = results.Search;
//         let cards = '';
//         movies.forEach(m =>{
//             cards += showCard(m);
//         });
//         $('.movie-container').html(cards);
    
    
//         // ketika tombol detail di-klik
//         $('.modal-detail-button').on('click', function(){
//            $.ajax({
//             url:'http://www.omdbapi.com/?apikey=dca61bcc&i=' + $(this).data('imdbid'),
//             success: m => {
                
//                 const movieDetail = showMovieDetail(m)
//                     $('.modal-body').html(movieDetail);
//             },
//             error: (e) =>{
//                 console.log(e.resopnseText);
//             }
//             });
//         });
    
//     },
//     error: (e) =>{
//         console.log(e.resopnseText);
//     }
//     });
// })


//********************************** *****/
//fetch



let likedMovies = new Set();
let favoritedMovies = new Set();

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function() {
    try {
        const inputKeyword = document.querySelector('.input-keyword');
        const movies = await getMovies(inputKeyword.value);
        updateUI(movies);
        hideError();  // Hide error message if the request is successful
    } catch (err) {
        showError(err.message);
    }
});

// Event binding for detail button click and like/favorite buttons
document.addEventListener('click', async function(e) {
    if (e.target.classList.contains('modal-detail-button')) {
        try {
            const imdbid = e.target.dataset.imdbid;
            const movieDetail = await getMovieDetail(imdbid);
            updateUIDetail(movieDetail);
        } catch (err) {
            showError(err.message);
        }
    } else if (e.target.classList.contains('like-button')) {
        const imdbid = e.target.dataset.imdbid;
        toggleLike(imdbid);
    } else if (e.target.classList.contains('favorite-button')) {
        const imdbid = e.target.dataset.imdbid;
        toggleFavorite(imdbid);
    } else if (e.target.classList.contains('show-liked-button')) {
        showLikedMovies();
    } else if (e.target.classList.contains('show-favorited-button')) {
        showFavoritedMovies();
    }
});

async function getMovieDetail(imdbid) {
    const response = await fetch('http://www.omdbapi.com/?apikey=dca61bcc&i=' + imdbid);
    if (!response.ok) {
        throw new Error('Failed to fetch movie details.');
    }
    const movieDetail = await response.json();
    return movieDetail;
}

function updateUIDetail(m) {
    const movieDetail = showMovieDetail(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}

function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=' + keyword)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(response => {
            if (response.Response === "False") {
                throw new Error(response.Error);
            }
            return response.Search;
        });
}

// Error handling
function showError(message) {
    const errorText = document.querySelector('#error-text');
    errorText.textContent = message;

    const errorMessage = document.querySelector('#error-message');
    errorMessage.style.display = 'block';
}

function hideError() {
    const errorMessage = document.querySelector('#error-message');
    errorMessage.style.display = 'none';
}

function updateUI(movies) {
    let cards = '';
    movies.forEach(m => cards += showCards(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}


// showCards/ show movie detail
function showCards(m) {
    const likedClass = likedMovies.has(m.imdbID) ? 'btn-danger' : 'btn-outline-danger';
    const favoritedClass = favoritedMovies.has(m.imdbID) ? 'btn-warning' : 'btn-outline-warning';

    return `<div class="col-md-4 my-5">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#MovieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                        <button class="btn ${likedClass} like-button" data-imdbid="${m.imdbID}">Like</button>
                        <button class="btn ${favoritedClass} favorite-button" data-imdbid="${m.imdbID}">Favorite</button>
                    </div>
                </div>
            </div>`;
}

function showMovieDetail(m) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                            <li class="list-group-item"><strong>Time :</strong> ${m.Runtime} </li>
                            <li class="list-group-item"><strong>Director :</strong> ${m.Director} </li>
                            <li class="list-group-item"><strong>Genre :</strong> ${m.Genre}</li>
                            <li class="list-group-item"><strong>Actor :</strong> ${m.Actors}</li>
                            <li class="list-group-item"><strong>Writer :</strong> ${m.Writer}</li>
                            <li class="list-group-item"><strong>Plot :</strong> <br> ${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}



// fitur like and favorite (show)
function toggleLike(imdbid) {
    if (likedMovies.has(imdbid)) {
        likedMovies.delete(imdbid);
    } else {
        likedMovies.add(imdbid);
    }
    updateButtonState(imdbid);
}

function toggleFavorite(imdbid) {
    if (favoritedMovies.has(imdbid)) {
        favoritedMovies.delete(imdbid);
    } else {
        favoritedMovies.add(imdbid);
    }
    updateButtonState(imdbid);
}

function updateButtonState(imdbid) {
    const likeButton = document.querySelector(`.like-button[data-imdbid="${imdbid}"]`);
    const favoriteButton = document.querySelector(`.favorite-button[data-imdbid="${imdbid}"]`);

    if (likeButton) {
        likeButton.classList.toggle('btn-danger', likedMovies.has(imdbid));
        likeButton.classList.toggle('btn-outline-danger', !likedMovies.has(imdbid));
    }

    if (favoriteButton) {
        favoriteButton.classList.toggle('btn-warning', favoritedMovies.has(imdbid));
        favoriteButton.classList.toggle('btn-outline-warning', !favoritedMovies.has(imdbid));
    }
}

async function showLikedMovies() {
    const likedMoviesArray = Array.from(likedMovies);
    const movies = await Promise.all(likedMoviesArray.map(id => getMovieDetail(id)));
    updateUI(movies);
}

async function showFavoritedMovies() {
    const favoritedMoviesArray = Array.from(favoritedMovies);
    const movies = await Promise.all(favoritedMoviesArray.map(id => getMovieDetail(id)));
    updateUI(movies);
}




    




    



//apa itu fetch()

//sebuah method pada API js untuk mengambil resources dari jaringan, dan mengembalikan promise yang selesai (fullfilled) ketika ada response yang tersedia

//          fetch(resources, init);

//. RESOURCES bisa 2 url (alamat dari sumber yang kita ambil atau request object (representasi permintaan sumber)  -->// response (property dan method)



// Fetch Refactoring adalah sebuah teknik yang digunakan untuk menyederhanakan dan memperbaiki kode yang menggunakan API Fetch, terutama dalam hal menangani respons dan kesalahan. Sedangkan async/await adalah fitur JavaScript yang memungkinkan kita menulis kode asinkronus dengan cara yang lebih bersih dan mudah dimengerti.

// Asynchronous di mana beberapa tugas dapat berjalan secara bersamaan tanpa harus menunggu tugas yang satu selesai sebelum memulai yang lain
// cara kerja :
// Non-Blocking =program dapat melanjutkan menjalankan tugas-tugas lain sambil menunggu operasi asynchronous selesai.
// callback function =  fungsi yang akan dieksekusi setelah operasi asynchronous selesai.
