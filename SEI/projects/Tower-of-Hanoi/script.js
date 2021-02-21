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


  // invoke functions necessary for game.
  startGame();
  initDisk();
};

//run the game 
game(); 