import React from 'react'

const SECURITY_CODE='paradigma';

const UseState = ({name}) => {

  const [state,setState]=React.useState({
    error:false,
    loading:false,
    value:'',
    delete:false,
    confirm:false
  })
 
  const onConfirm=()=>{
    //tenemos que copiar el estado original del state y ahora sí modificar el objeto que queremos modificar para evitar un error
    setState({
      ...state,
      loading:false,
      value:"",
      confirm:true
    })
  }
   const onError=()=>{
    setState({
      ...state,
      error:true,
      loading:false,
      value:""
    })
   }
  const onWrite=(event)=>{
    const inputValue=event.target.value
    setState({...state,value:inputValue})
  }
   
  const onInputFocus=()=>{
    setState({...state,error:false,value:""})
  }

  const onCheck=()=>{
    setState({...state,loading:true})
  }
  React.useEffect(() => {
      if(state.loading){
         setTimeout(()=>{
          if(state.value===SECURITY_CODE){
            onConfirm()
          }else{
            onError()
          }
          },3000)
      }
     
  }, [state.loading])
  
  if(!state.delete && !state.confirm){
    return (
    <>
    <div className='flex flex-col items-center w-screen h-1/2 bg-gray-400 pt-8 pb-4'>

     
        
        <h1 className='font-bold text-xl text-center'>Eliminar {" "}{name}</h1>
        <h3 className='absolute top-[45%] left-3 text-white'>para usar la aplicación utilice el Código paradigma</h3>
        <p className='text-lg my-4 p-2'>Por favor escribe el código de seguridad para comprobar que quieres eliminar la información</p>

        <input type={'text'}
        placeholder={'Código de seguridad'}
        className={`border-solid border-2 bg-gray-300 px-1 py-2 mx-5 text-center rounded-xl focus:border-4 focus:border-blue-500 ${state.error?"border-red-700":""}`}
        value={state.value}
        onChange={(event)=>{
         onWrite(event)
          
        }}
        onFocus={()=> onInputFocus()}
        />


        {state.loading&&<p>Cargando...</p>}
        {state.error&&<p>Error, el código es incorrecto!!</p>}

        <button
         type='button'
         className='w-[150px] h-auto border-solid border-2 bg-blue-400  my-4 p-2 rounded-lg hover:bg-blue-700 hover:text-white'
         onClick={()=> onCheck()}
         >{!state.loading?"Comprobar":"Comprobando"}</button>
    </div>
       
    </>
  )

  }else if(state.confirm && !state.delete){
    const onCancel=()=>{
      setState({ ...state,confirm:false})
    }

    const onConfirm=()=>{
      setState({ ...state,delete:true})
    }

    return(
      <>
       <div className='flex flex-col items-center justify-center text-center w-screen h-1/2 py-10 bg-gray-300'>
        <h3 className='font-semibold text-xl mb-6'>¿Deseas eliminar la información?</h3>

        <div className='flex w-full justify-center'>
          <button className='w-[150px] h-auto mr-4 p-2 text-white bg-blue-500 text-lg rounded-xl hover:bg-blue-700'
          onClick={()=>onConfirm()}
          >Confirmar</button>

        <button className='w-[150px] h-auto p-2 text-white bg-yellow-500 text-lg rounded-xl hover:bg-yellow-700'
         onClick={()=>onCancel()}
        >Cancelar</button>
        </div>
        
       </div>
      </>
    )
  }else{
    const onRecover=()=>{
      setState({ ...state,delete:false,
        confirm:false})
    }
    
    return(
     <>
       <div className='flex flex-col items-center justify-center text-center w-screen h-1/2 py-10 bg-gray-300'>
        <h1 className='font-semibold text-xl mb-6'>La información fue eliminada</h1>
        
        <div className='flex w-full justify-center'>
          <button className='w-[200px] h-auto mr-4 p-2 text-white bg-blue-500 rounded-xl text-lg hover:bg-blue-700'
          onClick={()=>onRecover()}
          >Recuperar información</button>

       
        </div>
        
       </div>
      </>
    )
     
  }
  
}

export  {UseState}