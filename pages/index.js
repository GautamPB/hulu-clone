import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home({ results }) {
    console.log(results)
    //client side rendering
    return (
        <div>
            <Head>
                <title>Hulu</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Nav />
            <Results results={results} />
        </div>
    )
}

export async function getServerSideProps(context) {
    //this page only is server side rendered
    //server render happens first
    const genre = context.query.genre
    const request = await fetch(
        `https://api.themoviedb.org/3${
            requests[genre]?.url || requests.fetchTrending.url
        }`
    ).then((res) => res.json())

    return {
        props: {
            results: request.results,
        },
    }
}
