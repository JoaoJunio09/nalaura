import { useState } from 'react'
import './App.css'

const answers = Array.from({ length: 8 }, (_, i) => i)
const noPositions = ['n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7']

function App() {
  const [rotation, setRotation] = useState(0)
  const [spinning, setSpinning] = useState(false)
  const [matched, setMatched] = useState(false)
  const [hiddenNos, setHiddenNos] = useState([])
  const [celebrating, setCelebrating] = useState(false)
  const [love, setLove] = useState(0)

  function spin() {
    if (spinning) return
    setMatched(false)
    setSpinning(true)
    setRotation((value) => value + 1800)
    window.setTimeout(() => { setSpinning(false); setMatched(true) }, 4200)
  }

  return (
    <div className="site-shell">
      <header className="header wrap">
        <a href="#inicio" className="brand">nalaura<span>♥</span></a>
        <span className="header-note">UMA HISTÓRIA ESCRITA NAS ESTRELAS <span>✦</span></span>
        <a className="header-link" href="#jogo">VEM BRINCAR <span>↗</span></a>
      </header>

      <main id="inicio">
        <section className="hero wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span>✦</span> EDIÇÃO ESPECIAL DO AMOR <span>✦</span></div>
            <h1>Era uma vez<br /><em>um match.</em></h1>
            <p>Entre olhares, coincidências e uma ajudinha do destino... nasceu uma história que merecia um site todinho dela.</p>
            <a href="#jogo" className="primary-button">Descobrir nosso destino <span>↗</span></a>
            <div className="hero-foot"><span className="tiny-heart">♥</span> BRITO + CARDENAS <span className="line" /> FEITOS PRA DAR MATCH</div>
          </div>
          <div className="hero-art" aria-label="Fotos de Brito e Cardenas">
            <span className="art-sparkle sparkle-one">✳</span><span className="art-sparkle sparkle-two">✦</span>
            <div className="photo photo-one"><img src="/brito.jpg" alt="Brito" /><span>o Brito ♡</span></div>
            <div className="photo photo-two"><img src="/cardenas.jpg" alt="Cardenas" /><span>a Cardenas ♡</span></div>
            <div className="heart-sticker">♥</div>
            <div className="round-stamp">UM ENCONTRO<br /><strong>do destino</strong><br />♡ ♡ ♡</div>
            <span className="handwritten art-caption">juntos é mais bonito!</span>
          </div>
        </section>

        <div className="ticker" aria-hidden="true"><div> NALAURA MATCH <span>✦</span> BRITO CARDENAS <span>♥</span> FILHA DA TATILINDA <span>✦</span> OLIVARZAO <span>♥</span> OLIVOPINTO <span>✦</span> NALAURA MATCH <span>♥</span> BRITO CARDENAS <span>✦</span></div></div>

        <section className="game-section" id="jogo">
          <div className="wrap game-grid">
            <div className="game-copy">
              <div className="eyebrow"><span>✦</span> DEIXA O DESTINO DECIDIR</div>
              <h2>Dá match<br /><em>ou não?</em></h2>
              <p>Uma pergunta, uma roleta e infinitas possibilidades... ou será que o coração já sabe a resposta?</p>
              <div className="little-note"><span>↗</span> vai, gira a roleta!</div>
              <div className="game-number"><b>01</b><span>O JOGO DO<br />AMORZINHO</span></div>
            </div>
            <div className="wheel-area">
              <div className="wheel-wrap">
                <div className="pointer" />
                <div className="wheel" style={{ transform: `rotate(${rotation}deg)` }}>
                  {answers.map((item) => <span key={item} className="wheel-label" style={{ transform: `translateX(-50%) rotate(${item * 45}deg)` }}><span>{item === 0 ? 'SIM' : 'NÃO'}</span></span>)}
                  <div className="wheel-center">♥</div>
                </div>
              </div>
              <button className="primary-button spin-button" onClick={spin} disabled={spinning}>{spinning ? 'O destino está pensando...' : 'Girar a roleta'} <span>↻</span></button>
              <div className="wheel-result" aria-live="polite">{matched ? '♥ Deu match! O destino já sabia. ♥' : 'O amor adora uma surpresa ♡'}</div>
            </div>
          </div>
        </section>

        <section className="question-section wrap" id="pergunta">
          <div className="question-intro"><div className="eyebrow"><span>✦</span> AGORA É COM VOCÊ</div><h2>Uma perguntinha<br /><em>do coração...</em></h2><p>Escolha com carinho. Algumas respostas podem ser um pouquinho... passageiras.</p></div>
          <div className="question-card">
            <div className="card-top"><span>CONSULTÓRIO DO AMOR</span><span>♡ Nº 02</span></div>
            <span className="card-star">✳</span>
            <h3>Mandar mensagem<br /><em>para o ex?</em></h3>
            <p>O coração quer saber 👀</p>
            <div className="answers" aria-label="Escolha uma resposta">
              {noPositions.map((position, index) => !hiddenNos.includes(index) && <button key={position} className={`no-button ${position}`} onClick={() => setHiddenNos([...hiddenNos, index])}>Não</button>)}
              <button className="yes-button" onClick={() => setCelebrating(true)}>Sim <span>♥</span></button>
            </div>
            <div className="card-bottom">CONFIE NO SEU CORAÇÃO <span>✦</span> ELE SABE DAS COISAS</div>
          </div>
        </section>

        <section className="love-strip"><div className="wrap love-inner"><div><div className="eyebrow">UM POUQUINHO MAIS DE AMOR</div><h2>Espalhe <em>carinho.</em></h2><p>Um coraçãozinho nunca é demais, né?</p></div><button className="love-button" onClick={() => setLove(love + 1)} aria-label="Enviar carinho">♥ <span>+ {love}</span></button></div></section>
      </main>
      <footer className="footer wrap"><a href="#inicio" className="brand">nalaura<span>♥</span></a><p>Feito com amor, risadas e um pouquinho de destino.</p><span>BRITO & CARDENAS · PARA SEMPRE UM MATCH ♡</span></footer>
      {celebrating && <div className="modal-backdrop" onClick={() => setCelebrating(false)}><div className="celebration" role="dialog" aria-modal="true" aria-labelledby="celebration-title" onClick={(event) => event.stopPropagation()}><button className="close" onClick={() => setCelebrating(false)} aria-label="Fechar">×</button><div className="confetti" aria-hidden="true">♥ ✦ ♡ ✧ ♥ ✦ ♡ ✧ ♥</div><div className="celebration-heart">♥</div><div className="eyebrow">A RESPOSTA CERTA EXISTE!</div><h2 id="celebration-title">Parabéns filha<br /><em>do Olivarzão!</em></h2><p>O amor venceu mais uma vez! ♡</p><button className="primary-button" onClick={() => setCelebrating(false)}>Amei! <span>♥</span></button></div></div>}
    </div>
  )
}

export default App
