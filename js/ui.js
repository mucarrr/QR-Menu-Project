const menuList = document.querySelector("#menu-list");

export const renderCards = (data)=>{
    const cardsHtml = data.map((item)=>
        `<a href="./detail.html?id=${item.id}" id="card" class="d-flex flex-column flex-md-row text-dark text-decoration-none gap-3 mx-4 my-4">
            <img src= "${item.img}" alt="" class="rounded img-fluid shadow">
            <div>
                <div class="d-flex justify-content-between">
                    <h5>${item.title}</h5>
                    <p class="text-success fw-bold">${(item.price * 30).toFixed(2)}</p>
                </div>
                <p class="lead">
                    ${item.desc}
                </p>
            </div>
        </a>        
        `
    ).join("");
menuList.innerHTML = cardsHtml;

};