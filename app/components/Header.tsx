import shopImage from "~/assets/shop2.jpg";
export default function Header() {
  return (
    <div className="flex w-full flex-wrap rounded-2xl bg-black/5 p-4 dark:bg-white/5">
      <div className="flex min-h-96 w-full flex-col items-center justify-center gap-10 p-8 text-center md:w-1/2">
        <div className="flex items-center justify-center text-center text-4xl font-bold">
          <div>Ashish Cold Stores and Laundry Service</div>
        </div>
        <div className="text-lg text-gray-600 dark:text-gray-400">
          We provide top-notch laundry services with same-day options and an extensive selection of
          local and imported liquors.
        </div>
      </div>
      <img src={shopImage} alt="shop" className="h-96 flex-1 rounded-md" />
    </div>
  );
}
