MouseGame.LangSelector = function (game) {
    "use strict";

    //  Our main menu
    this.game = game;
    game.load.image('mainmenu-background', 'assets/backgrounds/background.jpg');
    game.load.image('flag-it', 'assets/flags/flag_it.png');
    game.load.image('flag-en', 'assets/flags/flag_en.png');
    game.load.image('flag-zh', 'assets/flags/flag_zh.png');
};

MouseGame.LangSelector.prototype = {
    create: function () {
        "use strict";

        this.game.add.sprite(0, 0, 'mainmenu-background');

        var italian = this.game.add.button(this.game.world.centerX, 620, 'flag-it', function () { this.setLang("it") }, this, 1, 1, 0);
        italian.anchor.setTo(0.5, 0.5);
        italian.scale.x = italian.scale.y = 0.4;
        this.bindButtonHover(italian);

        var english = this.game.add.button(this.game.world.centerX, 550, 'flag-en', function () { this.setLang("en") }, this, 1, 1, 0);
        english.anchor.setTo(0.5, 0.5);
        this.bindButtonHover(english);
        english.scale.x = english.scale.y = 0.4;

        var chinese = this.game.add.button(this.game.world.centerX, 480, 'flag-zh', function () { this.setLang("zh") }, this, 1, 1, 0);
        chinese.anchor.setTo(0.5, 0.5);
        this.bindButtonHover(chinese);
        chinese.scale.x = chinese.scale.y = 0.4;

        playMusic(true);
    },

    bindButtonHover: function (button) {
        "use strict";

        button.events.onInputOver.add(this.animateButtonIn, this);
        button.events.onInputOut.add(this.animateButtonOut, this);
    },

    animateButtonIn: function (button) {
        "use strict";

        game.add.tween(button.scale).to(
            { x: 0.5, y: 0.5 },
            150,
            Phaser.Easing.Back.Out,
            true,
            0,
            false
        ).start();
    },

    animateButtonOut: function (button) {
        "use strict";

        game.add.tween(button.scale).to(
            { x: 0.4, y: 0.4 },
            150,
            Phaser.Easing.Back.Out,
            true,
            0,
            false
        ).start();
    },

    setLang: function (lang) {
        "use strict";

        language = lang;
        console.log("Starting the game in " + lang);
        game.load.image('logo', 'assets/buttons/buttons_' + language + '/menu_title.png');
        game.load.script('boot-i10n', 'assets/content/' + language + '/bootContent.js');
        this.game.state.start('preloader');
    },
};