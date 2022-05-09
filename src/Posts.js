import React from 'react';

function Post(props) {

    const [heart, setHeart] = React.useState("heart-outline");
        
    function darLike() {
        setHeart("heart");
        if(heart === "heart") {
            setHeart("heart-outline");
        }
        
    }

    function TopoPost() {
        return (
            <div className="topo">
                <div className="usuario">
                    <img src={props.imagem} />
                    {props.usuario}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
        )
    }
    function ConteudoPost() {
        return (
            <div className="conteudo">
                <img src={props.conteudo} onClick={darLike}/>
            </div>
        )
    }
    function FundoPost() {
        return (
            <div className="fundo">
                    <div className="acoes">
                    <div>
                        <ion-icon name={heart} onClick={darLike}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                    </div>

                    <div className="curtidas">
                    <img src={props.curtidasFoto} />
                    <div className="texto">
                        Curtido por <strong>{props.curtidasUsuario}</strong> e <strong>outras {props.curtidasNum} pessoas</strong>
                    </div>
                    </div>
                </div>
        )
    }

    return (
        <div className="post">
            <TopoPost />
            <ConteudoPost />
            <FundoPost />
    </div>
    )
}

export default function Posts() {
    const objetoPosts = [
        {
            imagem:"assets/img/meowed.svg",
            usuario: "meowed",
            conteudo: "assets/img/gato-telefone.svg",
            curtidasFoto: "assets/img/respondeai.svg",
            curtidasUsuario: "respondeai",
            curtidasNum: 101.523
        },
        {
            imagem:"assets/img/barked.svg",
            usuario: "barked",
            conteudo: "assets/img/dog.svg",
            curtidasFoto: "assets/img/adorable_animals.svg",
            curtidasUsuario: "adorable_animals",
            curtidasNum: 99.159
        },
    ];

    return (
        <div className="posts">
               
                {objetoPosts.map((obj) => (<Post imagem={obj.imagem} usuario={obj.usuario} conteudo={obj.conteudo} curtidasFoto={obj.curtidasFoto} curtidasUsuario={obj.curtidasUsuario} curtidasNum={obj.curtidasNum} />))}

        </div>
    )
}
