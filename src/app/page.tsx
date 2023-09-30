"use client";

import Footer from "@/components/Footer/footer";
import { lazy } from "react";
import Home from "@/components/Home/home";
import Features from "@/components/Features/features";
import {
  CUSTOM_SOLUTIONS_PAGE,
  DAH_SING,
  ENGAGEMENT_PAGE,
  ENRICHMENT_PAGE,
  ESG_PAGE,
  GAMIFICATION_PAGE,
  OPEN_BANKING_PAGE,
  PFM_PAGE,
  SEGMENTATION_PAGE,
} from "@/utils/routes";
import HeroBanner from "./business/HeroBanner";
import CardGrid from "./business/CardGrid";
import Support from "@/components/Support/support";

export default function Main() {
  const data = {
    hero: {
      image: {
        desktop: {
          src: "/planto-business-solutions/home/desktop/business-landing.png",
          maxWidth: "1920px",
        },
        mobile: {
          src: "/planto-business-solutions/home/mobile/business-landing.png",
        },
      },
      heading: "Defining the future of Businesses",
      body: "Business and retail consumers are looking to engage with innovative service providers who can offer innovative services that go beyond offering traditional solutions",
      buttons: [
        {
          text: "Contact us today!",
          cta: "#contact-us",
          type: "primary",
        },
      ],
    },
    solutions: {
      id: "showcase",
      title: "Our Solutions",
      cards: [
        {
          title: "Transaction Enrichment Services",
          thumbnail:
            "/planto-business-solutions/ccb-poc/solutions-swiper/enrichment.png",
          description:
            "Enrich data for insights, enabling new product features and effective cross-selling.",
          cta: ENRICHMENT_PAGE("en"),
        },
        {
          title: "Business Dashboards",
          thumbnail:
            "/planto-business-solutions/ccb-poc/solutions-swiper/no-code.png",
          description:
            "Utilize data at all level, ranging from customer segmentation to engagement.",
          cta: ENGAGEMENT_PAGE("en"),
        },
        {
          title: "AI driven customer segmentation",
          thumbnail:
            "/planto-business-solutions/ccb-poc/solutions-swiper/value-added.png",
          description:
            "Improve targeting and cross selling capability with AI and machine learning",
          cta: SEGMENTATION_PAGE("en"),
        },
        {
          title: "Paxify ESG",
          thumbnail:
            "/planto-business-solutions/ccb-poc/solutions-swiper/planto-cogo.png",
          description:
            "Launch ESG reports & recommendations tailored for each user based on their data",
          cta: ESG_PAGE("en"),
        },
        {
          title: "White Labelled Financial Wellness",
          thumbnail:
            "/planto-business-solutions/ccb-poc/solutions-swiper/white-labelled.png",
          description:
            "Launch your own financial management features using market tested journies.",
          cta: PFM_PAGE("en"),
        },
        {
          title: "Gamified engagement",
          thumbnail:
            "/planto-business-solutions/ccb-poc/solutions-swiper/gamification.png",
          description:
            "Paxify Gamify is a no-code platform that allows financial institutions or fintech companies to revolutionize their customer experience.",
          cta: GAMIFICATION_PAGE("en"),
        },
      ],
    },
    services: {
      id: "services",
      title: "Our Services",
      cards: [
        {
          title: "FinTech Development and Testing",
          thumbnail:
            "/planto-business-solutions/ccb-poc/solutions-swiper/open-banking.png",
          description:
            "Become market tested, open banking ready in a matter of months.",
          cta: OPEN_BANKING_PAGE("en"),
        },
        {
          title: "Custom Solution and Consultation",
          thumbnail:
            "/planto-business-solutions/ccb-poc/solutions-swiper/consultation.png",
          description:
            "Our technological expertise range from Content Creation to fully integrated solutions.",
          cta: CUSTOM_SOLUTIONS_PAGE("en"),
        },
      ],
    },
    caseStudies: {
      title: "Casestudies",
      cards: [
        {
          logo: "/logos/dah_sing.png",
          title:
            "Dah Sing bank has successfully increased email open rate and eventual product conversion - read more",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas tortor lacus, at. Eget erat eu lorem et quisque.",
          cta: DAH_SING("en"),
        },
      ],
    },
    contactUs: {
      background: "/planto-business-solutions/ccb-poc/founding_members.png",
      cardBackground: "/images/content_card.png",
      content: {
        heading: "Contact Us",
        description:
          "Email us at <u>support@paxify.io</u> to learn more about the power of PFM & personalization",
      },
    },
  };

  return (
    <main>
      {/* <Home /> */}
      <HeroBanner
        image={data.hero.image}
        heading={data.hero.heading}
        body={data.hero.body}
        buttons={data.hero.buttons}
      />
      <CardGrid data={data.solutions} />
      <CardGrid data={data.services} />
      <Features />
      <Footer />
      <Support />
    </main>
  );
}
