import '../css/product.css'
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

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
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{product.item_name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Link to={`product/${product._id}`}>Go More Info</Link>
            </Card.Body>
        </Card>
    )
}

export default Product