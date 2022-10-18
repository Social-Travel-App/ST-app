import React from 'react'
import Link from 'next/link'
import {
  Grid,
  styled,
  Typography,
  Box,
  TextField,
  InputAdornment,
  Checkbox,
  Stack,
  FormControl,
  FormControlLabel,
  Button,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { GoogleIcon, tailwindCSS } from '@/utils'
import useLogin from './useLogin'

const StyledGrid = styled(Grid)({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const StyledTextField = styled(TextField)(() => ({
  '& fieldset': {
    borderRadius: '8px',
    border: '1px solid #919396',
  },
}))

const inputProps = {
  style: {
    height: '50px',
    padding: '0 12px',
  },
}

const Login = () => {
  const {
    loading,
    showPassword,
    setShowPassword,
    onSubmitHandler,
    handleSubmit,
    register,
    errors,
  } = useLogin()

  return (
    <Grid
      container
      minHeight={'100vh'}
      direction={{
        xs: 'column',
        md: 'row',
      }}
    >
      <StyledGrid direction={'column'} className="py-10 duration-150">
        <Typography variant="h3" fontWeight={700}>
          Login
        </Typography>
        <Typography variant="subtitle1" fontWeight={500} marginTop={'16px'}>
          Welcome to join with us!
        </Typography>
        <Box
          className="duration-150 px-12 lg:px-0 w-full lg:w-[400px] min-w-[300px]"
          marginLeft={{
            xs: 0,
            sm: '30px',
          }}
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmitHandler)}
          marginTop={'16px'}
        >
          <Typography
            variant="subtitle1"
            fontWeight={500}
            marginBottom={'4px'}
            color={!!errors['email'] ? '#d32f2f' : 'black'}
          >
            Email
          </Typography>
          <StyledTextField
            sx={{ mb: 2 }}
            inputProps={inputProps}
            fullWidth
            required
            type="email"
            placeholder="Email"
            error={!!errors['email']}
            helperText={errors['email'] ? errors['email'].message : ''}
            {...register('email')}
          />
          <Typography
            variant="subtitle1"
            fontWeight={500}
            marginBottom={'4px'}
            color={!!errors['password'] ? '#d32f2f' : 'black'}
          >
            Password
          </Typography>

          <StyledTextField
            sx={{ mb: 2 }}
            inputProps={inputProps}
            fullWidth
            required
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            error={!!errors['password']}
            helperText={errors['password'] ? errors['password'].message : ''}
            {...register('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Typography
                    className={`${tailwindCSS.hoverText} cursor-pointer hover:text-black`}
                    variant="body2"
                    fontWeight={500}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </Typography>
                </InputAdornment>
              ),
            }}
          />
          <Stack
            direction={'row'}
            justifyContent="space-between"
            alignItems={'center'}
          >
            <FormControl component="fieldset">
              <FormControlLabel
                value="Remember"
                control={<Checkbox className={tailwindCSS.hoverText} />}
                label={
                  <Typography variant="body2" fontWeight={400}>
                    Remember me
                  </Typography>
                }
              />
            </FormControl>
            <Typography
              className={`${tailwindCSS.hover} cursor-pointer`}
              variant="body2"
              fontWeight={400}
              sx={{
                textDecoration: 'underline',
              }}
            >
              Forgot password
            </Typography>
          </Stack>
          <LoadingButton
            variant="contained"
            className={`bg-grey500 hover:bg-gray-500`}
            fullWidth
            type="submit"
            loading={loading}
            sx={{
              py: '0.8rem',
              mt: '1rem',
              borderRadius: '8px',
              textTransform: 'none',
            }}
          >
            <Typography variant="body2" fontWeight={700}>
              Log in
            </Typography>
          </LoadingButton>
          <Button
            className="border-main"
            variant="outlined"
            fullWidth
            sx={{
              py: '0.6rem',
              mt: '1rem',
              borderRadius: '8px',
              textTransform: 'none',
            }}
            startIcon={GoogleIcon}
          >
            <Typography variant="body2" fontWeight={700} className="text-black">
              Log in with Google
            </Typography>
          </Button>

          <Stack
            direction={'row'}
            className="flex justify-center items-center mt-4"
          >
            <Typography>Don't have an account?</Typography>
            <Typography className={`ml-2 ${tailwindCSS?.hoverText} font-bold`}>
              <Link href="/signup">Sign Up</Link>
            </Typography>
          </Stack>
        </Box>
      </StyledGrid>
      <StyledGrid className="relative mt-10 md:mt-0 duration-150">
        <img src={'/introduce.png'} className="h-screen w-full duration-150" />
        <Box className="absolute bottom-20 left-10 sm:left-[60px] lg:left-20">
          <Typography variant="h3" fontWeight={700} className="text-white">
            Travel
          </Typography>
          <Typography className="text-white text-base max-w-[500px] mt-2">
            Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam
            eget risus varius blandit sit amet non magna.
          </Typography>
        </Box>
      </StyledGrid>
    </Grid>
  )
}

export default Login
