import { Link } from 'react-router-dom'
import AuthLayout from '../components/layout/AuthLayout'
import Field from '../components/ui/Field'
import Button from '../components/ui/Button'

const social = 'grid h-[72px] w-[70px] cursor-pointer place-items-center rounded-2xl border border-[#D5D6DB] bg-white'

export default function Login() {
  return (
    <AuthLayout
      heading="Sign in with ease"
      text="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      kicker="Sign In"
      title="Welcome Back"
      footer={<>New user? <Link to="/register" className="text-[#003AE1]">Create an account</Link></>}
    >
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <Field label="Email" type="email" placeholder="designer@example.com" required />
        <Field label="Password" type="password" placeholder="********" required />
        <div className="flex justify-end"><Button type="submit" className="h-[46px] px-7 text-label-m font-medium">Sign In</Button></div>
      </form>
      <div className="my-10 flex items-center gap-4 text-body-m text-[#4B4C53] lg:mt-[87px]">
        <span className="h-px flex-1 bg-[#D5D6DB]" />or<span className="h-px flex-1 bg-[#D5D6DB]" />
      </div>
      <div className="flex justify-center gap-[18px]">
        <button type="button" aria-label="Continue with Facebook" className={social}>
          <svg width="34" height="34" viewBox="0 0 24 24" fill="#242528"><path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12Z" /></svg>
        </button>
        <button type="button" aria-label="Continue with Google" className={social}><span className="font-heading text-3xl font-bold">G</span></button>
      </div>
    </AuthLayout>
  )
}