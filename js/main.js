import {fetchMenu} from './api.js';
import {renderCards} from './ui.js';

document.addEventListener('DOMContentLoaded', async ()=>{
    const data = await fetchMenu();
    renderCards(data.menu);

const inputs = document.querySelectorAll('#buttons input');

inputs.forEach((input) => {
    input.addEventListener('change', ()=>{
        const selectedCategory = input.id;

        if(selectedCategory == "all"){
            renderCards(data.menu);
        }else{
            const filtered = data.menu.filter((item) => item.category == selectedCategory)
            renderCards(filtered);
        }
       
        
        
    });
});


});

