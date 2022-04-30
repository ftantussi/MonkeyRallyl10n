MouseGame.Intro = function (game) {
    "use strict";

    //  Our main menu
    this.game = game;
};

var intro1;
var intro2;
var intro3;
var nextButton;
var introScreens = [];
var line = [];
var lineInt = 0;
var counter = 0;
var text = [];
var startText;
var taleText;


MouseGame.Intro.prototype = {
    create: function () {
        "use strict";

        var intro10 = this.game.add.sprite(0, 0, 'intro-10');
        var intro9 = this.game.add.sprite(0, 0, 'intro-9');
        var intro8 = this.game.add.sprite(0, 0, 'intro-8');
        var intro7 = this.game.add.sprite(0, 0, 'intro-7');
        var intro6 = this.game.add.sprite(0, 0, 'intro-6');
        var intro5 = this.game.add.sprite(0, 0, 'intro-5');
        var intro4 = this.game.add.sprite(0, 0, 'intro-4');
        var intro3 = this.game.add.sprite(0, 0, 'intro-3');
        var intro2 = this.game.add.sprite(0, 0, 'intro-2');
        var intro1 = this.game.add.sprite(0, 0, 'intro-1');
        var title = this.game.add.sprite(0, 0, 'title');

        startText = game.add.text(introStartX, introStartY, introStart, introStartStyle);
        taleText = game.add.text(introTaleX, introTaleY, introTale, introTaleStyle);

        intro10.inputEnabled = true;
        intro9.inputEnabled = true;
        intro8.inputEnabled = true;
        intro7.inputEnabled = true;
        intro6.inputEnabled = true;
        intro5.inputEnabled = true;
        intro4.inputEnabled = true;
        intro3.inputEnabled = true;
        intro2.inputEnabled = true;
        intro1.inputEnabled = true;
        title.inputEnabled = true;

        intro10.events.onInputDown.add(this.nextSlide, this);
        intro9.events.onInputDown.add(this.nextSlide, this);
        intro8.events.onInputDown.add(this.nextSlide, this);
        intro7.events.onInputDown.add(this.nextSlide, this);
        intro6.events.onInputDown.add(this.nextSlide, this);
        intro5.events.onInputDown.add(this.nextSlide, this);
        intro4.events.onInputDown.add(this.nextSlide, this);
        intro3.events.onInputDown.add(this.nextSlide, this);
        intro2.events.onInputDown.add(this.nextSlide, this);
        intro1.events.onInputDown.add(this.nextSlide, this);
        title.events.onInputDown.add(this.nextSlide, this);

        introScreens = [title, intro1, intro2, intro3, intro4, intro5, intro6, intro7, intro8, intro9, intro10];

        
        playMusic(true);
    },

    update: function() {
        "use strict";

        if (game.input.keyboard.isDown(Phaser.Keyboard.ESC)) {
            this.showMenu();
        }
    },



    nextSlide: function() {
        "use strict";



        if (introScreens.length > 1) {
            var nextScene = introScreens.shift();
            line = introText[lineInt];


            game.add.tween(nextScene)
                .to({ alpha: 0 }, 500, Phaser.Easing.Linear.None)
                .start();
           
            if (counter < 2 || counter > 5){
                if (lineInt>0){
                    text[lineInt-1].destroy();
                }
                else{
                    startText.destroy();
                    taleText.destroy();
                }
                if (lineInt == 0){text[lineInt] = game.add.text(intro1X,intro1Y, line, introStyle);}
                else if (lineInt == 1){text[lineInt] = game.add.text(intro2X,intro2Y, line, introStyle)}
                else if (lineInt == 2){text[lineInt] = game.add.text(intro3X,intro3Y, line, introStyle)}
                else if (lineInt == 3){text[lineInt] = game.add.text(intro4X,intro3Y, line, introStyle)}
                else if (lineInt == 4){text[lineInt] = game.add.text(intro5X,intro3Y, line, introStyle)}
                else if (lineInt == 5){text[lineInt] = game.add.text(intro6X,intro3Y, line, introStyle)}
                lineInt++;
            }
            counter++;
        } else {
            this.showMenu();
        }

    },

    showMenu: function () {
        "use strict";

        this.game.state.start('mainmenu');
    },
};

/*
todo:
initialize content in index.html
in nextslide have line = content file.content variable name[lineindex]
game.add.text(x value, y value, text itself, {font: "px font", fill: font color});
text = game.add.text(32, 32, '', { font: "15px Arial", fill: "#19de65" });

Where does it place on screen?
How do I change it?
Is the font compatible in other languages?
Variable for changing the text
How to add borders to the text to keep it where it needs to be
Can we curve the text in Phaser?
*/
