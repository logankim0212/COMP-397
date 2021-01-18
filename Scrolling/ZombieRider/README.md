# Zombie-Rider
Live Link: [Zombie Rider](https://logankim0212.github.io/Web-Games/Scrolling/ZombieRider/)

## Game Overview
Zombie Rider is a 2-dimensional top-down single player scrolling game designed with Days Gone theme. This game contains 5 different scenes: splash, start, instruction, play and game over. Player will lose once their health goes down to 0; however, player can replay the game again and again until they reach their desired score.
Zombie Rider is published on GitHub Page with the link below: https://logankim0212.github.io/COMP-397/Assignment02/LoganKim_COMP397_Lab02/.  

## Game Play Mechanics
Player has ability to start or end the game unless they are currently playing the game. Once a player goes to start screen after the splash screen, they can choose to play a game, see the instruction or exit the game. Once a player’s avatar dies, player is directed to a game over screen which allows them to replay the game or go to the main screen.

### Mechanics
Points:
- Player gets 100 points when killing zombie with bullet. However, if a player consumes a potion, it allows user to get 200 points per zombie until potion’s effect goes away.
Controls:
- Player uses mouse to click all buttons.
- Player uses “WASD” key to move to 4 different direction.
- Player uses “Space” key to shoot bullet.
- Player uses “M” key to reload their bullets.

### Dynamics
Constraints:
- Player cannot continue to play when the avatar’s health goes down to 0.

Choice:
- Player has ability to choose when to quit the game.
- Player has ability to choose consuming potion or gaining extra health.

Chance:
- Items such as potion or heart are randomly generated on the map periodically.
- Objects such as pothole is randomly generated on the map periodically.

### Aesthetics
Style:
- 2D Single Screen Top-down

Look:
- Motorcycle Racing
- Zombie Apocalypse
- Days Gone Theme

Challenges:
- Player requires to demonstrate decision-making when to move, shoot, reload, and consume items in order to gain more points by killing zombies. 

### Controls
On the Start screen, a player can use mouse to click play, instruction or exit button.
Once a player goes to Play screen, the one can use “WASD” key to move to 4 different direction, “Space” key to shoot bullet and “M” key to reload their bullets. To cheat, a player can hit “P” key to be invincible for unlimited time.
On the Game Over screen, player can use mouse to click Replay or Main button.

## Screen Description
 
Splash screen contains developer’s logo, COSMOS Games. This screen is displayed when a player opens game page or exits the game.
 
Start screen contains the game title, start button, instruction button and exit button. Once a player clicks a start, instruction or exit button, the one is directed to the Play, Instruction or Splash screen, respectively.
 
Instruction screen contains a page title, descriptions and main button. Once a player clicks a main button, the one is directed to the Start screen. On the center of this screen, it explains how to control the avatar, description for each object that can be found while playing the game, how to gain points, and the goal of the game.
 
Play screen contains scrolling road image, multiple zombies, potholes, hearts and potions, while displaying player’s lives, bullets and score. Player must avoid hitting zombies so that the one does not lose its health. Bullets are used to kill zombie and gains 100 points. Once bullets run out, the one can reload the bullets. When a player contacts heart, the one will gain 1 extra health while consuming a potion enable auto-shooting special bullets for the next 5 seconds.
 
Game Over screen contains a page title, displays high score achieved in the session and the score of this round, and restart and main button. Once player’s health goes down to 0, player will see this end screen. Once a player clicks a restart or main button, the one is directed to the Play or Start screen, respectively.

## Game World
This is a 2D single screen web-based scrolling game is a single player game. This player versus environment (PvE) game leads players to fight against zombies that are walking towards a player.

## Levels
This game is a single level game. However, a player can play the game over and over until the one reaches one’s limit. The game records highest score achieved by a player in the same session and display it when the game is over.
This level contains scrolling road image, multiple zombies, potholes, hearts and potions, while displaying player’s lives, bullets and score.

## Characters/Vehicles
Player’s avatar is a male character Hank MacDowell who’s driving his motorcycle, 2022 Yamaha R6.

## Enemies
Player fights against zombies that are dead humans who turned into zombie as ones got infected by a Z-Virus. Z-virus has a high infection rate which is only transmitted to human when it goes into blood cells of human. The one who got infected by this virus shows high hostility to any alive creatures and tries to infect them as well. Fortunately, it can be killed with a single shot of gun.

## Weapons
Player’s basic weapon is a pistol Glock 19 with 20 rounds. It takes 0.1 second to shoot a bullet. As an avatar is driving, a player can only shoot toward avatar’s current position. This weapon allows a player to gain 100 points per zombie.
Once an avatar consumes a position that is left on the road, the one is powered up and shoots special bullets automatically for approximately next 5 seconds. This weapon allows a player to gain 200 points per zombie.

## Scoring
Player will gain 100 points per zombie when killing them with one’s bullet. Zombie can be killed when it is hit by player’s bullet once.
Player can gain 200 points per zombie when killing them with a special bullet. Special can be only enabled when a player consumes a potion randomly appeared on the road.
