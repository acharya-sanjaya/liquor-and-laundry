import type {MetaFunction} from "@remix-run/node";
import Contact from "~/components/Contact";
import Features from "~/components/Features";
import Feedback from "~/components/Feedback";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Services from "~/components/Services";

export const meta: MetaFunction = () => {
  return [
    {title: "Ashish Cold Stores and Laundry Service"},
    {name: "description", content: "Welcome to Remix!"},
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
