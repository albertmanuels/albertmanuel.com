import Blog from "@/modules/Blog";
import TemplateLayout from "@/templates/Layout";

function BlogPage() {
	return (
		<TemplateLayout pageTitle="Blog">
			<Blog />
		</TemplateLayout>
	);
}

export default BlogPage;
