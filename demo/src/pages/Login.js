import { useState } from "react";
import { useLogin} from '../context/hooks/useLogin'
import { useAuthContext } from "../context/hooks/useAuthContext";

const  Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()
    const { user } = useAuthContext()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }
    return ( 
        <div>
            { !user && ( 
                    <form className="login" onSubmit={handleSubmit}> 
                        <h2 className="">Veuillez vous connecter</h2>
                        <div>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}  placeholder="E-mail :"/>
                        </div>
                        <div>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Mots de passe :"/>
                        </div>
                        <div>
                            <button disabled={isLoading}> Connexion </button>
                        </div>
                        {error && <div className="logError"> {error} </div>}
                    </form>  
             )}
        </div>
     );
}
 
export default Login;