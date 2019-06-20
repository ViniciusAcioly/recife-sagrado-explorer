import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as firebase from 'firebase';

//especificando o estado inicial

const initialState = {
	favoriteAnimal: "tiger",
	userData: {},
};

//reducer (pega as actions e atualiza o estado)

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case "setFavoriteAnimal": 
			return { ...state, favoriteAnimal: action.value };
		case "setUserData": 
			return { ...state, userData: action.value };
		default: 
			return state;
	}

};

//store (contém todos os dados dos estados)

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
export { store };

//Action Creators...

const setFavoriteAnimal = (favoriteAnimal) => {
	return {
		type: "setFavoriteAnimal",
		value: favoriteAnimal,
	};
}

const setUserData = (userData) => {
	return {
		type: "setUserData",
		value: userData,
	};
}

const watchUserData = (userData) => {
	return function(dispatch) {
		firebase.database().ref("User").on("value", function(snapshot) {
			var userData = snapshot.val();
			dispatch(setUserData(userData));
		}, function(error) {

		});
	}
}

export { setFavoriteAnimal, setUserData, watchUserData };