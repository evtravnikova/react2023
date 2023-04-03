import './app-info.css';


const AppInfo = ({increased, employees}) => {

    return (
        <div className="app-info">
            <h1>Accounting for employees at Allegro company</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>Will receive an award: {increased}</h2>
        </div>
    )
}

export default AppInfo