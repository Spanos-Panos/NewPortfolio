// Premium Snake Game (Phaser.js)
// Loads into #game-container, fits parent, 2.5D look, device-adaptive controls
(function(){
  if (!window.Phaser) {
    document.getElementById('game-container').innerHTML = '<div style="color:#f44;font-size:1.2em;text-align:center;">Phaser.js not loaded!</div>';
    return;
  }
  const container = document.getElementById('game-container');
  container.innerHTML = '';
  // Responsive sizing
  const width = container.offsetWidth || 640;
  const height = container.offsetHeight || 480;
  // Game state
  let game, cursors, mobileControls, startMenu, highscore = 0, started = false;
  // Device detection
  const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
  // Phaser config
  const config = {
    type: Phaser.AUTO,
    width: width,
    height: height,
    parent: container,
    backgroundColor: '#181c24',
    scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
    scene: {
      preload: preload,
      create: create,
      update: update
    },
    physics: { default: 'arcade', arcade: { debug: false } },
    transparent: false
  };
  function preload() {
    // 2.5D style assets (simple gradients, shadows, or load sprites here)
    this.load.image('bg', 'https://assets.codepen.io/1468070/gradient-bg.png');
    this.load.image('apple', 'https://assets.codepen.io/1468070/apple-2.5d.png');
    this.load.image('snake', 'https://assets.codepen.io/1468070/snake-2.5d.png');
    this.load.audio('eat', 'https://cdn.pixabay.com/audio/2022/07/26/audio_124bfae5e2.mp3');
    this.load.audio('lose', 'https://cdn.pixabay.com/audio/2022/07/26/audio_124bfae5e2.mp3');
  }
  function create() {
    // Background
    this.add.image(width/2, height/2, 'bg').setDisplaySize(width, height);
    // Start menu overlay
    startMenu = this.add.container(width/2, height/2);
    const menuBg = this.add.rectangle(0,0,Math.min(width*0.7,400),180,0x23272e,0.98).setStrokeStyle(4,0x6cf);
    const title = this.add.text(0,-40,'SNAKE',{fontFamily:'Arial Black',fontSize:'2.2em',color:'#6cf'}).setOrigin(0.5);
    const startBtn = this.add.text(0,20,'▶ START',{fontFamily:'Arial Black',fontSize:'1.3em',color:'#fff',backgroundColor:'#6cf',padding:{x:24,y:8}}).setOrigin(0.5).setInteractive({useHandCursor:true});
    const scoreBtn = this.add.text(0,70,'🏆 HIGH SCORE',{fontFamily:'Arial Black',fontSize:'1.1em',color:'#fff',backgroundColor:'#23272e',padding:{x:18,y:6}}).setOrigin(0.5).setInteractive({useHandCursor:true});
    startMenu.add([menuBg,title,startBtn,scoreBtn]);
    startBtn.on('pointerdown',()=>{startMenu.setVisible(false);startGame.call(this);});
    scoreBtn.on('pointerdown',()=>{showHighscore.call(this);});
    // Keyboard start (PC)
    this.input.keyboard.on('keydown',e=>{if(!started){startMenu.setVisible(false);startGame.call(this);}});
    // Mobile controls
    if(isMobile){
      mobileControls = this.add.container(width/2,height-60);
      const left = this.add.circle(-60,0,28,0x6cf,0.9).setStrokeStyle(2,0xffffff).setInteractive();
      const right = this.add.circle(60,0,28,0x6cf,0.9).setStrokeStyle(2,0xffffff).setInteractive();
      const up = this.add.circle(0,-60,28,0x6cf,0.9).setStrokeStyle(2,0xffffff).setInteractive();
      const down = this.add.circle(0,60,28,0x6cf,0.9).setStrokeStyle(2,0xffffff).setInteractive();
      mobileControls.add([left,right,up,down]);
      left.on('pointerdown',()=>cursors.left.isDown=true);
      right.on('pointerdown',()=>cursors.right.isDown=true);
      up.on('pointerdown',()=>cursors.up.isDown=true);
      down.on('pointerdown',()=>cursors.down.isDown=true);
    }
  }
  function startGame(){
    started = true;
    // ...gameplay logic (snake, apple, movement, collision, score, etc.)
    // Placeholder: show a message
    this.add.text(width/2,height/2,'[Snake Game Here]',{fontFamily:'Arial Black',fontSize:'1.5em',color:'#fff'}).setOrigin(0.5);
  }
  function showHighscore(){
    // Show highscore overlay
    alert('Highscore: '+highscore);
  }
  function update(){
    // ...game loop
  }
  // Destroy old game if any
  if(window.__snakePhaserGame && window.__snakePhaserGame.destroy) window.__snakePhaserGame.destroy(true);
  game = new Phaser.Game(config);
  window.__snakePhaserGame = game;
});
