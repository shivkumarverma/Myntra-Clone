import { products } from "./products";

const initState = {
  products: products,
  product: {},
  searchQuery: "",
  human: "",
  brandFilter: "",
  minprice: 0,
  maxprice: 0,
  sort: "",
};

const ProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case "PRODUCT":
      return {
        ...state,
        product: state.products.find(
          (product) => product.id === parseInt(action.id),
        ),
      };

    case "PRODUCT_FOR":
      return {
        ...state,
        human: action.payload,
      };

    case "FILTER_BY_BRAND":
      return {
        ...state,
        brandFilter: action.payload,
      };

    case "SEARCH":
      return {
        ...state,
        searchQuery: action.payload,
      };

    case "FILTER_BY_PRICE":
      return {
        ...state,
        minprice: action.payload.min,
        maxprice: action.payload.max,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        searchQuery: "",
        human: "",
        brandFilter: "",
        minprice: 0,
        maxprice: 0,
      };
    case "SORT_BY_PRICE":
      return {
        ...state,
        sort: action.payload,
      };

    case "SORT_ID":
      return {
        ...state,
        sort: action.payload,
      };

    default:
      return state;
  }
};

export default ProductsReducer;
