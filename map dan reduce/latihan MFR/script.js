// ambil semua element video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

//hanya yang "JAVASCRIPT LANJUTAN"
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))


.map(item => item.dataset.duration) //ambil durasi masing masing video

// //ubah durasi menjadi floot,ubah menit menjadi detik
.map(waktu =>{
    // 10:30 -> [10, 30]  //split
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) * parts[1];
    
})  //tidak di ; karena akan di cheyning


//jumlahkan semua detik
.reduce((total, detik) => total + detik);

// ubah formatnya jadi jam menit detik
// const jam = Math.floor (jsLanjut / 3600);
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;
//simpan di dom
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik.`;
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo}, video.`;

console.log(jsLanjut);