import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import ChatBot from './components/chatbot';
import Products from './components/Product';
import bgImage from './assets/background.jpg'; // add your background image here
import CaseStudies from './components/CaseStudies';
import Industries from './components/Industries';
import Blog from './components/Blogs';
import Careers from './components/Careers';
import Testimonials from './components/Testmonials';
import FAQ from './components/FAQ';

function App() {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', // fixed background
      }}
    >
      {/* Transparent overlay for gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/50 to-purple-600/50 z-0" />

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Products />
          <CaseStudies/>
          <Industries />
          <Blog />
          <Careers />
          <Contact />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
        <ChatBot botName="AssistBot" />
      </div>
    </div>
  );
}

export default App;

// import './App.css';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Services from './components/Services';
// import Products from './components/Products';
// import Portfolio from './components/Portfolio';
// import Industries from './components/Industries';
// import Blog from './components/Blog';
// import Careers from './components/Careers';
// import Contact from './components/Contact';
// import Testimonials from './components/Testimonials';
// import FAQ from './components/FAQ';
// import Footer from './components/Footer';
// import ChatBot from './components/ChatBot';

// import bgImage from './assets/background.jpg'; // your background image

// function App() {
//   return (
//     <div
//       className="relative min-h-screen"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         backgroundAttachment: 'fixed', // fixed background
//       }}
//     >
//       {/* Transparent gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/50 to-purple-600/50 z-0" />

//       {/* Main Content */}
//       <div className="relative z-10">
//         <Navbar />
//         <main>
//           <Hero />          {/* 1. Home Page */}
//           <About />         {/* 2. About Us */}
//           <Services />      {/* 3. Services / Solutions */}
//           <Products />      {/* 4. Products */}
//           <Portfolio />     {/* 5. Case Studies / Portfolio */}
//           <Industries />    {/* 6. Industries We Serve */}
//           <Blog />          {/* 7. Blog / Insights */}
//           <Careers />       {/* 8. Careers */}
//           <Contact />       {/* 9. Contact Us */}
//           <Testimonials />  {/* 10. Testimonials / Clients */}
//           <FAQ />           {/* 11. FAQ Section */}
//         </main>
//         <Footer />          {/* 12. Footer */}
//         <ChatBot botName="AssistBot" />
//       </div>
//     </div>
//   );
// }

// export default App;
