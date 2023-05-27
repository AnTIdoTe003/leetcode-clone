import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight:'500', subsets:['latin']})
export default function Home() {
  return (
    <div>
      <p className={poppins.className}>
        hellow World
      </p>
    </div>
  )
}
