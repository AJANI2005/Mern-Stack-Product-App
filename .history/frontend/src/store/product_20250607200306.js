import {create} from "zustand";

export const useProductStore = create((set)=>{
    return {
        products: [],
        setProducts: (products) => set({products}),
        createProduct: async (newProduct) => {
        }
    }
})