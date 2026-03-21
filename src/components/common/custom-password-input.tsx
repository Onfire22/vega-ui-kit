import React, {type ReactNode, useState} from "react";
import {CustomInput} from "@/components/common/custom-input.tsx";
import {EyeIcon, EyeOffIcon} from "lucide-react";

interface IProps {
	type: string
	id: string
	placeholder: string
	label: string
	value: string
	error?: string
	onChange: () => void
	isRequired?: boolean
	rightIcon?: ReactNode
	leftIcon?: ReactNode
}

const CustomPasswordInput: React.FC<IProps> = ({ ...props }) => {
	const [show, setShow] = useState(false)

	return (
		<CustomInput
			{...props}
			type={show ? 'text' : 'password'}
			leftIcon={
				<button onClick={() => setShow(!show)}>
					{show ? <EyeOffIcon className="cursor-pointer" size={20} /> : <EyeIcon className="cursor-pointer" size={20} />}
				</button>
			}
		/>
	)
}

export { CustomPasswordInput }