import {connect} from 'react-redux';

import MainNavigation from "../../components/shared/MainNavigation";

function ProductPage({result}){
    const initialNumber = 10
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

function mapStateToProps(state){
    return {
        result: state.product
    }
}

export default connect(mapStateToProps)(ProductPage);