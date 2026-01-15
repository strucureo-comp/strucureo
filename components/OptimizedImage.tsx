import Image from 'next/image';

export default function OptimizedImage({
    src,
    alt,
    width = 800,
    height = 600,
    ...props
}: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
} & React.ComponentProps<typeof Image>) {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={false}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
            quality={85}
            sizes="(max-width: 768px) 100vw, 50vw"
            {...props}
        />
    );
}
