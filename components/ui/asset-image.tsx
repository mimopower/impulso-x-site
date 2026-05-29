import Image, { type ImageProps } from 'next/image';

type AssetImageProps = Omit<ImageProps, 'src' | 'alt'> & {
  src: string;
  alt: string;
};

export function AssetImage({ src, alt, sizes, ...props }: AssetImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      sizes={sizes ?? '(min-width: 1024px) 50vw, 100vw'}
      loading={props.priority ? undefined : props.loading ?? 'eager'}
      {...props}
    />
  );
}
