
document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const loadMoreButton = document.getElementById('load-more');
    let visibleBoxes = 4;

    // Function to show boxes
    function showBoxes(count) {
        for (let i = 0; i < count; i++) {
            if (boxes[i]) {
                boxes[i].style.display = 'block';
            }
        }
    }

    // Show initial boxes
    showBoxes(visibleBoxes);

    loadMoreButton.addEventListener('click', () => {
        visibleBoxes += 4;
        showBoxes(visibleBoxes);

        if (visibleBoxes >= boxes.length) {
            loadMoreButton.style.display = 'none';
        }
    });
});
