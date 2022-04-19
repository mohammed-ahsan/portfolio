import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0d2614] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/83d9b094-f5ba-4f4a-8449-a70894f1bfa4" className='flex flex-col md:flex-row max-w-[700px] pt-7 w-full '>
            <div className='md:px-5 flex flex-col  md:mt-[16%] md:w-[50%]'>
                <p className='text-4xl font-bold inline border-b-4 border-[#a5946c] text-gray-300'>Contact</p>
                <p className='text-gray-300 text-xl select-text py-4'>Submit the form below or shoot me an email - earth.ahsan@gmail.com</p>
            </div>
            <div className='flex flex-col  md:w-[50%] shadow-md shadow-[#a5946c] border-2 border-[#a5946c] rounded p-2 '><input className='bg-[#a5946c29] focus:outline-none focus:border focus:border-[#a5946c] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#a5946c29] focus:outline-none focus:border focus:border-[#a5946c] ' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#a5946c29] focus:outline-none focus:border focus:border-[#a5946c] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 rounded border-[#a5946c] hover:bg-[#a5946c] hover:border-[#a5946c] duration-200 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </div>
            
        </form>
    </div>
  )
}

export default Contact