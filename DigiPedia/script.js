createEncyclo();
async function createEncyclo(){
    const res = await fetch("https://digimon-api.vercel.app/api/digimon");
    const data = await res.json();
    data.forEach(element => {
        const div = document.getElementById(element.level);
        let levelColor;
        switch (element.level) {
            case "Fresh":
                levelColor = "rgba(201, 180, 201, 0.616)";
                break;
            case "In Training":
                levelColor = "rgb(255, 194, 63)";
                break;
            case "Rookie":
                levelColor = "rgb(253, 55, 55)";
                break;
            case "Champion":
                levelColor = "rgb(39, 108, 255)";
                break;
            case "Ultimate":
                levelColor = "radial-gradient(circle, rgb(175, 90, 255) 40%, rgb(143, 22, 230) 68%)";
                break;
            case "Mega":
                levelColor = "rgba(251,255,179,1)";
                break;            
            default:
                throw new Error("Invalid Evolution!");
        } 
        const digiCard = `
            <div style="background: ${levelColor}">
                <div id="white_circle">
                    <img src="${element.img}"/>
                </div>
                <h2>${element.name}</h2>
                <h4>${element.level}</h4>
            </div>
        `;
        div.innerHTML += digiCard;
    });
}

/*
        let levelColor;
        switch (levelColor) {
            case "Fresh":
                levelColor = "rgba(201, 180, 201, 0.616)";
                break;
            case "In Training":
                levelColor = "rgb(255, 194, 63)";
                break;
            case "Rookie":
                levelColor = "rgb(253, 55, 55)";
                break;
            case "Champion":
                levelColor = "rgb(253, 55, 55)";
                break;
            case "Ultimate":
                levelColor = "radial-gradient(circle, rgb(175, 90, 255) 40%, rgb(143, 22, 230) 68%)";
                break;
            case "Mega":
                levelColor = "rgba(251,255,179,1)";
                break;            
            default:
                new throw Error("Invalid Level");
                break;
        } 
        const div = document.getElementById(element.level);
        const digiCard = `
            <div style="background: ${levelColor}">
                <div id="white_circle">
                    <img src="${element.img}"/>
                </div>
                <h2>${element.name}</h2>
                <h4>${element.level}</h4>
            </div>
        `;
*/