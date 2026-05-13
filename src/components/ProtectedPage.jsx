import { Navigate } from "react-router-dom"

function ProtectedPage({children}) {
    const token = localStorage.getItem('token');
    if(!token){
        return <Navigate to='/login' />
    }
  return (
    <div className="">
      {children}
    </div>
  )
}

export default ProtectedPage