const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const previewImg = document.getElementById("preview-img");
const instructionText = dropArea.querySelector("p");

// Clique abre seletor
dropArea.addEventListener("click", () => {
    inputFile.click();
});

// Input pelo seletor
inputFile.addEventListener("change", () => {
    const file = inputFile.files[0];
    if (file) showImage(file);
});

// Drag over (permite o drop)
dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
});

// Drop do arquivo
dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
        inputFile.files = e.dataTransfer.files; // opcional, se quiser sincronizar
        showImage(file);
    }
});

function showImage(file) {
    const reader = new FileReader();
    reader.onload = function (e) {
        previewImg.src = e.target.result;
        previewImg.style.display = "block";
        instructionText.style.display = "none";
    };
    reader.readAsDataURL(file);
}
let addButton = document.getElementById('addButton')
addButton.addEventListener("click", async () => {
  const author = "augusto";
  const title = "Nova Memória";
  const data = Date.now(); // Usando timestamp atual como data
  const description = document.querySelector("textarea[name='description']").value;
  const file = inputFile.files[0];

  if (!description || !file) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const formData = new FormData();
  formData.append("author", author);
  formData.append("title", title);
  formData.append("data", data);
  formData.append("description", description);
  formData.append("file", file);


  try {
    const response = await axios.post("https://augusto.onrender.com/newMemory", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    alert("Memória adicionada com sucesso!");
    window.location.reload();
  } catch (error) {
    console.error("Erro ao enviar memória:", error);
    alert("Erro ao adicionar memória. Tente novamente.");
  }
});