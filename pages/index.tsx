import type { NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const Home: NextPage = () => {
  const url = 'https://api.adviceslip.com/advice'
  const [advice, setAdvice] = useState('')
  const [adviceId, setAdviceId] = useState()

  const fetchAdvice = async () => {
    const response = await axios.get(url)
    console.log(response.data.slip.id)
    setAdvice(response.data.slip.advice)
    setAdviceId(response.data.slip.id)
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  return (
    <div className="h-[100vh] bg-bgColor">
      <Head>
        <title>adviso</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap');
        </style>
      </Head>

      <h1 className="text-neon">ADVICE #{adviceId}</h1>
      <h1 className="text-adviceColor">{advice}</h1>

      <button className="mt-5 border py-2 px-5" onClick={fetchAdvice}>
        New
      </button>
    </div>
  )
}

export default Home

// export async function getStaticProps() {
//   const url = 'https://api.adviceslip.com/advice'
//   const rawData = await axios.get(url)
//   const newData = rawData.data

//   return {
//     props: { newData },
//   }
// }
