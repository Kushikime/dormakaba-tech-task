import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import {
  getCategories,
  getCategoryData,
  getCategoryDataBySearch,
  getCategoryNextPageData,
} from './actions';
import {
  Film,
  People,
  Planet,
  Specie,
  Starship,
  Vehicle,
} from '../../../types/responseTypes'; //later change to ts decoarator @types

export type categoriesType =
  | 'films'
  | 'people'
  | 'planets'
  | 'species'
  | 'starships'
  | 'vehicles';

// Define a type for the slice state
export interface AppState {
  loading: boolean;
  selectedCategory: categoriesType;
  categories: categoriesType[];
  searchQuery: string;
  films: {
    count: number;
    next: string;
    items: Film[];
    totalPages: number;
    currentPage: number;
  };
  people: {
    count: number;
    next: string;
    items: People[];
    totalPages: number;
    currentPage: number;
  };
  planets: {
    count: number;
    next: string;
    items: Planet[];
    totalPages: number;
    currentPage: number;
  };
  species: {
    count: number;
    next: string;
    items: Specie[];
    totalPages: number;
    currentPage: number;
  };
  starships: {
    count: number;
    next: string;
    items: Starship[];
    totalPages: number;
    currentPage: number;
  };
  vehicles: {
    count: number;
    next: string;
    items: Vehicle[];
    totalPages: number;
    currentPage: number;
  };
  fetching: boolean;
  selectedUrl: string;
}

const initialState: AppState = {
  loading: true,
  selectedCategory: 'planets',
  categories: [
    'films',
    'people',
    'planets',
    'species',
    'starships',
    'vehicles',
  ],
  searchQuery: '',
  films: {
    count: 0,
    next: '',
    items: [],
    totalPages: 1,
    currentPage: 1,
  },
  people: {
    count: 0,
    next: '',
    items: [],
    totalPages: 1,
    currentPage: 1,
  },
  planets: {
    count: 0,
    next: '',
    items: [],
    totalPages: 1,
    currentPage: 1,
  },
  species: {
    count: 0,
    next: '',
    items: [],
    totalPages: 1,
    currentPage: 1,
  },
  vehicles: {
    count: 0,
    next: '',
    items: [],
    totalPages: 1,
    currentPage: 1,
  },
  starships: {
    count: 0,
    next: '',
    items: [],
    totalPages: 1,
    currentPage: 1,
  },
  fetching: true,
  selectedUrl: '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<categoriesType>) => {
      state.selectedCategory = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      let selected = state.selectedCategory;
      state[selected].currentPage = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSelectedUrl: (state, action: PayloadAction<string>) => {
      state.selectedUrl = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action: any) => {
      const { data } = action.payload;
      const categories: any = Object.keys(data);
      state.categories = categories;
      state.fetching = false;
    });
    builder.addCase(getCategoryData.pending, (state, action) => {
      state.fetching = true;
    });
    builder.addCase(getCategoryData.rejected, (state, action) => {
      state.fetching = false;
    });
    builder.addCase(getCategoryData.fulfilled, (state, action: any) => {
      const { results, next, count } = action.payload.data;
      let selected = state.selectedCategory;
      state.fetching = false;
      state[selected].items = [...state[selected].items, ...results];
      state[selected].next = next;
      state[selected].count = count;
      state[selected].currentPage = 1;
      state[selected].totalPages = Math.ceil(count / 10);
    });
    builder.addCase(getCategoryNextPageData.pending, (state, action) => {
      state.fetching = true;
    });
    builder.addCase(getCategoryNextPageData.rejected, (state, action) => {
      state.fetching = false;
    });
    builder.addCase(getCategoryNextPageData.fulfilled, (state, action: any) => {
      const { results, next } = action.payload.data;
      let selected = state.selectedCategory;
      state[selected].next = next;
      state[selected].items = [...state[selected].items, ...results];
      state.fetching = false;
    });
    builder.addCase(getCategoryDataBySearch.pending, (state, action: any) => {
      let selected = state.selectedCategory;
      state[selected].items = [];
      state[selected].count = 0;
      state[selected].currentPage = 1;
      state[selected].totalPages = 1;
      state.fetching = true;
    });
    builder.addCase(getCategoryDataBySearch.fulfilled, (state, action: any) => {
      const { results, next, count } = action.payload.data;
      let selected = state.selectedCategory;
      state[selected].items = [...results];
      state[selected].count = count;
      state[selected].next = next;
      state[selected].currentPage = 1;
      state[selected].totalPages = Math.ceil(count / 10);
      state.fetching = false;
    });
    builder.addCase(getCategoryDataBySearch.rejected, (state, action: any) => {
      state.fetching = false;
    });
  },
});

export const {
  setAppLoading,
  setSelectedCategory,
  setSearchQuery,
  setSelectedUrl,
  setCurrentPage,
} = appSlice.actions;

export const getAppLoading = (state: RootState) => state.app.loading;
export default appSlice.reducer;
