let logo = document.getElementById('avatar-img');
let input = document.getElementById('avatar-input');

logo.addEventListener('click', () => {
    // input.click();
    
    input.onchange = () => {

        const [files] = input.files;
         
        if (files) {
            logo.src = URL.createObjectURL(files);

        } else {
            return;
        }
    }

})