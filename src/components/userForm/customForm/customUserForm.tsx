import React from 'react'
import { Field, ErrorMessage, useFormikContext } from 'formik'

interface FormValues {
  fullname: string
  username: string
  email: string
  password: string
}

interface CustomInputProps {
  items: Array<{
    name: string
    placeholder: string
    type: string
  }>
}

function CustomInput({ items }: CustomInputProps) {
  const { errors, touched } = useFormikContext<FormValues>()
  return (
    <div className='flex flex-col items-start p-0 gap-2 w-full lg:w-[360px] h-auto'>
      {items.map((item) => (
        <React.Fragment key={item.name}>
          <label
            htmlFor={item.name}
            className="after:content-['*'] after:text-red-500 font-inter font-medium text-[14px] leading-5 text-[#344054] w-full lg:w-[360px] h-[20px]">
            {item.placeholder}
          </label>
          <Field
            type={item.type}
            name={item.name}
            placeholder={`Enter your ${item.placeholder.toLowerCase()}`}
            className={`peer flex flex-row items-center gap-2 box-border h-[44px]
      w-full lg:w-[360px] px-[10px] py-[14px] text-[16px] leading-6
      rounded-lg border-2 border-solid border-gray-300
      text-[#344054] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      ${
        (errors[item.name as keyof FormValues] != null) && (touched[item.name as keyof FormValues] ?? false)
          ? 'border-pink-500 text-pink-600'
          : 'border-green-700'
      }`}
          />
          <ErrorMessage
            name={item.name}
            className=' text-pink-600 text-xs'
            component='div'
          />
        </React.Fragment>
      ))}
    </div>
  )
}
export default CustomInput
