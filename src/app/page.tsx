import CommentsSection from "@/components/commentsSection";
import PartnersLogosSection from "@/components/partnersLogosSection";
import PortfolioSection from "@/components/portfolioSection";
import StatisticsSection from "@/components/statisticsSection";
import HeaderSection from "@/components/headerSection";



export default function Home() {
  return (
    <main className="text-white">
      <HeaderSection/>
      <StatisticsSection/>
      <PortfolioSection/>
      <PartnersLogosSection/>
      <CommentsSection/>
    </main>
  );
}
