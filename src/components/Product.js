import '../css/product.css'
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Rating} from "@mui/material";

const Product = ({product}) => {
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
        <Card style={{ width: '18rem' }} className='m-auto mt-5 m-auto'>
            <Card.Img variant="top" src="holder_image.jpeg" />
            <Card.Body>
                <Card.Title className='w-100'>
                    <div className='text-start'>
                        {product.item_name}
                    </div>
                </Card.Title>
                <Card.Text>
                    <div className='text-start'>
                        {calculateDiscount(product.item_price, product.item_discount)}
                    </div>
                    <div className='text-start mt-2'>
                        <Rating
                            value={product.item_rating}
                        />
                    </div>
                    <div className='text-start'>
                        <Link to={`product/${product._id}`} className='stretched-link'>More Info</Link>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product