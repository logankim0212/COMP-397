"use strict";
/**
 * Logan J. Kim
 * 300973239
 * February 6, 2020
 *
 * Description:
 * Wingardium Luckiosa is a single players single-screen slot machine game designed with Harry Potter theme.
 * This game will contain three screens: start, game and end. Player will lose once they lost all of their credits;
 * however, they can continue to play as long as they want if they have enough credit.
 *
 * Version:
 * v1.0 Alpha Release
 */
var config;
(function (config) {
    // image paths
    // background
    config.START_SCREEN_PATH = './Assets/images/backgrounds/start-bg.png';
    config.SLOTMACHINE_PATH = './Assets/images/backgrounds/game-bg.png';
    config.END_SCREEN_PATH = './Assets/images/backgrounds/end-bg.png';
    config.WINNING_RULE_PATH = './Assets/images/backgrounds/winning-rule.png';
    //buttons
    config.BTN_PLAY_PATH = './Assets/images/buttons/btn-play.png';
    config.BTN_HOME_PATH = './Assets/images/buttons/btn-home.png';
    config.BTN_RESET_PATH = './Assets/images/buttons/btn-reset.png';
    config.BTN_BET_ONE_PATH = './Assets/images/buttons/btn-bet_one.png';
    config.BTN_BET_MAX_PATH = './Assets/images/buttons/btn-bet_max.png';
    config.BTN_SPIN_PATH = './Assets/images/buttons/btn-spin.png';
    // reels
    config.TICKET_PATH = './Assets/images/reels/ticket.png';
    config.TRAIN_STATION_PATH = './Assets/images/reels/trainStation.png';
    config.HUFFLEPUFF_PATH = './Assets/images/reels/hufflepuff.png';
    config.RAVENCLAW_PATH = './Assets/images/reels/ravenclaw.png';
    config.GRYFFINDOR_PATH = './Assets/images/reels/gryffindor.png';
    config.SLYTHERIN_PATH = './Assets/images/reels/slytherin.png';
    config.HOGWARTS_PATH = './Assets/images/reels/hogwarts.png';
    config.DEATHLY_HALLOWS_PATH = './Assets/images/reels/deathlyHallows.png';
    // stage variables
    config.STAGE_W = 840;
    config.STAGE_H = 480;
})(config || (config = {}));
//# sourceMappingURL=Constants.js.map