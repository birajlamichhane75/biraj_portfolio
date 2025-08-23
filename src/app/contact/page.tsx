import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";


const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Main content wrapper */}
      <div className="md:ml-96 pt-24 p-4 md:p-16">
        <Wrapper>
            <p>This is Contact Page</p>
        </Wrapper>
      </div>
    </div>
  );
};

export default Contact;
