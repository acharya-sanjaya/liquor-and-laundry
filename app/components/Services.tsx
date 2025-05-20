import laundryImage from "~/assets/services-laundry.jpg";
import liquorsImage from "~/assets/services-liquors.jpg";
import snacksImage from "~/assets/services-snacks.jpg";
import useTravel from "~/hooks/useTravel";

export default function Services() {
  return (
    <div>
      <div className="mb-4 text-3xl font-bold">Our Services</div>
      <div className="flex flex-col gap-8 md:flex-row">
        <ImageWrapper href="laundryservice" imageUrl={laundryImage} altText="Laundry" />
        <ImageWrapper href="" imageUrl={liquorsImage} altText="Liquors" />
        <ImageWrapper href="" imageUrl={snacksImage} altText="Snacks" />
      </div>
    </div>
  );
}

const ImageWrapper = ({
  href,
  imageUrl,
  altText,
}: {
  href: string;
  imageUrl: string;
  altText: string;
}) => {
  const visit = () => window.location.href;

  return (
    <button onClick={visit} className="relative size-full h-72">
      <img src={imageUrl} alt={altText} className="size-full rounded-2xl" />
      <div className="absolute bottom-2 right-2 rounded-2xl border-2 px-10 py-2 font-bold text-white backdrop-blur-md">
        {altText}
      </div>
    </button>
  );
};
