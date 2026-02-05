import {
    FaFacebookF,
    FaWhatsapp,
    FaTiktok,
    FaYoutube,
    FaInstagram
} from "react-icons/fa";

export default function SocialIcons() {
    return (
        <div className="socials">
            <a href="https://www.facebook.com/magno.vargas.7" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
            </a>

            <a href="https://wa.me/59174373900" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
            </a>

            <a href="https://www.tiktok.com/@magno.vargas?lang=es-419" aria-label="TikTok">
                <FaTiktok />
            </a>

            <a href="https://www.youtube.com/" aria-label="YouTube">
                <FaYoutube />
            </a>

            <a href="https://www.instagram.com/" aria-label="Instagram">
                <FaInstagram />
            </a>
        </div>
    );
}