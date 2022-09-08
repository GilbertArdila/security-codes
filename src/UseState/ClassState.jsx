import React from 'react'
import { Loading } from './Loading';

const SECURITY_CODE='paradigma';


class ClassState extends React.Component {

      constructor(props){
        super(props);
        this.state={
          value:"",
          error:false,
          loading:false
        }
      }
     //esto era como el useEffect
    componentDidUpdate(){
      if(this.state.loading){
       
        setTimeout(()=>{
          if(this.state.value===SECURITY_CODE){
          this.setState({loading:false,value:""})
          }else{
            this.setState({loading:false,error:true,value:""})
          }
          },3000)
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
        className={`border-solid border-2 bg-gray-300 px-1 py-2 mx-5 text-center rounded-xl focus:border-4 focus:border-blue-500 ${this.state.error?"border-red-700":""}`}
        value={this.state.value}
        onChange={(event)=>{
           this.setState({value: event.target.value})
        }}
        onFocus={()=>this.setState({error:false})}
        />

         {this.state.error&&<p>Error, el código es incorrecto!!</p>}
         {this.state.loading&&<Loading/>}

        <button
         type='button'
         className='w-[150px] h-auto border-solid border-2 bg-blue-400  my-4 p-2 rounded-lg hover:bg-blue-700 hover:text-white'
         onClick={()=>this.setState({loading:true})}
        //efecto toggle
        //  this.setState({loading:(!this.state.error)})
         >Comprobar</button>
    </div>
       
    </>
  )
      }

  
}

export {ClassState}