'use client'
import { useEffect, useState } from "react";
import { HomeView } from './views/HomeView'
import Loading from "./loading";


export default function Home() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 1000);
  }, [])


  if (!show) return <Loading />
  return (
    <>
      <HomeView />
    </>
  )
}
