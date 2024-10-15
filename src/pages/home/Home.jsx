import {useProducts} from "@/hooks/useProducts.js";

const Home = () => {
const {data} = useProducts()
    if (data && data.length) {console.log(data)}
    return (
        <h1>Home</h1>
    );
};

export default Home;
