export type Entry = {
	type?:
		| 'heading'
		| 'paragraph'
		| 'link'
		| 'divider'
		| 'unordered-list'
		| 'ordered-list'
		| 'list-item'
		| 'list-item-content';
	children?: Entry[];
	level?: number;
	href?: string;
	text?: string;
	bold?: boolean;
	italic?: boolean;
	underline?: boolean;
	strikethrough?: boolean;
	superscript?: boolean;
	subscript?: boolean;
};

const createElement = (entry: Entry) => {
	if (entry.type === 'heading') return document.createElement('h' + entry.level);
	if (entry.type === 'paragraph') return document.createElement('p');
	if (entry.type === 'divider') return document.createElement('hr');
	if (entry.type === 'unordered-list') return document.createElement('ul');
	if (entry.type === 'ordered-list') return document.createElement('ol');
	if (entry.type === 'list-item') return document.createElement('li');
	if (entry.type === 'list-item-content') return document.createElement('span');

	if (entry.type === 'link') {
		const link = document.createElement('a');

		link.setAttribute('href', entry.href as string);
		link.setAttribute('target', '_blank');
		link.setAttribute('rel', 'noreferrer');

		return link;
	}

	if (entry.text || entry.text === '') {
		const span = document.createElement('span');
		span.innerText = entry.text || '';
		return span;
	}
};

const format = (target: HTMLElement, entry: Entry) => {
	if (entry.type === 'paragraph') target.style.padding = '0.5rem 0';

	if (entry.bold) target.style.fontWeight = 'bold';
	if (entry.italic) target.style.fontStyle = 'italic';
	if (entry.underline) target.style.textDecoration = 'underline';
	if (entry.strikethrough) target.style.textDecoration = 'line-through';

	return target;
};

export const processDocument = (parent: HTMLElement, entry: Entry) => {
	const element = createElement(entry) as HTMLElement;
	const formattedElement = format(element, entry);

	if (entry.children)
		entry.children.forEach((childEntry) => processDocument(formattedElement, childEntry));

	parent.append(formattedElement);
};
