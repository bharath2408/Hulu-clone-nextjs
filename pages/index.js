import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import axios from 'axios'
import requests from '../utils/requests'
import Results from '../components/Results'

export default function Home({results}) {
  return (
    <div>
      <Head>
          <title>Hulu</title>
      </Head>
      <Header/>
      <Nav />
      <Results results={results} />
     </div>
  );
}

export async function getServerSideProps(context){
  const genre = context.query.genre;
  try {
    const response = await axios.get(`https://api.themoviedb.org/3${requests[genre].url}`);
    return{
      props:{
        results:response.data.results
      },
    }
  } catch (error) {
    return{
    props: {

      results: [],
    }
  }

  }

  
}