/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next'
//import { Inter } from 'next/font/google'
//import './styles/globals.css'

//panggil file "style.module.css"
import style from "./styles/style.module.css";

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Data Alumni MAN 2 OGAN KOMERING ILIR',
  description: 'ini isi  data  alumni',
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/*tambahkan favicon*/}
          <link rel="shortcut icon" href="/images/logo1.png" type="image/x-icon"/>
      </head>
      <body className={style.layout}>
        <header className={style.header}>
          <img src="/images/logo2.png" alt="logo" />
          </header>


        <section className={`${style.content} ${style.content_bg}`}>
        {children}
        </section>
        
        <footer className={style.footer}>&copy; 2023 | PWBL - TI 21 A</footer>
        </body>
    </html>
  )
}
