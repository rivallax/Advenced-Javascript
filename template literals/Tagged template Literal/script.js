// Togged templates

// const nama = 'Rivaldi Akbar';
// const umur =  '17';

// function coba(strings, ...values){
//     // let result = '';
//     // strings.forEach((str, i) =>{
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }


// const str = coba`halo, nama saya ${nama}, saya ${umur} tahun`;

// console.log(str);


//highlight
const nama = 'Rivaldi Akbar';
const umur =  '17';
const email = 'rivaldi791@gmail.com'

function highlight(strings, ...values){
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}


const str = highlight`halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah : ${email}.`;

document.body.innerHTML = str;


// penggunaan lain tagged template
// 1. Escaping HTML Tags (untuk sanitasi html teks untuk menghindari ketika ada script atau code yang tidak di inginkan pada halaman web  )
// 2. Translation & internationalizition
// 3. Styled Components (di gunakan untuk vue js atau recact )