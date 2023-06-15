import { Link } from "react-router-dom";
import { useLogout } from "../context/hooks/useLogout";
import { useAuthContext } from "../context/hooks/useAuthContext";


const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }
    return (
        <header>
            <div className="container">
                <Link to='/'>
                    <h1>GASY-AUTO</h1>
                </Link> 
                <nav>
                    <Link to='/'>ACCUEIL</Link>
                {!user && (
                    <div>
                        <Link to='/login'>CONNEXION</Link>
                        <Link to='/signup'>S'INSCRIRE</Link>
                    </div>
                )}
                {user && (
                    <div> 
                        <Link to='/cours'>COURS</Link>
                        <Link to='/contacter-nous-ici'>CONTACT</Link>
                        <button onClick={handleClick}>Déconnecté</button>
                        <span> {user.email} </span>
                    </div>
                )}
                </nav>
            </div>
        </header>
      );
}
 
export default Navbar;