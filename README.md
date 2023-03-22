# Creating Tic-Tac-Toe Using HTML, CSS, and JavaScript

## Introduction

Hello! In this tutorial, we will be creating Tic-Tac-Toe using HTML, CSS, and JavaScript. Our goal is to break everything down into manageable steps and give you plenty of time to work on your own before walking through each part.

## Step 1: HTML

- [ ] Create an empty HTML document with the basic structure.
- [ ] Add a title to the head of the document.
- [ ] Add a link to the Google Font "Righteous" that we'll be using later on.
- [ ] Create a main section in the body of the HTML document.

## Step 2: Creating the board

- [ ] Inside the main section, create a header with a title for the game and a container for displaying the current player.
- [ ] Create a div with a class of "board" that will contain the squares of the game board.
- [ ] Inside the board div, create nine buttons with a class of "square".
- [ ] Add a "gameover" banner with a "New Game" button. _This should only be displayed when the game is won or tied._

## Step 3: Styling with CSS

- [ ] Create an empty CSS stylesheet and link it to the HTML file.
- [ ] Set some basic styles for the body of the document, including a font-family and margin.
- [ ] Style the header, the title, and the current player container.
- [ ] Style the board and the individual squares. _Hint: CSS Grid may be helpful here._
- [ ] Style the "gameover-banner" and "New Game" button. _The banner should be hidden by default._


## Step 4: Adding JavaScript functionality

- [ ] Create an empty javascript file and link it to the HTML file.
- [ ] Select all the squares and add an event listener for a click.
- [ ] When a square is clicked, add an X or O to the square, depending on which player's turn it is.
- [ ] The UI should show which player's turn it is.
- [ ] Switch between players after each turn.
- [ ] Check if the game has a winner after each turn.
- [ ] If there is a winner, update the gameover banner to show an appropriate message and display it.
- [ ] Check if the game has a draw after each turn.
- [ ] If there is a draw, update the gameover banner to show an appropriate message and display it.
- [ ] The game board should be disabled if it hits either gameover state. 
- [ ] When the "New Game" button on the gameover banner is clicked, reset the game to its original state.

## Step 5: Optimization and Stretch Goals

- [ ] Refactor the code by creating helper functions for repeatable tasks.
    - Switching between players.
    - Checking for a winner.
    - Checking for a tie game.
    - Resetting the game. 
- [ ] Change the outline color and font color for the different players. 
    - Try using a CSS class for each player that styles the squares differently when attached.
- [ ] Track the score between the two players.
    - Track each players score with new variables.
    - Create a function that updates the score at the end of the game.
- [ ] Add your own features here that you want to try... keep adding to this list for each one. Be Adventurous!

## Conclusion

Congratulations on creating your own Tic-Tac-Toe game! Remember to keep practicing and exploring new features in your own projects.

## Updates
- **3/21/23** After making the video, I made some updates to increase clarity. While the directions may not be an exact match, they should lead to a better outcome.
