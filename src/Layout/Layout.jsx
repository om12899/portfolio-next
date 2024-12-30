import Navbar from "@/components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="mx-24 flex flex-col">
      <div className="fixed bg-dark-gray/50 top-0 left-0 w-full z-10">
        <Navbar />
      </div>
      <div className="flex-grow mt-16 p-4">
        {/* Adjust mt-16 based on the height of your Navbar */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
