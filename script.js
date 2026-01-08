let bod = document.getElementById('bd');

parent.addEventListener('click',(e)=>{
        bod.style.backgroundColor = e.target.id;
})