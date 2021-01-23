import React from 'react'

class DepartmentForm extends React.Component {
    constructor(){
        super()
        this.state = {
            name : '',
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
            name: this.state.name
        }
        this.props.handleSubmit(formData)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type ="text" value={this.state.name} name="name" onChange={this.handleChange} />
                    <input type="submit" value="add department" />
                </form>
            </div>
        )
    }
}
export default DepartmentForm