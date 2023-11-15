import React, {useState} from 'react'
import {useForm} from "react-hook-form"
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset
  } = useForm()

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onSubmit = async (data) => {
    setButtonDisabled(true);
    console.log(data);

    const templateParams = {
      from_name: data.name,
      email: data.email,
      message: data.message
    };

    try {
      await emailjs.send('service_9qq16vg', 'template_r4obf0i', templateParams, 'ZN_b_0NlTdn4on4mt')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
          console.log('FAILED...', err);
        });
    } catch (e) {
      console.log(e)
    } finally {
      toast('Thank you for your message!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      reset();
    }

  }

  return (
    <section className="contact-form">
      <div className="container-fluid">
        <div className="row">
          <div className="contact-inputs cpanel col-md-6">
            <div className="form-block col-md-9 col-xs-12">
              <h3>Tell Us About Your Project</h3>
              <form role="form" name="contactForm" onSubmit={handleSubmit(onSubmit)} className="">
                <div className="form-group">
                  <input type="text" name="name" id="name" {...register("name", {required: true})}
                         className="form-control" placeholder="Your name"/>
                </div>
                <div className="form-group">
                  <input type="email" name="email" id="email" {...register("email", {required: true})}
                         className="form-control" placeholder="Your email address"
                         required/>
                </div>
                <div className="form-group">
                <textarea name="message" id="message" {...register("message", {required: true})}
                          className="form-control"
                          placeholder="Tell us more about your project" maxLength="2000"></textarea>
                </div>
                <div className="button-group">
                  <button type="submit" className="btn action-btn red"
                          aria-label="Submit" disabled={buttonDisabled}>
                    <span className="spinner btn-loading__icon"></span>
                    <span className="btn-title btn-loading__text">Send</span>
                  </button>
                  <ToastContainer/>
                </div>
              </form>
            </div>
          </div>


          <div className="contact-info cpanel col-md-6 col-centered">
            <div className="info-block">
              <h3>Next Steps...</h3>
              <ol className="counter-list">
                <li>We'll contact you soon with more information. In the meantime, see what we're up to on our <a
                  href="/src/templates/blog-homepage">blog</a>.
                </li>
                <li>If you're inquiring about our open positions, you can find that information on our <a
                  href="/careers">careers</a> page.
                </li>
                <li>We look forward to working with you!</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default ContactForm
