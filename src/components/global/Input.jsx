import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"

const Input = forwardRef(({ label, text, type, placeholder, state, setState, styles, ...props }, ref) => {
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
      value={state}
      onChange={(e) => setState(e.target.value)}
      placeholder={placeholder}
      {...props}
    />
    </>
  )
})

Input.displayName = 'Input'
export default Input