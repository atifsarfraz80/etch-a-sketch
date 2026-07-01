let container = document.querySelector('.grid');

for(let i = 0 ; i < 256 ; i++)
{
    const box = document.createElement('div');
    box.classList.add("grid-box");

    container.appendChild(box);
}