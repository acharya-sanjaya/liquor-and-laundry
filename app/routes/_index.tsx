import type {MetaFunction} from "@remix-run/node";
import Contact from "~/components/Contact";
import Features from "~/components/Features";
import Feedback from "~/components/Feedback";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Services from "~/components/Services";

export const meta: MetaFunction = () => {
  return [
    { title: "Ashish Cold Stores and Laundry Service, Lakeside Pokhara" },
    {
      name: "description",
      content:
        "Cold storage and professional laundry services in Lakeside, Pokhara. Fast service, quality care for clothes and beverages.",
    },
    {
      name: "keywords",
      content:
        "Ashish Cold Stores, Laundry Service Pokhara, Lakeside laundry, cold storage Pokhara, fast laundry Nepal, Pokhara wash and fold, dry cleaning, Pokhara business services",
    },
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
