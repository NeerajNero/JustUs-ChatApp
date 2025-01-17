import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const {setAuthUser} = useAuthContext()

  const login = async(userName,password) => {
    const success = handleInputError(userName,password)
    if(!success){
        return
    }
    setLoading(true)
    try{
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({userName,password})
        })
        const data = await response.json()
        if(data.error){
            throw new Error(data.error)
        }
        localStorage.setItem('chat-user', JSON.stringify(data))
        setAuthUser(data)
    }catch(error){
        toast.error(error.message)
    }finally{
        setLoading(false)
    }
  }
  return {loading, login}
}

export default useLogin

const handleInputError = (userName, password) => {
    if(!userName || !password){
        toast.error("Please fill in all fields")
        return false
    }
    return true
}