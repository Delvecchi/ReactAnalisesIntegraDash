import Logo from "../../assets/img/fundo_escuro_logo_integradash.png"
import HomeAzul from "../../assets/img/iconHomeBlue.svg"
import HomeBranco from "../../assets/img/branco_home_icone.png"
import AnalisesAzul from "../../assets/img/iconAnalisesBlue.svg"
import AnalisesBranco from "../../assets/img/branco_ analise_icone.png"
import EstrategiaAzul from "../../assets/img/iconEstratégiaBlue.svg"
import EstrategiaBranco from "../../assets/img/branco_estrategia_icone.png"
import FavoritosAzul from "../../assets/img/iconFavoritosBlue.svg"
import FavoritosBranco from "../../assets/img/branco_favoritos_icone.png"
import AlertasAzul from "../../assets/img/iconAlertasBlue.svg"
import AlertasBranco from "../../assets/img/branco_alerta_icone.png"
import ConfiguracoesAzul from "../../assets/img/iconConfiguracoesBlue.svg"
import ConfiguracoesBranco from "../../assets/img/branco_configuracao_icone.png"
import SairAzul from "../../assets/img/iconSairBlue.svg"
import SairBranco from "../../assets/img/branco_sair_icone.png"

import "./style.css"
// import { Link } from "react-router-dom"

export default function MenuLateral() {

    const list: NodeListOf<Element> = document.querySelectorAll('.list');
    function activeLink(this: Element) {
        list.forEach((item: Element) =>
            item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item: Element) =>
        item.addEventListener('onClick', activeLink));

    // const list = document.querySelectorAll('.list');
    //     function activeLink() {
    //         list.forEach((item) =>
    //             item.classList.remove('active'));
    //         this.classList.add('active');
    //     }
    //     list.forEach((item) =>
    //         item.addEventListener('click', activeLink));

    return (
        <aside className="navigation">
            <img src={Logo} className="logo" alt="" />
            <ul className="barra_navegacao">
                <section className="navegacao_peginas">
                    <li className="list active">
                        <a href="#">
                            <span className="icon">
                                <img src={HomeAzul} alt="" />
                            </span>
                            <span className="icon1">
                                <img src={HomeBranco} alt="" />
                            </span>
                            <span className="title ">Home</span>
                        </a>
                    </li>
                    <li className="list ">
                        <a href="#">
                            <span className="icon">
                                <img src={AnalisesAzul} alt="" />
                            </span>
                            <span className="icon1">
                                <img src={AnalisesBranco} alt="" />
                            </span>
                            <span className="title">Analises</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="icon">
                                <img src={EstrategiaAzul} alt="" />
                            </span>
                            <span className="icon1">
                                <img src={EstrategiaBranco} alt="" />
                            </span>
                            <span className="title">Estratégias</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="icon">
                                <img src={FavoritosAzul} alt="" />
                            </span>
                            <span className="icon1">
                                <img src={FavoritosBranco} alt="" />
                            </span>
                            <span className="title">Favoritos</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="icon">
                                <img src={AlertasAzul} alt="" />
                            </span>
                            <span className="icon1">
                                <img src={AlertasBranco} alt="" />
                            </span>
                            <span className="title">Alertas</span>
                        </a>
                    </li>
                </section>
                <section className="configuracoes_sair">
                    <li className="list">
                        <a href="#">
                            <span className="icon">
                                <img src={ConfiguracoesAzul} alt="" />
                            </span>
                            <span className="icon1">
                                <img src={ConfiguracoesBranco} alt="" />
                            </span>
                            <span className="title">Configurações</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="icon">
                                <img src={SairAzul} alt="" />
                            </span>
                            <span className="icon1">
                                <img src={SairBranco} alt="" />
                            </span>
                            <span className="title">Sair</span>
                        </a>
                    </li>
                </section>
            </ul>
        </aside>

    )
}
