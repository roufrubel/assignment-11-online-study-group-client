

const Reviews = () => {
    return (
        <>
        <h2 className="text-center font-bold text-2xl text-blue-800 mt-12 mb-6">---- Clients Reviews ---- </h2>
        <div className="md:flex lg:flex flex-grow justify-around gap-8 mt-8 mb-8">
            <div className="p-4 bg-slate-50 rounded-md mb-2">
                <h2 className="text-xl font-bold" >Perfect Family Home in a Great Neighborhood!</h2>
                    <h2 className="text-md font-bold">Sakib Mahmud</h2>
                    <p>Asst Accountant</p>
                    <p className="mt-2 mb-2">We recently moved into this beautiful 3-bedroom house and could not be happier. The neighborhood is quiet and safe, perfect for our kids to play outside. The house itself is well-maintained and has all the modern amenities we were looking for. The spacious backyard is a great bonus, and we have enjoyed many family barbecues there already. The landlord is also very responsive and helpful with any issues we had during the move-in process. Highly recommend this property for families!</p>
                    <p>Rating: ★★★★★</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-md mb-2">
                <h2 className="text-xl font-bold" >Cozy and Conveniently Located</h2>
                    <h2 className="text-md font-bold">John Miller</h2>
                    <p>Shop Manager</p>
                    <p className="mt-2 mb-2">I rented this 2-bedroom apartment for a year while working in the city, and it was a great experience. The apartment is cozy and well-furnished, with a nice blend of modern and traditional touches. The best part is its location – close to public transportation, restaurants, and shopping centers, which made commuting and errands very convenient. The only downside was the occasional noise from the street, but it was manageable. Overall, a solid choice for anyone looking for a convenient and comfortable place to live.</p>
                    <p>Rating: ★★★★☆</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-md mb-2">
                <h2 className="text-xl font-bold" > Decent House with Room for Improvement</h2>
                    <h2 className="text-md font-bold">Emily Davis</h2>
                    <p>Professor</p>
                    <p className="mt-2 mb-2">I recently sold my 4-bedroom house through this service. The process was smooth, and the agent was professional and knowledgeable. The house itself has a lot of potential, but it needs some updates, especially in the kitchen and bathrooms. The location is good, with schools and parks nearby, but we did experience some issues with the plumbing that required several visits from the maintenance team. While it was not perfect, it is a decent property for someone willing to put in a bit of work to make it their own.</p>
                    <p>Rating: ★★★☆☆</p>
            </div>
            
        </div>
        </>
    );
};

export default Reviews;