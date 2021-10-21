console.log("Merhaba Kodlama.io")

var dolarDun = 9.2
{
    var dolarDun = 10.4
    console.log("Bloktaki dolarDun: ", dolarDun);
}
console.log("Blok dışındaki dolarDun: ", dolarDun)

const euroDun = 11.40
//euroDun = 17,24
console.log("euroDun: ",euroDun);

let konutKredileri = ["Konuş kredisi", "Taşıt kredisi", "Kamu konut kredisi"]
console.log("<ul>"); 
for (let index = 0; index < konutKredileri.length; index++) 
{
    console.log("<li>"+konutKredileri[index]+"</li>"); 
}
console.log("</ul>"); 