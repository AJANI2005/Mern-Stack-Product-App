import {create} from "zustand";
import { createProduct } from "../../../backend/controllers/product.controller";

export const useProductStore = create((set)=>{
    return {
        products: [],
        setProducts: (products) => set({products}),
        createProduct: async (newProduct) => {
        }
    }
})