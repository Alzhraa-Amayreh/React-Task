import HeroStyle from './hero.module.css'
import heroImg from '../../assets/images/Hero.webp'


function Hero(){



    return<>
    
     <section className={`${HeroStyle.Hero}`}>
      <div className={`${HeroStyle.img}  d-flex flex-column g-5`}>
      <img src={heroImg} className={`${HeroStyle.img}`}/>
        
          <div className={`HeroContent `}>
            <h1 className='text-light mt-5 fs-1 fw-bolder'>Start Bootstrap</h1>
         
               <p className='text-light fw-normal'>Graphic Artist - Web Designer - Illustrator</p>
         </div>
          </div>
    </section>
    

    </>
}
export default Hero;