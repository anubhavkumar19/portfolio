import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import SkillsPreview from "@/components/home/SkillsPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <HeroSection />
      </section>

      {/* STATS */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-muted/30 dark:bg-muted/10" />
        <StatsSection />
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-28">
        <FeaturedProjects />
      </section>

      {/* SKILLS PREVIEW */}
      <section className="relative py-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <SkillsPreview />
      </section>

      {/* CTA */}
      <section className="py-32">
        <CTASection />
      </section>
    </Layout>
  );
};

export default Index;
