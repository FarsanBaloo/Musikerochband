import band from "./band.js";
import musiker from "./musiker.js";

const db = require(`./database.json`);
import PromptSync from "prompt-sync";

const prompt = PromptSync({ sigint: true })




function readdatabase() 
{

    let befintligdata = [];

    try {
        const datajson = fs.readFileSync("./database.json", "utf8");
        befintligdata = JSON.parse(datajson);

        if (!Array.isArray(befintligdata)) {
            befintligdata = [];
        }
    } catch (err) 
    {
    }

    return befintligdata;
}



while(true)
{
    database = readdatabase();
    console.clear()

    console.log("Meny Musik databasen");
    
    console.log("1. Skapa ett band");
    console.log("2. Ta bort ett band");
    console.log("3. Skapa en musiker");
    console.log("4. Ta bort en musiker");
    console.log("5. Lägg till en musiker i ett band");
    console.log("6. Ta bort en musiker från ett band");
    console.log("7. Avsluta programmet");

    let val = Number(prompt("Välj ett alternativ: "));



    switch (val) {
        //skappa band
        case 1:
            nameofband = prompt("Ange namnet på bandet: ");
            yearstarted = Number(prompt("Ange årtalet bandet skappades: "));
            const bandet = new band(nameofband,yearstarted);
        
            //spara objekt till json
            savedatabase(database);

            break;


        case 2:
            // ta bort band ifrån json
            nameofband = prompt("Ange namnet på bandet som skall raderas ur databasen: ");
            //remove nameofband  from java object befintligdata
            database.remove(nameofband)
            //spara objekt till json
            fs.writeFileSync("./database.json", JSON.stringify(database, null, 2));

            break;

        case 3:
            // skapa en musiker
            nameofartist = prompt("Ange namnet på musikern: ");
            yearbirth = Number(prompt("Ange årtalet när artisten är född [19xx]: "));
            const musician = new musiker(nameofartist,yearbirth);

            // spara objekt till json
            database.push(musician);
            fs.writeFileSync("./database.json", JSON.stringify(datbase, null, 2));
            break;

        case 4:
            // ta bort musiker ifrån json
            nameofartist = prompt("Ange namnet på musikern som skall raderas ur databasen: ");
            //remove nameofartist  from java object befintligdata
            database.remove(nameofartist)
            //spara objekt till json
            fs.writeFileSync("./database.json", JSON.stringify(database, null, 2));
        
            break;
        
        case 5:
            // lägg till artist i band  
            nameofartist = prompt("Ange namnet på musikern: ");
            nameofband = prompt("Ange namnet på bandet: ");
            database.band(nameofband).addmember(nameofartist);
            break;

        case 6:
            // ta bort artist ifrån band
            nameofartist = prompt("Ange namnet på musikern: ");
            nameofband = prompt("Ange namnet på bandet: ");
            database.band(nameofband).addmember(nameofartist);
            break;

        case 7:
            // avsluta programmet
            break;

        default:
            console.log("Ogiltigt meny val, försök igen");
            break;

        }
    }
