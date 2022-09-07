import React from 'react'

const UseState = () => {
  return (
    <>
    <div className='flex flex-col items-center w-screen h-1/2 bg-gray-400 pt-8 pb-4'>
        <h1 className='font-bold text-xl text-center'>Eliminar UseState</h1>
        <p className='text-lg my-4'>Por favor escribe el código de seguridad para comprobar que quieres eliminar la información</p>
        <input type={'text'}
        placeholder={'Código de seguridad'}
        className='border-solid border-2 bg-gray-300 px-1 py-2 mx-5 text-center focus:border-4 focus:border-blue-500'
        />
        <button
         type='button'
         className='w-[150px] h-auto border-solid border-2 bg-blue-400  my-4 p-2 rounded-lg hover:bg-blue-700 hover:text-white'
         >Comprobar</button>
    </div>
       
    </>
  )
}

export  {UseState}