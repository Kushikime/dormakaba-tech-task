import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../../store';

const baseUrl: string = process.env.REACT_APP_SWAPI_URL!;

const getCategories = createAsyncThunk(
  `app/getCategories`,
  async () => await axios.get(baseUrl)
);
const getCategoryData = createAsyncThunk(
  `app/getCategoryData`,
  async (arg, { getState }) => {
    const state: any = getState();
    return await axios.get(`${baseUrl}/${state.app.selectedCategory}`);
  }
);
const getCategoryNextPageData = createAsyncThunk(
  `app/getCategoryNextData`,
  async (arg, { getState }) => {
    const state: any = getState();
    let selected = state.app.selectedCategory;
    let next = state.app[selected].next;
    return await axios.get(next);
  }
);

const getCategoryDataBySearch = createAsyncThunk(
  `app/searchCategoryData`,
  async (arg, { getState }) => {
    const state: any = getState();
    return await axios.get(
      `${baseUrl}/${state.app.selectedCategory}/?search=${state.app.searchQuery}`
    );
  }
);

export {
  getCategories,
  getCategoryData,
  getCategoryNextPageData,
  getCategoryDataBySearch,
};
