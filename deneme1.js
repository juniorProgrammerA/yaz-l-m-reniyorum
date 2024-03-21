
document.addEventListener("DOMContentLoaded", function () {
    let deneme1 = "";

    deneme1 += `<span class="span">Login</span>
<form>
    <input id="isimInput" class="u" type="text" placeholder="İsim" >
    <input id="soyisimInput" type="text" placeholder="Soyisim">
    <input id="emailInput" class="" type="email" placeholder="numara">

    <select class="form-select sube" id="subeInputA" aria-label="Default select example">
  <option selected>şubenizi seçiniz</option>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
</select>
<select class="form-select sube" id="subeInputB" aria-label="Default select example">
<option selected>çinsiyetinizi giriniz</option>
<option value="Erkek">Erkek</option>
<option value="Kadın">Kadın</option>

</select>
</form>
<button id="loginButton" >Login</button>`;
    document.getElementById("deneme1").innerHTML = deneme1;

    let deneme2 = [
        { getElementById: "isimInput", name: "İsim : " },
        { getElementById: "soyisimInput", name: "Soyisim : " },
        { getElementById: "emailInput", name: "Email : " },
        { getElementById: "sifreInput", name: "Şifre : " },
    ]
    let orenciler = [
        { isim: "ahmet", soyisim: "gümüş", numara: "1", şube: "A" , cin:"Erkek"},
        { isim: "ahmet", soyisim: "ben", numara: "2", şube: "A"   , cin:"Kadın"},
        { isim: "ahmet", soyisim: "sen", numara: "3", şube: "A"   , cin:"Erkek"},
        { isim: "mehmet", soyisim: "gül", numara: "4", şube: "B"  , cin:"Kadın"},
        { isim: "mehmet", soyisim: "lale", numara: "5", şube: "B" , cin:"Erkek"},
        { isim: "burhan", soyisim: "ak", numara: "6", şube: "B"   , cin:"Kadın"},
        { isim: "burhan", soyisim: "kara", numara: "7", şube: "C" , cin:"Erkek"},
        { isim: "berat", soyisim: "araba", numara: "8", şube: "C" , cin:"Kadın"},
        { isim: "oğuz", soyisim: "uçak", numara: "9", şube: "C"   , cin:"Erkek"},
    ];
let orenciler2=[]

    document.getElementById("loginButton").addEventListener("click", function () {

        let isim = document.getElementById("isimInput").value;
        let soyisim = document.getElementById("soyisimInput").value;
        let numara = document.getElementById("emailInput").value;
        let subeA = document.getElementById("subeInputA").value;
        let subeB = document.getElementById("subeInputB").value;






    //   if(isim=="ahmet"||isim=="mehmet"||isim=="burhan"||isim=="berat"||isim=="oğuz"&&
    //   soyisim=="gümüş"||soyisim=="ben"||soyisim=="sen"||soyisim=="gül"||soyisim=="lale"||soyisim=="ak"||soyisim=="kara"||soyisim=="araba"||soyisim=="uçak"&&
    //   numara=="1"||numara=="2"||numara=="3"||numara=="4"||numara=="5"||numara=="6"||numara=="7"||numara=="8"||numara=="9"&&
    //   subeA=="A"||subeA=="B"||subeA=="C"){
            for (let i = 0; i < orenciler.length; i++) {


                
if (isim == orenciler[i].isim && soyisim == orenciler[i].soyisim && numara == orenciler[i].numara && subeA == orenciler[i].şube && subeB == orenciler[i].cin) {
                    document.getElementById("deger1").innerHTML = "İsim : " + isim;
                    document.getElementById("deger2").innerHTML = "Soyisim : " + soyisim;
                    document.getElementById("deger3").innerHTML = "Numara : " + numara;
                    document.getElementById("deger4").innerHTML = "Şube : " + subeA;
                    document.getElementById("deger5").innerHTML = "Cinsiyet : " + subeB;
                }
                else{
                    document.getElementById("none").innerHTML="örenci bulunamdı!!!"
                }
            }

        document.getElementById("isimInput").value = "";
        document.getElementById("soyisimInput").value = "";
        document.getElementById("emailInput").value = "";
        document.getElementById("subeInputA").value = "şubenizi seçiniz";
        document.getElementById("subeInputB").value = "çinsiyetinizi giriniz";
    });

});

