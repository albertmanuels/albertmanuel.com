import {defineConfig, defineCollection, s} from "velite"
import rehypeShiki from '@shikijs/rehype'
import remarkRehype from "remark-rehype"

const computedFields = <T extends {slug: string}> (data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").splice(-1).join(""),
})

const blogPosts = defineCollection({
  name: "Blog",
  pattern: "blog/**/*.mdx",
  schema: s.object({
    slug: s.path(),
    title: s.string().max(99),
    description: s.string().max(400),
    thumbnail: s.string(),
    date: s.isodate(),
    published: s.boolean(),
    body: s.mdx(),
    featured: s.boolean()
  }).transform(computedFields),
})

const rehypePluginOptions = {
  theme: 'one-dark-pro',
  filterMetaString: (string: string) => string.replace(/filename="[^"]*"/, ""),
  keepBackground: false,
  bypassInlineCode: true,
}

export default defineConfig({
  root: "src/content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true
  },
  collections: {blogPosts},
  mdx: {
    rehypePlugins: [[rehypeShiki, rehypePluginOptions]],
    remarkPlugins: [[remarkRehype]]
  },
})