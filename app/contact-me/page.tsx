import ContactsForm from '@/components/ContactsForm'
import React from 'react'

const Page = () => {
  return (
    <div 
    style={{backgroundImage: "url(/bg-3.jpg)"}}
    className='w-screen h-screen bg-cover bg-center flex items-center justify-center'>
      <div
      style={{backgroundImage: "url(autobg-com.webp)"}} 
      className='h-[60%] w-[80%] relative bg-cover rounded-xl border border-white'>
        <div className='absolute left-20 bottom-16 md:w-[30%]'>
          <ContactsForm />
        </div>
      </div>
    </div>
  )
}

export default Page
