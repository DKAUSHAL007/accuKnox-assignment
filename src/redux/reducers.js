import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

export const WidgetSlice = createSlice({
  name: "widget",
  initialState: {
    categories: data.categories,
    searchTerm: "",
  },

  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      if (category) {
        category.widgets.push({ ...widget, id: Date.now() });
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(
          (item) => item.id !== widgetId,
        );
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addWidget, removeWidget, setSearchTerm } = WidgetSlice.actions;

export default WidgetSlice.reducer;
