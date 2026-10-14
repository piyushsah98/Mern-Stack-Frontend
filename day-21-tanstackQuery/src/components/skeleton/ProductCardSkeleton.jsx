const ProductCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 animate-pulse">
      {/* Image */}
      <div className="h-60 w-full bg-zinc-800" />

      {/* Content */}
      <div className="space-y-4 p-5">
        {/* Title */}
        <div className="h-6 w-3/4 rounded bg-zinc-800" />

        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-zinc-800" />
          <div className="h-4 w-4/5 rounded bg-zinc-800" />
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between pt-2">
          <div className="h-8 w-20 rounded bg-zinc-800" />

          <div className="h-10 w-32 rounded-lg bg-zinc-800" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
