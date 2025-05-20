import type {MetaFunction} from "@remix-run/node";
import Contact from "~/components/Contact";
import Features from "~/components/Features";
import Feedback from "~/components/Feedback";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Services from "~/components/Services";

export const meta: MetaFunction = () => {
  return [
    { title: "Laundry & Liquor in Lakeside, Pokhara | Ashish Cold Stores" },
    {
      name: "description",
      content:
        "Fast laundry services and a wide liquor selection in Lakeside, Kaski (33700). Visit Ashish Cold Stores for same-day laundry and top local and imported liquors.",
    },
    { name: "keywords", content: "laundry service, fast laundry service, liquor store, Lakeside, Pokhara, Kaski, same-day laundry, wine shop, 33700, " },
    { name: "author", content: "Ashish Cold Stores and Laundry Service" },
    { name: "robots", content: "index, follow" },
  ];
};

export default function Index() {
  return (
    <div className="mb-4 flex flex-col gap-16 p-4 font-mono">
      <Header />
      <Services />
      <Features />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
}
