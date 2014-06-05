var star;
var y = 100;
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload(){
	game.load.image('star','star.jpg');
	
	
	}
	
function create(){
	star = game.add.sprite(game.world.centerX,0,'star');
	 game.physics.enable(star, Phaser.Physics.ARCADE);
	 
		star.body.collideWorldBounds = true;
	
	}
	
	
	
function update(){
if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
	star.body.velocity.x = -100;
	}
else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
	star.body.velocity.x = 100;
	}
else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
	star.body.velocity.y = 100;
	
	}
else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
	star.body.velocity.y = -100;
	}
	else{
		star.body.velocity.x = 0;
		star.body.velocity.y = 0;
		}
	
	}