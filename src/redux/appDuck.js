const initialState = {
  clothes: [],
  pricePerCloth: 7,
  currentBalance: 0
};

const GIVE_CLOTHES = 'GIVE_CLOTHES';
const RECEIVE_CLOTH = 'RECEIVE_CLOTH';


export const giveClothesAction = (payload) => {
  return {
    type: GIVE_CLOTHES,
    payload
  }
}

export const receiveClothAction = (payload) => {
  return {
    type: RECEIVE_CLOTH,
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

    case RECEIVE_CLOTH:
      const clothReceived = state.clothes.filter(
        cloth => cloth.id === action.payload.id
      )[0];

      const updatedClothes = state.clothes.map(cloth => {
        if (cloth.id === clothReceived.id) {
          return {
            ...cloth,
            received: true,
            // Price rates & balance can change in future
            // To maintain appropriate history of transactions
            // it's important we store those values at the time
            // clothes were received
            pricePerCloth: state.pricePerCloth,
            currentBalance: state.currentBalance,
          };
        }

        return cloth;
      });

      return {
        ...state,
        clothes: updatedClothes,
      };

    default:
      return state;
  }
}
