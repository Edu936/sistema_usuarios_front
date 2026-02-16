import { Link, Outlet } from 'react-router-dom';
import './home.css'

function Home () {
    return (
        <main>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to='/register'>Criar Usuário</Link>
                        </li>
                        <li>Editar Usuário</li>
                    </ul>
                </nav>
                <div className="search">
                    <input type="search" name="search_user" id="search_user" />
                </div>
            </header>
            <div className="content">
                <Outlet />
            </div>
        </main>
    );
}

export default Home;