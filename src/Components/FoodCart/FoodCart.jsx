const FoodCart = ({item}) => {
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={item?.image} alt="Shoes" /></figure>
                <p className="absolute right-0 mr-4 mt-4 p-2 bg-slate-900 text-white">${item?.price}</p>
                <div className="card-body">
                    <h2 className="card-title">{item?.name}</h2>
                    <p>{item?.recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline border-0 border-b-4 uppercase border-yellow-500 text-yellow-500">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;