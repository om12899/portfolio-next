import Layout from "@/Layout/Layout";
import Content from "./(components)/Content";
const meta = {
  title: "Om Thakkar - Archive",
  description:
    " Some of the work produced during my professional development or while honing my skills in a hobby. Feel free to reach out to me on om12899@gmail.com for any queries. Based in Northern Maharashtra Region, India",
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

function Archive() {
  return (
    <Layout>
      <Content />
    </Layout>
  );
}

export default Archive;
