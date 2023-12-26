import React from 'react'
import { Formik, Form, type FormikHelpers } from 'formik'
import * as Yup from 'yup'
import CustomInput from './customForm/customUserForm'
import axios from 'axios'

const initialValues = {
  email: '',
  password: ''
}

const validationSchema = Yup.object().shape({
  userEmail: Yup.string()
    .email('Please provide a valid email address.')
    .required('Email is required.'),
  userPassword: Yup.string()
    .min(8, 'Must be at least 8 characters.')
    .required('Password is required.')
})

interface FormValues {
  email: string
  password: string
}
const handleSubmit = async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
  try {
    const response = await axios.post('http://172.29.114.152:3131/login', values, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(response.data)
    // Handle the successful response from the backend
  } catch (error) {
    console.error(error)
    // Handle errors from the backend
  } finally {
    setSubmitting(false)
  }
}

const TypeInput = [
  { type: 'email', name: 'email', placeholder: 'Email' },
  { type: 'password', name: 'password', placeholder: 'Password' }
]

const FormLogin = (): React.ReactElement => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({ errors, touched }) => (
        <Form className='w-[280px] sm:w-[360px]'>
          <div className='flex flex-col items-center p-0 gap-6 w-full lg:w-[360px] h-auto rounded-xl'>
            <div className='flex flex-col items-start p-0 gap-5 w-full lg:w-[360px] h-auto '>
              <CustomInput items={TypeInput} />
              <div className='flex flex-row items-center p-0 gap-2 w-[177px] h-[20px]'>
                <label
                  htmlFor='checkbox'
                  className='flex flex-row justify-center items-center p-0 w-[16px] h-[16px]'>
                  <input
                    type='checkbox'
                    className='w-[16px] h-[16px] bg-[#ffffff] border rounded border-solid border-[#d0d5dd]'
                  />
                </label>
                <span className='w-[153px] h-[20px] font-inter font-medium text-[14px] leading-5 text-[#344054]'>
                  Remember for 30 days
                </span>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-[360px] h-auto flex flex-col items-center lg:items-start lg:pt-[35px] pt-[20px] gap-4'>
            <button
              type='submit'
              className='flex flex-row justify-center items-center px-[10px] py-[18px] gap-2 w-full lg:w-[360px] h-[44px]
                bg-black border-[1px] border-solid shadow-[0_0px_1px_2px_rgba(16,24,40,0.05)] rounded-lg '>
              <span className='w-full lg:w-[119px] h-[24px] font-inter font-semibold inline-block text-[16px] leading-6 text-[#ffffff]'>
                Sign In
              </span>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FormLogin
