import React, { useEffect} from 'react'
// import Product from './Product'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, Container
  } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

 function HomePage(props) {
    // const classes = useStyles();

    const productList = useSelector(state=> state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(listProducts())
        return () => {
        }
    },[dispatch])

    return (
        loading ? <div>Loading...</div> :
        error ? <div>{error}</div> :
   <div className="isi">
       <Container>
       <Row>
               {products.map((product)=>(
           <Col md={3}>
           <Card key={product._id}>
                <CardImg top width="100%" src={product.image} alt="Card image cap" />
                <CardBody>
                <CardTitle tag="h5">{product.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{product.category}</CardSubtitle>
                <CardText>{product.description}</CardText>
                <Link to={"/product/"+ product._id}>
                <Button>Lihat</Button>
                </Link>
                </CardBody>
            </Card>
           </Col>
            ))}
       </Row>
       </Container>
   </div>
    )
}

// const useStyles = makeStyles((theme) => ({
//     toolbar: theme.mixins.toolbar,
//     content: {
//       flexGrow: 1,
//       backgroundColor: '#fff',
//       // padding: theme.spacing(3),
//       margin: '5%'
//     },
//     root: {
//       flexGrow: 1,
//     },
// }));

export default HomePage