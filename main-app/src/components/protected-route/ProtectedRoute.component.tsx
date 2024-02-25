import { Navigate } from "react-router-dom"
import { useUserContext } from '../../context/UserContext'

const ProtectedRoute = ({ children }) => {
    const { user } = useUserContext()
    if (!user) {
        return <Navigate to='/login' />
    } else {
        return children
    }
}

export default ProtectedRoute