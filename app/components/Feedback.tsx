import Icon from "~/Icons";

export default function Feedback() {
  const reviews = [
    {
      name: "Emily Carter",
      comment:
        "Honestly impressed with how quick and fresh everything came back. I dropped off a full load in the morning and it was all neatly folded and ready the same afternoon. Super convenient while traveling!",
    },
    {
      name: "Jake Thompson",
      comment:
        "Used the 3-hour express service and it saved my day. Clothes were clean, smelled nice, and packed really well. Great option if you're in a rush or just passing through.",
    },
    {
      name: "Samantha Lee",
      comment:
        "The laundry service was reliable and quick. Got everything back clean and folded, but a couple of shirts had minor wrinkles. Still very happy overall — would definitely use again.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 md:flex-row md:flex-wrap">
      <div className="text-3xl font-bold">Client's Reviews</div>
      {reviews.map((review) => (
        <Review key={review.name} {...review} />
      ))}
    </div>
  );
}

const Review = ({name, comment}: {name: string; comment: string}) => (
  <div className="flex flex-col gap-4 rounded-xl bg-black/5 p-4 shadow-[0_0_10px_0] shadow-black dark:bg-white/5 dark:shadow-white">
    <div className="flex items-center gap-4">
      <div>
        <div className="flex items-center gap-2">
          <p className="text-lg font-bold">{name}</p>
          {Array(5)
            .fill(0)
            .map((_, key) => (
              <Icon
                key={key}
                iconName="star"
                className="size-4 fill-yellow-500 stroke-yellow-600 dark:fill-yellow-500 dark:stroke-yellow-400"
              />
            ))}
        </div>

        <p className="text-gray-600 dark:text-gray-400">{comment}</p>
      </div>
    </div>
  </div>
);
