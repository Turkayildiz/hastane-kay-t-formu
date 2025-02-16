function kaydet()
{
    let kayit= localStorage.getItem("kayit");
    let myObj = JSON.parse(kayit);
    console.log(kayit);
    console.log(myObj);
    let ad = document.getElementById('ad').value;
    let soyad = document.getElementById('soyad').value;
    let tarih = document.getElementById('tarih').value;
    let email = document.getElementById('email').value;
    let TC = document.getElementById('TC').value;
    let sonuc = document.getElementById('sonuc').value;
    ad.value=myObj.ad;
    soyad.value=myObj.soyad;
    tarih.value=myObj.tarih;
    email.value=myObj.email;
    TC.value=myObj.TC;
    sonuc.value=myObj.sonuc;

    // Verileri bir obje olarak oluştur
    var kayıt = {
        ad: ad.value,
        soyad: soyad.value,
        tarih: tarih.value,
        email: email.value,
        TC: TC.value
    };

    console.log(kayıt);
    localStorage.setItem("kayit", JSON.stringify(kayıt));
    alert('Hasta verisi başarıyla kaydedildi!');
    };
