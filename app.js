const form= document.querySelector('.add-form');
const liste= document.querySelector('.todos');

function tamplateOlustur(yapilacak){
  let html= `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${yapilacak}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;
  liste.innerHTML += html;
};

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const yapilacak= form.add.value.trim();
  if(yapilacak.lenght){
    templateOlustur(yapilacak);
    form.reset();
  }
});

liste.addEventListener('click', (e)=> {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  };
});