const icones = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];

function IconesTopo(props) {
    return (
        <ion-icon name={props.icone}></ion-icon>
    )
}

export default function Topo() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div className="separador"></div>
                    <img src="assets/img/logo.png" />
                </div>

                <div className="logo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>

                <div className="instagram-mobile">
                    <img src="assets/img/logo.png" />
                </div>
                
                <div className="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>
                
                <div className="icones">
                    {icones.map((icon) => (<IconesTopo icone={icon} />))}
                </div>

                <div className="icones-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}