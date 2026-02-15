import { NavLink } from 'react-router-dom';
import './home.css'

function Home () {
    return (
        <div>
            <h1>Olá Eduardo!!!!!</h1>
            <nav>
                <NavLink to='/register' end>
                Registrar-se
                </NavLink>
            </nav>
        </div>
    );
}

export default Home;