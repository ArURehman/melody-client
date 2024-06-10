import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"

const FormInput = forwardRef(({ label, text, type, styles, ...props }, ref) => {
  return (
    <>
        <label className="block text-neutral-500 text-sm font-bold mb-2" htmlFor={label}>
            {text}
        </label>
        <input
            ref={ref}
            className={twMerge("shadow appearance-none border rounded w-full py-2 px-3 text-white bg-neutral-900 h-10 text-sm leading-tight focus:outline-none focus:shadow-outline file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-50", styles)}
            id={label}
            type={type}
            {...props}
        />
    </>
  )
})

FormInput.displayName = 'FormInput'
export default FormInput