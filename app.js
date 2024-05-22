const displayNone = (idName) =>{
    const id = document.getElementById(idName);
    id.style.display = 'none';
} 
const displayBlock = (idName) => {
    const id = document.getElementById(idName);
    id.style.display = 'block';
}
document.getElementById('menu').addEventListener('click', () => {
    displayBlock('menu-none');
});

document.getElementById('xmark').addEventListener('click', () => {
    displayNone('menu-none');
});

document.getElementById('locetion').addEventListener('click', () =>{
    displayBlock('loc-btn');
});

document.getElementById('minus').addEventListener('click', () =>{
    displayNone('loc-btn');
});

const next = document.getElementById('next');
const peav =document.getElementById('peav');

next.addEventListener('click', () => {
   displayBlock('perents-menu2');
   displayNone('perents-menu1');
});
peav.addEventListener('click', () => {
   displayBlock('perents-menu1');
   displayNone('perents-menu2');
});
