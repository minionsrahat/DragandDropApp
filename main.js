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
// for (const column of columns) {
//     column.addEventListener('dragover', (e) => {
//         /* ----------- prevent the default behaviour that is not letting any element be dropped inside the column div-------------- */

//         //const currentDraggringBox = document.getElementsByClassName('dragging');
//         const currentDraggringBox = document.getElementById('dragging');
//         const boxesOfCurrenrtColumn = column.children;
//         let count = 0
//         for (const box of boxesOfCurrenrtColumn) {
//             if (currentDraggringBox.classList[1] === box.classList[1]) {
//                 count = count + 1;
//             }
//         }
//         if (count === 0) {
//             e.preventDefault();
//             column.appendChild(currentDraggringBox);
//             //column.appendChild(currentDraggringBox[0]);
//         }
//     })
// }

columns.forEach((column)=>{
    column.addEventListener('dragover',(e)=>{
        const selectedDragElement=document.querySelector('#drag')
        if(column.querySelector(`.${selectedDragElement?.classList[1]}`)){
            e.preventDefault()
            column.appendChild(selectedDragElement)
        }
    })
})