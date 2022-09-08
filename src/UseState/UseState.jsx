import React from 'react'

const SECURITY_CODE='paradigma';

const UseState = ({name}) => {

  const[error,setError]=React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const[value ,setValue]=React.useState('')

  

  React.useEffect(() => {
      if(loading){
         setTimeout(()=>{
          if(value===SECURITY_CODE){
            setLoading(false)
            setValue('')
          }else{
            setError(true)
            setLoading(false)
            setValue('')
          }
          },3000)
      }
     
  }, [loading])
  

  return (
    <>
    <div className='flex flex-col items-center w-screen h-1/2 bg-gray-400 pt-8 pb-4'>

     

        <h1 className='font-bold text-xl text-center'>Eliminar {" "}{name}</h1>
        <p className='text-lg my-4 p-2'>Por favor escribe el código de seguridad para comprobar que quieres eliminar la información</p>

        <input type={'text'}
        placeholder={'Código de seguridad'}
        className={`border-solid border-2 bg-gray-300 px-1 py-2 mx-5 text-center rounded-xl focus:border-4 focus:border-blue-500 ${error?"border-red-700":""}`}
        value={value}
        onChange={(event)=>{
          const inputValue=event.target.value
          setValue(inputValue)
        }}
        onFocus={()=>setError(false)}
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