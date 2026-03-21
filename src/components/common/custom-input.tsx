import {Input} from "@/components/ui/input.tsx";
import React, { type ReactNode} from "react";
import {cn} from "@/lib/utils.ts";

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

const CustomInput: React.FC<IProps> = ({ type, id, placeholder, label, value, onChange, error, rightIcon, leftIcon, isRequired = false }) => {
	return (
		<div>
			{label && <label htmlFor={id} className="text-[14px] ml-2">
				{label}
				{isRequired && <span className="text-(--color-danger)"> *</span>}
			</label>}
			<div className={cn(
				'border border-input rounded-lg flex items-center justify-between focus:outline-none focus-visible:ring-0 min-w-full',
				error && 'border-(--color-danger)'
			)}>
				{rightIcon && (
					<div className="pl-2 flex items-center">{rightIcon}</div>
				)}
				<Input type={type} id={id} placeholder={placeholder} value={value} onChange={onChange} />
				{leftIcon && (
					<div className="pr-2 flex items-center">{leftIcon}</div>
				)}
			</div>
			{error && <span className="text-(--color-danger) text-[12px] ml-3">{error}</span>}
		</div>
	)
};

export { CustomInput };