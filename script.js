let container = document.querySelector('.grid');

function gridCreation(size)
{
    container.innerHTML = "";

    const boxPercentage = 100/size;

    const totalBoxes = size*size;
    for(let i = 0 ; i < totalBoxes ; i++)
    {
        const box = document.createElement('div');
        box.classList.add("grid-box");

        box.style.width = `${boxPercentage}%`;
        box.style.height = `${boxPercentage}%`;
        box.style.boxSizing = 'border-box';
        box.style.border = '1px solid black';

        box.addEventListener("mouseenter", (e) =>{
        e.target.style.backgroundColor = '#b4e1ff';
    });
    container.appendChild(box);
    }
}

gridCreation(16);


let button = document.querySelector('.butt');
button.addEventListener('click' , () => {
    let size = prompt("Enter the Size of your new Grid.(MAX 100)");

    size = parseInt(size);

    while (isNaN(size) || size < 1 || size > 100)
    {
        size = prompt("Enter the Size of your new Grid.(MAX 100)");
        size = parseInt(size);
    }

    gridCreation(size);

});