import React from 'react'

export default function Contact() {
  return (
    <>
    <div className='contact'>
    <form className='contactform'>
      <h2 >Need Help? Send Us Message</h2>
      <input type="text" className='inputtypes'  placeholder='Email' required />
      <input type="text" className='inputtypes'  placeholder='Subject' required />
      <textarea className='inputmessage'  placeholder='Message' required />
      <button type='submit'>Send</button>   
    </form>
    <div className='googlemap'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d231818.66793173237!2d66.91023457812501!3d24.789745199999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1skarachi%20bike%20showroom!5e0!3m2!1sen!2s!4v1732447174414!5m2!1sen!2s" width="100%" height="100%"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
    </>
  )
}
