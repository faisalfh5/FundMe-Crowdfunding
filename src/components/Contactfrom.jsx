import React from 'react';
import "../App.css";
import { formdata } from '../constants';
import "../cssfiles/responsivefront.css";
const Contactfrom = () => {
  return (
    <>
    <section id="contact">
        <div className="container">
        <div className="form-par">
            <h2>Get in touch with us!</h2>
            <form action="#">
                {
                    formdata.map((data)=>(
                        <input type={data.type} placeholder={data.placeholder} className={data.classname} required/>
                    ))
                }
                <button className='submit-btn'>Submit </button>
            </form>
        </div>
        
        </div>
    </section>
    </>
  )
}

export default Contactfrom;