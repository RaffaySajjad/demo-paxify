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
import HeroBanner from "./HeroBanner";

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
      heading: "Defining the future of digital banking",
      body: "Business and retail consumers are looking to engage with financial service providers who can offer innovative services that go beyond offering traditional banking products online",
      buttons: [
        {
          text: "Contact us today!",
          cta: "#contact-us",
          type: "primary",
        },
      ],
    },
    solutions: {
      title: "case_studies.ccb.solutions.title",
      cards: [
        {
          title: "case_studies.ccb.solutions.enrichment.title",
          thumbnail:
            "/planto-business-solutions/ccb-poc/solutions-swiper/enrichment.png",
          description: "case_studies.ccb.solutions.enrichment.description",
          cta: ENRICHMENT_PAGE("en"),
        },
        {
          title: "case_studies.ccb.solutions.no-code.title",
          thumbnail:
            "/planto-business-solutions/ccb-poc/solutions-swiper/no-code.png",
          description: "case_studies.ccb.solutions.no-code.description",
          cta: ENGAGEMENT_PAGE("en"),
        },
        {
          title: "case_studies.ccb.solutions.segmentation.title",
          thumbnail:
            "/planto-business-solutions/ccb-poc/solutions-swiper/value-added.png",
          description: "case_studies.ccb.solutions.segmentation.description",
          cta: SEGMENTATION_PAGE("en"),
        },
        {
          title: "case_studies.ccb.solutions.planto-cogo.title",
          thumbnail:
            "/planto-business-solutions/ccb-poc/solutions-swiper/planto-cogo.png",
          description: "case_studies.ccb.solutions.planto-cogo.description",
          cta: ESG_PAGE("en"),
        },
        {
          title: "case_studies.ccb.solutions.white-labelled.title",
          thumbnail:
            "/planto-business-solutions/ccb-poc/solutions-swiper/white-labelled.png",
          description: "case_studies.ccb.solutions.white-labelled.description",
          cta: PFM_PAGE("en"),
        },
        {
          title: "case_studies.ccb.solutions.gamification.title",
          thumbnail:
            "/planto-business-solutions/ccb-poc/solutions-swiper/gamification.png",
          description: "case_studies.ccb.solutions.gamification.description",
          cta: GAMIFICATION_PAGE("en"),
        },
      ],
    },
    services: {
      title: "Our Services",
      cards: [
        {
          title: "Open Banking API Development and Testing",
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
            "Leverage Planto's product, technology and user experience expertise for your own products.",
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
          "Email us at <u>hello@planto.hk</u> to learn more about the power of PFM & personalization",
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
      <Features />
      <Footer />
    </main>
  );
}
