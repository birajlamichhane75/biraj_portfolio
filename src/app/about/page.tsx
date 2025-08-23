import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";


const About = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Main content wrapper */}
      <div className="md:ml-96 pt-24 p-4 md:p-16">
        <Wrapper>
            <p>This is proejcts Page</p>
        </Wrapper>
      </div>
    </div>
  );
};

export default About;
