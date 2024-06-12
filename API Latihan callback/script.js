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

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function(){
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
   
});


//ketika tombol detail di click
//event binding
document.addEventListener('click', async function(e){
    if(e.target.classList.contains('modal-detail-button')){
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbid);
        updateUIDetail(movieDetail);
    }
});

async function getMovieDetail(imdbid) {
    const response = await fetch('http://www.omdbapi.com/?apikey=dca61bcc&i=' + imdbid);
    const movieDetail = await response.json();
    return movieDetail;
}

function updateUIDetail(m){
    const movieDetail = showMovieDetail(m);
        const modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = movieDetail;
}




function getMovies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=' + keyword)
    .then(Response => Response.json())
    .then(Response => Response.Search);
}


function updateUI(movies){
    let cards = '';
    movies.forEach(m =>cards += showCards(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}

// ***************************************



function showCards(m){
    return `<div class="col-md-4 my-5">
                        <div class="card">
                            <img src="${m.Poster}" class="card-img-top" alt="">
                            <div class="card-body">
                                <h5 class="card-title">${m.Title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                                <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#MovieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                            </div>
                        </div>
            </div>`;

}

function showMovieDetail(m){
    return `<div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <img src="${m.Poster}" class="img-fluid">
                                        </div>
                                        <div class="col-md">
                                            <ul class="list-group">
                                            <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                                            <li class="list-group-item"><strong>Director :</strong> ${m.Director} </li>
                                            <li class="list-group-item"><strong>Genre :</strong> ${m.Genre}</li>
                                            <li class="list-group-item"><strong>Actor :</strong> ${m.Actors}</li>
                                            <li class="list-group-item"><strong>Writer :</strong> ${m.Writer}</li>
                                            <li class="list-group-item"><strong>Plot :</strong> <br> ${m.Plot}</li>
                                            </ul>
                                        </div>
                                    </div>
             </div> `;
}
    
