import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div>
            <h2>404: Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>

            <p> Go back to <Link to="/">Homepage</Link>.</p>
        </div>
    )
}