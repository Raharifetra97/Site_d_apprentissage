import { NavLink, Outlet } from "react-router-dom";
import { useLogout } from "../context/hooks/useLogout";
import { useAuthContext } from "../context/hooks/useAuthContext";



export default function RootLayout() {

  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }
  return (
    <div>
        <header>
            <nav>
                <h1>E-LEARNING AUTO</h1>
                { user && (
                  <div>
                    <NavLink to='/'>Acceuil</NavLink> 
                    <NavLink to='/cours'>Cours</NavLink>
                    <NavLink to='/contacter-nous-ici'>Contact</NavLink>
                    <NavLink to='/login' onClick={handleClick}>Déconnexion</NavLink>
                    <span className="rounded border border-info shadow-lg"> {user.email} </span>
                  </div>
                )}
                { !user && (
                  <div>
                    <NavLink to='/signup'>S'inscrire</NavLink>
                    <NavLink to='/login'>Connexion</NavLink>
                  </div>
                )}
            </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}
