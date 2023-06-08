import React from "react";
import { getAllProducts } from "../services/productApi";
import { useQuery } from "react-query";

const Products = () => {
    const { data: products, isError, isLoading } = useQuery("getAllProducts", getAllProducts);
    // console.log("data", products);
    return <div>Products</div>;
};

export default Products;
