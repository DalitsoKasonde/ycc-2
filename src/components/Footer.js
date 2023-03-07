import { BsFacebook } from 'react-icons/bs';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'

function Footer() {
  return (
    <div className='footer'>
      <div>
        Follow us <i> <BsFacebook /> </i>
      </div> <br />
      <div>
        Call Us <i><AiOutlinePhone /></i> +260967758645 or 0979779041
      </div> <br />
      <div>
        Email Us <i>  <AiOutlineMail /> </i> workers@yinucustomcreatives.com
      </div> 
      <p>&copy; 2023</p>
    </div>
  )
}

export default Footer