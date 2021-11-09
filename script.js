const toggles = document.getElementById('togglebtns');
let dim = document.getElementById('circle')
      
toggles.addEventListener("click", ()=>{
    dim.classList.toggle('mrl')
    toggles.classList.toggle('bg')
    yearly.classList.toggle('clrbw')
    monthly.classList.toggle('clrbw')
    anlyPrice.classList.toggle('dNone')
    mnthlyPrice.classList.toggle('dNone')
    
})