import {create} from "zustand";

export const useProductStore = create((set)=>{
    return {
        products: [],
        setProducts: (products) => set({products}),
        createProduct: async (newProduct) => {
            if(!newProduct.name || !newProduct.price || !newProduct.image){
                console.log("All fields are required");
                return;
            }
        }
    }
})