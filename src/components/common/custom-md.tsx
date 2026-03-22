import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import ReactMarkdown from 'react-markdown'
import {CustomTabs} from "@/components/common/custom-tabs.tsx";
import {useState} from "react";
import {Textarea} from "@/components/ui/textarea.tsx";

const someValue = `## Список
- Первый пункт
- Второй пункт
- Третий пункт`

const CustomMd = () => {
	const [activeTab, setActiveTab] = useState('preview');
	const [value, setValue] = useState(someValue);

	const handleChange = (e) => {
		setValue(e.target.value);
	}

	return (
		<div className="p-5">
			<div className="w-full border rounded-sm">
				<div className="p-2 border-b flex items-center justify-start">
					<CustomTabs triggers={[{ text: 'Редактор', value: 'editor' }, {text: 'Split', value: 'split'}, { text: 'Превью', value: 'preview' }]} defaultValue={activeTab} onChange={setActiveTab} />
				</div>
				{activeTab === 'editor' && (
					<Textarea className="border-none" placeholder="Ввести текст в формате markdown" value={value} onChange={handleChange} />
				)}
				{activeTab === 'split' && (
					<div className="flex flex-row">
						<Textarea className="border-none w-1/2" placeholder="Ввести текст в формате markdown" value={value} onChange={handleChange} />
						<div className="prose prose-invert p-2  border-l">
							<ReactMarkdown
								remarkPlugins={[remarkGfm]}
								rehypePlugins={[rehypeHighlight]}
							>
								{value}
							</ReactMarkdown>
						</div>
					</div>
				)}
				{activeTab === 'preview' && (
					<div className="prose prose-invert p-2">
						<ReactMarkdown
							remarkPlugins={[remarkGfm]}
							rehypePlugins={[rehypeHighlight]}
						>
							{value}
						</ReactMarkdown>
					</div>
				)}
			</div>
		</div>
	)
};

export { CustomMd }