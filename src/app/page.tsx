import FileUpload from '@/components/FileUpload'
import { Button } from '@/components/ui/button'
import { UserButton, auth } from '@clerk/nextjs'
import { ArrowRight, LogIn } from 'lucide-react'
import Link from 'next/link'

export default async function Home() {
  const { userId } = await auth()
  const isAuth = !!userId

  return (
    <div className='min-h-screen w-screen bg-gradient-to-r from-rose-100 to-teal-100'>
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='flex flex-col items-center text-center'>
          <div className='flex items-center'>
            <h1 className='mr-3 text-5xl font-semibold'>Chat with any PDF</h1>
            <UserButton afterSignOutUrl='/' />
          </div>

          <div className='mt-2 flex'>
            {isAuth && (
              <>
                <Button>
                  Go to Chats <ArrowRight className='ml-2' />
                </Button>
              </>
            )}
          </div>

          <p className='mt-1 max-w-xl text-lg text-slate-600'>
            Join millions of students, researchers and professionals to
            instantly answer questions and understand research with AI
          </p>

          <div className='mt-4 w-full'>
            {isAuth ? (
              <FileUpload />
            ) : (
              <Link href='/sign-in'>
                <Button>
                  Login to get Started!
                  <LogIn className='ml-2 h-4 w-4' />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
