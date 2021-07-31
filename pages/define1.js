import API from '../service/api'

export default function page() {
    return <div></div>
}

export const getServerSideProps = async (ctx) => {
    API.defaults.headers.common['usuario'] = 1
    return { props: {} }
}