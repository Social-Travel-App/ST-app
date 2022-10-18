import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { object, string } from 'zod'

const loginSchema = object({
  email: string().nonempty('Email is required').email('Email is invalid'),
  password: string()
    .nonempty('Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
})

const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const methods = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
  })

  const {
    reset,
    handleSubmit,
    register,
    formState: { isSubmitSuccessful, errors },
  } = methods

  const onSubmitHandler = (values: TLogin) => {
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

export default useLogin
