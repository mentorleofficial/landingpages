import Image from "next/image";

type MentorAvatarProps = {
  src: string;
  alt: string;
  size?: number;
  className?: string;
};

export default function MentorAvatar({
  src,
  alt,
  size = 44,
  className = "rounded-full object-cover",
}: MentorAvatarProps) {
  const isRemote = src.startsWith("http://") || src.startsWith("https://");

  if (isRemote) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className={className}
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={className}
    />
  );
}
