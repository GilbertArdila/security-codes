import React from 'react'

class ClassState extends React.Component {

      constructor(props){
        super(props);
        this.state={
          error:false
        }
      }

      render(){
        return (
    <>
    <div className='flex flex-col items-center w-screen h-1/2 bg-gray-500 pt-8 pb-4'>
        <h1 className='font-bold text-xl text-center'>Eliminar {" "}{this.props.name} </h1>
        <p className='text-lg my-4 p-2'>Por favor escribe el código de seguridad para comprobar que quieres eliminar la información</p>
        <input type={'text'}
        placeholder={'Código de seguridad'}
        className='border-solid border-2 bg-gray-300 px-1 py-2 mx-5 text-center focus:border-4 focus:border-blue-500'
        />

         {this.state.error&&<p>Error, el código es incorrecto!!</p>}

        <button
         type='button'
         className='w-[150px] h-auto border-solid border-2 bg-blue-400  my-4 p-2 rounded-lg hover:bg-blue-700 hover:text-white'
         onClick={()=>this.setState({error:(!this.state.error)})}
         >Comprobar</button>
    </div>
       
    </>
  )
      }

  
}

export {ClassState}