const Badge = ({ tag }: { tag: string }) => {
	return (
		<span
			key={tag}
			className="inline-block bg-blue-300 rounded-sm py-1 px-2 text-xs font-semibold text-gray-900 mr-2"
		>
			{tag}
		</span>
	);
};

export default Badge;
