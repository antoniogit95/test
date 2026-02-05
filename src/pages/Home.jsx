import Hero from '../components/Hero'
import Services from '../components/Services'
import ButtonWhatsApp from '../components/ButtonWhatsApp'
import "../index.css"
import DerechosReales from '../components/DerechosReales'
import FindUs from '../components/FindUs'

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <DerechosReales/>
            <FindUs/>
            <ButtonWhatsApp />
        </>
    )
}