import headshot from '../assets/headshot.jpg'
import emailIcon from '../assets/email.svg'
import linkedInIcon from '../assets/linkedin.svg'
import './Info.css'

export default function Info() {
    return (
        <header className="header">
            <img src={headshot} alt="Profile of Marquise Davis" className="headshot" />

            <h1>Marquise Davis</h1>
            <p><span className='job-title'>Fullstack Developer</span></p>
            <p><span className='job-location'>North Carolina</span></p>

            <nav aria-label="Contact links">
                <ul className='contact-link-elements'>
                    <li>
                        <a href="mailto:codingmaniac227@gmail.com" aria-label="Email" className='email-button' target="_blank" rel="noopener noreferrer">
                            <img src={emailIcon} alt="" aria-hidden="true" className="icon" />
                            <span>Email</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/marquise-davis/" aria-label="LinkedIn" className='linkedin-button' target="_blank" rel="noopener noreferrer">
                            <img src={linkedInIcon} alt="" aria-hidden="true" className="icon" />
                            <span>LinkedIn</span>
                        </a>
                    </li>
                </ul>
            </nav>

        </header>
    )
}
