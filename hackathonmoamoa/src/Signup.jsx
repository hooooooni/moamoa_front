import React from 'react'
import { useNavigate } from 'react-router-dom'


function Signup() {
    const navigate = useNavigate();

    const goToApp = () => {
        navigate("/App/MainPage");
    }

  return (
    <div>
        <button onClick={goToApp}>회원가입</button>
    </div>
  )
}

export default Signup