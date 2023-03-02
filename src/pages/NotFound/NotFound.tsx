import { Link } from "react-router-dom"

const NotFound = () => {
    return(
        <>
            <h2>Page not found</h2>
            <p>Voler al <Link to='/'>Home</Link></p>
        </>
    )
}

export default NotFound