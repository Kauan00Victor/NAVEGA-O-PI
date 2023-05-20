import { useRef, useState } from 'react'

export default function LoginForm(props) {
    const refEmail = useRef()
    const refSenha = useRef()
    const [erroEmail, setErroEmail] = useState()
    const [erroSenha, setErroSenha] = useState()

    function handleSubmit(event) {
        event.preventDefault()
        if (!refEmail.current.value){
            setErroEmail("Email obrigatorio")
            refEmail.current.focus()
        } else {
            setErroEmail("")
        }

        if(!refSenha.current.value) {
            setErroSenha("Senha obrigatoria")
        } else if (refSenha.current.value.length < 3) {
            setErroSenha("Senha com minimo 3 caracteres")
        } else {
            setErroSenha("")
        }

        if(erroEmail != "" || erroSenha != "") {
            return
        }

        props.onSubmit(event)
    }
    return (
        <form onSubmit={handleSubmit}> 
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" ref={refEmail}/>
            {erroEmail && <p>{erroEmail}</p>}
        </div>
        <div>
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" name="senha" ref={refSenha}/>
            {erroSenha && <p>{erroSenha}</p>}
        </div>
            <button>Entrar</button>
        </form> 
    )
}
