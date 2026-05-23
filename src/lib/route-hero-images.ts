import homeHeroBg from "@/assets/home-hero-bg.png";
import decisionHeroBg from "@/assets/hero-bg.png";
import predictiveHeroBg from "@/assets/predictive-hero-bg.jpeg";
import agenticHeroBg from "@/assets/agentic-hero-bg.png";
import dataEngHeroBg from "@/assets/de-hero-bg.jpeg";
import wmaHeroBg from "@/assets/wma-bg.jpeg";
import powerPlatformHeroBg from "@/assets/power-platform-hero-bg.png";
import splunkHeroBg from "@/assets/splunk-hero-bg.jpeg";
import sdaHeroBg from "@/assets/sda-bg.jpeg";
import conditionHeroBg from "@/assets/condition-monitoring-hero.jpeg";
import visionHeroBg from "@/assets/vision-analytics-hero.jpeg";
import sapAnalyticsHeroBg from "@/assets/sap-analytics-hero-bg.png";
import sapValueHeroBg from "@/assets/sap-value-hero-bg.jpeg";
import sapScfHeroBg from "@/assets/sap-scf-hero-bg.png";
import sapRiseHeroBg from "@/assets/sap-rise-hero-bg.png";
import sapIbpHeroBg from "@/assets/ibp-hero-bg.png";
import sapEwmHeroBg from "@/assets/ewm-hero-bg.png";
import techFactoryHeroBg from "@/assets/tech-factory-hero-bg.png";
import sapSupportHeroBg from "@/assets/sap-support-hero-bg.png";
import sfx9HeroBg from "@/assets/sfx9/hero-bg.png";
import factorySchedulingHeroBg from "@/assets/factory-scheduling-hero-bg.jpeg";
import inventiqHeroBg from "@/assets/inventiq-hero-bg.jpeg";
import shopfloorHeroBg from "@/assets/shopfloor-hero-bg.jpg";
import insightsHeroBg from "@/assets/insights-hero-bg.jpeg";
import contactHeroBg from "@/assets/contact-hero-bg.jpeg";
import careersHeroBg from "@/assets/careers-bg.jpeg";

export const routeHeroImages: Record<string, string> = {
  "/": homeHeroBg,
  "/decision-intelligence": decisionHeroBg,
  "/predictive-analytics": predictiveHeroBg,
  "/agentic-intelligence": agenticHeroBg,
  "/enterprise-data-engineering": dataEngHeroBg,
  "/intelligent-web-mobile-apps": wmaHeroBg,
  "/microsoft-power-platform": powerPlatformHeroBg,
  "/splunk-ai-applications": splunkHeroBg,
  "/shopfloor-digital-apps": sdaHeroBg,
  "/condition-monitoring": conditionHeroBg,
  "/vision-analytics": visionHeroBg,
  "/sap-analytics-power-bi": sapAnalyticsHeroBg,
  "/sap-value-creation": sapValueHeroBg,
  "/sap-supply-chain-finance": sapScfHeroBg,
  "/sap-rise-implementation": sapRiseHeroBg,
  "/sap-ibp": sapIbpHeroBg,
  "/sap-ewm": sapEwmHeroBg,
  "/tech-factory": techFactoryHeroBg,
  "/sap-application-support": sapSupportHeroBg,
  "/sfx9-mes": sfx9HeroBg,
  "/factory-finite-scheduling": factorySchedulingHeroBg,
  "/inventiq": inventiqHeroBg,
  "/shopfloor": shopfloorHeroBg,
  "/insights-events": insightsHeroBg,
  "/contact": contactHeroBg,
  "/careers": careersHeroBg,
};

const warmed = new Set<string>();

export const preloadHeroImage = (href: string) => {
  if (typeof window === "undefined") return;
  const src = routeHeroImages[href];
  if (!src || warmed.has(src)) return;
  warmed.add(src);
  const img = new Image();
  img.decoding = "async";
  img.src = src;
};