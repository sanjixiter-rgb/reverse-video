const input = document.getElementById("videoInput");
const preview = document.getElementById("preview");

input.addEventListener("change", () => {

    const file = input.files[0];

    if(!file) return;

    preview.src = URL.createObjectURL(file);

});
