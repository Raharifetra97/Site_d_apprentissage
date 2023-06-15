import { useState } from "react";
import { useAuthContext } from "./useAuthContext"

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIdLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (nom, prenom, phone, profession, email, password) => {
        setIdLoading(true)
        setError(null)

        const response = await fetch('http://localhost:4000/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({nom, prenom, phone, profession, email, password})
        })
        const json = await response.json()

        if (!response.ok) {
            setIdLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // Save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update the auth context
            dispatch({type: 'LOGIN', payload: json})

            setIdLoading(false)
        }
    }

    return { signup, isLoading, error}
}