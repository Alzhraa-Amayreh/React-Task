import protfolioStyle from './protfolio.module.css';
import Img1 from '../../assets/images/cabin.webp';
import Img2 from '../../assets/images/cake.webp';
import Img3 from '../../assets/images/circus.webp';
import Img4 from '../../assets/images/game.webp';
import Img5 from '../../assets/images/safe.webp';
import Img6 from '../../assets/images/submarine.webp';

function Protfolio() {
  return  <>

      <section className='protfolio py-5'>
        <div className='container'>
            <h2 className={`${protfolioStyle.color}  d-flex justify-content-center align-items-center fw-bold py-3`}>Portfolio</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">

            <div className="col">
              <div className="card">
                <img src={Img1} className="card-img-top" alt="cabin"/>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={Img2} className="card-img-top" alt="cake"/>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={Img3} className="card-img-top" alt="circus"/>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={Img4} className="card-img-top" alt="game"/>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={Img5} className="card-img-top" alt="safe"/>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={Img6} className="card-img-top" alt="submarine"/>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>

}

export default Protfolio;
