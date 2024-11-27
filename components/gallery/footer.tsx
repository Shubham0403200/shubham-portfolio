import React from 'react'

const Footer = () => {
  return (
    <div className='w-screen h-full border-t p-4 bg-black/50 flex justify-between items-center'>
      <div className=' flex flex-col items-start '>
          <h6 className=" font-semibold text-white"> Version</h6>
          <h5 className="font-medium text-slate-300">0.0.1</h5>
      </div>
      <div className="flex items-center gap-x-4">
        <div className=' flex flex-col items-start '>
            <h6 className=" font-semibold text-white"> Version</h6>
            <h5 className="font-medium text-slate-300">0.0.1</h5>
        </div>
        <div className=' flex flex-col items-start '>
            <h6 className=" font-semibold text-white"> Version</h6>
            <h5 className="font-medium text-slate-300">0.0.1</h5>
        </div>
        <div className=' flex flex-col items-start '>
            <h6 className=" font-semibold text-white"> Version</h6>
            <h5 className="font-medium text-slate-300">0.0.1</h5>
        </div>
      </div>
    </div>
  )
}

export default Footer