import { useContext } from 'react'
import UserContext from '../../context/user'

export default function Dashboard() {

    const user = useContext(UserContext)
    return (
        <>
           Social Dashboard for {user.username}!
        </>
    )
}