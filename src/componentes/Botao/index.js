import './Botao.css'

const Botao = (props)=>{
  return(
    <button className='botao'>
       {props.children}  {/* esta chamando a props filho do botão, ou seja, o CRIAR CARD  */}
     
    </button>
  )
}
 export default Botao