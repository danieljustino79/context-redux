import {useSelector} from 'react-redux';

import MainNavigation from "../../components/shared/MainNavigation";

function ProductPage(){
    const initialNumber = 10
    const result = useSelector(state => state.product)

    return(
        <div>
            <MainNavigation cartItemNumber={initialNumber} />
            <ul>
            {
                result.products.map(x => (
                    <li key={x.id}>{x.title}</li>
                ))
            }
            </ul>            
        </div>
    )
}

export default ProductPage;