import react from "react"

interface KnobProps {
  Size: number,
};

export const Knob = (props: KnobProps) => {
  return (
    <>
      <div className={`container bg-white h-[${props.Size}px] w-[${props.Size}px]`}>
        <div className="content h-full w-full bg-gray-700 rounded-full">

        </div>
      </div>
    </>
  )
}
