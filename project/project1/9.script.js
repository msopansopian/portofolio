//1. buat fungsi untuk pilihan computer
function getPilihanComputer() {
  const comp = Math.random();

  if (comp < 0.34) return "gajah"; //tidak perlu pakai kurung kurawal klo pakai return
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

//2. buat fungsi untuk rullesnya dan hasilnya
function getHasil(comp, player) {
  if (player == comp) return "SERI!"; //tidak perlu pakai kurung kurawal klo pakai return
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG!";
}



// 3. jalankan event ketika user klik pilihan gambar part 1
// 1. tangkap semua img di dalam li
const pilihan = document.querySelectorAll("li img");
// 2. looping 3 img
pilihan.forEach(function (pil) {
  // 1. jalankan event ketika gambar akan di klik.hanya 1 gambr
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    // ambil pilihan kita/player masukan ke var
    const PilihanPlayer = pil.className;
    // ambil hasil masukan var
    const hasil = getHasil(pilihanComputer, PilihanPlayer);

   

    //3.b ambil gambar gajah
    const imgComputer = document.querySelector(".img-komputer");
    //a. ganti gambarnya dengan manipulasi atribut
    imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png"); //pilihan komp random gajah semut orang

    // b. tampilkan hasilnya
    const info = document.querySelector(".info");
    info.innerHTML = hasil; // menang seri atau kalah
  });
}); // untuk setiap img dalam setiap node list pilihan jalankan fungsi berikut

// //3. jalankan event ketika user klik pilihan gambar part 2
// // 3.a class gajah
// // a. ambil class gajah masukan ke var
// const pGajah = document.querySelector(".gajah");
// //  b. kita kasih event yg akan di lakukan ketika gambar gajah di klik
// pGajah.addEventListener("click", function () {
//   // panggil fungsi 1 yg atas/pilihan com lalu masukan ke var
//   const pilihanComputer = getPilihanComputer();
//   // ambil pilihan kita/player masukan ke var
//   const PilihanPlayer = pGajah.className;
//   // ambil hasil masukan var
//   const hasil = getHasil(pilihanComputer, PilihanPlayer);

//   //3.b ambil gambar gajah
//   const imgComputer = document.querySelector(".img-komputer");
//   //a. ganti gambarnya dengan manipulasi atribut
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png"); //pilihan komp random gajah semut orang

//   // b. tampilkan hasilnya
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil; // menang seri atau kalah
// });
// // program gambar player untuk gajah selesai
// // tinggal program selanjutnya
// // disini kita copan dari line 21- 38 lalu ganti untuk semut dan orang

// // 3.a class gajah
// // a. ambil class gajah masukan ke var
// const pOrang = document.querySelector(".orang");
// //  b. kita kasih event yg akan di lakukan ketika gambar gajah di klik
// pOrang.addEventListener("click", function () {
//   // panggil fungsi 1 yg atas/pilihan com lalu masukan ke var
//   const pilihanComputer = getPilihanComputer();
//   // ambil pilihan kita/player masukan ke var
//   const PilihanPlayer = pOrang.className;
//   // ambil hasil masukan var
//   const hasil = getHasil(pilihanComputer, PilihanPlayer);

//   //3.b ambil gambar gajah
//   const imgComputer = document.querySelector(".img-komputer");
//   //a. ganti gambarnya dengan manipulasi atribut
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png"); //pilihan komp random gajah semut orang

//   // b. tampilkan hasilnya
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil; // menang seri atau kalah
// });

// // 3.a class gajah
// // a. ambil class gajah masukan ke var
// const pSemut = document.querySelector(".semut");
// //  b. kita kasih event yg akan di lakukan ketika gambar gajah di klik
// pSemut.addEventListener("click", function () {
//   // panggil fungsi 1 yg atas/pilihan com lalu masukan ke var
//   const pilihanComputer = getPilihanComputer();
//   // ambil pilihan kita/player masukan ke var
//   const PilihanPlayer = pSemut.className;
//   // ambil hasil masukan var
//   const hasil = getHasil(pilihanComputer, PilihanPlayer);

//   //3.b ambil gambar gajah
//   const imgComputer = document.querySelector(".img-komputer");
//   //a. ganti gambarnya dengan manipulasi atribut
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png"); //pilihan komp random gajah semut orang

//   // b. tampilkan hasilnya
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil; // menang seri atau kalah
// });
