import {useState} from 'react'
import { Navigate } from 'react-router-dom'

function About(){
    const [user, setUser] = useState('mario')
    if(!user){
        return <Navigate to="/" replace={true} />
    }
    return (
        <div className="about">
            <h2>About us</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium blanditiis deleniti inventore. Harum facere recusandae ipsum doloribus similique excepturi mollitia alias hic rerum maiores accusamus, cupiditate, aut, soluta asperiores illum.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium blanditiis deleniti inventore. Harum facere recusandae ipsum doloribus similique excepturi mollitia alias hic rerum maiores accusamus, cupiditate, aut, soluta asperiores illum.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium blanditiis deleniti inventore. Harum facere recusandae ipsum doloribus similique excepturi mollitia alias hic rerum maiores accusamus, cupiditate, aut, soluta asperiores illum.</p>

            <button onClick={() => setUser(null)}>Logout</button>
        </div>
    )
}

export default About