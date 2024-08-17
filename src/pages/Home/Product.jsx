
const Product = ({ product }) => {
    const { ProductImage, _id, Ratings, ProductName, ProductCreationDate, Price, Description, Category } = product;
    
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img className="h-[260px]"
                        src={ProductImage}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;