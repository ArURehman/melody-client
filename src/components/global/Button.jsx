import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"

const Button = forwardRef(({ children, styles, disabled, type='button', ...props }, ref) => {
  return (
    <button type={type} disabled={disabled} className={twMerge(`w-full rounded-full bg-blue-700 border border-transparent px-3 py-2 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition`, styles)} {...props} ref={ref}>
        {children}
    </button>
  )
})

Button.displayName = "Button"
export default Button