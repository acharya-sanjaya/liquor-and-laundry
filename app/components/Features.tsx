import Icon, {IconNameType} from "~/Icons";

interface FeatureType {
  iconName: IconNameType;
  title: string;
  description: string;
}
const ourFeatures: FeatureType[] = [
  {
    iconName: "laundry",
    title: "Fast Laundry",
    description:
      "Get your clothes cleaned quickly with our same-day laundry service. Perfect for travelers and busy locals.",
  },
  {
    iconName: "leaf",
    title: "Eco Friendly",
    description:
      "We use eco-friendly detergents and practices to minimize our environmental impact. Clean clothes, clean conscience.",
  },
  {
    iconName: "headphone",
    title: "Wide Choice",
    description:
      "From local favorites to imported brands, discover a wide selection of liquors to suit every taste.",
  },
  {
    iconName: "check",
    title: "Best Price",
    description:
      "Enjoy affordable rates on all our laundry and liquor selections. Quality doesn't have to break the bank.",
  },
];

export default function Features() {
  return (
    <div>
      <div className="mb-4 text-3xl font-bold">Our Features</div>
      <div className="flex flex-wrap gap-8">
        {ourFeatures.map((feature) => (
          <FeatureBox key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
}

const FeatureBox = ({
  iconName,
  title,
  description,
}: {
  iconName: IconNameType;
  title: string;
  description: string;
}) => (
  <div className="flex min-w-72 flex-1 flex-col items-center gap-4 rounded-2xl bg-black/5 px-4 py-10 text-center dark:bg-white/5">
    <Icon iconName={iconName} className="size-16 stroke-green-600 dark:stroke-green-700" />
    <div className="text-2xl font-bold">{title}</div>
    <div className="text-lg text-gray-600 dark:text-gray-400">{description}</div>
  </div>
);
