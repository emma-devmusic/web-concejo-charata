'use client'

import { Icon } from "@iconify/react/dist/iconify.js"
import { useRef } from 'react';

export const BackToTop = () => {

    const backToTop = useRef<HTMLDivElement>(null)
    if (typeof window !== "undefined") {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                backToTop.current?.classList.add('show-back-to-top')
            } else {
                backToTop.current?.classList.remove('show-back-to-top')
            }
        })

    }

    const handleBackToTop = () => {
        if(typeof window !== "undefined") {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        }
    }

    return (
        <div ref={backToTop} onClick={handleBackToTop} className="btn btn-lg btn-primary btn-lg-square rounded back-to-top">
            <Icon icon={'ph:arrow-up-bold'} />
        </div>
    )
}
