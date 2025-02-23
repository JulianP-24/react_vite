import { RootState } from "../../store";
import { categories_interface, CategoriesState } from "./categories.entity";

export const categoriesInfoState = (state: RootState): CategoriesState => state.categoriesState;

export const listCategories = (state: RootState): categories_interface[] => categoriesInfoState(state).categoriesList