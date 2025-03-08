document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("main > div");
    const count = Math.floor(elements.length / 5); // Количество элементов, которые нужно изменить

    let selectedIndexes = new Set();
    while (selectedIndexes.size < count) {
        let randomIndex = Math.floor(Math.random() * elements.length);
        selectedIndexes.add(randomIndex);
    }

    selectedIndexes.forEach(index => {
        elements[index].style.gridColumn = "span 2";
    });
});