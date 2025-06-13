const loadMemories = () => {
    axios.get("https://augusto.onrender.com/memories")
        .then((res) => {
            if (res.data) {
                res.data.forEach(element => {
                    document.getElementById("main").innerHTML += `
                        <div class="memoryDiv">
                            <div class="memory">
                                <div class="polaroid">
                                    <img src="./polaroid.png" alt="polaroid frame" />
                                    <div class="imgDiv">
                                        <img src="${element.image}" alt="memory image" />
                                    </div>
                                    <div class="description">
                                        <p>${element.description}</p>
                                        <a href="edit.html?=${element._id}" style="color:blue;" target="_blank" class="link">Editar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
        })
        .catch((err) => {
            console.error("Erro ao carregar memórias:", err);
        });
};

const transformDate = (date) => {
    let today = new Date(date);
    let yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return dd + '/' + mm + '/' + yyyy;
};

loadMemories();
