const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('label')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
})
