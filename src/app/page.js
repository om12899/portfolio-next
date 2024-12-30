import HomepageComponent from "@/Components/HomepageComponent";
import Layout from "@/Layout/Layout";

const meta = {
  title: "Om Thakkar - Home",
  description:
    "Creating inclusive experiences, pixel by pixel. Welcome to portfolio website of Om Thakkar!",
};
function Home() {
  return (
    <Layout>
      <HomepageComponent />
    </Layout>
  );
}

export default Home;
