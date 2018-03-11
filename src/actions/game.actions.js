export const SET_RANDOM_NUMBER = 'SET_RANDOM_NUMBER';
export const setRandomNumber = randomNumber => ({
    type: SET_RANDOM_NUMBER,
    payload: {
    	randomNumber
    }
});

export const SET_USER_GUESS = 'SET_USER_GUESS';
export const setUserGuess = userGuess => ({
    type: SET_USER_GUESS,
    payload: {
    	userGuess
    }
});

export const SET_NEW_GAME = 'SET_NEW_GAME';
export const setNewGame = () => ({
	type: SET_NEW_GAME
});