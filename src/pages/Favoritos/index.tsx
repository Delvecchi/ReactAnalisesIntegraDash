import './style.css'

import botao_add_mobile from '../../assets/img/botao_add_mobile.png'
import botao_add_desktop from '../../assets/img/botao_add.png'


function Favoritos() {


  return (
    <>

      <main>
        <section className="pagina_desktop">
          <div className="primeira_secao_menu_esquerdo">
            <div className="corpo_do_site_meio">
              <p className="edicao_fav_meio_pag">Favoritos</p>
              <p className="edicao_itens_salvos_meio_pag">Itens salvos</p>
              <a href="">
                <img src= {botao_add_desktop}
                  className="botao_add_desktop"
                  alt="botão adicionar favoritos"
                />
              </a>
            </div>
            <div className="corpo_pag_usuario"></div>
          </div>
        </section>
        {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
        {/*                    MOBILE                   */}
        {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
        <section className="pagina_mobile">
            <div className="pagina_mobile_fav">
              <div className="segunda_secao_texto_mobile_e_caixa">
                <p className="texto_favoritos_mobile container_mobile ">Favoritos</p>
                <p className="Salve_favoritos_mobile formatacao_textos_mobile container_mobile">
                  Salve aqui suas preferências
                </p>
                <a href="#">
                  <img src={botao_add_mobile}
                    className="botao_add_mobile container_mobile"
                    alt="botão adicionar favoritos"
                  />
                </a>
                <div className="teste3">
                  <p className="Vc_ainda_favoritos_mobile formatacao_textos_mobile container_mobile">
                    Você ainda não possui nada salvo aqui.
                  </p>
                  {/* <p class="teste2">tttt</p> */}
                </div>
                <div className="teste">
                  <p className="clique_no_botao_mobile formatacao_textos_mobile container_mobile">
                    Clique no botão + para adicionar suas preferências.
                  </p>
                  {/* <p class="teste2">tttt</p> */}
                </div>
              </div>
            </div>
        </section>
      </main>


    </>
  )
}

export default Favoritos