import { twMerge } from "tailwind-merge"

const Box = ({ children, styles }) => {
  return (
    <>
        <div className={twMerge(`w-full h-fit bg-neutral-900 rounded-lg`, styles)}>
            {children}
        </div>
    </>
  )
}

export default Box