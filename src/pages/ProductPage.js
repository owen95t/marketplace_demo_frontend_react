import {Button, Col, Container, FormControl, Image, InputGroup} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import customAxios from "../axios/customAxios";


const ProductPage = ({addToCart}) => {
    const params = useParams()
    const [product, setProduct] = useState()
    const [itemCount, setItemCount] = useState(1)
    const getInfo = async () => {
        console.log(params.id)
        await customAxios.get(`items/getID/${params.id}`).then(response => {
            setProduct(response.data)
            console.log(response.data)
        }).catch(e => {
            if (e) {
                alert('Error getting product: ' + e)
            }
        })
    }

    const handleItemCount = (n) => {
        if(n < 0 && itemCount > 1){
            setItemCount(itemCount - 1)
        }else if(n > 0){
            setItemCount(itemCount + 1)
        }
    }

    const calculateDiscount = (original, percent) => {
        let newPrice = original * (1-(percent/100))
        return (
            <>
                <strike>฿ {original} </strike><strong>  ฿ {newPrice.toFixed(2)}</strong>
            </>
        )
    }

    useEffect(() => {
        getInfo()
    }, [])

    return (
        <>
            <Container style={{display: "flex", height: '35rem', marginTop: '5rem'}}>
                <Col className='justify-content-center'>
                    <Image src="holder_image.jpeg" rounded/>
                </Col>
                <Col>
                    <h1 className='text-start'>{product ? product.item_name : ""}</h1>
                    <p className='text-start'>{product ? product.item_desc : ""}</p>

                    <p className='text-start'>{product ? (product.item_discount > 0 ? calculateDiscount(product.item_price, product.item_discount) : product.item_price) : ""}</p>


                    <InputGroup className='mb-3'>
                        <Button variant='outline-secondary' onClick={() => handleItemCount(-1)}>-</Button>
                        <FormControl disabled value={itemCount} style={{width: '1rem'}}/>
                        <Button variant='outline-secondary' onClick={() => handleItemCount(1)}>+</Button>
                    </InputGroup>


                        <Button onClick={() => addToCart(product._id, itemCount)} className='text-start'>Add To Cart</Button>


                </Col>

            </Container>
        </>
    )
}

export default ProductPage