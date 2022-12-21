import {useState} from 'react'
import imgOne from '../../images/productViolin1.jpg'
import imgTwo from '../../images/providence-doucet-wPaBwop_rSo-unsplash.jpg'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
const Product =()=>{
    const [selectImg, setSelectImg]=useState(0)
    const [amount, setAmount] = useState(1)
    const images =[imgOne,imgTwo]
    return(
        <div className="product">
            <div className ="product-images-container">
                <div className="small-images">
                    <img src={images[0]} alt="" onClick={()=>{setSelectImg(0)}}/>
                    <img src={images[1]} alt="" onClick={()=>{setSelectImg(1)}}/>
                </div>
                <div className="main-display-image">
                    <img src={images[selectImg]} alt=""/>
                </div>
            </div>

            <div className="product-info">
                <h1>Title</h1>
                <span className="product-price">$100</span>
                <p className="product-description">descriptions dui faucibus in ornare quam viverra orci 
                    sagittis eu volutpat odio facilisis mauris sit amet massa 
                    vitae tortor condimentum lacinia 
                    </p>
                <div className="amount-to-cart">
                    <button onClick={()=>setAmount(prev=>prev===1?1:prev-1)}>-</button>
                     {amount}
                    <button onClick={()=>setAmount(prev=>prev+1)}>+</button>
                </div>
                <button className="add-to-shoppingCart"><ShoppingCartIcon/> Add to Cart</button>
            </div>


        </div>
    )
}
export default Product;