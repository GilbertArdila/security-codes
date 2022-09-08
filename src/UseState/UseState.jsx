import React from 'react'

const SECURITY_CODE='paradigma';

const UseState = ({name}) => {

  const [state,setState]=React.useState({
    error:false,
    loading:false,
    value:''
  })
 
  
  

  React.useEffect(() => {
      if(state.loading){
         setTimeout(()=>{
          if(state.value===SECURITY_CODE){
            //tenemos que copiar el estado original del state y ahora sí modificar el objeto que queremos modificar para evitar un error
            setState({
              ...state,
              loading:false,
              value:""
            })
            
          }else{
            setState({
              ...state,
              error:true,
              loading:false,
              value:""
            })
            
          }
          },3000)
      }
     
  }, [state.loading])
  

  return (
    <>
    <div className='flex flex-col items-center w-screen h-1/2 bg-gray-400 pt-8 pb-4'>

     

        <h1 className='font-bold text-xl text-center'>Eliminar {" "}{name}</h1>
        <p className='text-lg my-4 p-2'>Por favor escribe el código de seguridad para comprobar que quieres eliminar la información</p>

        <input type={'text'}
        placeholder={'Código de seguridad'}
        className={`border-solid border-2 bg-gray-300 px-1 py-2 mx-5 text-center rounded-xl focus:border-4 focus:border-blue-500 ${state.error?"border-red-700":""}`}
        value={state.value}
        onChange={(event)=>{
          const inputValue=event.target.value
          setState({...state,value:inputValue})
          
        }}
        onFocus={()=> setState({...state,error:false,value:""})}
        />


        {state.loading&&<p>Cargando...</p>}
        {state.error&&<p>Error, el código es incorrecto!!</p>}

        <button
         type='button'
         className='w-[150px] h-auto border-solid border-2 bg-blue-400  my-4 p-2 rounded-lg hover:bg-blue-700 hover:text-white'
         onClick={()=> setState({...state,loading:true})}
         >Comprobar</button>
    </div>
       
    </>
  )
}

export  {UseState}