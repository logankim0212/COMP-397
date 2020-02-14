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
var util;
(function (util) {
    // image paths
    // background
    util.START_SCREEN_PATH = './Assingnment01/LoganKim_COMP397_Lab01/Assets/images/backgrounds/start-bg.png';
    util.SLOTMACHINE_PATH = './Assingnment01/LoganKim_COMP397_Lab01/Assets/images/backgrounds/game-bg.png';
    util.END_SCREEN_PATH = './Assingnment01/LoganKim_COMP397_Lab01/Assets/images/backgrounds/end-bg.png';
    util.WINNING_RULE_PATH = './Assingnment01/LoganKim_COMP397_Lab01/Assets/images/backgrounds/winning-rule.png';
    //buttons
    util.BTN_PLAY_PATH = './Assingnment01/LoganKim_COMP397_Lab01/Assets/images/buttons/btn-play.png';
    util.BTN_HOME_PATH = './Assingnment01/LoganKim_COMP397_Lab01/Assets/images/buttons/btn-home.png';
    util.BTN_RESET_PATH = './Assingnment01/LoganKim_COMP397_Lab01/Assets/images/buttons/btn-reset.png';
    util.BTN_BET_ONE_PATH = './Assingnment01/LoganKim_COMP397_Lab01/Assets/images/buttons/btn-bet_one.png';
    util.BTN_BET_MAX_PATH = './Assingnment01/LoganKim_COMP397_Lab01/Assets/images/buttons/btn-bet_max.png';
    util.BTN_SPIN_PATH = './Assingnment01/LoganKim_COMP397_Lab01/Assets/images/buttons/btn-spin.png';
    // reels
    util.TICKET_PATH = './Assingnment01/LoganKim_COMP397_Lab01/Assets/images/reels/ticket.png';
    util.TRAIN_STATION_PATH = './Assingnment01/LoganKim_COMP397_Lab01/Assets/images/reels/trainStation.png';
    util.HUFFLEPUFF_PATH = './Assingnment01/LoganKim_COMP397_Lab01/Assets/images/reels/hufflepuff.png';
    util.RAVENCLAW_PATH = './Assingnment01/LoganKim_COMP397_Lab01/Assets/images/reels/ravenclaw.png';
    util.GRYFFINDOR_PATH = './Assingnment01/LoganKim_COMP397_Lab01/Assets/images/reels/gryffindor.png';
    util.SLYTHERIN_PATH = './Assingnment01/LoganKim_COMP397_Lab01/Assets/images/reels/slytherin.png';
    util.HOGWARTS_PATH = './Assingnment01/LoganKim_COMP397_Lab01/Assets/images/reels/hogwarts.png';
    util.DEATHLY_HALLOWS_PATH = './Assingnment01/LoganKim_COMP397_Lab01/Assets/images/reels/deathlyHallows.png';
    // stage variables
    util.STAGE_W = 840;
    util.STAGE_H = 480;
})(util || (util = {}));
//# sourceMappingURL=Constants.js.map