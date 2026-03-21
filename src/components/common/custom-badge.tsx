import {Badge} from "@/components/ui/badge.tsx";
import React from "react";

type TVariant = 'default' | 'violet' | 'teal' | 'amber' | 'danger';

interface IProps {
	text: string;
	variant: TVariant;
}

const CustomBadge: React.FC<IProps> = ({ text, variant }) => {
	return (
		<Badge variant={variant}>{text}</Badge>
	)
}

export { CustomBadge };