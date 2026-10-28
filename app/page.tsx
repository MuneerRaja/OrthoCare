import Container from "./(components)/Container";
import BookAppointmentCallToAction from "./(components)/homepage/BookAppointmentCallToAction";
import Care from "./(components)/homepage/Care";
import Certifications from "./(components)/homepage/Certifications";
import Hero from "./(components)/homepage/Hero";
import PatientTransformations from "./(components)/homepage/PatientTransformations";
import { Pricing } from "./(components)/homepage/Pricing";
import VisitUs from "./(components)/homepage/VisitUs";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Care />
      <PatientTransformations />
      <Pricing />
      <VisitUs />
      <Certifications />
      <BookAppointmentCallToAction />
    </main>
  )
}
