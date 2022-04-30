MouseGame.Credits = function (game) {
    "use strict";

    //  Our main menu
    this.game = game;
};

var creditsText;
var codeText;
var antilaText;
var graphicText;
var erikLauraText;
var musicText;
var raxlText;
var backText;
var locText;
var locNameText;
var thanksText;


MouseGame.Credits.prototype = {


    preload: function() {
        "use strict";
        // game.load.image('credits-background','assets/backgrounds/credits-background.jpg');

        // // Buttons
        // game.load.image('button-back','assets/buttons/back.png');
    },

    create: function () {
        "use strict";

        this.game.add.sprite(0, 0, 'credits-background');
        // bg.scale.setTo(2.5, 2.5);

        // var t = this.game.add.sprite(100, 600, 'touhou');
        // t.anchor.setTo(0, 1);

        var button = this.game.add.button(this.game.world.centerX, 630, 'button-empty', this.showMenu, this, 2, 1, 0);
        button.anchor.setTo(0.5, 0.5);
        MouseGame.MainMenu.prototype.bindButtonHover(button);

        creditsText = game.add.text(creditsX, creditsY, credits, creditsStyle);
        codeText = game.add.text(codeX, codeY, code, creditsStyle2);
        antilaText = game.add.text(antilaX, antilaY, antila, creditsStyle3);
        graphicText = game.add.text(graphicX, graphicY, graphic, creditsStyle2);
        erikLauraText = game.add.text(erikLauraX, erikLauraY, erikLaura, creditsStyle3);
        musicText = game.add.text(musicX, musicY, music, creditsStyle2);
        raxlText = game.add.text(raxlX, raxlY, raxl, creditsStyle3);
        this.game.add.text(backTextX, backTextY, backText, creditsStyle4);
        locText = game.add.text(locTextX, locTextY, loc, creditsStyle2);
        locNameText = game.add.text(locNameX, locNameY, locName, creditsStyle5);
        thanksText = game.add.text(thanksX, thanksY, thanks, creditsStyle4);
        //history.pushState(null, null, '#credits');
        
    },

    showMenu: function () {
        "use strict";

        this.game.state.start('mainmenu');
    },

};



