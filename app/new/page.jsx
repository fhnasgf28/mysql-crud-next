"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import { ProductForm} from "../components/productForm"

export default function NewPage() {
    const [products, setProducts] = useState();

    useEffect(() => {
        const fetchData = async () => {
        const res = await axios.get("http://localhost:3000/api/products");
        setProducts(res.data);
        }
        fetchData();
        },[]);

    return(
        <div className="h-5/6 grid place-items-center">
            <ProductForm />
        </div>
    )
}