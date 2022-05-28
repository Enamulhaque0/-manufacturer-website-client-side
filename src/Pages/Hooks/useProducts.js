import { useQuery } from 'react-query';

const useProducts = () => {

    const { data: products, isLoading, error, refetch } = useQuery('products', () => fetch('https://vast-atoll-69678.herokuapp.com/product').then(res => res.json()))


    return [products, isLoading, error, refetch];
};

export default useProducts;