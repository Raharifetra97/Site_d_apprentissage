import {useState} from 'react';
import { useSignup} from '../context/hooks/useSignup'


const Signup = () => {
    const [nom, setNom] =useState('');
    const [prenom, setPrenom] = useState('');
    const [phone, setPhone] = useState('');
    const [profession, setProfession] = useState('');   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signup, error, isLoading} = useSignup()

    /*Enregistrement des données d'utilisateurs dans le localStorage
     const handleNameChange = event =>{
        setName(event.target.value);
    }; */
    const handleSubmit = async (e) => {
        e.preventDefault();
        //Envoi des données d'inscription au serveur

        await signup(nom, prenom, phone, profession, email, password)
        //Réinitialisation des champs de formulaire
        /* setNom('');
        setPrenom('');
        setPhone('');
        setProfession('');
        setEmail('');
        setPassword(''); */
    };
    return ( 
                <form className="signup" onSubmit={handleSubmit}>
                        <h2 className="h1Signup">Veuillez vous inscrire</h2>
                        <div>                        
                            <input type="text" value={nom} onChange={(e)=> setNom(e.target.value)} className="form-control" placeholder="Nom :"/>
                        </div>
                        <div>
                            <input type="text" value={prenom} onChange={(e)=> setPrenom(e.target.value)} className="form-control" placeholder="Prénom :"/>
                        </div>
                            <div>
                            <input type="tel" value={phone} onChange={(e)=> setPhone(e.target.value)} className="form-control" placeholder="Téléphone :"/>
                        </div>
                        <div>
                            <input type="text" value={profession} onChange={(e)=> setProfession(e.target.value)} className="form-control" placeholder="Profession :"/>
                        </div>
                        <div>
                            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control" placeholder="E-mail :"/>
                        </div>
                        <div>
                            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="form-control" placeholder="Mots de passe :"/>
                        </div>
                        <div>
                            <button disabled={isLoading} type="submit">
                            S'inscrire
                            </button>
                            {error && <div className='error'> {error} </div>}
                        </div>
                </form>
     );
}
 
export default Signup;