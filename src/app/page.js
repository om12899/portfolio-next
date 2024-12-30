import HomepageComponent from "@/Components/HomepageComponent";
import Layout from "@/Layout/Layout";

const meta = {
  title: "Om Thakkar - Home",
  description:
    "Creating inclusive experiences, pixel by pixel. Welcome to portfolio website of Om Thakkar!",
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
function Home() {
  return (
    <Layout>
      <HomepageComponent />
    </Layout>
  );
}

export default Home;
