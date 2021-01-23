import React from 'react'
import axios from '../../config/axios'
import CustomerForm from './Form'

class CustomerEdit extends React.Component{
    constructor() {
        console.log('edit constructor')
        super()
        this.state ={
            customer:{}
        }
    }
    handleSubmit= (formData) =>{
        axios.put(`/customers/${this.props.match.params.id}`,formData,{
            headers: {
                'x-auth':localStorage.getItem('authToken')
                
            }
        })
        .then(response => {
            const customer = response.data
            this.props.history.push(`/customers/${customer._id}`)
        })
    }

    componentDidMount(){
        console.log('edit componentDidMount')
         const id = this.props.match.params.id
         axios.get(`/customers/${id}`,{
             headers:{
                 'x-auth':localStorage.getItem('authToken')
             }
         })
         .then(response => {
             const customer = response.data
             this.setState({customer})
         })
         .catch(err => {
             alert(err)
         })
    }
    render(){
        console.log('edit render')
        return(
            <div>
                <h1>Edit Customer</h1>
                {
                    Object.keys(this.state.customer).length != 0 && <CustomerForm 
                    {...this.state.customer} handleSubmit={this.handleSubmit}/> //extracting each property of state

                }
               
            </div>
        )
    }
}
export default CustomerEdit