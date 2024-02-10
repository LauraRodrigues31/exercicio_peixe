var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var peixinho;

function preload ()
{
    // carregar as imagens 
    this.load.image ("mar", "assets/bg_azul-claro.png");
    this.load.image ("logo", "assets/logo-inteli_azul.png");
    this.load.image ("peixe", "assets/peixes/peixe_rosa.png");
    this.load.image ("tubarao", "assets/peixes/tubarao.png");
}

function create ()
{
    // adicionar as imagens 
    // setScale(), setFlip(),setOrigin() entre outros para editar a imagem na tela
    this.add.image(400, 300, "mar");
    this.add.image(400, 525, "logo"). setScale(0.5);
    peixinho = this.add.image(400, 300, "peixe"). setOrigin(0.5, 0.5);

    peixinho.setFlip(true, false);

    this.add.image(400,300, "tubarao");
}

function update ()
{
    // peixe acompanhar o mouse
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}