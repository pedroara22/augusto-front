const loadMemories = () => {
    axios.get("https://augusto.onrender.com/memories")
        .then((res) => {
            console.log(res.data)
            if (res.data) {
                res.data.forEach(element => {
                document.getElementById("main").innerHTML += `<div id="memoryDiv"><div  class="memory" >
                <div class="textDiv" id="r" >${element.author}</div>
                <div id="imgDiv" ><img src="${element.image}" /></div>
                <div class="textDiv">
                    <div><h3>${element.title}</h3></div>
                    <div><p>${transformDate(element.data)}</p></div>
                    
                </div>
                <div class="description">
                    <p>${element.description}</p>
                </div>
            </div></div>`
                });
            }

        })
}
const transformDate = (date) =>{
    let today = new Date(date);
    let yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    let formattedToday = dd + '/' + mm + '/' + yyyy;
    return formattedToday
}
loadMemories()