import instagramIcon from '../assets/instagram.svg'
import githubIcon  from '../assets/github.svg'
import './Footer.css'

export default function Footer() {
    return (
        <>
            <footer>

                <ul>
                    <li>
                        <a href="https://www.instagram.com/fullstackdemon/" aria-label='Instagram'>
                            <img src={instagramIcon} alt='' aria-hidden="true" className='icon' />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/codingmaniac227" aria-label='Github'>
                            <img src={githubIcon} alt='' aria-hidden="true" className='icon' />
                        </a>
                    </li>
                </ul>

            </footer>
        </>
    )
}