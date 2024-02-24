createEncyclo();
async function createEncyclo(){
    const res = await fetch("https://digimon-api.vercel.app/api/digimon");
    const data = await res.json();
    data.forEach(element => {
        console.log(element.level)
        const div = document.getElementById(element.level);
        const digiCard = `
            <div>
                <img src="${element.img}"/>
                <h2>${element.name}</h2>
                <h4>${element.level}</h4>
            </div>
        `;
        div.innerHTML += digiCard;
    });
}