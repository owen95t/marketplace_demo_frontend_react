import '../css/product.css'
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {AiFillStar, AiOutlineStar} from "react-icons/all";

const Product = ({product}) => {
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
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <div style={{display: "flex"}}>
                    {Array(product.item_rating).fill().map((e, i) => {

                        return (
                            <AiFillStar/>
                        )
                    })}
                </div>
                <Link to={`product/${product._id}`} className='stretched-link'>Go More Info</Link>
            </Card.Body>
        </Card>
    )
}

export default Product