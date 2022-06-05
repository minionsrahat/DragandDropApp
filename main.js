const columns = document.querySelectorAll('.column');
const colorBox = document.querySelectorAll('.color-box');

colorBox.forEach((box) => {
    box.addEventListener('dragstart',(e)=>{
               
    e.target.id='drag'
    console.log('Select For drag');

    })

    box.addEventListener('dragend',(e)=>{  
        e.target.removeAttribute('id')
        console.log('Drop element');
    
        })

})