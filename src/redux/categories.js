const initialState = {
  loading: true,
  items: [],
  addCategoryValue: "",
  addingCategory: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "categories/load/start":
      return {
        ...state,
        loading: true,
      };
    case "categories/load/succeed":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case "category/setAddCategoryValue":
      return {
        ...state,
        addCategoryValue: action.payload,
      };
    case "categories/saveCategory/start":
      return {
        ...state,
        addingCategory: true,
      };
    case "categories/saveCategory/succeed":
      return {
        ...state,
        items: [...state.items, action.payload],
        addCategoryValue: "",
        addingCategory: false,
      };
    default:
      return state;
  }
}

export default reducer;
