import API from '../service/api'

export default function page() {
    return <div></div>
}

export const getServerSideProps = async (ctx) => {
    const req1 = await API.get("http://localhost:3000/api/hello")
    console.log("acesso 2 req1", req1.data)

    await new Promise(resolve => setTimeout(resolve, 5000));

    const req2 = await API.get("http://localhost:3000/api/hello")
    console.log("acesso 2 req2", req2.data)

    return { props: {} }
}