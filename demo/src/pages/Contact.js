const Contact = () => {
    return ( 

        <div className="contactDiv">
            <form className="contact">
                <h3>Contacter nous ici</h3>
                <div>
                    <label className="ms-1" htmlFor="">Votre address email</label>
                    <input type="email" placeholder="example@gmail.com" />
                </div>
                <div>
                    <label className="ms-1" htmlFor="">Votre message</label>
                    <input type="text" placeholder="Ecrivez vous ici" />
                </div>
                <div>
                    <button>Envoyer</button>
                </div>
            </form>
        </div>
     );
}
 
export default Contact;