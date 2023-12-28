import React from 'react'
import { Formik, Form, type FormikHelpers } from 'formik'
import * as Yup from 'yup'
import CustomInput from './customForm/customUserForm'
import axios from 'axios'

const initialValues = {
  email: '',
  password: ''
}

interface FormValues {
  email: string
  password: string
}

const handleSubmit = async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
  try {
    const response = await axios.post('http://localhost:5001/users', values, {
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
// const handleSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
//   console.log(values)
//   setSubmitting(false)
// }

const TypeInput = [
  { type: 'name', name: 'name', placeholder: 'name' },
  { type: 'email', name: 'email', placeholder: 'Email' },
  { type: 'password', name: 'password', placeholder: 'Password' },
  { type: 'confPassword', name: 'confPassword', placeholder: 'confPassword' }
]

const FormSignup = (): React.ReactElement => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}>
      <Form className='w-[280px] sm:w-[360px]'>
        <div className='flex flex-col items-center p-0 gap-6 w-full lg:w-[360px] h-auto rounded-xl'>
          <div className='flex flex-col items-start p-0 gap-5 w-full lg:w-[360px] h-auto '>
            <CustomInput items={TypeInput} />
          </div>
        </div>
        <div className='w-full lg:w-[360px] h-auto flex flex-col items-center lg:items-start lg:pt-[35px] pt-[20px] gap-4'>
          <button
            type='submit'
            className='flex flex-row justify-center items-center px-[10px] py-[18px] gap-2 w-full lg:w-[360px] h-[44px]
              bg-black border-[1px] border-solid shadow-[0_0px_1px_2px_rgba(16,24,40,0.05)] rounded-lg '>
            <span className='w-full lg:w-[119px] h-[24px] font-inter font-semibold inline-block text-[16px] leading-6 text-[#ffffff]'>
              Create account
            </span>
          </button>
        </div>
      </Form>
    </Formik>
  )
}

export default FormSignup
