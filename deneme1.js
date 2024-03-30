
document.addEventListener("DOMContentLoaded", function () {
    let deneme1 = "";

    deneme1 += `<span class="span">Kayıt Arama</span>
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
<option selected>cinsiyetinizi giriniz</option>
<option value="Erkek">Erkek</option>
<option value="Kadın">Kadın</option>

</select>
</form>
<button id="loginButton" >Listele</button>`;
    document.getElementById("deneme1").innerHTML = deneme1;

    let deneme2 = [
        { getElementById: "isimInput", name: "İsim : " },
        { getElementById: "soyisimInput", name: "Soyisim : " },
        { getElementById: "emailInput", name: "Email : " },
        { getElementById: "sifreInput", name: "Şifre : " },
    ]
    let orenciler = [
        { isim: "ahmet", soyisim: "gümüş", numara: "1", şube: "A", cin: "Erkek" },
        { isim: "ahmet", soyisim: "ben", numara: "2", şube: "A", cin: "Kadın" },
        { isim: "ahmet", soyisim: "sen", numara: "3", şube: "A", cin: "Erkek" },
        { isim: "mehmet", soyisim: "gül", numara: "4", şube: "B", cin: "Kadın" },
        { isim: "mehmet", soyisim: "lale", numara: "5", şube: "B", cin: "Erkek" },
        { isim: "burhan", soyisim: "ak", numara: "6", şube: "B", cin: "Kadın" },
        { isim: "burhan", soyisim: "kara", numara: "7", şube: "C", cin: "Erkek" },
        { isim: "berat", soyisim: "araba", numara: "8", şube: "C", cin: "Kadın" },
        { isim: "oğuz", soyisim: "uçak", numara: "9", şube: "C", cin: "Erkek" },
    ];
    let orenciler2 = []
    let liste1 = ""

    document.getElementById("deger1").innerHTML="<li>denem</li>";
    document.getElementById("loginButton").addEventListener("click", function () {

        let isim = document.getElementById("isimInput").value;
        let soyisim = document.getElementById("soyisimInput").value;
        let numara = document.getElementById("emailInput").value;
        let subeA = document.getElementById("subeInputA").value;
        let subeB = document.getElementById("subeInputB").value;



        // for (let i = 0; i < orenciler.length; i++) {
        //     if (isim == orenciler[i].isim) {
        //         orenciler2.push(orenciler[i])
        //     }
        //     if (soyisim == orenciler[i].soyisim) {
        //         orenciler2.push(orenciler[i])
        //     }
        //     if (numara == orenciler[i].numara) {
        //         orenciler2.push(orenciler[i])
        //     }
        //     if (subeA == orenciler[i].şube) {
        //         orenciler2.push(orenciler[i])
        //     }
        //     if (subeB == orenciler[i].cin) {
        //         orenciler2.push(orenciler[i])
        //     }
        // }
        // if (orenciler2.length !== 0) {
        //     for (let i = 0; i < orenciler2.length; i++) {
        //         liste1 += `
        //         <li class="j">isim : ${orenciler2[i].isim}</li> 
        //         <li class="j">soyisim : ${orenciler2[i].soyisim}</li>
        //         <li class="j">numara : ${orenciler2[i].numara}</li>
        //         <li class="j">şube : ${orenciler2[i].şube}</li>
        //         <li class="j">çinsiyet : ${orenciler2[i].cin}</li>
        //         <li class="j">---------------</li>`
                
        //     }
        // }
        // else{
        //     liste1 += `<li class="j">örenci bulunamadı!!!</li>`
        // }

//-------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------



        for (let i = 0; i < orenciler.length; i++) {

            var ben1 =  orenciler.filter(function(aaa){
                  for (let i = 0; i < orenciler.length; i++) {
              return aaa.isim == isim
                  }
              })
              var ben2 =  orenciler.filter(function(aaa){
                  for (let i = 0; i < orenciler.length; i++) {
              return aaa.soyisim == soyisim
                  }
              })
              var ben3 =  orenciler.filter(function(aaa){
                  for (let i = 0; i < orenciler.length; i++) {
              return aaa.numara == numara
                  }
              })
              var ben4 =  orenciler.filter(function(aaa){
                  for (let i = 0; i < orenciler.length; i++) {
              return aaa.şube == subeA
                  }
              })
              var ben5 =  orenciler.filter(function(aaa){
                  for (let i = 0; i < orenciler.length; i++) {
              return aaa.cin == subeB
                  }
              })
          }
          
          if (ben1.length !== 0) {
              for (let i = 0; i < ben1.length; i++) {
                  liste1 += `
                  <li class="j">isim : ${    ben1[i].isim}</li> 
                  <li class="j">soyisim : ${ ben1[i].soyisim}</li>
                  <li class="j">numara : ${  ben1[i].numara}</li>
                  <li class="j">şube : ${    ben1[i].şube}</li>
                  <li class="j">çinsiyet : ${ben1[i].cin}</li>
                  <li class="j">---------------</li>`
                  
              }
          }


          if (ben2.length !== 0) {
            for (let i = 0; i < ben2.length; i++) {
                liste1 += `
                <li class="j">isim : ${    ben2[i].isim}</li> 
                <li class="j">soyisim : ${ ben2[i].soyisim}</li>
                <li class="j">numara : ${  ben2[i].numara}</li>
                <li class="j">şube : ${    ben2[i].şube}</li>
                <li class="j">çinsiyet : ${ben2[i].cin}</li>
                <li class="j">---------------</li>`
                
            }
        }


        if (ben3.length !== 0) {
            for (let i = 0; i < ben3.length; i++) {
                liste1 += `
                <li class="j">isim : ${    ben3[i].isim}</li> 
                <li class="j">soyisim : ${ ben3[i].soyisim}</li>
                <li class="j">numara : ${  ben3[i].numara}</li>
                <li class="j">şube : ${    ben3[i].şube}</li>
                <li class="j">çinsiyet : ${ben3[i].cin}</li>
                <li class="j">---------------</li>`
                
            }
        }


        if (ben4.length !== 0) {
            for (let i = 0; i < ben4.length; i++) {
                liste1 += `
                <li class="j">isim : ${    ben4[i].isim}</li> 
                <li class="j">soyisim : ${ ben4[i].soyisim}</li>
                <li class="j">numara : ${  ben4[i].numara}</li>
                <li class="j">şube : ${    ben4[i].şube}</li>
                <li class="j">çinsiyet : ${ben4[i].cin}</li>
                <li class="j">---------------</li>`
                
            }
        }

        if (ben5.length !== 0) {
            for (let i = 0; i < ben5.length; i++) {
                liste1 += `
                <li class="j">isim : ${    ben5[i].isim}</li> 
                <li class="j">soyisim : ${ ben5[i].soyisim}</li>
                <li class="j">numara : ${  ben5[i].numara}</li>
                <li class="j">şube : ${    ben5[i].şube}</li>
                <li class="j">çinsiyet : ${ben5[i].cin}</li>
                <li class="j">---------------</li>`
                
            }
        }


//-------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------  ---------------------------------------------------------------------------------------------------------
          document.getElementById("deger1").innerHTML =  liste1.length==0?`<li class="j">kayıt yok</li>`:liste1;

        liste1="";

        document.getElementById("isimInput").value = "";
        document.getElementById("soyisimInput").value = "";
        document.getElementById("emailInput").value = "";
        document.getElementById("subeInputA").value = "şubenizi seçiniz";
        document.getElementById("subeInputB").value = "çinsiyetinizi giriniz";
        orenciler2=[]
    });

    });




// if (isim == orenciler[i].isim && soyisim == orenciler[i].soyisim && numara == orenciler[i].numara && subeA == orenciler[i].şube && subeB == orenciler[i].cin) {
//                         document.getElementById("deger1").innerHTML = "İsim : " + isim;
//                         document.getElementById("deger2").innerHTML = "Soyisim : " + soyisim;
//                         document.getElementById("deger3").innerHTML = "Numara : " + numara;
//                         document.getElementById("deger4").innerHTML = "Şube : " + subeA;
//                         document.getElementById("deger5").innerHTML = "Cinsiyet : " + subeB;
//                     }
//                     else{
//                         document.getElementById("none").innerHTML="örenci bulunamdı!!!"
//                     }


