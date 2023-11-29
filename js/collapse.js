let buttonCollapse, legend;
buttonCollapse = document.getElementById('collapselegend');
legend = document.querySelector('#legend ol');

buttonCollapse.addEventListener('click', function(){
    if(buttonCollapse.classList=='collapse'){
        legend.style.display = 'block';
        buttonCollapse.classList.remove('collapse');
    }else{
        legend.style.display='none';
        buttonCollapse.textContent = 'L';
        buttonCollapse.classList.add('collapse');
    }
});