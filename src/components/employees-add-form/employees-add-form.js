import './employees-add-form.css';
import {Component} from "react";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            className: 'hidden'
        }
    }

    onValueChange = (e) => {

        this.setState({
                [e.target.name]: e.target.value
            }
        )
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.name.length <1 || !this.state.salary) {
            this.setState({
                className: 'showed'
            })
            return
        };
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: '',
            className: 'hidden'
        })
    }

    render() {
        const {name, salary, className} = this.state;
            return (
                <div className="app-add-form">
                    <h3>Add a new employee</h3>
                    <form
                        className="add-form d-flex"
                        onSubmit={this.onSubmit}>
                        <input type="text"
                               className="form-control new-post-label"
                               placeholder="Name"
                               name="name"
                               value={name}
                               onChange={this.onValueChange}/>
                        <input type="number"
                               className="form-control new-post-label"
                               placeholder="Earnings at $"
                               name="salary"
                               value={salary}
                               onChange={this.onValueChange}/>

                        <button type="submit"
                                className="btn btn-outline-light">Add
                        </button>
                    </form>
                    <span className={className}>Enter full name and salary</span>
                </div>
            )
        }

}

export default EmployeesAddForm;