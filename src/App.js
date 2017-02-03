import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'

import Header from './Header'

import './App.css';

class App extends Component {

    componentDidMount() {

        axios.post(`http://brc-api.concon.in.ua/test/customer_types/all`)
            .then(res => {
                const items = res.data;
                items.map((item) =>
                this.props.onAddCustomerList(item.customer_type_name, item.customer_type_id));

        });
    }

    addCustomer(){
        console.log('add name', this.addInputName.value, 'add id', this.addInputId.value);
        this.props.onAddCustomer(this.addInputName.value, this.addInputId.value);
        this.addInputName.value = '';
        this.addInputId.value= ''
    }

    render() {

        return (
            <div className="content">
                <Header />
                <input type="text" ref={(input) => { this.addInputName = input }}/>
                <input type="text" ref={(input) => { this.addInputId = input }}/>
                <button onClick={this.addCustomer.bind(this)}>Add customer</button>
                <table>
                    <thead>
                    <tr>
                        <th>Customer name</th>
                        <th>Customer id</th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.props.testStore.map((item, index) =>
                        <tr key={index}>
                            <td>{item.customer}</td>
                            <td>{item.id}</td>
                        </tr>
                    )}

                    </tbody>
                </table>

              </div>
      );
      }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onAddCustomerList: (customerName, customerId) =>{
            dispatch({type: 'ADD_LIST', customer: customerName, id: customerId})
        },
        onAddCustomer: (customerName, customerId) =>{
            dispatch({type: 'ADD_ITEM', customer: customerName, id: customerId})
        }
    })
)(App);
