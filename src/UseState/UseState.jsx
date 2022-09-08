import React from 'react'

const UseState = ({name}) => {

  const[error,setError]=React.useState(false)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
      if(loading){
         setTimeout(()=>{setLoading(false)},3000)
      }
     
  }, [loading])
  

  return (
    <>
    <div className='flex flex-col items-center w-screen h-1/2 bg-gray-400 pt-8 pb-4'>

     

        <h1 className='font-bold text-xl text-center'>Eliminar {" "}{name}</h1>
        <p className='text-lg my-4 p-2'>Por favor escribe el código de seguridad para comprobar que quieres eliminar la información</p>

        <input type={'text'}
        placeholder={'Código de seguridad'}
        className='border-solid border-2 bg-gray-300 px-1 py-2 mx-5 text-center focus:border-4 focus:border-blue-500'
        />
        {loading&&<p>Cargando...</p>}
        {error&&<p>Error, el código es incorrecto!!</p>}

        <button
         type='button'
         className='w-[150px] h-auto border-solid border-2 bg-blue-400  my-4 p-2 rounded-lg hover:bg-blue-700 hover:text-white'
         onClick={()=>setLoading(true)}
         >Comprobar</button>
    </div>
       
    </>
  )
}

export  {UseState}