const textChanges = document.querySelectorAll('p');

textChanges.forEach((changeTextStyle) => {
    changeTextStyle.addEventListener('click', (e) => {
        e.target.style.backgroundColor = 'grey';
        e.target.style.color = 'blue';
        changeTextStyle.innerHTML = 'You\'ve Clicked';
    })
})
