import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import RootLayout from "./Layouts/RootLayout";
import HelpLayout from "./Layouts/HelpLayout";
import Faq from "./Pages/Help/Faq";
import Contact, { contactAction } from "./Pages/Help/Contact";
import NotFound from "./Pages/NotFound";
import CareerLayout from "./Layouts/CareerLayout";
import Careers, { careersLoader } from "./Pages/Careers/Careers";
import CareerDetails, { careerDetailsLoader } from "./Pages/Careers/CareerDetails";
import CareersError from "./Pages/Careers/CareersError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />}/>
        <Route path="contact" element ={<Contact />} action ={contactAction} />
      </Route>

      <Route path="careers" element={<CareerLayout />}  errorElement={<CareersError />}>
        <Route 
          index 
          element ={<Careers />} 
          loader={careersLoader}
        />
          

        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
         
        />
      </Route>


      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;