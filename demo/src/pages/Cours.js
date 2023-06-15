import 'bootstrap/dist/css/bootstrap.min.css';
import monImage from '../image/jaune.jpg'
import voiture from '../image/images.jpg'
import panneaux from '../image/panneaux.jpg'
import marquage from '../image/marquage.JPG'
import { useEffect, useState} from 'react'


const Cours = () => {
    const [ courses, setCourses] = useState(null)

    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch('http://localhost:4000/api/courses/643e74750a6af9f13c820ec8')
            const json = await response.json()

            if (response.ok) {
                setCourses(json)
            }
        } 

        fetchCourses()
    }, [])

    const btAffichage = document.querySelector("#affichage")
    const handleClick = () => {
        btAffichage.style.display = "block"
    }

    return ( 
        <div className='cours'>
            <h1 className='titreCours'> Tongasoa eto amin'ny pejy ny fampianarana </h1>
            <img src={monImage} alt="" />
            <div className='paraCours'>
                <p> Misaotra anao nametraka ny fitokisanao aminay. Manasa anao hanaraka ireo fampianarana isankarazany izay atolotray eto.</p>
                <p> Tsindrio ity raha hanaraka ny fampianarana ianao.</p>
                <div className='butCours'>
                    <button onClick={handleClick}> Ireo karazana cours isankarazany </button>
                </div>
               <div id='affichage' style={{
                display: 'none'
               }}>
                 <div className='container mt-4'>
                    <div className='row'>
                        <div className='card mx-2' style={{ width : 200}}>
                            <img src={voiture} className='card-im-top' alt="" />
                            <div className='card-body bg-secondary'>
                                <h5 className='card-title'> Code de la route </h5>
                                <p className='card-text text-black'> Ny code de la route dia fitambaran'ireo lamina... </p>
                                <a href="/cours/leson" className='btn btn-primary ms-3'> En savoir plus </a>
                            </div>
                        </div>
                        <div className='card mx-2' style={{ width : 200}}>
                            <img src={panneaux} className='card-im-top' alt="" />
                            <div className='card-body bg-secondary mt-5'>
                                <h5 className='card-title'> Ny TAKELABY (Panneaux) </h5>
                                <p className='card-text text-black'> Misy karazany telo ny takela-by arakaraka... </p>
                                <a href="#" className='btn btn-primary ms-3'> En savoir plus </a>
                            </div>
                        </div>
                        <div className='card mx-2' style={{ width : 200}}>
                            <img src={marquage} className='card-im-top' alt="" />
                            <div className='card-body bg-secondary'>
                                <h5 className='card-title'> Ny MARQUAGE AU SOL </h5>
                                <p className='card-text text-black'> Ny marquage au sol dia izay rehetra mandamina ny fif... </p>
                                <a href="#" className='btn btn-primary ms-3'> En savoir plus </a>
                            </div>
                        </div>
                    </div>
                 </div>
               </div>
            </div>
        </div>
     );
}
 
export default Cours;