import React from 'react'

class CustomerForm extends React.Component {
    constructor(props) {
        console.log('form constructor')
        super(props)
        this.state = {
            name: props.name ? props.name :'',
            email:props.email ? props.email:'',
            mobile:props.mobile ? props.mobile:''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile
        }
        this.props.handleSubmit(formData)
    }


    render() {
        console.log('form render')
        return(
            <div>
              <form onSubmit = {this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" value={this.state.name} onChange={this.handleChange} name="name" id="name"/> <br/>

                <label htmlFor="email">Email</label>
                <input type="text" value={this.state.email} onChange={this.handleChange} name="email" id="email"/> <br/>

                <label htmlFor="mobile">Mobile</label>
                <input type="text" value={this.state.mobile} onChange={this.handleChange} name="mobile" id="mobile"/> <br/>

                <input type = "submit" />

            </form>
        </div>
        )
    }    
}

export default CustomerForm