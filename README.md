# Blick.
## General Assembly WDI London - Project 1
### A simple and innovative game for all devices

Blick is an original game design that uses a randomly generated grid of colours to test and improve the players's memory. 

1. It accomodates two players, who compete against each other in three rounds.
2. There are three different difficulty levels, which can be dynamically selected between rounds.
3. It works best on a touchscreen device, but is designed repsonsively for most devices.
4. Its surprisingly challenging, with a definite learning curve.

[Click here to play blick!](https://www.playblick.herokuapp.com)

![alt text](https://github.com/odholden/wdi-first-project/blob/master/images/blick1.png)

### How the game is played

- A randomly generated board of colors, as shown in the image above, will appear for five seconds. 
- The player will then have to recreate the colour pattern.
- The 'color' will cycle through the colors, staying on each one for five seconds. 
- During that time the player must color the squares on the board the appropriate colors.
- Each player will be given a score based on how many squares they colour correctly. 
- The winner is the best of three rounds.
- The game board size can be altered using the difficulty settings, and can be set at 4 x 4, 5 x 5 and 6 x 6.

![alt text](https://github.com/odholden/wdi-first-project/blob/master/images/blick1.png)

### How it works

Each time the game starts, the colors and their size on the board are both randomised, and entered into the board in a random pattern. This board is shown for five seconds and its combination is stored. The color selector then selects red, green, orange, blue, yellow and purple for five seconds each. 

Once the player has made all their selections, their completed board is compared with the correct one, and they are given a point for each correctly colored square. The board is then reset. 

### How it was designed

The most important element of the design was the randomly generated board, allowing the game to be played repeatedly and keeping the player interested. This element was designed first, and once it became clear how much it appealed visually, the rest of the design fell into place. 

Originally the colours could be selected by the player at their leisure, but this led to a much less engaging game experience. There is some simple animation allowing the colors to fade in and out, but the main aim was to keep the design simple and clean with the emphasis on the game board.

HTML 5, CSS and jQuery were used to create the game.
