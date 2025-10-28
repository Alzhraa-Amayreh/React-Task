import AboutStyle from './About.module.css'

function About(){


    return <>
    <section className={`${AboutStyle.About} py-5 `}>
        <div className="container">
       
        <h2 className=' d-flex justify-content-center align-items-center fw-bolder py-3 text-light fs-1'>About</h2>
     <div className="row d-flex justify-content-center align-items-center">
    <div className="col-6">
      <p className="text-light text-break fs-5">
       Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
      </p>
    </div>
    <div className='col-md-6 fs-5'>
     <p className='text-light text-break'>

        You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
     </p>
   

    </div>
    
  </div>
  <div className='d-flex justify-content-center'>
    
    <button type="button" className={`btn btn-lg btn-outline-light text-light fw-medium fs-3  w-auto mt-4  ${AboutStyle.customBtn} `} > Free Download!</button>
    </div>
        </div>

      

    </section>
   
    
    </>
}
export default About;