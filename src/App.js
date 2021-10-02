import './App.css';

function App(){
    return (<div>
        <header className="header">
            <nav className="nav-container">
                <img className="nav-item-img" src="/images/logo.png"/>
                <ul><a className="inicio" className="nav-item" href="/index.html">Inicio</a></ul>
                <ul><a className="nav-item" href="/index.html">Contenidos</a></ul>
                <ul><a className="nav-item" href="/index.html">Creadorxs</a></ul>
                <ul><a className="nav-item" href="/index.html">TUMUBI</a></ul>
                <input className="nav-item-i" type="text" placeholder="Creador, Contenido, etc."></input>
                <i className="fas fa-search"></i>
            </nav>
        </header>

        <article>
            <div className="recom-container">
                <img src="/images/lotr.jpg" className="recom-img"/>
                <h2 className="recom-tittle" >El señor de los anillos</h2>
                <p className="recom-info">
                    2h 58min / Fantasía, Aventura <br/>
                    <b>Dirigida por:</b> Peter Jackson<br/>
                    <b>Guion:</b> Peter Jackson, Fran Walsh<br/>
                    <b>Reparto:</b> Elijah Wood, Sean Astin, Ian McKellen<br/>
                    <b>Título original</b> The Lord of the Rings: The Fellowship of the Ring<br/><br/>
                    <b>Sinopsis:</b> En la Tierra Media, el Señor Oscuro Sauron forjó los Grandes 
                    Anillos del Poder y creó uno con el poder de esclavizar a toda la Tierra 
                    Media. Frodo Bolsón es un hobbit al que su tío Bilbo hace portador del 
                    poderoso Anillo Único con la misión de destruirlo. Acompañado de sus amigos, 
                    Frodo emprende un viaje hacia Mordor, el único lugar donde el anillo 
                    puede ser destruido. Sin embargo, Sauron ordena la persecución del grupo 
                    para recuperar el anillo y acabar con la Tierra Media.
                </p>
                <button className="recom-button">Mirar</button>
            </div>
            <div className="perfiles-container">
                <h1 className="perfiles-tittle">CREADORXS DESTACADXS</h1>
                <div className="grid-container">
                    <a className="grid-item" href=""><img className="img" src="/images/perfil1.png"/></a>
                    <a className="grid-item" href=""><img className="img" src="/images/perfil2.png"/></a>
                    <a className="grid-item" href=""><img className="img" src="/images/perfil3.png"/></a>
                    <a className="grid-item" href=""><img className="img" src="/images/perfil4.png"/></a>
                </div>
            </div>
        </article>

        <footer>
            <div className="footer-container">
                <h3>TUMUBI®</h3>
                <a className="redes" href="https://www.facebook.com/">Facebook</a>
                <a className="redes" href="https://www.Instagram.com/">Instragram</a>
                <a className="redes" href="https://www.Twitter.com/">Twitter</a>
                <a className="redes" href="https://www.Twitch.com/">Twitch</a>
            </div>
        </footer>
    </div>);
}

export default App;