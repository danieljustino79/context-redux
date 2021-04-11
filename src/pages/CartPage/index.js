import MainNavigation from "../../components/shared/MainNavigation"

export default function CartPage(){
    const initialNumber = 10
    return(
        <div>
            <MainNavigation cartItemNumber={initialNumber} />
            cart
        </div>
    )
}