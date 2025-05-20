import facebookIcon from "~/assets/fb-icon.png";
import instagramIcon from "~/assets/insta-icon.png";
import whatsappIcon from "~/assets/whatsapp-icon.png";

export default function Footer() {
  return (
    <div className="mx-auto my-4 flex flex-col gap-4">
      <div className="text-2xl font-bold">Follow Us</div>
      <div className="flex flex-col gap-2 md:flex-row md:gap-8">
        <LinkWrapper
          href="https://www.facebook.com/aashish.subedi.143300"
          altText="Facebook"
          imageUrl={facebookIcon}
        />
        <LinkWrapper
          href="https://wa.me/9779805824016"
          altText="Instagram"
          imageUrl={instagramIcon}
        />
        <LinkWrapper
          href="https://wa.me/9779805824016"
          altText="Whatsapp"
          imageUrl={whatsappIcon}
        />
      </div>
      <div className="text-center text-gray-500">
        © 2023 Ashish Cold Stores and Laundry Service
      </div>
    </div>
  );
}

const LinkWrapper = ({
  href,
  imageUrl,
  altText,
}: {
  href: string;
  imageUrl: string;
  altText: string;
}) => (
  <a
    href={href}
    className="flex w-full items-center gap-4 rounded-xl bg-black/5 p-4 text-gray-600 md:w-fit md:flex-col md:gap-2 dark:bg-white/5 dark:text-gray-400"
  >
    <img src={imageUrl} alt={altText} className="h-8 w-8" />
    <p>{altText}</p>
  </a>
);
