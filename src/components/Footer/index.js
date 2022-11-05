import {IconContext} from "react-icons";
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {FaRegEnvelope} from 'react-icons/fa';


function Footer() {

    return (
<div className='i-cons my-1'>
    <IconContext.Provider value={{color: 'lightblue', size: 50}}>
        <a href="https://github.com/AshleyNicole1319"  target="_blank">
    <FaGithub /></a>
    <a href="https://www.linkedin.com/in/ashley-warford8245" target="_blank">
    <FaLinkedin />
    </a>
    <a href="mailto:a-warford96@comcast.net">
    <FaRegEnvelope />
    </a>
    </IconContext.Provider>
</div>
    )
}


export default Footer;