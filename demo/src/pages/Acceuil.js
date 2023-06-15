import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../image/livre.png'
const Acceuil = () => {
    return ( 
            <div className="home">
                <h1>Tongasoa</h1>
                <p className='paraAccueil lead'> Miarahaba anao tongasoa eto amin'ny trano kala Gasy-Auto izay manome fampianarana ho anao mikasika ny tontolo ny code de la route. Sahirana ve ianao amin'ny fanomanana ny fanadinana izay ataonao amin'ny fazahoana ny permis, ny fisian'ity trano kala ity dia tombony be ho anao. Izahay dia vonona ny hanampy anao amin'ny fanomanana ny fanadianana izay ataonao azahoana ny permis de conduire. Ny manolotra ireo fampianarana ho anao dia mpampianatra efa za-draharaha sy efa matihanina amin'ny fampiofanana. Ny fampianarana izay atolotray dia maro isakarazana, izay ahafantaranao bebe kokoa ny fitsipika ny lalana, ireo panneaux de signalisation sy ny fomba fitondrana fiara mba ho lavitry ny loza. Misy ireo fanazavana an-tsoratra ary eo ihany koa ny fanazavana amin'ny alalan'ny video, ary isakin'ny lesona dia misy fampiarana kely izay tsy maintsy atao mba ahalalana ny fazahoanao ilay lesona. <br />
                Ny fampianarana izay atolotray dia nohezahinay natao tsotra mba ho mora amin'ny daholo be ny mandray izany. Ianao dia afaka mianatra amin'izay fotoana rehetra tianao ianarana, sy izay fomba rehetra mety aminao azahoanao izany. Aorian'ireo lesona rehetra dia misy adina izay tsy maintsy atao izay manampy be anao amin'ny fiatrehana ny fanadinana azahoana ny permis de conduire.  Ity trano kala ity dia natokana ho an'ireo izay vonona ahazo ny permis de conduire, ary ireo izay maniry ny ampitombo ny traikefa efa ananany. <br />
                Raha mahaliana anao ny fampianarna izay atolotray dia manasa anao hanokatra ny kaonty nao manokana mba afahanao misitraka ireo fampianarana maro isankarazany.
                </p>
                <img src={image} alt="livre" />
            </div>
     );
}
 
export default Acceuil;