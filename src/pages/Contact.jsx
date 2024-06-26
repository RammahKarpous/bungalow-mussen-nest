import Input from "../components/form-elements/Input"
import PageTemplate from "../components/templates/PageTemplate"
import emailjs from 'emailjs-com'
import { useState } from "react"

import { motion } from 'framer-motion';
import { defaultTransition } from './../components/animations/transitions';
import { fade } from './../components/animations/variants';

const Contact = () => {

    const [flash, setFlash] = useState(null)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4d2ek4b', 'template_4zipcfj', e.target, 'user_PakD96NOcOa7nvPQZG9nD')
            .then(() => {
                e.target.reset()
                setFlash(true)
            }, (error) => {
                console.log(error.text)
            });
    }

    return (
        <PageTemplate extraClassNames="max-w-4xl m-auto md:pl-12 mt-12 md:mt-0 mb-32">
            <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={fade}

                transition={defaultTransition}>
                    
                {flash && (
                    <div className="text-center border-green-100 border-2 p-2 bg-body absolute top-7 left-1/2 transform -translate-x-1/2 w-96 z-20">
                        <h4 className="font-bold text-brown-50 mt-2 mb-1">Uw bericht is verstuurd</h4>
                        <p className="font-bold text-brown-50 mt-0">U zult zo snel mogelijk een bericht ontvangen.</p>
        
                        <p className="button primary w-32 m-auto mt-1 mb-4 cursor-pointer" onClick={() => setFlash(null)}>Sluit</p>
                    </div>
                )}

                <h1>Contact ons</h1>

                <p className="mb-5 mt-5">Voor beschikbaarheid, prijsopgave en reservering, maak a.u.b. gebruik van de contact formulier hieronder of stuur ons een e-mail: <a href="mailto:info@mussen-nest.nl">info@mussen-nest.nl</a>, u krijgt direct antwoord.</p>

                <form onSubmit={sendEmail}>

                    <Input name="name" labelText="Voor -en achternaam" />

                    <div className="flex flex-col sm:gap-5 sm:flex-row">
                        <Input name="email" type="email" labelText="E-mail adres" />
                        <Input name="subject" labelText="Onderwerp" />
                    </div>

                    <Input type="textarea" name="comment" labelText="Uw bericht" />

                    <input type="submit" value="Verzend" className="button primary mt-3 cursor-pointer" />
                </form>
            </motion.div>
        </PageTemplate>
    )
}

export default Contact
