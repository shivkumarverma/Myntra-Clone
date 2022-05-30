const initState = {
  products: [],
  totalPrice: 0,
  totalQuantities: 0,
};

const CartReducer = (state = initState, action) => {
  let find_p;
  let index;

  switch (action.type) {
    case "ADD TO CART":
      // console.log(action.payload.product);
      const { product } = action.payload;
      const check = state.products.find((pr) => pr.id === product.id);

      if (check) {
        return state;
      } else {
        const Tprice = state.totalPrice + product.discountPrice;
        return {
          ...state,
          products: [...state.products, product],
          totalPrice: Tprice,
          totalQuantities: state.totalQuantities + 1,
        };
      }
    case "INC":
      find_p = state.products.find((product) => product.id === action.payload);
      index = state.products.find((product) => product.id === action.payload);

      find_p.quantity += 1;

      state.products[index] = find_p;

      return {
        ...state,
        totalPrice: state.totalPrice + find_p.discountPrice,
        totalQuantities: state.totalQuantities + 1,
      };

    case "DEC":
      find_p = state.products.find((product) => product.id === action.payload);
      index = state.products.find((product) => product.id === action.payload);

      if (find_p.quantity > 1) {
        find_p.quantity -= 1;
        state.products[index] = find_p;

        return {
          ...state,
          totalPrice: state.totalPrice - find_p.discountPrice,
          totalQuantities: (state.totalQuantities -= 1),
        };
      } else {
        return state;
      }

    case "DEL":
      find_p = state.products.find((product) => product.id === action.payload);
      const filtered = state.products.filter(
        (product) => product.id !== action.payload,
      );
      return {
        ...state,
        products: filtered,
        totalPrice: state.totalPrice - find_p.discountPrice * find_p.quantity,
        totalQuantities: state.totalQuantities - find_p.quantity,
      };

    default:
      return state;
  }
};

export default CartReducer;
