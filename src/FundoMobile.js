const iconesMobile = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"];

function IconesMob(props) {
    return (
        <ion-icon name={props.icone}></ion-icon>
    )
}

export default function FundoMobile() {
    return (
        <div className="fundo-mobile">
            {iconesMobile.map((icon) => (<IconesMob icone={icon} />))}
        </div>
    )
}