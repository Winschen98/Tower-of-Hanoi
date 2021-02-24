const game = () => {
    // game resources
    const gameScreen = document.querySelector('.game')
    gameScreen.style.display = 'none';
    const timeDisplay = document.querySelector('.time-js'); 
    const movesDisplay = document.querySelector('.moves-js'); 
    const tower1 = document.querySelector('.tower1'); 
    const tower2 = document.querySelector('.tower2');
    const tower3 = document.querySelector('.tower3');
    const restartBtn = document.querySelector('.restart-btn');

    //modal 
    const winModal = document.querySelector('.modal-container');
    const winText =  document.querySelector('.win-text')
    const winRecord =  document.querySelector('.win-record')
    const modalButton = document.querySelector('.modal-button')
    const textOptions = ['Well done!', 'Good job!', 'Bananas!', 'Nutty!', "You're on fire!", 'Excellent!', 'Big brain!', 'Congratulations!']

    // number of disk  ===> init at 1 disk (level 1) 
    let numDisk = 1;

    // Initialized at menu screen. Enter game after play game is clicked. 
    const startGame = () => {
        const playGameBtn = document.querySelector('.menu button')
        const menuScreen = document.querySelector('.menu')

        playGameBtn.addEventListener('click', () => {
            // menuScreen.classList.add('fadeOut');
            menuScreen.style.display = 'none';
            gameScreen.style.display = 'block';
        });
    }

    // display and update number of moves 
    const countMoves = () => {
        movesDisplay.innerText = moves;
    }

    // display and update timer 
    let timerInterval = null;
    let seconds = 0; 
    const updateTimer = () => {
      timeDisplay.innerText = ++seconds;
    }
    const startTimer = () => { 
        stopTimer(); 
        timerInterval = setInterval(updateTimer, 1000);  
    }
    const stopTimer = () => {
        clearInterval(timerInterval); 
    }

    // function to initialize disk. In case I want to scale the number of disk allow player to choose input or man increase num. 
    const initDisk = (numDisk) => {
        for (let i=1; i < numDisk + 1; i++){
            const disk = document.createElement('li');
            disk.classList.add('disk');
            disk.id = 'disk' + i;
            tower1.appendChild(disk);
        }
    }

    const clearDisk = () => {
        document.querySelectorAll('.disk').forEach(disk => disk.remove());
    }


    let chosenDisk = undefined;
    let moves = 0; 
    const moveDisk = function(){
        // if no disk chosen and clicked on empty tower, do nothing 
        if (chosenDisk === undefined && this.childElementCount === 0){
            return;
        }
        //if no disk chosen, select the firstChild of the clicked tower
        if (chosenDisk === undefined){
            chosenDisk = this.firstChild
            this.classList.add('selected');
        // if we click the same tower twice, it should reset chosenDisk
        } else if (chosenDisk === this.firstChild){
            chosenDisk = undefined;
            this.classList.remove('selected');
        // if chosen disk is smaller than the most recent child or clicked tower is empty, append chosen disk
        } else if (this.childElementCount === 0 || chosenDisk.id < this.firstChild.id){
            if(seconds === 0){
                startTimer(); 
            }
            chosenDisk.parentNode.classList.remove('selected');
            this.prepend(chosenDisk);
            moves ++;
            countMoves();
            chosenDisk = undefined;
            displayWin();
        // chosen disk is larger than disk on selected tower
        } else {
            chosenDisk.parentNode.classList.remove('selected');
            chosenDisk = undefined;
        }
    }
    // if reset class of previous disk if a new disk is selected

    const restartGame = () => {
        // ?? add a modal that asks "are you a quitter with yes/no buttons"
        clearDisk();
        stopTimer(); 
        seconds = 0; 
        timeDisplay.innerText = 0;
        moves = 0; 
        movesDisplay.innerText = 0;  
        initDisk(numDisk);
    }
 
    const nextLevel = () => {
        clearDisk();
        stopTimer(); 
        seconds = 0; 
        timeDisplay.innerText = 0;
        moves = 0; 
        movesDisplay.innerText = 0; 
        winModal.style.display = 'none'; 
        numDisk ++; 
        initDisk(numDisk);  
    }

    // for the winner display show a modal pop-up that asks if the player would like to play again
    displayWin = () => {
        // check if last level 
        if (tower3.childElementCount === 8){
            stopTimer();
            winModal.style.display = 'flex';
            winText.innerText = 'You beat the Tower of Hanoi!'
            winRecord.innerText = `you solved The Tower of Hanoi with ${numDisk} disk in ${seconds} seconds and ${moves} moves!`;
        }
        if (tower3.childElementCount === numDisk){
            stopTimer();
            winModal.style.display = 'flex';
            winText.innerText = textOptions[Math.floor(Math.random() * textOptions.length + 1)];
            winRecord.innerText = `you solved The Tower of Hanoi with ${numDisk} disk in ${seconds} seconds and ${moves} moves!`;
            // next level
            modalButton.addEventListener('click', nextLevel)
        }
    }

    tower1.addEventListener('click', moveDisk);
    tower2.addEventListener('click', moveDisk);
    tower3.addEventListener('click', moveDisk);
    restartBtn.addEventListener('click', restartGame);

    // invoke functions necessary at start up. 
    startGame();
    countMoves();
    initDisk(numDisk);
    displayWin();
};

//run the game 
game(); 