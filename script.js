/* TODO: inserite il codice JavaScript necessario a completare il MHW! */
const checked = src = "images/checked.png";
const unchecked= src="images/unchecked.png";

function reset(){
    const select=document.querySelectorAll("div.select");
    const overlay=document.querySelectorAll("div.overlay");
    const blocco=document.querySelector("div.result");
    
    for(const box1 of select ){
        box1.classList.remove("select");
        box1.querySelector(".checkbox").src="images/unchecked.png";
    }

    for(const box2 of overlay){
        box2.classList.remove("overlay");
    }

   blocco.classList.add("hidden");

}

function ricarica(){


const blocco=document.querySelector('div.risultato');

reset()

for (const box of boxes) {
    box.addEventListener('click', check);
}



}





function risultatoFinale(scelta){

        const Risultato=document.querySelector('h1.risultato');
        Risultato.textContent = RESULTS_MAP[scelta.dataset.choiceId].title;

        const Descrizione=document.querySelector('div.descrizione');
        Descrizione.textContent=RESULTS_MAP[scelta.dataset.choiceId].contents;

        const final=document.querySelector('div.result');
        final.classList.remove('hidden');
        
    }

   


function controlloRisultati(Risultati){
    if(Risultati[1].dataset.choiseId === Risultati[2].dataset.choiseId){
      risultatoFinale(Risultati[1]);
    }

    risultatoFinale(Risultati[0]);
}

function check(event) {
    const container = event.currentTarget;
    
    const image = container.querySelector('.checkbox');
    image.src = checked;
    

    container.classList.add("select");
    const boxes = container.parentNode.querySelectorAll('div');
    
    for (const box of boxes) {

        box.classList.add("overlay");

        if(box !=container){
            box.classList.add("overlay");
            box.classList.remove("select");
            const c=box.querySelector('.checkbox');
            c.src=unchecked;
        }

      

    }
    container.classList.remove("overlay");
    
    const tutti=document.querySelectorAll('.choice-grid div');

    const Risultati=document.querySelectorAll(".select");
    if(Risultati.length==3){
        for (const box of tutti) {
            box.removeEventListener('click',check);
        }
        controlloRisultati(Risultati);
        
    }
    
}







const boxes = document.querySelectorAll('.choice-grid div');
for (const box of boxes) {
    box.addEventListener('click', check);
}

const bottone=document.querySelector('button');
bottone.addEventListener('click',ricarica);