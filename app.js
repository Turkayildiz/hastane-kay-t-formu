
document.getElementById('submit').addEventListener('click', function(event) {

    event.preventDefault();

    // Form verilerini al
    const ad = document.getElementById('ad').value;
    const soyad = document.getElementById('soyad').value;
    const tarih = document.getElementById('tarih').value;
    const email = document.getElementById('email').value;
    const TC = document.getElementById('TC').value;

    // Verileri bir obje olarak oluştur
    const hastaVerisi = {
        ad: ad,
        soyad: soyad,
        tarih: tarih,
        email: email,
        TC: TC
    };

    // Veriyi JSON formatında localStorage'a kaydet
    localStorage.setItem('hastaVerisi', JSON.stringify(hastaVerisi));

    console.log('Hasta Verisi Kaydedildi:', hastaVerisi);

    alert('Hasta verisi başarıyla kaydedildi!');
});
