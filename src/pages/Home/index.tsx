import "./style.css"

export default function Home(){

    return (
        <main>

            <div className="inicio-resp">
                <img
                    className="logo-mobile"
                    src="img/Logo Preto D - IntegraDash.png"
                    alt="Logo Mobile"
                />
                <div className="boas-vindas">
                    <div className="bv">
                        <h1>Olá Usuário!</h1>
                        <p>Acesse aqui os principais conteúdos do seu sistema.</p>
                    </div>
                    <img
                        src="img/homem-acenando.png"
                        alt="Imagem de boas-vindas, homem acenando"
                    />
                </div>
                <div className="unidades">
                    <ul>
                        <li className="taubate">
                            <span>Unidade Taubaté</span>
                            <img
                                className="carro"
                                src="img/carro-vermelho.png"
                                alt="carro-vermelho"
                            />
                            <img src="img/icone-btn-user-info.png" alt="" />
                        </li>
                    </ul>
                </div>
                <div className="centro-p-linha">
                    <div className="plus">
                        <span>Estatística de projetos</span>
                        <img src="img/icone-plus.png" alt="Icone de adicionar mais" />
                    </div>
                    <ul>
                        <li>30 dias</li>
                        <li>90 dias</li>
                        <li>6 meses</li>
                        <li>12 meses</li>
                    </ul>
                </div>
                <div className="container-c slider">
                    {/* <div class="slider-input"> */}
                    <input className="grid-a" name="slide" type="radio" />
                    <input className="grid-b" name="slide" type="radio"  />
                    <input className="grid-c" name="slide" type="radio" />
                    <input className="grid-d" name="slide" type="radio" />
                    {/* </div> */}
                    <div className="carrossel slider-content">
                        <div className="info slider-item">
                            <div>
                                <span>Produção</span>
                                <img src="img/icone-porcentagem.png" alt="Icone de porcentagem" />
                            </div>
                            <span className="onibus">Ônibus</span>
                            <p>+ 500 mil uidades produzidas em Taubaté</p>
                        </div>
                        <div className="info icone-porcent slider-item">
                            <div>
                                <span>Alerta de desempenho:</span>
                                <img src="img/icone-q-porcentagem.png" alt="Icone de porcentagem" />
                            </div>
                            <p>Desempenho abaixo do esperado</p>
                        </div>
                        <div className="info slider-item">
                            <div>
                                <span>Produção</span>
                                <img src="img/icone-porcentagem.png" alt="Icone de porcentagem" />
                            </div>
                            <span className="onibus">Ônibus</span>
                            <p>+ 500 mil uidades produzidas em Taubaté</p>
                        </div>
                        <div className="info icone-porcent slider-item">
                            <div>
                                <span>Alerta de desempenho:</span>
                                <img src="img/icone-q-porcentagem.png" alt="Icone de porcentagem" />
                            </div>
                            <p>Desempenho abaixo do esperado</p>
                        </div>
                    </div>
                </div>
                <div className="tempo-real">
                    <div className="reloginho">
                        <span className="t-r">Alertas em Tempo Real</span>
                        <img src="img/reloginho.png" alt="Icone de Relógio" />
                    </div>
                    <div className="planta">
                        <span>Planta Curitiba</span>
                        <div className="imagens-planta">
                            <img src="img/carro-vermelho.png" alt="Imagem de um carro vermelho" />
                            <img src="img/img-painel-carro.png" alt="Imagem de Painel do carro" />
                        </div>
                    </div>
                    <div className="planta">
                        <span>Planta Taubaté</span>
                        <div className="imagens-planta">
                            <img src="img/carro-preto.png" alt="Imagem de um carro preto" />
                            <img src="img/img-painel-carro.png" alt="Imagem de Painel do carro" />
                        </div>
                    </div>
                    <div className="planta">
                        <span>Planta Anchieta</span>
                        <div className="imagens-planta">
                            <img src="img/carro-azul.png" alt="Imagem de um carro azul" />
                            <img src="img/img-painel-carro.png" alt="Imagem de Painel do carro" />
                        </div>
                    </div>
                </div>
                <div className="memoria">
                    <div className="i-mem">
                        <span>Gerenciamento de Memória</span>
                        <img src="img/icone-memoria.png" alt="Icone de Memória" />
                    </div>
                    <div className="mem">
                        <div className="grp-mem">
                            <div className="card-mem">
                                <img src="img/mem-10.png" alt="Porcentagem de memória" />
                                <span className="pc">10%</span>
                                <span>HD</span>
                            </div>
                            <div className="card-mem">
                                <img src="img/mem-55.png" alt="Porcentagem de memória" />
                                <span className="pc">55%</span>
                                <span className="hw">Hardware</span>
                            </div>
                        </div>
                        <div className="grp-mem">
                            <div className="card-mem">
                                <img src="img/mem-35.png" alt="Porcentagem de memória" />
                                <span className="pc">35%</span>
                                <span>ROM</span>
                            </div>
                            <div className="card-mem">
                                <img src="img/mem-60.png" alt="Porcentagem de memória" />
                                <span className="pc">60%</span>
                                <span>CPU</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="principal-home">
                {/* <div className="inicio-lateral">
                    <div className="lupa-alert">
                        <div className="lupa">
                            <input className="lupa-input-centro" type="search" />
                            <button className="btn-lupa-principal">
                                <img
                                    className="icone-lupa-principal"
                                    src="img/icone-lupa-principal.png"
                                    alt="Icone de Lupa na Seção Principal"
                                />
                            </button>
                        </div>
                        <button className="alert">
                            <img
                                src="img/icone-alert-home.png"
                                alt="Icone de Alerta da Tela Principal"
                            />
                        </button>
                    </div>
                    <div className="usuario">
                        <img
                            className="foto-user"
                            src="img/img-user.png"
                            alt="Foto do Usuário"
                        />
                        <span>Nome do Usuário</span>
                        <a href="#">
                            <img src="img/icone-btn-user-info.png" alt="btn-user-info" />
                        </a>
                    </div>
                </div> */}
                <div className="centro">
                    <div className="centro-p-linha">
                        <div className="plus">
                            <span>Estatística de projetos</span>
                            <img src="img/icone-plus.png" alt="Icone de adicionar mais" />
                        </div>
                        <ul>
                            <li>30 dias</li>
                            <li>90 dias</li>
                            <li>6 meses</li>
                            <li>12 meses</li>
                        </ul>
                    </div>
                </div>
                <div className="centro-lados">
                    <div className="lado-um">
                        <div className="planta">
                            <span>Planta Curitiba</span>
                            <div className="imagens-planta">
                                <img
                                    src="img/carro-vermelho.png"
                                    alt="Imagem de um carro vermelho"
                                />
                                <img
                                    src="img/img-painel-carro.png"
                                    alt="Imagem de Painel do carro"
                                />
                            </div>
                        </div>
                        <div className="planta">
                            <span>Planta Taubaté</span>
                            <div className="imagens-planta">
                                <img src="img/carro-preto.png" alt="Imagem de um carro preto" />
                                <img
                                    src="img/img-painel-carro.png"
                                    alt="Imagem de Painel do carro"
                                />
                            </div>
                        </div>
                        <div className="planta">
                            <span>Planta Anchieta</span>
                            <div className="imagens-planta">
                                <img src="img/carro-azul.png" alt="Imagem de um carro azul" />
                                <img
                                    src="img/img-painel-carro.png"
                                    alt="Imagem de Painel do carro"
                                />
                            </div>
                        </div>
                        <div className="graficos">
                            <div>
                                <div className="grafico">
                                    <span>Parada Total da Linha de Produção</span>
                                    <img
                                        className="grafico-img"
                                        src="img/grafico-linha.png"
                                        alt="Imagem de Gráfico Linha"
                                    />
                                </div>
                                <div className="grafico">
                                    <span>Principais erros - Anual</span>
                                    <img
                                        className="grafico-img"
                                        src="img/grafico-barras.png"
                                        alt="Imagem de Gráfico de Setores"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="grafico">
                                    <span>Principais erros - Mensal</span>
                                    <img
                                        className="grafico-img"
                                        src="img/grafico-setores.png"
                                        alt="Imagem de Gráfico de Setores"
                                    />
                                </div>
                                <div className="grafico">
                                    <img
                                        className="plus-add"
                                        src="img/icone-plus-add.png"
                                        alt="Icone para adicionar arquivos"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lado-dois">
                        <div className="infos">
                            <div className="infos-cards">
                                <div className="info">
                                    <div>
                                        <span>Produção</span>
                                        <img
                                            src="img/icone-porcentagem.png"
                                            alt="Icone de porcentagem"
                                        />
                                    </div>
                                    <span className="onibus">Ônibus</span>
                                    <p>+ 500 mil uidades produzidas em Taubaté</p>
                                </div>
                                <div className="info icone-porcent">
                                    <div>
                                        <span>Alerta de desempenho:</span>
                                        <img
                                            src="img/icone-q-porcentagem.png"
                                            alt="Icone de porcentagem"
                                        />
                                    </div>
                                    <p>Desempenho abaixo do esperado</p>
                                </div>
                            </div>
                            <div className="infos-cards">
                                <div className="info icone-alerta">
                                    <div>
                                        <span>Alerta de segurança:</span>
                                        <img src="img/icone-alerta.png" alt="Icone Alerta" />
                                    </div>
                                    <p>Sistema comprometido por uma ameaça de segurança</p>
                                </div>
                                <div className="info">
                                    <div>
                                        <span>Produção</span>
                                        <img
                                            src="img/icone-porcentagem.png"
                                            alt="Icone de porcentagem"
                                        />
                                    </div>
                                    <span className="onibus">Ônibus</span>
                                    <p>+ 500 mil uidades produzidas em Taubaté</p>
                                </div>
                            </div>
                            <img
                                className="grafico-central"
                                src="img/grafico-central.png"
                                alt="Imagem de Gráfico"
                            />
                        </div>
                    </div>
                </div>
            </section>


            </main>
    )

}