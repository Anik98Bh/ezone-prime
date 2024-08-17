import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Product from "./Product";

const Home = () => {
    const axiosPublic = useAxiosPublic();

    const { data: products = [], isPending: loading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get('/products');
            return res.data;
        }
    })
    console.log("products", products);

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;