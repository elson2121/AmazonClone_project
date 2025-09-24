import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { ProductURL } from '../../../API/endpoint';
import ProductCard from '../../Product/ProductCard';
import classes from './Results.module.css' // FIX: Corrected typo 'classees' to 'classes'
import Loder from '../../Loder/Loder'; // <--- FIX 1: Import the Loder component

function Results() {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true); // <--- FIX 2: Add loading state, set to true
    const { category } = useParams(); 
    
    useEffect(() => {
        setLoading(true); // Set loading to true every time the category changes
        
        let apiCategory = category;
        if (category === "discover-fashion-trends" || category === "jewelry") {
            apiCategory = "jewelery";
        } else if (category === "men's-clothing") {
            apiCategory = "men's-clothing";
        }
        
        axios.get(`${ProductURL}/products/category/${apiCategory}`)
            .then((res) => {
                setResults(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false); // <--- FIX 3: Set loading to false when request is complete
            });
    }, [category]);
    
    // FIX 4: Conditional Rendering is the key
    return (
        <Layout>
            {loading ? ( // If loading is true, show the loader
                <Loder />
            ) : ( // Otherwise, show the content
                <>
                    <h1 style={{padding:"30px"}}> Results</h1>
                    <p style={{padding:"30px"}}> Category </p>
                    <hr />
                    <div className={classes.results_container}>
                        {results?.map((item) => (
                            <ProductCard 
                                product={item}
                                key={item.id}
                                renderDesc={false}
                                renderAdd={true} />
                        ))}
                    </div>
                </>
            )}
        </Layout>
    );
}

export default Results;