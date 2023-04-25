import './Header.css'
import Navbar from '../Navbar/Navbar';
function Header(props) {
    return (
        <>
<div className='title'>
         <h1> Tours App</h1>
         <Navbar/>
       
        </div>
        </>
    )
}

export default Header;