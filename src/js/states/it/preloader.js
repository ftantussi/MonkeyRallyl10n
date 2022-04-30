MouseGame.Preloader = function (game) {
    "use strict";

    this.game = game;

    this.background = null;
    this.preloadBar = null;
    this.text = null;

    this.ready = false;

};

MouseGame.Preloader.prototype = {

    preload: function () {
        "use strict";

        game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
        game.stage.scale.setShowAll();
        window.addEventListener('resize', function () {
            game.stage.scale.refresh();
        });
        game.stage.scale.refresh();

        this.background = this.add.sprite(0, 0, 'preloader-background');

        this.preloadBar = this.add.sprite(this.game.world.centerX - 100, 500, 'preloaderBar');
        this.add.sprite(this.game.world.centerX - 100, 500, 'preloaderBarBg');

        this.load.setPreloadSprite(this.preloadBar);

        for (var i = 1; i <= 8; i++) {
            game.load.image('button-level' + i,'assets/buttons/button_blank-assets/button_empty.png');
            game.load.tilemap('level'+i, 'assets/maps/level' + i + '.json', null, Phaser.Tilemap.TILED_JSON);
        }

        // Load everything!!
        game.load.audio('game-music', ['assets/music/nowyouwilldie.mp3', 'assets/music/nowyouwilldie.ogg']);
        game.load.audio('menu-music', ['assets/music/game.mp3', 'assets/music/game.ogg']);
        game.load.image('background','assets/backgrounds/placeholder.png');
        game.load.image('bottle_blue',  'assets/entities/bottle_blue.png');
        game.load.image('bottle_green', 'assets/entities/bottle_green.png');
        game.load.image('bottle_orange','assets/entities/bottle_orange.png');
        game.load.image('bottle_red',   'assets/entities/bottle_red.png');
        game.load.image('bottle_yellow','assets/entities/bottle_yellow.png');
        game.load.image('button','assets/buttons/background.png');
        game.load.image('button-back','assets/buttons/button_blank-assets/button_empty.png');
        game.load.image('button-check','assets/buttons/check.png');
        game.load.image('button-credits','assets/buttons/credits.png');
        game.load.image('button-play','assets/buttons/play.png');
        game.load.image('button-main-menu','assets/buttons/button_blank-assets/button_empty.png');
        game.load.image('button-mute','assets/buttons/buttons_IT/mute_audio.png');
        game.load.image('button-unmute','assets/buttons/buttons_IT/unmute_audio.png');
        game.load.image('credits-background','assets/backgrounds/cleared_text_backgrounds/credits-background.jpg');
        game.load.image('intro-1','assets/backgrounds/cleared_text_backgrounds/intro-1.jpg');
        game.load.image('intro-10','assets/backgrounds/cleared_text_backgrounds/intro-10.jpg');
        game.load.image('intro-2','assets/backgrounds/cleared_text_backgrounds/intro-2.jpg');
        game.load.image('intro-3','assets/backgrounds/cleared_text_backgrounds/intro-3.jpg');
        game.load.image('intro-4','assets/backgrounds/cleared_text_backgrounds/intro-4.jpg');
        game.load.image('intro-5','assets/backgrounds/cleared_text_backgrounds/intro-5.jpg');
        game.load.image('intro-6','assets/backgrounds/cleared_text_backgrounds/intro-6.jpg');
        game.load.image('intro-7','assets/backgrounds/cleared_text_backgrounds/intro-7.jpg');
        game.load.image('intro-8','assets/backgrounds/cleared_text_backgrounds/intro-8.jpg');
        game.load.image('intro-9','assets/backgrounds/cleared_text_backgrounds/intro-9.jpg');
        //change ending to proper langauge folder version
        game.load.image('ending','assets/backgrounds/backgrounds_IT/ending.png');
        //
        game.load.image('key',          'assets/entities/key.png');
        //change logo to proper langauge folder version once text editable version is made :D
        game.load.image('logo','assets/buttons/menu_title.png');
        //
        game.load.image('mainmenu-background','assets/backgrounds/background.jpg');
        game.load.image('monkey',       'assets/entities/monkey.png');
        game.load.image('pill',         'assets/entities/pill.png');
        game.load.image('pipette',      'assets/entities/pipette.png');
        game.load.image('pipetteset',   'assets/entities/pipetteset.png');
        game.load.image('scientist',    'assets/entities/scientist.png');
        //change title to proper langauge folder version
        game.load.image('title','assets/backgrounds/backgrounds_IT/title.jpg');
        //
        game.load.spritesheet('item', 'assets/buttons/actions.png', 96, 96);
        game.load.spritesheet('orders', 'assets/buttons/sequence.png', 96, 96);
        game.load.spritesheet('tile-logic', 'assets/tiles/tile-logic_img.png', 64, 64);
        game.load.spritesheet('tiles-sprites', 'assets/tiles/new-tiles.png', 64, 64);
        game.load.tileset('tiles', 'assets/tiles/game-tiles.png', 64, 64);
        game.load.tileset('decorations', 'assets/tiles/decorations.png', 64, 64);
        // game.load.tilemap(activeLevel, 'assets/maps/' + activeLevel + '.json', null, Phaser.Tilemap.TILED_JSON);
        // Load empty button for translation
        game.load.image('button-empty','assets/buttons/button_blank-assets/button_empty.png');
    },

    create: function () {
        "use strict";

        this.preloadBar.cropEnabled = false;

        game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
        game.stage.scale.setShowAll();
        window.addEventListener('resize', function () {
            game.stage.scale.refresh();
        });
        game.stage.scale.refresh();

        switch (window.location.hash){
            case '#mainmenu':
                this.game.state.start('mainmenu');
                break;
            case '#credits':
                this.game.state.start('credits');
                break;
            case '#levelselector':
                this.game.state.start('levelselector');
                break;
            case '#game':
                var level = window.location.pathname;

                this.game.state.states.levelselector.level = level.replace('/', '');
                this.game.state.start('game');
                break;

            default:
                this.game.state.start('intro');
        }
        this.game.state.start('intro');

    },

    update: function () {
        "use strict";

        if (this.cache.isSoundDecoded('menu-music') && this.ready === false) {
            this.ready = true;
            this.game.state.start('intro');
        }
    }

};
