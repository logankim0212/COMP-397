/**
 * Logan J. Kim
 * 300973239
 * April 4, 2020
 * 
 * Description:
 * Zombie Rider is a 2-dimensional top-down single player scrolling game designed with Days Gone theme.
 * This game contains 5 different scenes: splash, start, instruction, play and game over.
 * Player will lose once their health goes down to 0; however, player can replay the game
 * again and again until they reach their desired score.
 *
 * Versions:
 * v1.0 Zombie Rider Alpha Release
 */

module enums {
    /**
     * This is used for the game object types which can be assigned to each object
     *
     * @export
     * @enum {number}
     */
    export enum GameObjectType {
        PLAYER,
        ZOMBIE,
        POTHOLE,
        HEART,
        POWERUP,
        ROAD,
        BUTTON,
        BULLET,
        UNDEFINED,
        NUM_OF_TYPES
    }
}