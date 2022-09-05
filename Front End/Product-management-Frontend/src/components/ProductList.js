import React from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import './Product.css'
import { withRouter } from 'react-router-dom';

class ProductList extends React.Component {

    state = {
        listProduct: []
    }

    async componentDidMount() {
        let res = await axios.get('http://localhost:8080/product');
        this.setState({
            listProduct: res.data
        })
        console.log(res.data);
    }


    handleUpdateProduct = (item) => {
        this.props.history.push(`/product/${item.id}`)
    }

    handleDeleteProduct = (item) => {

    }


    render() {
        let { listProduct } = this.state;
        return (
            <>
                <div className="container d-flex justify-content-center mt-50 mb-50">

                    <div className="row" style={{ justifyContent: 'center' }}>
                        <div className="col-md-10">



                            {listProduct && listProduct.length > 0 &&
                                listProduct.map((item, index) => {
                                    return (
                                        <div className="card card-body" key={item.id}>
                                            <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
                                                <div className="mr-2 mb-3 mb-lg-0">

                                                    <img src="https://i.imgur.com/5Aqgz7o.jpg" width="150" height="150" alt="" />

                                                </div>

                                                <div className="media-body">
                                                    <h6 className="media-title font-weight-semibold">
                                                        <a href="#" data-abc="true">{item.name}</a>
                                                    </h6>

                                                    <ul className="list-inline list-inline-dotted mb-3 mb-lg-2">
                                                        <li className="list-inline-item"><a href="#" className="text-muted" data-abc="true">Phones</a></li>
                                                        <li className="list-inline-item"><a href="#" className="text-muted" data-abc="true">Mobiles</a></li>
                                                    </ul>

                                                    <p className="mb-3">{item.des}</p>

                                                    <ul className="list-inline list-inline-dotted mb-0">
                                                        <li className="list-inline-item">All items from <a href="#" data-abc="true">Mobile point</a></li>
                                                        <li className="list-inline-item">Add to <a href="#" data-abc="true">wishlist</a></li>
                                                    </ul>
                                                </div>

                                                <div className="mt-3 mt-lg-0 ml-lg-3 text-center">
                                                    <h3 className="mb-0 font-weight-semibold">${item.price}</h3>

                                                    <div>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>

                                                    </div>

                                                    <div className="text-muted">1985 reviews</div>

                                                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '160px', margin: '0 auto' }}>
                                                        <button onClick={() => this.handleUpdateProduct(item)} type="button" className="btn btn-primary mt-4 text-white"><i className="icon-cart-add mr-2"></i>Update</button>
                                                        <button onClick={() => this.handleDeleteProduct(item)} type="button" className="btn btn-danger mt-4 text-white"><i className="icon-cart-add mr-2"></i> Delete</button>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default withRouter(ProductList)