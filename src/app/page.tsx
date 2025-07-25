import PostCard from "@/components/PostCard";

export default function Home() {
  return (
    <div className="pt-12">
      <section className="mb-10">
        <h1 className="text-5xl mb-4 font-semibold">
          Hi, I&rsquo;m Albert Manuel!
        </h1>
        <p>
          I&rsquo;m a software engineer, working with{" "}
          <span className="bg-amber-300 text-black px-1 font-medium">
            Javascript
          </span>{" "}
          and all-things-web.
        </p>
      </section>
      <section>
        <h2 className="text-3xl font-semibold">Latest writings</h2>
        <PostCard
          metadata={{
            title: "Post Title",
            date: "July 25, 2025",
            slug: "post-title",
          }}
        />
        <PostCard
          metadata={{
            title: "Post Title",
            date: "July 25, 2025",
            slug: "post-title",
          }}
        />
        <PostCard
          metadata={{
            title: "Post Title",
            date: "July 25, 2025",
            slug: "post-title",
          }}
        />
      </section>
    </div>
  );
}
