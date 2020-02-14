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
module config {
    // image paths
    // background
    export const START_SCREEN_PATH: string = './Assets/images/backgrounds/start-bg.png';
    export const SLOTMACHINE_PATH: string = './Assets/images/backgrounds/game-bg.png';
    export const END_SCREEN_PATH: string = './Assets/images/backgrounds/end-bg.png';
    export const WINNING_RULE_PATH: string = './Assets/images/backgrounds/winning-rule.png';
    //buttons
    export const BTN_PLAY_PATH: string = './Assets/images/buttons/btn-play.png';
    export const BTN_HOME_PATH: string = './Assets/images/buttons/btn-home.png';
    export const BTN_RESET_PATH: string = './Assets/images/buttons/btn-reset.png';
    export const BTN_BET_ONE_PATH: string = './Assets/images/buttons/btn-bet_one.png';
    export const BTN_BET_MAX_PATH: string = './Assets/images/buttons/btn-bet_max.png';
    export const BTN_SPIN_PATH: string = './Assets/images/buttons/btn-spin.png';
    // reels
    export const TICKET_PATH: string = './Assets/images/reels/ticket.png';
    export const TRAIN_STATION_PATH: string = './Assets/images/reels/trainStation.png';
    export const HUFFLEPUFF_PATH: string = './Assets/images/reels/hufflepuff.png';
    export const RAVENCLAW_PATH: string = './Assets/images/reels/ravenclaw.png';
    export const GRYFFINDOR_PATH: string = './Assets/images/reels/gryffindor.png';
    export const SLYTHERIN_PATH: string = './Assets/images/reels/slytherin.png';
    export const HOGWARTS_PATH: string = './Assets/images/reels/hogwarts.png';
    export const DEATHLY_HALLOWS_PATH: string = './Assets/images/reels/deathlyHallows.png';

    // stage variables
    export const STAGE_W: number = 840;
    export const STAGE_H: number = 480;
}