import {create} from "zustand";
import { createProduct } from "../../../backend/controllers/product.controller";

export const useProductStore = create((set)=>{
    return {
        products: [],
        setProducts: (products) => set({products}),
        createProduct: async (product) => {
            try {
                const newProduct = await createProduct(product);
                set((state) => ({
                    products: [...state.products, newProduct]
                }));
            } catch (error) {
                console.error("Error creating product:", error);
            }
        }
    }
})