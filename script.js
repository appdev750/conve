function redirectToPage(pageUrl) {
  window.location.href = pageUrl;
}
const dialogContainer = document.getElementById('dialogContainer');
const closeButton = document.getElementById('closeButton');

// Function to show the dialog
function showDialog() {
    dialogContainer.style.display = 'block';
}

// Function to close the dialog
function closeDialog() {
    dialogContainer.style.display = 'none';
}

// Event listener to show the dialog
document.addEventListener('DOMContentLoaded', () => {
    showDialog();
});

// Event listener to close the dialog when the close button is clicked
closeButton.addEventListener('click', () => {
    closeDialog();
});