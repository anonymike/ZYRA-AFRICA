import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookOpen, Calendar, ArrowRight } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  author: string
  readTime: string
  image: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Understanding the 4Cs: Your Guide to Gemstone Quality",
    excerpt:
      "Learn how Color, Clarity, Cut, and Carat weight determine a gemstone's value and beauty. A comprehensive guide for buyers.",
    category: "Education",
    date: "2026-01-08",
    author: "Dr. Sophia Kimani",
    readTime: "8 min read",
    image: "/blog-4cs-gemstone-guide.jpg",
    slug: "understanding-4cs-gemstone-quality",
  },
  {
    id: "2",
    title: "Tsavorite Garnet: Africa's Rarest Green Gemstone",
    excerpt:
      "Discover why Tsavorite garnet is one of the world's most coveted gemstones and why Taita Taveta is famous for producing the finest specimens.",
    category: "Gemstone Guide",
    date: "2026-01-05",
    author: "James Mwalimu",
    readTime: "6 min read",
    image: "/blog-tsavorite-garnet-guide.jpg",
    slug: "tsavorite-garnet-africas-rarest-gemstone",
  },
  {
    id: "3",
    title: "Ethical Mining: What 'Conflict-Free' Really Means",
    excerpt:
      "Explore the difference between conflict-free, fair-trade, and ethical gemstones, and why traceability matters for conscious buyers.",
    category: "Ethics & Sustainability",
    date: "2026-01-02",
    author: "Rebecca Ochieng",
    readTime: "10 min read",
    image: "/blog-ethical-mining-guide.jpg",
    slug: "ethical-mining-conflict-free-gemstones",
  },
  {
    id: "4",
    title: "Women in Mining: Breaking Barriers in Taita Taveta",
    excerpt:
      "Meet the courageous women miners of Taita Taveta who are transforming the gemstone industry and challenging traditional roles.",
    category: "Community Stories",
    date: "2025-12-29",
    author: "Grace Kipchoge",
    readTime: "7 min read",
    image: "/blog-women-mining-taita.jpg",
    slug: "women-in-mining-taita-taveta",
  },
  {
    id: "5",
    title: "How to Care for Your Gemstones: A Complete Guide",
    excerpt:
      "Proper care extends the life and beauty of your gemstones. Learn cleaning, storage, and maintenance tips from gemstone experts.",
    category: "Care & Maintenance",
    date: "2025-12-25",
    author: "Dr. Sophia Kimani",
    readTime: "5 min read",
    image: "/blog-gemstone-care-guide.jpg",
    slug: "gemstone-care-complete-guide",
  },
  {
    id: "6",
    title: "The Ruby Renaissance: Why African Rubies Are Commanding Premium Prices",
    excerpt:
      "Explore the resurgence of interest in African rubies, their unique characteristics, and why they're becoming collector favorites.",
    category: "Market Trends",
    date: "2025-12-20",
    author: "David Kipchoge",
    readTime: "9 min read",
    image: "/blog-african-rubies-renaissance.jpg",
    slug: "african-rubies-premium-prices",
  },
]

export default function BlogPage() {
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)))

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-12 md:pb-16 px-4 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={24} className="text-primary" />
            <h1 className="text-4xl md:text-5xl font-serif font-semibold">Gemstone Education & Insights</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Learn about gemstones, ethical sourcing, market trends, and stories from our community.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="luxury-section px-4 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden">
              <img
                src={blogPosts[0].image || "/placeholder.svg"}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                  {blogPosts[0].category}
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar size={14} />
                  {new Date(blogPosts[0].date).toLocaleDateString()}
                </span>
              </div>
              <h2 className="luxury-heading text-3xl md:text-4xl mb-4">{blogPosts[0].title}</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-sm font-semibold">{blogPosts[0].author}</p>
                  <p className="text-sm text-muted-foreground">{blogPosts[0].readTime}</p>
                </div>
                <Link href={`/blog/${blogPosts[0].slug}`} className="ml-auto cta-button flex items-center gap-2">
                  Read Article
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="luxury-section px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-semibold mb-6">All Articles</h2>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 border border-border rounded-full text-sm hover:bg-muted transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="group cursor-pointer h-full">
                  <div className="relative h-64 rounded-lg overflow-hidden mb-4 bg-muted">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString()}
                    <span>•</span>
                    {post.readTime}
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">{post.author}</span>
                    <ArrowRight size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="luxury-section bg-muted/30 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="luxury-heading mb-4">Stay Updated</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get weekly insights on gemstones, ethics, and our community impact delivered to your inbox.
          </p>
          <form className="flex gap-3 flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button type="submit" className="cta-button whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
