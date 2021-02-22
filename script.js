const game = () => {
    // game resources
    const moves = document.querySelector('.moves'); 
    const time = document.querySelector('.time'); 
    const tower1 = document.querySelector(".tower1"); 
    const tower2 = document.querySelector(".tower2");
    const tower3 = document.querySelector(".tower3");


    // Initialized at menu screen. Enter game after play game is clicked. 
    const startGame = () => {
        const playGameBtn = document.querySelector('.menu button')
        const menuScreen = document.querySelector('.menu')
        const gameScreen = document.querySelector('.game')

        playGameBtn.addEventListener('click', () => {
            menuScreen.classList.add('fadeOut');
            gameScreen.classList.add('fadeIn');
        });
    }


    // function to initialize disk. In case I want to scale the number of disk allow player to choose input or man increase num. 
    const initDisk = (num=4) => {
        for (let i=1; i < num + 1; i++){
            const disk = document.createElement('li');
            disk.classList.add('disk');
            disk.id = 'disk' + i;
            tower1.appendChild(disk);
        }
    }

    // function to move disk
    // to raise the selected disk I can add a class named 'raise' that raises it to the top of the tower
    let chosenDisk = false;
    const moveDisk = function(){
        //if no disk chosen, take the firstChild of the clicked tower
        if (chosenDisk === false){
            console.log(this + '1')
            chosenDisk = this.firstChild
            console.log(chosenDisk)
        } else if (chosenDisk === false && this.childElementCount === 0){
            console.log(this + "2")
            return
        } else if (chosenDisk === this.firstChild){
            console.log(this + '3')
            chosenDisk = false
        } else if (chosenDisk.value < this.lastChild.value || this.childElementCount === 0){
            console.log(this + '4')
            this.appendChild(chosenDisk)
            chosenDisk = false
        } else{
            console.log(this + '5')
            chosenDisk = false}
    }

    tower1.addEventListener('click', moveDisk)
    tower2.addEventListener('click', moveDisk)
    tower3.addEventListener('click', moveDisk)

    // for the winner display show a modal pop-up that asks if the player would like to play again


  // invoke functions necessary for game.
  startGame();
  initDisk();
};

//run the game 
game(); 