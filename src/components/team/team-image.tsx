interface TeamImageProps {
  imageUrl: string;
  name: string;
}

export function TeamImage({ imageUrl, name }: TeamImageProps) {
  return (
    <div className="aspect-[1/1] overflow-hidden">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}