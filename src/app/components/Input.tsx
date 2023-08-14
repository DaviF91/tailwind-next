import { Search } from "lucide-react";
import { ComponentProps } from "react";

interface InputPrefixProps extends ComponentProps<'div'>{} //extender componente props que vem do react, extende todas as propriedades que uma div poderia ter.

export function InputPrefix(props:InputPrefixProps ) {
  return <div {...props}  />
}

type InputControlProps = ComponentProps<'input'>

export function InputControl(props: InputControlProps) {
  return (

    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      type="text"
      {...props}
    />
    
    
  )
}

export type InputRootProps = ComponentProps<'div'>

export function InputRoot(props: InputRootProps) {
  return (
    <div
      className="flex mx-1 w-full items-center gap-2 rounded-lg border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
    
  )
}
