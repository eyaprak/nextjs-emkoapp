export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/')
    const data = await res.json()

    const paths = data.map(emko => {
        return {
            params: { id: emko.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params}) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id)
    const data = await res.json()
    return {
        props: { emko: data }
    }
}

export default function Details({ emko }) {

    return (
        <div>
            <h1>Details page </h1>
            <p><b>Name: </b>{emko.name}</p>
            <p><b>Email: </b>{emko.email}</p>
            <p><b>Website: </b>{emko.website}</p>
            <p><b>City: </b>{emko.address.city}</p>
        </div>
    )
}
