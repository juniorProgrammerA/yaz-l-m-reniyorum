
document.addEventListener("DOMContentLoaded", function() {
    let deneme1 = "";
    
    deneme1 += `<span>Login</span>
<form>
    <input id="isimInput" class="u" type="text" placeholder="İsim" >
    <input id="soyisimInput" type="text" placeholder="Soyisim">
    <input id="emailInput" class="" type="email" placeholder="Email">
    <input id="sifreInput" class="a" type="password" placeholder="Şifre">
</form>
<button id="loginButton">Login</button>`;
    document.getElementById("deneme1").innerHTML = deneme1;

let deneme2 =[
    {getElementById:"isimInput"    ,  name:"İsim : "},
    {getElementById:"soyisimInput" ,  name:"Soyisim : "},
    {getElementById:"emailInput"   ,  name:"Email : "},
    {getElementById:"sifreInput"   ,  name:"Şifre : "},
]
for(let i = 0;i<deneme2.length; i++) {
    document.getElementById(deneme2[i].getElementById).addEventListener("blur", function() {
        let isim = document.getElementById(deneme2[i].getElementById).value;
        console.log(deneme2[i].name, isim);
        document.getElementById(deneme2[i].getElementById).value = "";

    });
    }
});

