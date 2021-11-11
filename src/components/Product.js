import '../css/product.css'
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {AiFillStar, AiOutlineStar} from "react-icons/all";

const Product = ({product, addToCart}) => {
    const calculateDiscount = (original, percent) => {
        let newPrice = original * (1-(percent/100))
        if(percent > 0){
            return (
                <>
                    <strike>฿ {original} </strike><strong>  ฿ {newPrice.toFixed(2)}</strong>
                </>
            )
        }
        return (
            <strong>฿ {original}</strong>
        )
    }

    return (
        // <div className='product'>
        //     <div className='product_info'>
        //         <p className='product_name'>Name {product.item_name}</p> {/* Change to product.item_name */}
        //         <p className='product_description'>Description</p>
        //         <div className='product_rating'></div>
        //         <p className='product_price'>
        //             <small>฿</small>
        //             <strong>400</strong>
        //         </p>
        //         <Button>Add to cart</Button>
        //     </div>
        // </div>
        <Card style={{ width: '18rem' }} className='m-auto mt-5 m-auto'>
            <Card.Img variant="top" src="holder_image.jpeg" />
            <Card.Body>
                <Card.Title>{product.item_name}</Card.Title>
                <Card.Text>
                    Example product description here
                    Description from json: {product.item_desc}
                </Card.Text>
                <Card.Text>
                    {calculateDiscount(product.item_price, product.item_discount)}
                    {/*<strong>฿ {product.item_price}</strong>*/}
                </Card.Text>
                <div style={{display: "flex"}}>
                    {Array(product.item_rating).fill().map((e, i) => {

                        return (
                            <AiFillStar/>
                        )
                    })}
                </div>
                <Link to={`product/${product._id}`} className='stretched-link'>More Info</Link>
            </Card.Body>
        </Card>
    )
}

export default Product