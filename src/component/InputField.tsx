interface Props {
   label: string;
}
const InputField = ({label}: Props) => {
  return (
    <div className="flex gap-2 text-center ">
      <h1 className="text-slate-400 text-xl font-bold font-serif text-center">{label} :</h1>
      <input type="number" name="" id="" className="bg-gray-500 rounded-md p-1 w-20 text-bold" placeholder="20" />
    </div>
  )
}

export default InputField
