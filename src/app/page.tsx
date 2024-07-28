import CommentsSection from "@/components/commentsSection";
import PartnersLogosSection from "@/components/partnersLogosSection";
import PortfolioSection from "@/components/portfolioSection";
import StatisticsSection from "@/components/statisticsSection";
import HeaderSection from "@/components/headerSection";
import ContactFormSection from "@/components/contactFormSection";
import ServicesSection from "@/components/servicesSection";



export default function Home() {
  return (
    <main className="text-white">
      <HeaderSection/>
      <ServicesSection/>
      <StatisticsSection/>
      <PortfolioSection/>
      <PartnersLogosSection/>
      <CommentsSection/>
      <ContactFormSection/>
    </main>
  );
}
