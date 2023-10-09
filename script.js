const BODY = document.querySelector(`body`);
const FIRSTCONTAINER = document.querySelector(`.container.first`);


const CREATEGRID16 = document.querySelector(`.create-grid-16`);
const CREATEGRID24 = document.querySelector(`.create-grid-24`);


let cellColor = ``;

// Start Sketching in 16x16 Canvas
CREATEGRID16.addEventListener(`click`, () => {

    // Remove Introduction Container
    FIRSTCONTAINER.remove();


    // Create Grid Container and Append to Body
    const GRIDCONTAINER = document.createElement(`div`);
    GRIDCONTAINER.className = `container`;

        const GRID = document.createElement(`div`);
        GRID.className = `grid-16`;

        GRIDCONTAINER.appendChild(GRID);

    BODY.insertBefore(GRIDCONTAINER, BODY.children[1]);


    // Create the Color Display Components and Append to this Flex Container 
    const CONTAINERFLEX1 = document.createElement(`div`);
    CONTAINERFLEX1.className = `container flex`;

        const LABEL1 = document.createElement(`h3`);
        LABEL1.className = `label`;
        LABEL1.innerText = `Current Color:`;

        const COLORDISPLAY = document.createElement(`div`);
        COLORDISPLAY.className = `color-display`;

        CONTAINERFLEX1.append(LABEL1,COLORDISPLAY);


    // Create the Color Buttons and Append to this Flex Container
    const CONTAINERFLEX2 = document.createElement(`div`);
    CONTAINERFLEX2.className = `container flex`;

        const LABEL2 = document.createElement(`h3`);
        LABEL2.className = `label`;
        LABEL2.innerText = `Choose Color:`;

        const CONTAINERFLEXBUTTONS1 = document.createElement(`div`);
        CONTAINERFLEXBUTTONS1.className = `container-flex-buttons`;

            const BLACKBUTTON = document.createElement(`button`);
            BLACKBUTTON.className = `black btn`;
            BLACKBUTTON.innerText = `Black`;

            const GRAYBUTTON = document.createElement(`button`);
            GRAYBUTTON.className = `gray btn`;
            GRAYBUTTON.innerText = `Gray`;

            const RAINBOWBUTTON = document.createElement(`button`);
            RAINBOWBUTTON.className = `rainbow btn`;
            RAINBOWBUTTON.innerText = `Rainbow`;

        CONTAINERFLEXBUTTONS1.append(BLACKBUTTON,GRAYBUTTON,RAINBOWBUTTON);

    CONTAINERFLEX2.append(LABEL2,CONTAINERFLEXBUTTONS1);


    // Create the Option Buttons and Append to this Flex Container
    const CONTAINERFLEX3 = document.createElement(`div`);
    CONTAINERFLEX3.className = `container flex`;

        const LABEL3 = document.createElement(`h3`);
        LABEL3.className = `label second`;
        LABEL3.innerText = `Options:`;

        const CONTAINERFLEXBUTTONS2 = document.createElement(`div`);
        CONTAINERFLEXBUTTONS2.className = `container-flex-buttons`;

            const ERASEBUTTON = document.createElement(`button`);
            ERASEBUTTON.className = `erase btn`;
            ERASEBUTTON.innerText = `Erase`;

            const CLEARBUTTON = document.createElement(`button`);
            CLEARBUTTON.className = `clear btn`;
            CLEARBUTTON.innerText = `Clear`;

            const ENDGAMEBUTTON = document.createElement(`button`);
            ENDGAMEBUTTON.className = `end-game btn`;
            ENDGAMEBUTTON.innerText = `End Game`;

        CONTAINERFLEXBUTTONS2.append(ERASEBUTTON,CLEARBUTTON,ENDGAMEBUTTON);

    CONTAINERFLEX3.append(LABEL3,CONTAINERFLEXBUTTONS2);

    // Append the 3 Flex Containers to the Body
    BODY.insertBefore(CONTAINERFLEX1, BODY.children[2]);
    BODY.insertBefore(CONTAINERFLEX2, BODY.children[3]);
    BODY.insertBefore(CONTAINERFLEX3, BODY.children[4]);

    // Function to create the Cells along with the Color Functions
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const cell = document.createElement('div');
            cell.classList.add(`cell`);
            GRID.appendChild(cell);

            BLACKBUTTON.addEventListener(`click`, () => {
                cell.addEventListener(`click`, () => {

                    blackColor();
    
                    cell.style.backgroundColor = `${cellColor}`;

                    COLORDISPLAY.style.backgroundColor = `${cellColor}`;
                });
            });

            GRAYBUTTON.addEventListener(`click`, () => {
                cell.addEventListener(`click`, () => {

                    grayColor();
    
                    cell.style.backgroundColor = `${cellColor}`;

                    COLORDISPLAY.style.backgroundColor = `${cellColor}`;
                });
            });

            RAINBOWBUTTON.addEventListener(`click`, () => {
                cell.addEventListener(`click`, () => {

                    rainbowColor();
    
                    cell.style.backgroundColor = `${cellColor}`;

                    COLORDISPLAY.style.backgroundColor = `${cellColor}`;
                });
            });

            ERASEBUTTON.addEventListener(`click`, () => {
                cell.addEventListener(`click`, () => {

                    eraseColor();
    
                    cell.style.backgroundColor = `${cellColor}`;

                    COLORDISPLAY.style.backgroundColor = `${cellColor}`;
                });
            });

            CLEARBUTTON.addEventListener(`click`, () => {
                eraseColor();
    
                cell.style.backgroundColor = `${cellColor}`;
            });

            ENDGAMEBUTTON.addEventListener(`click`, () => {
                location.reload();
            });
        }
    }
     
            
});

// Start Sketching in 24x24 Canvas
CREATEGRID24.addEventListener(`click`, () => {

    // Remove Introduction Container
    FIRSTCONTAINER.remove();


    // Create Grid Container and Append to Body
    const GRIDCONTAINER = document.createElement(`div`);
    GRIDCONTAINER.className = `container`;

        const GRID = document.createElement(`div`);
        GRID.className = `grid-24`;

        GRIDCONTAINER.appendChild(GRID);

    BODY.insertBefore(GRIDCONTAINER, BODY.children[1]);


    // Create the Color Display Components and Append to this Flex Container 
    const CONTAINERFLEX1 = document.createElement(`div`);
    CONTAINERFLEX1.className = `container flex`;

        const LABEL1 = document.createElement(`h3`);
        LABEL1.className = `label`;
        LABEL1.innerText = `Current Color:`;

        const COLORDISPLAY = document.createElement(`div`);
        COLORDISPLAY.className = `color-display`;

        CONTAINERFLEX1.append(LABEL1,COLORDISPLAY);


    // Create the Color Buttons and Append to this Flex Container
    const CONTAINERFLEX2 = document.createElement(`div`);
    CONTAINERFLEX2.className = `container flex`;

        const LABEL2 = document.createElement(`h3`);
        LABEL2.className = `label`;
        LABEL2.innerText = `Choose Color:`;

        const CONTAINERFLEXBUTTONS1 = document.createElement(`div`);
        CONTAINERFLEXBUTTONS1.className = `container-flex-buttons`;

            const BLACKBUTTON = document.createElement(`button`);
            BLACKBUTTON.className = `black btn`;
            BLACKBUTTON.innerText = `Black`;

            const GRAYBUTTON = document.createElement(`button`);
            GRAYBUTTON.className = `gray btn`;
            GRAYBUTTON.innerText = `Gray`;

            const RAINBOWBUTTON = document.createElement(`button`);
            RAINBOWBUTTON.className = `rainbow btn`;
            RAINBOWBUTTON.innerText = `Rainbow`;

        CONTAINERFLEXBUTTONS1.append(BLACKBUTTON,GRAYBUTTON,RAINBOWBUTTON);

    CONTAINERFLEX2.append(LABEL2,CONTAINERFLEXBUTTONS1);


    // Create the Option Buttons and Append to this Flex Container
    const CONTAINERFLEX3 = document.createElement(`div`);
    CONTAINERFLEX3.className = `container flex`;

        const LABEL3 = document.createElement(`h3`);
        LABEL3.className = `label second`;
        LABEL3.innerText = `Options:`;

        const CONTAINERFLEXBUTTONS2 = document.createElement(`div`);
        CONTAINERFLEXBUTTONS2.className = `container-flex-buttons`;

            const ERASEBUTTON = document.createElement(`button`);
            ERASEBUTTON.className = `erase btn`;
            ERASEBUTTON.innerText = `Erase`;

            const CLEARBUTTON = document.createElement(`button`);
            CLEARBUTTON.className = `clear btn`;
            CLEARBUTTON.innerText = `Clear`;

            const ENDGAMEBUTTON = document.createElement(`button`);
            ENDGAMEBUTTON.className = `end-game btn`;
            ENDGAMEBUTTON.innerText = `End Game`;

        CONTAINERFLEXBUTTONS2.append(ERASEBUTTON,CLEARBUTTON,ENDGAMEBUTTON);

    CONTAINERFLEX3.append(LABEL3,CONTAINERFLEXBUTTONS2,CLEARBUTTON,ENDGAMEBUTTON);

    // Append the 3 Flex Containers to the Body
    BODY.insertBefore(CONTAINERFLEX1, BODY.children[2]);
    BODY.insertBefore(CONTAINERFLEX2, BODY.children[3]);
    BODY.insertBefore(CONTAINERFLEX3, BODY.children[4]);

    // Function to create the Cells along with the Color Functions
    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 24; j++) {
            const cell = document.createElement('div');
            cell.classList.add(`cell`);
            GRID.appendChild(cell);

            BLACKBUTTON.addEventListener(`click`, () => {
                cell.addEventListener(`click`, () => {

                    blackColor();
    
                    cell.style.backgroundColor = `${cellColor}`;

                    COLORDISPLAY.style.backgroundColor = `${cellColor}`;
                });
            });

            GRAYBUTTON.addEventListener(`click`, () => {
                cell.addEventListener(`click`, () => {

                    grayColor();
    
                    cell.style.backgroundColor = `${cellColor}`;

                    COLORDISPLAY.style.backgroundColor = `${cellColor}`;
                });
            });

            RAINBOWBUTTON.addEventListener(`click`, () => {
                cell.addEventListener(`click`, () => {

                    rainbowColor();
    
                    cell.style.backgroundColor = `${cellColor}`;

                    COLORDISPLAY.style.backgroundColor = `${cellColor}`;
                });
            });

            ERASEBUTTON.addEventListener(`click`, () => {
                cell.addEventListener(`click`, () => {

                    eraseColor();
    
                    cell.style.backgroundColor = `${cellColor}`;

                    COLORDISPLAY.style.backgroundColor = `${cellColor}`;
                });
            });

            CLEARBUTTON.addEventListener(`click`, () => {
                eraseColor();
    
                cell.style.backgroundColor = `${cellColor}`;
            });

            ENDGAMEBUTTON.addEventListener(`click`, () => {
                location.reload();
            });
        }
    }
     
            
});


// Functions to Update the Cell Color Background
function blackColor() {
    cellColor = `#000000`;
}

function grayColor() {
    cellColor = `#808080`;
}

function rainbowColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    cellColor = `#${randomColor}`;
}

function eraseColor() {
    cellColor = `#FFFFFF`;
}