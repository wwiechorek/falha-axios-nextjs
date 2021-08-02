import API from '../service/api'
import { getAPIClient } from '../service/service'

export default function page(props) {
    return <div>
        Usuário 1: {props.usuarioreq1} <br></br>
        Usuário 2: {props.usuarioreq2} <br></br>
    </div>
}

export const getServerSideProps = async (ctx) => {
    const API = getAPIClient(ctx)
    const req1 = await API.get("http://localhost:3000/api/hello")
    console.log("acesso 1 req1", req1.data)

    await new Promise(resolve => setTimeout(resolve, 10000));

    const req2 = await API.get("http://localhost:3000/api/hello")
    console.log("acesso 1 req2", req2.data)

    return { props: {
        usuarioreq1: req1.data.usuario,
        usuarioreq2: req2.data.usuario,
    } }
}