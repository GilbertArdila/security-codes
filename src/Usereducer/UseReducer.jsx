import React from 'react'

const SECURITY_CODE='paradigma';

const UseReducer = ({name}) => {

  const [state,dispatch]=React.useReducer(reducer,initialState)

  //action creators
  const onConfirm=()=>{dispatch({type:'CONFIRM'})}
  const onError=()=>{dispatch({type:'ERROR'})}
  const onWrite=(event)=>{dispatch({type:'WRITE',payload:event.target.value})}
  const onFocus=()=>{dispatch({type:'INPUT_FOCUS'})}
  const onCheck=()=>{dispatch({type:'CHECK'})}
  const onConfirmDelete=()=>{dispatch({type:'CONFIRM_DELETE'})}
  const onCancel=()=>{dispatch({type:'CANCEL'})}
  const onRecover=()=>{dispatch({type:'RECOVER'})}

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
    <div className='flex flex-col items-center w-screen h-1/2 bg-gray-600 pt-8 pb-4'>

     

        <h1 className='font-bold text-xl text-center'>Eliminar {" "}{name}</h1>

        <p className='text-lg my-4 p-2'>Por favor escribe el código de seguridad para comprobar que quieres eliminar la información</p>

        <input type={'text'}
        placeholder={'Código de seguridad'}
        className={`border-solid border-2 bg-gray-300 px-1 py-2 mx-5 text-center rounded-xl focus:border-4 focus:border-blue-500 ${state.error?"border-red-700":""}`}
        value={state.value}
        onChange={(event)=>{
         onWrite(event)
        }}
        onFocus={()=>  onFocus()}
        />


        {state.loading&&<p>Cargando...</p>}
        {state.error&&<p>Error, el código es incorrecto!!</p>}

        <button
         type='button'
         className={`w-[150px] h-auto border-solid border-2 bg-blue-400  my-4 p-2 rounded-lg hover:bg-blue-700 hover:text-white `}
         onClick={()=>  onCheck()}
         >{!state.loading?"Comprobar":"Comprobando"}</button>
    </div>
       
    </>
  )

  }else if(state.confirm && !state.delete){
   

    return(
      <>
       <div className='flex flex-col items-center justify-center text-center w-screen h-1/2 py-10 bg-gray-500'>
        <h3 className='font-semibold text-xl mb-6'>¿Deseas eliminar la información?</h3>

        <div className='flex w-full justify-center'>
          <button className='w-[150px] h-auto mr-4 p-2 text-white bg-blue-500 text-lg rounded-xl hover:bg-blue-700'
          onClick={()=> onConfirmDelete()}
          >Confirmar</button>

        <button className='w-[150px] h-auto p-2 text-white bg-yellow-500 text-lg rounded-xl hover:bg-yellow-700'
         onClick={()=> onCancel()}
        >Cancelar</button>
        </div>
        
       </div>
      </>
    )
  }else{
   
    
    return(
     <>
       <div className='flex flex-col items-center justify-center text-center w-screen h-1/2 py-10 bg-gray-500'>
        <h1 className='font-semibold text-xl mb-6'>La información fue eliminada</h1>
        
        <div className='flex w-full justify-center'>
          <button className='w-[200px] h-auto mr-4 p-2 text-white bg-blue-500 rounded-xl text-lg hover:bg-blue-700'
          onClick={()=> onRecover()}
          >Recuperar información</button>

       
        </div>
        
       </div>
      </>
    )
     
  }
  
}


const initialState = {
  error: false,
  loading: false,
  value: '',
  delete: false,
  confirm: false
}



const reducerObject = (state,payload) => {
  return {
    'ERROR': {
      ...state,
      error: true,
      loading: false,
      value: ""
    },
    'CHECK': {
      ...state,
      loading: true
    },
    'CONFIRM': {
      ...state,
      loading: false,
      value: "",
      confirm: true
    },
    'WRITE': {
      ...state,
      value: payload
    },
    'INPUT_FOCUS': {
      ...state
      , error: false,
      value: ""
    },
    'CANCEL': {
      ...state,
      confirm: false
    },
    'CONFIRM_DELETE': {
      ...state,
      delete: true
    },
    'RECOVER': {
      ...state,
      delete: false,
      confirm: false
    }
  }

}
const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state,action.payload)[action.type]
  } else {
    return state
  }
}

export  {UseReducer}