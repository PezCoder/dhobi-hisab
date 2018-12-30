const initialState = {
  clothes: [],
  pricePerCloth: 7,
  currentBalance: 0
};

const GIVE_CLOTHES = 'GIVE_CLOTHES';

export const giveClothesAction = (payload) => {
  return {
    type: GIVE_CLOTHES,
    payload
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GIVE_CLOTHES:
  debugger;
      return {
        ...state,
        clothes: [
          ...state.clothes,
          {count: action.payload.count},
        ]
      };
      // pricePerCloth: state.pricePerCloth,
      //   currentBalance: state.currentBalance
    default:
      return state;
  }
}
