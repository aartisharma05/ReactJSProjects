const fileInput = document.getElementById("fileInput");
const fileContainer = document.getElementById("fileContainer");
console.log("here");
console.log(fileInput);
// Add a click event listener to the container
fileContainer.addEventListener("click", () => {
  // Trigger a click on the hidden file input
  fileInput.click();
});
console.log("here");
// Add a change event listener to the file input
fileInput.addEventListener("change", () => {
  // Perform any desired actions when a file is selected
  console.log("File selected:", fileInput.files[0].name);
});
