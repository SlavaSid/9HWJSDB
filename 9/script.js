

const form = document.querySelector('form'),
        input = form.querySelector('.form-control'),
        ul = document.querySelector('.list-group');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            ul.innerHTML += `<li class="list-group-item">
            <label class="form-check-label"><input class="form-check-input me-1" type="checkbox" value="">${input.value}</label> <button type="button" class="btn btn-outline-danger">Удалить</button></li>`;
        input.value = '';

        ul.querySelectorAll('.list-group-item').forEach(li => {
           li.addEventListener('click', () => {
           const checkbox = li.querySelector('.form-check-input');
           if(checkbox.checked){
            li.classList.add('list-group-item-success');
            checkbox.setAttribute('checked', 'true');}
            else{
                li.classList.remove('list-group-item-success');
                checkbox.removeAttribute('checked', 'true');}
               }) 
               const delButton = li.querySelector('.btn');
               delButton.addEventListener('click', () => {
               li.remove();})
         })
        
        })
       