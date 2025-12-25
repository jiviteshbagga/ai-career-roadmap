import { client } from "@/sanity/client";
import Image from "next/image";

export default async function CategoryPage({ params }: { params: { category: string } }) {
  // 1. Fetch products from Sanity based on the URL category
  const products = await client.fetch(
    `*[_type == "product" && category == $cat] {
      _id,
      name,
      standards,
      description,
      "imageUrl": image.asset->url
    }`,
    { cat: params.category }
  );

  return (
    <div className="min-h-screen bg-black p-10 text-white">
      {/* Title converts "thermal-conductivity" to "Thermal Conductivity" */}
      <h1 className="mb-10 text-4xl font-bold uppercase tracking-tighter">
        {params.category.replace(/-/g, ' ')} <span className="text-red-600">Equipment</span>
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {products.map((product: any) => (
          <div key={product._id} className="rounded-2xl border border-white/10 bg-neutral-900 p-6 transition-all hover:border-red-600">
            {product.imageUrl && (
              <div className="relative mb-4 h-64 w-full">
                <Image 
                  src={product.imageUrl} 
                  alt={product.name} 
                  fill 
                  className="rounded-lg object-cover" 
                />
              </div>
            )}
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="mt-1 font-mono text-sm text-red-500 uppercase">{product.standards}</p>
            <p className="mt-4 text-sm text-neutral-400 line-clamp-3">{product.description}</p>
            
            <button className="mt-6 w-full rounded-lg bg-white py-3 font-bold text-black transition-colors hover:bg-red-600 hover:text-white">
              View Product
            </button>
          </div>
        ))}
      </div>

      {/* Show message if the category is empty */}
      {products.length === 0 && (
        <p className="mt-20 text-center text-neutral-500 italic">
          No equipment has been added to this category yet.
        </p>
      )}
    </div>
  );
}