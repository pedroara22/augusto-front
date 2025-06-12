const textarea = document.querySelector('textarea');
const textInput = document.querySelector('input[type="text"]');

textarea.addEventListener('blur', () => {
    if (textarea.value != '') {
        textarea.style.background = 'none';
        textarea.style.border = 'none';
    }
    
});

textInput.addEventListener('blur', () => {
    if (textInput.value != '') {
        textInput.style.background = 'none';
        textInput.style.border = 'none';
    }
});