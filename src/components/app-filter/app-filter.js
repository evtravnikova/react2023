import './app-filter.css'
const AppFilter = () => {
    return (
        <div className='btn-group'>
            <button
                className="btn btn-light"
                type="buttton">
                All employees
            </button>
            <button
                className="btn btn-outline-light"
                type="buttton">
                Employees on the payroll
            </button>
            <button
                className="btn btn-outline-light"
                type="buttton">
                Employees with salaries above $1000
            </button>
        </div>
    )
}


export default AppFilter