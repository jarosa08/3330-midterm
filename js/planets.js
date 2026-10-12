
$(function() {
 
    //Write your code below
    (async () => {
        try {
            const response = await fetch("data/planets.json");

            if (!response.ok){
                throw new Error ("Fetch Failed.");
            }

            const planets = await response.json();
            
            // console.log("planets:", planets);
            const body = $("main");
            let index = 0;
            planets.forEach(planet => {
                body.append(`
                    <div class="card" id="${index}">
                        <div class="card-body">
                            <img src="./images/${planet.name.valueOf().toLowerCase()}.png" alt="${planet.name}">
                            <p class="card-title">${planet.name}</p>
                        </div>
                    </div>
                `);
                index++;
            });


            const cards = document.querySelectorAll(".card");
            cards.forEach(card => {
                card.addEventListener("click", ()=>{
                    const dialog = document.getElementById("dialog");
                    dialog.getElementsByClassName("name")=card.name;
                    dialog.getElementsByClassName("constellation")=card.constellation;
                    dialog.getElementsByClassName("altitude") = card.altitude;
                    dialog.getElementsByClassName("azimuth") = card.azimuth;
                    dialog.dialog();
                });
            });

        }catch (error){
            console.error("Unexpected error.", error);
        }

        
   

       
    }) ();

});
