import feuxTricolore from '../image/feuxTricolore.JPG'
import { Link } from "react-router-dom";
const Leson = () => {
    return ( 
        <div className="lesson">
            <div className=' me-5'>
                <h1>CODE DE LA ROUTE</h1>
                <h3 id='tire1'> I. Famaritana ny CODE DE LA ROUTE </h3>
                <p className="lessonP1 lead"> NY "code de la route" dia fitambaran'ireo lamina sy fitsipika ampiarin'izay mpampiasa ny arabe mba hisoroana ny loza, mba tsy andaniana fotoana, mba tsy hanelingelenana ny hafa ary mba hampirindra tsara ny fifamohivoizana.</p>
                <h3> II. Signalisations routieres: </h3>
                <ul className="lessonLi1 lead">
                    <li> Police </li>
                    <li> Feux tricolores </li>
                    <li> Panneaux </li>
                    <li> Marquage au sol </li>
                </ul>
                <p className="lessonP2 lead"> Andeha hojerentsika tsirairay ny famaritana, ny asany sy ireo tokony ho fantatra rehetra mahakasika ireo signalisations routieres.</p>
                <h4 id='#titre2' className=""> POLISY </h4>
                <ul className="lessonLi2 lead">
                    <p> Ny asany : </p>
                    <ul>
                        <li>Manoro sy mampilaza ny mpampiasa ny lalan</li>
                        <li> Mandamina ny fifamohivoizana </li>
                        <li> Misava ny taratasin'ny fiara sy ny mpandeha </li>
                    </ul>
                    <p> Fihetsiky ny polisy </p>
                    <ul>
                        <li> Polisy hita miamboha na manatrika:</li>
                            <ol> Mijanona tanteraka </ol>
                        <li> Polisy hita miorirana : </li>
                            <ol> Mahazo mandeha </ol>
                        <li> Polisy manodikodina ny tanany havanana : </li>
                            <ol> Mandeha mafimafy </ol>
                        <li> Polisy mananganana ny tanany havanana : </li>
                            <ol> Mampitandrina fa hiainga na hijanona</ol>
                        <li> Polisy manangana ny tanany havanana ary ny tanany havia manondro any ankavanan'ny mpamily : </li>
                            <ol> Mijanona fa hisy fisavana </ol>
                        <li> Polisy mampiakatra sy mampidina ny tanany : </li>
                            <ol> Mandeha moramora </ol>
                    </ul>
                </ul>
                <h4 id='titre3'> NY JIRO TELO LOKO </h4>
                <h5 className='lead'> a- Famaritana : </h5>
                <p className='lead'> Izy dia fitaovana entina andrindrana sy andaminana ny fifamohivoizana. </p>
                <h5 className='lead'> b- Ny fomba firehitry ny jiro telo loko : </h5>
                <img className='w-5' src={feuxTricolore} alt="tricolore" />
                    <ul className='lead'>
                        <li> Jiro voalohany :</li>
                        <table>
                            <caption> Io no fitambaran'ny jiro telo loko voalohany. </caption>
                            <tr>
                                <td>MENA</td>
                                <td>3-5 minitra</td>
                                <td>Mijanona tanteraka</td>
                            </tr>
                            <tr>
                                <td>MAVO</td>
                                <td>3-5 minitra</td>
                                <td>Mandeha aingana na mijanona tanteraka</td>
                            </tr>
                            <tr>
                                <td>MAINTSO</td>
                                <td>3-5 minitra</td>
                                <td>Mahazo mandeha avy hatrany</td>
                            </tr>
                        </table>

                    </ul>
                <div className="lessonCarte lead">
                    <div className='card mx-2' style={{ width : 250}}>
                            <div className='card-body bg-secondary'>
                                <h5 className='card-title'> Tsindrio raha andeha amin'ny: </h5>
                                <p className='card-text text-black'> 
                                    <ul>
                                        <li> <a className='text-primary' href="#titre1"> Famaritana ny code de la route </a></li>
                                        <li> <a className='text-primary' href="#titre2"> Polisy </a></li>
                                        <li> <a className='text-primary' href="#titre3"> Ny jiro telo loko </a></li>
                                    </ul> 
                                </p>
                                <Link to="/contacter-nous-ici" className='btn btn-primary ms-3'> Fanontaniana </Link>
                            </div> className='text-primary'
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Leson;