import { useLoaderData, Link } from "react-router-dom"

export default function Careers() {
    const careers = useLoaderData()
    return (
        <div className="careers">
            {careers.map(career => (
                <Link to={career.id.toString()} key={career.id}>
                    <p>{career.tittle}</p>
                    <p>Based in {career.location}</p>
                </Link>
            ))}
        </div>
    )
}

//loader function
export const careersLoader = async () => {
    const res = await fetch('http://localhost:4000/careers')

    if(!res.ok) {
        throw Error("Failed to fetch careers")
    }

    return res.json()
}
