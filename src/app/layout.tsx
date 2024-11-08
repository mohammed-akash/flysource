import MyReduxProvider from '@/Redux/Provider'
import './globals.css'
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from 'next'
import Wrapper from '@/components/Layout/Wrapper'
import { ToastContainer } from 'react-toastify'
export const metadata: Metadata = {
  title: 'FastSourcer',
  icons: '/logo.svg',
  description: 'We Provide the best OutSourcing Services straight from Chine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='w-screen' lang="en">
      <MyReduxProvider>
        <body className='w-full'>
          <ToastContainer />
          <Wrapper>
            {children}
          </Wrapper>
        </body>
      </MyReduxProvider>
    </html>
  )
}
