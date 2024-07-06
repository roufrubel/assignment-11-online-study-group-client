import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const CategorySection = () => {
    const { loading } = useContext(AuthContext);
    const [crafts, setCrafts] = useState([]);
    useEffect( () => {
        fetch('https://assignment-10-jute-home-decor-server.vercel.app/category')
        .then(res => res.json())
        .then(data => setCrafts(data))
    }, [])

    if (loading) {
        return <p className="text-2xl text-amber-700">Loading....</p>;
      }
    return (
        <div className="mt-6 mb-6">
            <h2 className="mt-20 text-3xl font-bold text-center text-blue-800 mb-12">Art & Craft Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-2 md:gap-6 lg:gap-6">
            {crafts.map((craft) => (
                <div key={craft._id}>
                  <div className="card card-side mb-8 mx-2 flex-col shadow-md">
                    <div className="mb-4">
                    <figure>
                      <img className="rounded-t-xl" src={craft.image} alt="Movie" />
                    </figure>
                    </div>
                      <div className="space-y-2 p-6">
                        <h2 className="card-title">{craft.item_name}</h2>
                        <p>Sub-category: {craft.subcategory_name}</p>
                        <p>{craft.short_description}</p>
                        <p>Price: {craft.price}</p>
                        <p>Rating: {craft.rating}</p>
                        <p>Customization: {craft.customization}</p>
                        <p>Processing-time: {craft.processing_time}</p>
                        <p>Stock-status: {craft.stockStatus}</p>
                      </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
    );
};

export default CategorySection;