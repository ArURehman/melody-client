import * as RdxSlider from '@radix-ui/react-slider'

const Slider = ({ value=1, onChange }) => {

  const handleChange = (newValue) => {
    onChange?.(newValue[0])
  }

  return (
    <RdxSlider.Root
      className='relative flex items-center select-none touch-none w-full h-10'
      defaultValue={[1]}
      value={[value]} 
      max={1}
      step={0.1}
      aria-label='Volume'
      onPointerDown={(event) => handleChange(event.target.value)}
    >
      <RdxSlider.Track
        className='relative bg-neutral-600 grow rounded-full h-[3px]'
      >
        <RdxSlider.Range className='absolute h-full bg-white rounded-full' />
      </RdxSlider.Track>
    </RdxSlider.Root>
  )
}

export default Slider