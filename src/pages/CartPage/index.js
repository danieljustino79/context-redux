import { useDispatch, useSelector } from "react-redux"

import MainNavigation from "../../components/shared/MainNavigation"
import { REMOVE_PRODUCT } from "../../store/product/ProductActions"

export default function CartPage(){
    const result = useSelector(state => state.product)
    const dispatch = useDispatch()

    return(
        <div>
            <MainNavigation cartItemNumber={result.cartSum} />
            <ul>
            {
                result.cart.map(x => (
                    <li key={x.guid}>
                        {x.title} - {x.price}
                        <button
                            onClick={() => {
                                dispatch({
                                    type: REMOVE_PRODUCT,
                                    payload: x.guid
                                })
                            }}>Remove</button>
                    </li>
                ))
            }
            </ul>  
        </div>
    )
}