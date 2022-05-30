const initState = {
  products: [
    {
      id: 1,
      brand: "Roadster",
      name: "Cotton Checked Casual Shirt",
      image: "1.jpg",
      price: 1499,
      discount: 60,
      discountPrice: 1499 - (60 / 100) * 1499,
      quantity: 1,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five",
      for: "men",
      instock: 5,
      ratings: 5,
    },
    {
      id: 2,
      brand: "LouisPhilippe",
      name: "Cotton Checked Casual Shirt",
      image: "2.jpg",
      price: 6999,
      discount: 60,
      discountPrice: 6999 - (60 / 100) * 6999,
      quantity: 1,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five",
      for: "boys",
      instock: 0,
      ratings: 5,
    },
    {
      id: 3,
      brand: "Roadster",
      name: "Cotton Checked Casual Shirt",
      image: "3.jpg",
      price: 18999,
      discount: 60,
      discountPrice: 18999 - (60 / 100) * 18999,
      quantity: 1,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five",
      for: "men",
      instock: 40,
      ratings: 1,
    },
    {
      id: 4,
      brand: "LouisPhilippe",
      name: "borad Shirt",
      image: "4.jpg",
      price: 39999,
      discount: 60,
      discountPrice: 39999 - (60 / 100) * 39999,
      quantity: 1,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five",
      for: "girls",
      instock: 40,
      ratings: 0,
    },
    {
      id: 5,
      brand: "Roadster",
      name: "nylon Shirt",
      image: "5.jpg",
      price: 399,
      discount: 60,
      discountPrice: 399 - (60 / 100) * 399,
      quantity: 1,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five",
      for: "men",
      instock: 40,
      ratings: 5,
    },
    {
      id: 6,
      brand: "AllenSolly",
      name: "silky Shirt",
      image: "6.jpg",
      price: 15599,
      discount: 60,
      discountPrice: 15599 - (60 / 100) * 15599,
      quantity: 1,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five",
      for: "wom",
      instock: 40,
      ratings: 2,
    },
    {
      id: 7,
      brand: "AllenSolly",
      name: "redcarpet ",
      image: "7.jpg",
      price: 1299,
      discount: 60,
      discountPrice: 1299 - (60 / 100) * 1299,
      quantity: 1,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five",
      for: "wom",
      instock: 40,
      ratings: 4,
    },
    {
      id: 8,
      brand: "HighLander",
      name: "wollen Checked Casual Shirt",
      image: "8.jpg",
      price: 999,
      discount: 60,
      discountPrice: 999 - (60 / 100) * 999,
      quantity: 1,

      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five",
      for: "wom",
      instock: 40,
      ratings: 3,
    },
  ],
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
