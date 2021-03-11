let caption = document.querySelector("#caption");
caption.innerHTML = '<em>Frontend Web Developer </em>';

let informasi = document.querySelector("#informasi");
informasi.style.fontWeight = 'bolder';
informasi.style.fontSize = '20px';

const h2 = document.querySelector('.h2');

function ubahH2() {
    h2.style.fontSize = '30px';
    h2.style.fontWeight = 'bolder';
    h2.style.textDecoration = 'underline';
    h2.style.textTransform = 'uppercase';
}
h2.onclick = ubahH2;
h2.addEventListener('click', function () {
    alert('Anda berhasil mengubah style nama');
});