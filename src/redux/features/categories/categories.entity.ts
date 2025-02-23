export interface categories_interface {
   id: string,
   nombre: string
}

export interface CategoriesState {
   categoriesList: Array<categories_interface>
}

export const initialState: CategoriesState = {
   categoriesList: []
}