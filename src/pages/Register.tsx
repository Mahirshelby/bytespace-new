import { Link } from 'react-router-dom'
import AuthLayout from '../components/layout/AuthLayout'
import Field from '../components/ui/Field'
import Button from '../components/ui/Button'

export default function Register() {
  return (
    <AuthLayout
      heading="Sign up and come in"
      text="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      kicker="Create an Account"
      title={<>Welcome to<br />ByteSpace</>}
      footer={<>Already have an account? <Link to="/login" className="text-[#003AE1]">Login</Link></>}
    >
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <Field label="Full Name" type="text" placeholder="Jamie Davis" required />
        <Field label="Email" type="email" placeholder="designer@example.com" required />
        <Field label="Password" type="password" placeholder="********" required minLength={6} />
        <div className="flex justify-end"><Button type="submit" className="h-[46px] px-7 text-label-m font-medium">Continue</Button></div>
      </form>
    </AuthLayout>
  )
}