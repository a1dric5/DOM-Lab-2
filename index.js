const button = document.getElementById('button');
const input = document.getElementById('input');
const text = document.getElementById('text');

button.addEventListener('click', () => {
	text.innerText = 'Submitted!';
});

input.addEventListener('input', () => {
	text.innerText = input.value;
    // input.value = '';
});
