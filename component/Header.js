import './Header.css';
import quote from '../assets/getquote.png'
import logo from '../assets/logo.png'
import fb from '../assets/fbicon.png'
import tw from '../assets/tweeter.png'
import li from '../assets/linkedin.png'
import yt from '../assets/youtube.png'
import ig from '../assets/instagram.png'
import provide from '../assets/provide.png'
function Head() {
    return (
        <div>
         <div className='nav1'>
          <div class="logo" >
          <img  src={logo} alt=''></img>
          </div>
          <div className='about home'>
               <p>HOME</p>
            </div>
              <div className='about '>
               <select classname="aboutus sel">
                <option> <p>ABOUT US</p></option>
            </select>
              </div>
              <div className='about'>
               <p>PORTFOLIO</p>
              </div>
              <div className='about'>
              <select classname="aboutus sel">
                <option> <p>SERVICES</p></option>
            </select>
              </div>
              <div className='about'>
               <p>BLOG</p>
              </div>
              <div className='about'>
               <p>CONTACT US</p>
              </div>
              <div className='getquote'>
            <img className='get' src={quote} alt=''></img>
            </div>
             <div className='fb'>
             <img className=' fblogo' src={fb} alt=''></img>
             </div>
             <div className='tweeter'>
             <img className=' tlogo' src={tw} alt=''></img>
             </div>
             <div className='linkedin'>
             <img className=' lilogo' src={li} alt=''></img>
             </div>
             <div className='youtube'>
             <img className=' ytlogo' src={yt} alt=''></img>
             </div>
             <div className='ig'>
             <img className='iglogo' src={ig} alt=''></img>
             </div>
         </div>
         <div className='nav2'>   
             <div className='col1'>
              <div className='prov'>
              <img className='provide' src={provide} alt=''></img>
              </div>
              <div classname='grow'>
                <p> Grow your Business With Us Best Business Solutions</p>
              </div>
             </div>
         </div>
        </div>
        );
}

export default Head ;