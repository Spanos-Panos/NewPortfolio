// Premium Slide Puzzle Game (Phaser.js)
// Loads into #game-container, fits parent, 2.5D look, device-adaptive controls
(function(){
  if (!window.Phaser) {
    document.getElementById('game-container').innerHTML = '<div style="color:#f44;font-size:1.2em;text-align:center;">Phaser.js not loaded!</div>';
    return;
  }
  const container = document.getElementById('game-container');
  container.innerHTML = '';
  const width = container.offsetWidth || 640;
  const height = container.offsetHeight || 480;
  let game, startMenu, highscore = 0, started = false;
  const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
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
    this.load.image('bg', 'https://assets.codepen.io/1468070/gradient-bg.png');
    this.load.image('tile', 'https://assets.codepen.io/1468070/tile-2.5d.png');
    this.load.audio('move', 'https://cdn.pixabay.com/audio/2022/07/26/audio_124bfae5e2.mp3');
    this.load.audio('win', 'https://cdn.pixabay.com/audio/2022/07/26/audio_124bfae5e2.mp3');
  }
  function create() {
    this.add.image(width/2, height/2, 'bg').setDisplaySize(width, height);
    startMenu = this.add.container(width/2, height/2);
    const menuBg = this.add.rectangle(0,0,Math.min(width*0.7,400),180,0x23272e,0.98).setStrokeStyle(4,0x6cf);
    const title = this.add.text(0,-40,'SLIDE PUZZLE',{fontFamily:'Arial Black',fontSize:'2.2em',color:'#6cf'}).setOrigin(0.5);
    const startBtn = this.add.text(0,20,'▶ START',{fontFamily:'Arial Black',fontSize:'1.3em',color:'#fff',backgroundColor:'#6cf',padding:{x:24,y:8}}).setOrigin(0.5).setInteractive({useHandCursor:true});
    const scoreBtn = this.add.text(0,70,'🏆 HIGH SCORE',{fontFamily:'Arial Black',fontSize:'1.1em',color:'#fff',backgroundColor:'#23272e',padding:{x:18,y:6}}).setOrigin(0.5).setInteractive({useHandCursor:true});
    startMenu.add([menuBg,title,startBtn,scoreBtn]);
    startBtn.on('pointerdown',()=>{startMenu.setVisible(false);startGame.call(this);});
    scoreBtn.on('pointerdown',()=>{showHighscore.call(this);});
    this.input.keyboard.on('keydown',e=>{if(!started){startMenu.setVisible(false);startGame.call(this);}});
  }
  function startGame(){
    started = true;
    // ...gameplay logic (slide puzzle grid, movement, win detection, etc.)
    this.add.text(width/2,height/2,'[Slide Puzzle Here]',{fontFamily:'Arial Black',fontSize:'1.5em',color:'#fff'}).setOrigin(0.5);
  }
  function showHighscore(){
    alert('Highscore: '+highscore);
  }
  function update(){
    // ...game loop
  }
  if(window.__slidePuzzlePhaserGame && window.__slidePuzzlePhaserGame.destroy) window.__slidePuzzlePhaserGame.destroy(true);
  game = new Phaser.Game(config);
  window.__slidePuzzlePhaserGame = game;
});
