// Minimal block-style Snake Game (Phaser 3, no assets)

// Fully functional block-style Snake game (Phaser 3, no assets)
(function(){
  try {
    if (!window.Phaser) return;
    const container = document.getElementById('game-container');
    container.innerHTML = '';
    const tileSize = 32;
    const width = Math.floor(container.offsetWidth / tileSize) * tileSize;
    const height = Math.floor(container.offsetHeight / tileSize) * tileSize;
    let game, cursors, scoreText, snake, food, direction, nextDirection, score, speed, isGameOver = false, moveTimer = 0, moveInterval = 100;
    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);

    function preload() {}

    function create() {
      score = 0;
      direction = 'RIGHT';
      nextDirection = 'RIGHT';
      speed = moveInterval;
      isGameOver = false;
      moveTimer = 0;
      // Score
      scoreText = this.add.text(width/2, 32, '0', {
        fontFamily: 'Arial Black', fontSize: '36px', color: '#fff', align: 'center', stroke: '#00e6ff', strokeThickness: 5,
        shadow: { offsetX: 0, offsetY: 2, color: '#222', blur: 8, fill: true }
      }).setOrigin(0.5).setDepth(10).setVisible(true);
      // Controls
      cursors = this.input.keyboard.createCursorKeys();
      this.input.keyboard.on('keydown', handleKey, this);
      // Snake: start centered, horizontal, fits board
      snake = [];
      const startLen = 6;
      const startY = Math.floor(height/tileSize/2);
      const startX = Math.max(startLen, Math.floor(width/tileSize/2));
      for (let i = 0; i < startLen; i++) {
        snake.push({ x: startX-i, y: startY });
      }
      // Food
      food = this.add.rectangle(0, 0, tileSize, tileSize, 0xff3b3b, 1).setStrokeStyle(2, 0xffffff).setDepth(5);
      placeFood.call(this);
      drawSnake.call(this);
    }

    function handleKey(e) {
      if (isGameOver) return;
      if (e.key === 'ArrowUp' && direction !== 'DOWN') nextDirection = 'UP';
      else if (e.key === 'ArrowDown' && direction !== 'UP') nextDirection = 'DOWN';
      else if (e.key === 'ArrowLeft' && direction !== 'RIGHT') nextDirection = 'LEFT';
      else if (e.key === 'ArrowRight' && direction !== 'LEFT') nextDirection = 'RIGHT';
      else if ((e.key === 'w' || e.key === 'W') && direction !== 'DOWN') nextDirection = 'UP';
      else if ((e.key === 's' || e.key === 'S') && direction !== 'UP') nextDirection = 'DOWN';
      else if ((e.key === 'a' || e.key === 'A') && direction !== 'RIGHT') nextDirection = 'LEFT';
      else if ((e.key === 'd' || e.key === 'D') && direction !== 'LEFT') nextDirection = 'RIGHT';
    }

    function drawSnake() {
      if (this.snakeSprites) this.snakeSprites.forEach(s => s.destroy());
      this.snakeSprites = [];
      for (let i = 0; i < snake.length; i++) {
        let seg = snake[i];
        let color = i === 0 ? 0x2ecc40 : 0x00e6ff;
        let s = this.add.rectangle(seg.x * tileSize + tileSize/2, seg.y * tileSize + tileSize/2, tileSize, tileSize, color, 1).setDepth(10);
        s.setStrokeStyle(3, i === 0 ? 0xffff00 : 0xffffff);
        s.setAlpha(i === 0 ? 1 : 0.92 - i*0.01);
        this.snakeSprites.push(s);
      }
    }

    function placeFood() {
      let maxX = Math.floor(width/tileSize);
      let maxY = Math.floor(height/tileSize);
      let pos;
      do {
        pos = {
          x: Phaser.Math.Between(0, maxX-1),
          y: Phaser.Math.Between(0, maxY-1)
        };
      } while (snake.some(seg => seg.x === pos.x && seg.y === pos.y));
      food.setPosition(pos.x*tileSize+tileSize/2, pos.y*tileSize+tileSize/2);
      food.foodX = pos.x;
      food.foodY = pos.y;
    }

    function update(time) {
      if (isGameOver) return;
      if (time > moveTimer) {
        moveSnake.call(this);
        moveTimer = time + speed;
      }
    }

    function moveSnake() {
      direction = nextDirection;
      let head = { ...snake[0] };
      if (direction === 'UP') head.y--;
      else if (direction === 'DOWN') head.y++;
      else if (direction === 'LEFT') head.x--;
      else if (direction === 'RIGHT') head.x++;
      // Wall or self collision
      if (head.x < 0 || head.x >= Math.floor(width/tileSize) || head.y < 0 || head.y >= Math.floor(height/tileSize) || snake.some(seg => seg.x === head.x && seg.y === head.y)) {
        isGameOver = true;
        scoreText.setText('GAME OVER! Score: ' + score);
        setTimeout(() => this.scene.restart(), 1200);
        return;
      }
      snake.unshift(head);
      // Eat food
      if (head.x === food.foodX && head.y === food.foodY) {
        score++;
        scoreText.setText(score);
        if (score % 5 === 0 && speed > 40) speed -= 10;
        placeFood.call(this);
      } else {
        snake.pop();
      }
      drawSnake.call(this);
    }

    const config = {
      type: Phaser.AUTO,
      width: width,
      height: height,
      parent: container,
      backgroundColor: '#222',
      scale: { mode: Phaser.Scale.RESIZE, autoCenter: Phaser.Scale.CENTER_BOTH },
      scene: { preload: preload, create: create, update: update },
      physics: { default: 'arcade', arcade: { debug: false } },
      transparent: false
    };
    if(window.__snakePhaserGame && window.__snakePhaserGame.destroy) window.__snakePhaserGame.destroy(true);
    game = new Phaser.Game(config);
    window.__snakePhaserGame = game;
  } catch (err) {
    // Silent fail
  }
})();
