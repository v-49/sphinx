document.addEventListener("DOMContentLoaded", function() { 
    var cells = document.querySelectorAll(".docutils td");
    cells.forEach(function(cell) {
        if (cell.textContent.trim() === "√") {
            cell.innerHTML = '<span class="green-bold">√</span>';
        }
    });
});
