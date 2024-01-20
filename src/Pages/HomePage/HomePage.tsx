import './HomePage.css'

export const HomePage = () => {
  return (
    <div className="home_page_container">
      <div className="container">
        <div className="imageSection">
          <img src="./assets/photos/background_IMG_2253.JPG" alt="Ator" className="actorImage" />
        </div>
        <div className="textSection">
          <h1>Sami Saftli</h1>
          <br/><br/>          
          <p>Olá! Sou ator apaixonado pelos estudos das artes cênicas.</p>
          <br/>
          <p>Sou formado no CCPAC, escola profissionalizante, além de ter feito cursos livres de máscara, movimentação, improvisação e interpretação.</p>
          <br/>
          <p>Seja bem vindo à minha página, espero que eu seja o perfil que você precisa!</p>
        </div>
      </div>
    </div>
  )
}
