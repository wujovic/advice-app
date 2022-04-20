import type { NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'
import { useEffect, useState } from 'react'
import NewAdviceButton from '../components/NewAdviceButton'
import Devider from '../components/Devider'
import MobileDevider from '../components/MobileDevider'

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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap"
        />
      </Head>

      <div className="mx-auto w-[90%] pt-[8rem] md:w-[30%]">
        <div className="rounded-xl bg-cardBg py-10 px-6 text-center">
          <h1 className="mb-7 text-center tracking-widest text-neon">
            ADVICE #{adviceId}
          </h1>
          <div className="md:px-10">
            <h1 className="mb-7 text-2xl text-adviceColor">{advice}</h1>
          </div>

          <div className="mb-7 md:hidden">
            <MobileDevider />
          </div>
          <div className="mb-2 hidden md:inline">
            <Devider />
          </div>
          <NewAdviceButton fetchAdvice={fetchAdvice} />
        </div>
      </div>
    </div>
  )
}

export default Home
