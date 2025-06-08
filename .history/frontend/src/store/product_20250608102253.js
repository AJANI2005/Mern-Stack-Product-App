import {create} from "zustand";

export const useProductStore = create((set)=>{
    return {
        products: [],
        setProducts: (products) => set({products}),
        createProduct: async (newProduct) => {
            if(!newProduct.name || !newProduct.price || !newProduct.image){
                return {success: false, message: "All fields are required"};
            }
            const res = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProduct)
            })
            const data = await res.json();
           
            // update ui immediately
            set((state)=>{
                return {
                    products: [...state.products, data.data]
                }
            });
            return {success: true, message: "Product created successfully"}
        },
        fetchProducts: async () => {
            const res = await fetch("/api/products");
            const data = await res.json();
            set({products: data.data});
        },
        deleteProduct: async (id) => {
            const res = await fetch(`/api/products/${id}`, {
                method: "DELETE"
            })
            const data = await res.json();
            if(!data.success){
                return {success: false, message: data.message};
            }
            // update ui immediately
            set((state)=>{
                return {
                    products: state.products.filter((product) => product._id !== id)
                }
            })
            return {success: true, message: data.message} 
        },
        updateProduct: async (id) =>{
            const res = await fetch(`/api/products/${id}`, {
                method: "PUT", 
            })
            const data = await res.json();
            if(!data.success){
                return {success: false, message: data.message};
            }
            // update ui immediately
            set((state)=>{
                return {
                    products: state.products.map((product) => product._id === id ? data.data : product)
                }
            })
            return {success: true, message: data.message}
        }


    }
})