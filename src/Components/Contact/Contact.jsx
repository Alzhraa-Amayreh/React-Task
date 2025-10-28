import ContactStyle from './Contact.module.css'

function Contact(){


    return<>
    <section className={` py-5 `}>
        <div className="container">
        
        <h2 className={`${ContactStyle.textColor} fs-1 fw-bolder d-flex justify-content-center align-items-center`}>
            Contact Me
        </h2>
  <form className="mx-auto py-3" >
            <div className="form-floating mb-3">
              <input
                type="text"
                className={` form-control ${ContactStyle.underlineInput} ` }
                id="floatingName"
                placeholder="Full Name..."
              />
              <label htmlFor="floatingName">Full Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control "
                id="floatingEmail"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingEmail">Email address</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control "
                id="floatingPhone"
                placeholder="Phone Number"
              />
              <label htmlFor="floatingPhone">Phone Number</label>
            </div>

            <div className="form-floating mb-3">
              <textarea
                className="form-control "
                placeholder="Leave a comment here"
                id="floatingMessage"
                style={{ height: '100px' }}
              ></textarea>
              <label htmlFor="floatingMessage">Message</label>
            </div>

            <div className="d-flex justify-content-start">
              <button type="submit" className="btn btn-outline-primary btn-lg w-auto">
                Send Message
              </button>
            </div>
          </form>
          
        </div>
    </section>
    
    </>

}
export default Contact;