import FooterStyle from './Footer.module.css'


function Footer(){


    return<>
    <footer className={`${FooterStyle.footer} text-light py-5`}>
     <div className="container">
    <div className="row">
      <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
        <h5 className='fw-bolder text-light fs-2'>Location</h5>
        <p className='fw-bold'>2215 John Daniel DriveClark, MO 65243</p>

      </div>
      <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
        <h5 className='fw-bolder text-light fs-2'>Around the Web</h5>
         <div className='icons d-flex justify-content-center align-items-center gap-3'>
            <a href="#" class={`${FooterStyle.socialBtn}`}><i className="bi bi-facebook"></i></a>
            <a href="#" class={`${FooterStyle.socialBtn}`}> <i className="bi bi-linkedin"></i></a>
            <a href="#" class={`${FooterStyle.socialBtn}`}> <i className="bi bi-twitter"></i></a>
            <a href="#" class={`${FooterStyle.socialBtn}`}> <i className="bi bi-basket"></i></a>


         </div>

      </div>
     
      <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
        <h5 className='fw-bolder text-light fs-2'>About Freelancer</h5>
        <p className='fw-bold'>Freelance is a free to use, MIT licensed Bootstrap theme created by <span className={`${FooterStyle.link}`}>Start Bootstrap .</span></p>
      </div>
      </div>
    
      </div>
        
      
    </footer>
  <div className={`${FooterStyle.copyRights} d-flex flex-column justify-content-center py-5`}>
  <span className="d-flex justify-content-center align-items-center text-light">
    Copyright © Your Website 2023
  </span>
</div>

    
    </>
}
export default Footer;