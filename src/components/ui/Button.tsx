import { ReactNode } from "react";

export default function Button({
	children,
	href,
}: {
	children: ReactNode;
	href: string;
}) {
	return (
		<button className="border-1 rounded-md overflow-hidden">
			<a href={href} className="block bg-white px-5 py-3 text-base">
				{children}
			</a>
		</button>
	);
}
