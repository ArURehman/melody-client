
const Input = ({ label, text, type, placeholder, state, setState }) => {
  return (
    <>
    <label className="block text-neutral-500 text-sm font-bold mb-2" htmlFor={label}>
        {text}
    </label>
    <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-neutral-900 h-10 text-sm leading-tight focus:outline-none focus:shadow-outline"
    id={label}
    type={type}
    value={state}
    onChange={(e) => setState(e.target.value)}
    placeholder={placeholder}
    />
    </>
  )
}

export default Input