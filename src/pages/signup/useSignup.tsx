import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { object, string } from 'zod'

const registerSchema = object({
  email: string().nonempty('Email is required').email('Email is invalid'),
  verifyCode: string()
    .nonempty('Verify code is required')
    .min(6, 'Verify must be more than 6 characters'),
  password: string()
    .nonempty('Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
})

const useSignup = () => {
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const methods = useForm<TSingup>({
    resolver: zodResolver(registerSchema),
  })

  const {
    reset,
    handleSubmit,
    register,
    formState: { isSubmitSuccessful, errors },
  } = methods

  const onSubmitHandler = (values: TSingup) => {
    console.log(values)
    setLoading(true)
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      setTimeout(() => {
        reset()
        setLoading(false)
      }, 1500)
    }
  }, [isSubmitSuccessful])

  return {
    loading,
    showPassword,
    setShowPassword,
    onSubmitHandler,
    handleSubmit,
    register,
    errors,
  }
}

export default useSignup
