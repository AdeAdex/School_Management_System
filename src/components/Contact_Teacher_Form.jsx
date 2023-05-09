import React from 'react'

const Contact_Teacher_Form = () => {
  return (
    <>
        <div className="shadow w-100 p-3">
        <form className='d-flex flex-column gap-4'>
          {/* <input type="text" required="" placeholder="NAME" className="text-capitalize" /> */}
          <input type="email" className='w-100 border-0 py-2 px-3' id="email" name="email" required="" placeholder="EMAIL" autoComplete="off"style={{backgroundColor: '#F9F9F9'}} />
          <textarea id="message" name="message" required="" placeholder="MESSAGE" className="text-capitalize border-0  py-2 px-3" style={{backgroundColor: '#F9F9F9', height: '8em', resize: 'none'}}></textarea>
          <button type="submit" className='btn btn-sm py-2 skyblue col-3 text-white text-uppercase'>send</button>
        </form>
      </div>
    </>
  )
}

export default Contact_Teacher_Form