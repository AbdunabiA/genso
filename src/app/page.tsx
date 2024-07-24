import CommentsSection from "@/components/commentsSection";
import PartnersLogosSection from "@/components/partnersLogosSection";
import PortfolioSection from "@/components/portfolioSection";
import StatisticsSection from "@/components/statisticsSection";
import HeaderSection from "@/components/headerSection";
import ContactFormSection from "@/components/contactFormSection";



export default function Home() {
  return (
    <main className="text-white">
      <HeaderSection/>
      <StatisticsSection/>
      <PortfolioSection/>
      <PartnersLogosSection/>
      <CommentsSection/>
      <ContactFormSection/>
    </main>
  );
}
