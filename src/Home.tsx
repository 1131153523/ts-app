import * as React from 'react'
import { Link } from 'react-router-dom'
interface IHomeProps {
    name?: string
}
const Home: React.SFC<IHomeProps> = ({children}) => {
    return (
        <div>
            home
            <br/>
            <Link to="/about">about</Link>
        </div>
    )
}
export default Home