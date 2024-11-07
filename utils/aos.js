'use client'
import { useEffect } from "react"

// AOS 
import Aos from "aos"
import 'aos/dist/aos.css'


export default function AOSInit() {

    useEffect(() => {
        Aos.init({
          duration: 600,
          delay: 100
        })
    }, [])

    return null

}