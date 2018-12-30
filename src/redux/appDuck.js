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
      return {
        ...state,
        clothes: [
          ...state.clothes,
          {
            id: state.clothes.length,
            count: action.payload.count,
            received: false,
          },
        ]
      };
      // pricePerCloth: state.pricePerCloth,
      //   currentBalance: state.currentBalance
    default:
      return state;
  }
}
