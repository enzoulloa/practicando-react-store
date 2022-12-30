import { Link } from 'react-router-dom'
import '../styles/components/Header.css'

const Header = () => {
  return (
    <div className='Header'>
      <h2 className='Header-title' />
      <Link to='/'>Store</Link>
      <div className='Header-checkout'>
        <Link to='/checkout'>
          <i className='fas fa-shopping-basket fa-2x' />
        </Link>
      </div>
    </div>
  )
}

export default Header
