import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addCart(product));
    };

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://api.stevenbachimont.com/api/projects");
                const products = await response.json();
                setData(products);
                setFilter(products);
            } catch (error) {
                console.error("Failed to fetch products", error);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-12 py-5 text-center">
                    <Skeleton height={40} width={560} />
                </div>
                <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                    <Skeleton height={592} />
                </div>
                <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                    <Skeleton height={592} />
                </div>
                <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                    <Skeleton height={592} />
                </div>
                <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                    <Skeleton height={592} />
                </div>
                <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                    <Skeleton height={592} />
                </div>
                <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                    <Skeleton height={592} />
                </div>
            </>
        );
    };

    const filterProduct = (cat) => {
        const updatedList = data.filter((item) => item.category === cat);
        setFilter(updatedList);
    };

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons text-center py-5">
                    <button
                        className="btn btn-outline-dark btn-sm m-2"
                        onClick={() => setFilter(data)}
                    >
                        All
                    </button>
                    <button
                        className="btn btn-outline-dark btn-sm m-2"
                        onClick={() => filterProduct("personal projects")}
                    >
                        Personal Projects
                    </button>
                    <button
                        className="btn btn-outline-dark btn-sm m-2"
                        onClick={() => filterProduct("group projects")}
                    >
                        group projects
                    </button>
                    <button
                        className="btn btn-outline-dark btn-sm m-2"
                        onClick={() => filterProduct("professional projects")}
                    >
                        professional projects
                    </button>
                    <button
                        className="btn btn-outline-dark btn-sm m-2"
                        onClick={() => filterProduct("skills")}
                    >
                        skills
                    </button>
                    <button
                        className="btn btn-outline-dark btn-sm m-2"
                        onClick={() => filterProduct("front")}
                    >
                        front
                    </button>
                    <button
                        className="btn btn-outline-dark btn-sm m-2"
                        onClick={() => filterProduct("back")}
                    >
                        back
                    </button>
                </div>

                {filter.map((product) => {
                    return (
                        <div
                            id={product.id}
                            key={product.id}
                            className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
                        >
                            <div className="card text-center h-100" key={product.id}>
                                <img
                                    className="card-img-top p-3"
                                    src={product.image}
                                    alt="Card"
                                    height={300}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {product.title.substring(0, 12)}...
                                    </h5>
                                    <p className="card-text">
                                        {product.description.substring(0, 90)}...
                                    </p>
                                </div>

                                <div className="card-body">
                                    <Link
                                        to={"/product/" + product.id}
                                        className="btn btn-dark m-1"
                                    >
                                        Buy Now
                                    </Link>
                                    <button
                                        className="btn btn-dark m-1"
                                        onClick={() => {
                                            toast.success("Added to cart");
                                            addProduct(product);
                                        }}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </>
        );
    };

    return (
        <>
            <div className="container my-3 py-3">
                <div className="row">
                    <div className="col-12">
                        <h2 className="display-5 text-center">Latest Products</h2>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </>
    );
};

export default Products;
