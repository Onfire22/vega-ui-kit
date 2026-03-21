import {Select, SelectContent, SelectItem, SelectPrimitive, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import React  from "react";
import {cn} from "@/lib/utils.ts";

interface IProps {
	placeholder: string;
	value: string;
	error?: string;
	label?: string;
	isRequired?: boolean;
	onChange: (value: string) => void;
	options: Array<{ value: string, label: string, description?: string; color?: string }>
}

const CustomSelect: React.FC<IProps> = ({ placeholder, options, value, onChange, error, label, isRequired }) => {
	return (
		<div>
			{label && <label className="text-[14px] ml-2 items-center">
				{label}
				{isRequired && <span className="text-(--color-danger)"> *</span>}
			</label>}
			<Select value={value} onValueChange={onChange}>
				<SelectTrigger className={
					cn(error && 'border-(--color-danger)', 'focus:outline-none focus-visible:ring-0 focus-visible:border-input min-w-full')
				}>
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>
				<SelectContent position="popper">
					{options.map((option) => {
						return (
							<SelectItem
								key={option.value}
								value={option.value}
								textValue={option.label}
								className="items-start p-2"
							>
								<span className="flex items-center">
									{option.color && <span className="size-2.5 rounded-full shrink-0 inline-block" style={{ backgroundColor: option.color }} />}
									<span className="flex flex-col">
    								<SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
										{option.description && (
											<span className="text-muted-foreground text-xs">{option.description}</span>
										)}
									</span>
  							</span>
							</SelectItem>
						)
					})}
				</SelectContent>
				{error && <span className="text-(--color-danger) text-[12px] ml-3">{error}</span>}
			</Select>
		</div>
	)
};

export { CustomSelect };