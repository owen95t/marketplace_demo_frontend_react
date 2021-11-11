import {Container} from "react-bootstrap";
import {useParams} from "react-router-dom";


const ProductPage = () => {
    const params = useParams()

    return (
        <>
            <Container>
                <h1>{params.id}</h1>
            </Container>
        </>
    )
}

export default ProductPage