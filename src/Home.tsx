import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
interface IHomeProps {
    name?: string
}
const Home: React.SFC<IHomeProps> = ({children}) => {
    return (
        <div>
            <Button type="primary">123456</Button>
            <br/>
            <Link to="/about">about</Link>
        </div>
    )
}
export default Home