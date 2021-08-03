## Live demo

https://cardgame.pawelnowecki.pl/

## Game rules:

- Player has one card at a time
- There are three buttons that the player uses to decide whether the next card number will be higher or lower
- Once the player chooses one of the options, he/she gets 0.1 point for the correct answer and a new card is shown
- There is 30 rounds of the game

## Assumptions

- API https://deckofcardsapi.com/.
- The card is presented by a picture
- History of all the rounds and results 
- The number of remaining rounds and the sum of points
- Closing the app saves the current game
- If the game is resumed, the player gets a choice beetwen “Previous game” and "New Game"

## Libraries used

- "react": "^17.0.2",
- "react-confetti": "^6.0.1",
- "react-dom": "^17.0.2",
- "react-router-dom": "^5.2.0",
- "react-scripts": "4.0.3",
- "rsuite": "^4.10.2",
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
