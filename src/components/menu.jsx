import s from './menu.module.css'
import { Link } from 'react-router'

export const Menu = () => {
    return(
        <nav className={s.menu}>
          <Link to="/">Home</Link>
          <Link to="/charts">Gráficos</Link>
        </nav>
    )
}