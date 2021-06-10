import Input from "../components/form-elements/Input"
import PageTemplate from "../components/templates/PageTemplate"

const Contact = () => {
    return (
        <PageTemplate extraClassNames="max-w-4xl m-auto md:pl-12 mt-12 md:mt-0">
            <h1>Contact ons</h1>

            <form>
                <Input name="name" labelText="Voor -en achternaam" />

                <div className="flex flex-col sm:gap-5 sm:flex-row">
                    <Input name="email" type="email" labelText="E-mail adres" />
                    <Input name="subject" labelText="Onderwerp" />
                </div>

                <Input type="textarea" name="comment" labelText="Uw bericht" />

                <input type="submit" value="Verzeld" className="button primary mt-3" />
            </form>

            <div className="mt-16">
                <p className="text-largeBodyText font-bold">E-mail adres</p>
                <a className="mt-2 block" href="mailto:info@mussen-nest.nl">info@mussen-nest.nl</a>
            </div>
        </PageTemplate>
    )
}

export default Contact
