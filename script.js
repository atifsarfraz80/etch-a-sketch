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
        
        box.dataset.interactions = "0";

        box.addEventListener("mouseenter", (e) =>{
        const currentBox = e.target;
        let interactions = parseInt(currentBox.dataset.interactions);

        if (interactions === 0) {
            const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            currentBox.style.backgroundColor = randomColor;
        }

        if (interactions < 10) {
            interactions++;
            currentBox.dataset.interactions = interactions;
        }
        const currentBrightness = 100 - (interactions * 10);
        currentBox.style.filter = `brightness(${currentBrightness}%)`;
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