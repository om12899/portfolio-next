import Layout from "@/Layout/Layout";
import ContactComponent from "./(components)/contactComponent";

const meta = {
  title: "Om Thakkar - Contact",
  description:
    "Available for Discussions, Projects, Questions and Coffee. Feel free to reach out to me on om12899@gmail.com for any queries. Based in Northern Maharashtra Region, India",
};
export const metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    type: "website",
    title: meta.title,
    description: meta.description,
    siteName: "Om Thakkar",
  },
  twitter: {
    creator: "Om Thakkar",
    site: "@iamomthakkar",
    title: meta.title,
    description: meta.description,
  },
};
function Contact() {
  return (
    <Layout>
      <ContactComponent />
    </Layout>
  );
}

export default Contact;
