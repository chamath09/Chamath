import Link from "next/link";

import {FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaMedium, FaInstagram} from 'react-icons/fa'

const socials = [
    {icon: <FaGithub/>, path: 'https://github.com/chamath09'},
    {icon: <FaLinkedin/>, path: 'https://www.linkedin.com/in/chamath-upeka-615030251/'},
    {icon: <FaYoutube/>, path: 'https://www.youtube.com/@chamathupeka4650'},
    // {icon: <FaTwitter/>, path: ''},
    {icon: <FaMedium/>, path: 'https://medium.com/@chamathupeka'},
    {icon: <FaInstagram/>, path: 'https://www.instagram.com/chamath_upeka/'},
]

const Social = ({containerStyles, iconstyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return <Link key={index} href={item.path} className={iconstyles}>
                {item.icon}
            </Link>
        })}
    </div>
  )
}

export default Social