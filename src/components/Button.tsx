export const ButtonGreenLong = ({text}: {text: string}) => {
  return (
    <button className="bg-green-400 hover:bg-green-400/80 uppercase font-bold md:w-[20rem] w-40 my-2 md:h-10 min-h-10 text-sm rounded-md">{text}</button>
  )
}

export const ButtonGreenShort = ({text}: {text: string}) => {
  return (
    <button className="bg-green-400 hover:bg-green-400/80 uppercase font-bold  md:w-[12rem] w-[10rem] h-12 text-sm rounded-md">{text}</button>
  )
}