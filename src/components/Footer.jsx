import instagramIcon from '../assets/instagram.svg'
import githubIcon  from '../assets/github.svg'
import './Footer.css'

export default function Footer() {
    return (
        <>
            <footer>

                <ul className='footer-icon-holder'>
                    <li className='footer-icon-element'>
                        <a href="https://www.instagram.com/fullstackdemon/" aria-label='Instagram' target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt='' aria-hidden="true" className='icon' />
                        </a>
                    </li>
                    <li className='footer-icon-element'>
                        <a href="https://github.com/codingmaniac227" aria-label='Github' target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt='' aria-hidden="true" className='icon' />
                        </a>
                    </li>
                </ul>

            </footer>
        </>
    )
}