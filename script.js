function tampilkanPesan() {
    alert ("Tombol berhasil diKlik!")
}
// JS EKSTERNAL
document.addEventListener("DOMContentLoaded", function() {
    const tombolTips = document.getElementById("btnTips");

    if (tombolTips) {
        tombolTips.addEventListener("click", function() {
            alert("Tips: Agar daging sapi empuk dan tidak hancur, masukkan daging setelah santan mulai mengeluarkan minyak, dan aduk perlahan dengan api kecil.");
        });
    }
});

