import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import React, {type ReactNode} from "react";

interface IProps {
	trigger: ReactNode
	content: ReactNode
	width: string
	isOpen: boolean
	setIsOpened: (value: boolean) => void;
}

const CustomPopover: React.FC<IProps> = ({ trigger, content, width, isOpen, setIsOpened }) => {
	return (
		<Popover open={isOpen} onOpenChange={setIsOpened}>
			<PopoverTrigger asChild>
				{trigger}
			</PopoverTrigger>
			<PopoverContent onOpenAutoFocus={(e) => e.preventDefault()} align="start" style={{ width }}>
				{content}
			</PopoverContent>
		</Popover>
	)
}

export { CustomPopover }