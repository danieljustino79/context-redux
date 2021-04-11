import {useSelector, useDispatch} from 'react-redux';

import {ADD_PRODUCT} from '../../store/product/ProductActions';
import MainNavigation from "../../components/shared/MainNavigation";

function ProductPage(){    
    const result = useSelector(state => state.product)
    const dispatch = useDispatch()

    return(
        <div>
            <MainNavigation cartItemNumber={result.cartSum} />
            <ul>
            {
                result.products.map(x => (
                    <li key={x.id}>
                        {x.title}
                        <button
                            onClick={() => {
                                dispatch({
                                    type: ADD_PRODUCT,
                                    payload: x
                                })
                            }}>Add</button>
                    </li>
                ))
            }
            </ul>            
        </div>
    )
}

export default ProductPage;