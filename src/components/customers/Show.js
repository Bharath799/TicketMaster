import React from 'react'
import axios from '../../config/axios'
import {Link} from 'react-router-dom' //link for back button


class CustomerShow extends React.Component {
    constructor() {
        super()
        this.state ={
            customer:{}
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`/customers/${id}`,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response => {
            const customer = response.data
            this.setState({ customer })
            console.log(response.data)
        })
    }
 
    render() {
        return (
            <div>
                <h1>CustomerShow - {this.props.match.params.id}</h1>
                <p> {this.state.customer.name} - {this.state.customer.mobile}-{this.state.customer.email}</p>
                <Link to={`/customers/edit/${this.props.match.params.id}`}>Edit</Link>
                <Link to="/customers">|back</Link>
            </div>
        )
    }
    
}
export default CustomerShow