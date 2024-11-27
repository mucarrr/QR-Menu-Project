/* console.log(window.location.search.slice(4)); */

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const container = document.querySelector(".container");

document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("../db.json")
    /* console.log(response); */
    const data = await response.json();
   /*  console.log(data); */
   const product = data.menu.find((item)=>item.id == id)

   if(!product){
    container.innerHTML = `
    <div style="margin-top:30vh" class="d-flex flex-column ">
    <h1 class="text-center fw-bold"> Aradığınız Ürün Mevcut Değil! </h1>
    <p class="text-center"> <a href="./index.html">Anasayfaya dönün</a> </p>
    </div> `
   }else{
   
container.innerHTML =     `<div class="d-flex justify-content-between fs-6">
<a href="/">
    <img width="35px" src="./images/home.png" alt="">
</a>
<p>anasayfa / ${product.category} / ${product.title.toLowerCase()} </p>
</div>
<h1 class="text-center my-4">${product.title}</h1>
<img class="rounded object-fit-cover shadow" style="max-height:350px" src="${product.img}" alt="">
<h4 class="mt-4"> Ürün Kategorisi: <span class="text-success">${product.category}</span></h4>
<h4 class="mt-4"> Ürünün Fiyatı: <span class="text-success">${(product.price*30).toFixed(2)}</span>  </h4>
<p class="lead">${product.desc}</p>
`

   }

   
   
});





