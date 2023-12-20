import './HomePage.css'
function HomePage() {
  return (
    <div className="home_page_container">
      <div className="container">
        <div className="imageSection">
          <img src="../public/photos/background_IMG_2253.JPG" alt="Ator" className="actorImage" />
        </div>
        <div className="textSection">
          <h1>Sami Saftli</h1>
          <p>Olá! Sou ator apaixonado pelos estudos das artes cênicas.</p>
          <p>Sou formado no CCPAC, escola profissionalizante, além de ter feito cursos livres de Máscara</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
