import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FeatureImage } from "@/components/common/featureImage";

import type { Category, Gallery } from "@/app/gallery/types";

interface Props {
  categories: Category[];
  onSelectGallery: (gallery: Gallery) => void;
}

export function GalleryTabs({ categories, onSelectGallery }: Props) {
  return (
    <Tabs defaultValue={categories[0]?.title} className="w-full">
      {/* Premium Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="overflow-x-auto no-scrollbar bg-secondary p-1 rounded-full shadow-inner">
          <TabsList className="bg-transparent h-auto gap-2 px-2">
            {categories.map((category) => (
              <TabsTrigger
                key={category._id}
                value={category.title}
                className="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm text-neutral-500 hover:text-neutral-700"
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </div>

      {/* Tab Content */}
      {categories.map((category) => (
        <TabsContent
          key={category._id}
          value={category.title}
          className="animate-in fade-in duration-500"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.galleries.map((gallery) => (
              <div
                key={gallery._id}
                onClick={() => onSelectGallery(gallery)}
                className="group relative cursor-pointer block"
              >
                {/* Image Container */}
                <div className="overflow-hidden rounded-2xl aspect-16/10 bg-secondar/40 mb-4 shadow-sm transition-all duration-500 group-hover:shadow-xl">
                  {gallery.thumbnail && (
                    <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                      <FeatureImage image={gallery.thumbnail} />
                    </div>
                  )}
                </div>
                {/* Text Content */}
                <div className="px-1">
                  <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-neutral-600 transition-colors">
                    {gallery.title}
                  </h3>
                  <p className="text-sm text-neutral-500 font-medium">
                    {gallery.imageCount}{" "}
                    {gallery.imageCount === 1 ? "Photo" : "Photos"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
