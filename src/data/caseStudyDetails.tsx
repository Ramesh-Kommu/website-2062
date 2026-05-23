import type { ReactNode } from "react";

export type DetailMeta = { h: string; t: ReactNode };
export type DetailMetric = { v: ReactNode; s: string };
export type ImpactMetric = { label: string; v: ReactNode; s: string };
export type PipelineStep = { title: string; sub: string };
export type DashboardGroup = { h: string; items: string[] };

export type CaseDetail = {
  slug: string;
  eyebrow: string;
  heroTitle: ReactNode;
  heroSubtitle: string;
  meta: DetailMeta[];
  painPointsLabel: string;
  painPointsHeading: ReactNode;
  painPoints: string[];
  afterLabel: string;
  afterHeading: ReactNode;
  afterDescription: string;
  afterMetrics: DetailMetric[];
  archEyebrow: string;
  archTitle: string;
  pipeline: PipelineStep[];
  pipelineLabels?: string[];
  whatBuiltEyebrow: string;
  whatBuiltTitle: string;
  dashboardGroups: DashboardGroup[];
  impactHeading: string;
  impactMetrics: ImpactMetric[];
  outcomeHeading: string;
  outcome: ReactNode;
  attribution: string;
};

const yellow = (s: ReactNode) => <span className="text-[#C8FF01]">{s}</span>;

export const caseDetails: Record<string, CaseDetail> = {
  "cfo-intelligence-suite": {
    slug: "cfo-intelligence-suite",
    eyebrow: "Customer Success Story · Leading Pharma Glass Manufacturing",
    heroTitle: (
      <>
        CFO Intelligence Suite<br />For Leading Pharma Glass Manufacturing
      </>
    ),
    heroSubtitle:
      "Transforming SAP S/4HANA RISE financial data into a live Power BI command centre - instant, accurate visibility across every dimension of the business.",
    meta: [
      { h: "Business Context", t: <>Multi-plant manufacturing with complex {yellow("SAP financial structures")} needing unified reporting</> },
      { h: "The Challenge", t: <>{yellow("Fragmented MIS")} across silos — no single truth for CFO, costly manual reconciliation</> },
      { h: "Our Solution", t: <>Governed pipeline: {yellow("SAP → Azure → Power BI")} — 24 live dashboards, zero manual effort</> },
    ],
    painPointsLabel: "Pain Points",
    painPointsHeading: <>Finance Flying<br />Blind Across Ledgers</>,
    painPoints: [
      "No single truth — plant, segment & entity data in silos",
      "Month-end MIS: 3–5 days of manual Excel aggregation",
      "COPA, Fixed Assets & P&L never in sync with SAP actuals",
      "No real-time view of NWC days, receivables, variances",
      "Quarterly statements took weeks to reconcile",
      "CAPEX & overheads tracked only in offline reports",
    ],
    afterLabel: "After",
    afterHeading: <>One Governed Pipeline<br />One Cockpit</>,
    afterDescription:
      "SAP S/4HANA RISE feeds CDS views and OData services orchestrated through Azure Data Factory into an Azure SQL semantic model — surfaced live in Power BI for 24 dashboards across financials, working capital, cost & revenue.",
    afterMetrics: [
      { v: "3–5 Days", s: "→ Hours" },
      { v: "0", s: "Manual recon" },
      { v: "Live", s: "Drill-down" },
    ],
    archEyebrow: "Data Architecture",
    archTitle: "SAP to CFO Screen — Governed & Live",
    pipeline: [
      { title: "SAP S/4HANA RISE", sub: "SOURCE OF TRUTH\nCLOUD ERP" },
      { title: "CDS → OData Services", sub: "GOVERNED API\nROBUST EXPOSURE" },
      { title: "Azure Data Factory", sub: "ORCHESTRATION\nSCHEDULING" },
      { title: "Azure SQL Database", sub: "SEMANTIC MODEL\nREPORT RQ" },
      { title: "Power BI Service", sub: "CFO DASHBOARDS\nSELF-SERVICE" },
    ],
    pipelineLabels: ["CDS VIEWS —\nSEMANTIC LAYER", "INCREMENTAL\nPIPELINE · ETL", "STRUCTURED\nSTORAGE", "DIRECTQUERY ·\nLIVE"],
    whatBuiltEyebrow: "What We Built — 24 Power BI Dashboard Modules",
    whatBuiltTitle: "Complete Financial Intelligence for the CFO Office",
    dashboardGroups: [
      { h: "Financial Statements", items: ["Income Statement", "Balance Sheet", "Cash Flow", "Summary P&L", "Financial Summary", "Qrtrly Fin Stmt", "COPA Analysis"] },
      { h: "Cost & Operations", items: ["Prdn Variance", "Prdn Fixed Costs", "Overheads", "Purchases & Costs", "Fixed Assets", "CAPEX Tracker"] },
      { h: "Working Capital", items: ["Receivables", "Payables", "NWC Days", "NWC Summary", "Inventories", "OpFCF"] },
      { h: "Revenue & KPIs", items: ["Revenue Plant/Seg", "Volume & Purchases", "Customer Conc.", "Sales Break-up", "Key Ratios"] },
    ],
    impactHeading: "The Impact",
    impactMetrics: [
      { label: "EFFORT REDUCTION", v: <>80{yellow("%")}</>, s: "MIS prep: 3–5 days → hours every cycle" },
      { label: "LIVE DASHBOARDS", v: "24", s: "Floor to boardroom — one Power BI workspace" },
      { label: "SINGLE SOURCE OF TRUTH", v: <>1 {yellow("View")}</>, s: "SAP actuals → CFO screen, no reconciliation" },
      { label: "REAL-TIME DRILL-DOWN", v: yellow("Live"), s: "Plant · segment · entity — always current" },
    ],
    outcomeHeading: "Outcome",
    outcome: (
      <>
        Finance now speaks the same language as operations. The CFO has a single cockpit connecting SAP actuals to every strategic decision - {yellow("production costs, working capital, cash - instantly,")} without touching a spreadsheet.
      </>
    ),
    attribution: "LEADING PHARMA GLASS MANUFACTURING · CARBYNETECH DELIVERY",
  },

  "procurement-logistics-intelligence": {
    slug: "procurement-logistics-intelligence",
    eyebrow: "Customer Success Story · Leading Battery Manufacturing Company",
    heroTitle: <>Procurement & Logistics<br />Intelligence, Reimagined.</>,
    heroSubtitle:
      "End-to-end procurement and logistics intelligence powered by SAP-driven analytics — built on a unified on-premise SQL Server + Power BI data layer.",
    meta: [
      { h: "Business Context", t: <>Multi-plant battery manufacturing with heavy dependency on {yellow("lead, alloys & components")} — requiring unified visibility across PAN India operations.</> },
      { h: "The Challenge", t: <>Fragmented procurement view across systems - no real-time {yellow("PPV tracking")}, weak contract compliance, and limited supplier insights leading to cost leakage.</> },
      { h: "Our Solution", t: <>Governed analytics layer: {yellow("SAP → SQL Server → Dashboards")} — real-time procurement, supplier & inventory intelligence with zero manual effort.</> },
    ],
    painPointsLabel: "Pain Points",
    painPointsHeading: <>Procurement Spend Visibility Challenges</>,
    painPoints: [
      "No consolidated procurement visibility across plants",
      "Manual tracking of purchase price variance",
      "Inefficient supplier performance monitoring",
      "Lack of transparency in contract vs off-contract spend",
      "Difficulty identifying cost overruns & savings opportunities",
      "Limited insight into inventory ageing & logistics costs",
    ],
    afterLabel: "After",
    afterHeading: <>One Governed Pipeline<br />One Command Centre</>,
    afterDescription:
      "SAP S/4HANA RISE feeds CDS views and OData services consolidated through an on-premise SQL Server data warehouse — surfaced live in Power BI for 20+ dashboards across procurement, suppliers, pricing & logistics.",
    afterMetrics: [
      { v: <>35%</>, s: "↓ Reporting time" },
      { v: "0", s: "Manual recon" },
      { v: "Live", s: "Drill-down" },
    ],
    archEyebrow: "Data Architecture",
    archTitle: "SAP to CFO Screen — Governed & Live",
    pipeline: [
      { title: "SAP S/4HANA RISE", sub: "SOURCE_SYSTEM" },
      { title: "CDS Views", sub: "SEMANTIC_LAYER" },
      { title: "OData Extraction", sub: "PROTOCOL" },
      { title: "On-Premise SQL Server", sub: "ON_PREM_DATA\nWAREHOUSE" },
      { title: "Power BI", sub: "CONSUMPTION" },
    ],
    pipelineLabels: ["CDS VIEWS —\nSEMANTIC LAYER", "INCREMENTAL\nPIPELINE · ETL", "STRUCTURED\nSTORAGE", "DIRECTQUERY ·\nLIVE"],
    whatBuiltEyebrow: "What We Built — 22+ Power BI Dashboard Modules",
    whatBuiltTitle: "Complete Procurement & Logistics Intelligence",
    dashboardGroups: [
      { h: "Procurement Overview", items: ["Purchases", "Categories", "Trends"] },
      { h: "Supplier & Material Analytics", items: ["Suppliers", "Materials", "Spend"] },
      { h: "Pricing & Cost Intelligence", items: ["Pricing", "Landed Cost", "PPV"] },
      { h: "Performance & Logistics", items: ["Savings", "OPEX", "Inventory", "DC Ops"] },
    ],
    impactHeading: "The Impact",
    impactMetrics: [
      { label: "REPORTING TIME", v: <>35{yellow("%")}</>, s: "Procurement reporting time" },
      { label: "COST VISIBILITY", v: <>20{yellow("%")}</>, s: "Visibility into cost drivers" },
      { label: "COST LEAKAGE", v: <>18{yellow("%")}</>, s: "Cost leakages via contract compliance" },
      { label: "SOURCING SPEED", v: <>25{yellow("%")}</>, s: "Decision speed for sourcing" },
    ],
    outcomeHeading: "Outcome",
    outcome: (
      <>
        We now have a single, reliable view of procurement, supplier performance, and logistics costs - {yellow("enabling faster and more informed decisions")} across operations.
      </>
    ),
    attribution: "PROCUREMENT LEADERSHIP · LEADING BATTERY MANUFACTURING ",
  },

  "sap-analytics-animal-nutrition": {
    slug: "sap-analytics-animal-nutrition",
    eyebrow: "Customer Success Story · Natural Remedies",
    heroTitle: <>Unifying SAP-driven analytics for a leader<br />in animal nutrition.</>,
    heroSubtitle:
      "A unified analytics layer across sales, inventory, and financial performance — engineered on SAP ECC, SAP BW, and Power BI.",
    meta: [
      { h: "Business Context", t: <>Multi-plant animal nutrition manufacturing with complex {yellow("SKU mix and global distribution,")} driven by {yellow("SAP ECC")} as system of record.</> },
      { h: "The Challenge", t: <>Fragmented {yellow("SAP ECC & BW reporting")} — manual consolidation, no unified visibility across working capital, sales, and customer performance.</> },
      { h: "Our Solution", t: <>Modeled {yellow("SAP BW → Power BI")} layer delivering governed, real-time dashboards for Sales, Production, and Executive insights.</> },
    ],
    painPointsLabel: "Pain Points",
    painPointsHeading: <>Fragmented Financial & Operational Visibility</>,
    painPoints: [
      "Disconnected SAP ECC & BW reporting layers across functions",
      "No unified view across sales, inventory, and finance",
      "Delayed reporting cycles driven by manual consolidation",
      "Poor visibility into working capital — inventory & receivables",
      "Lack of actionable insight at brand and SKU level",
      "Difficulty tracking customer churn and new revenue streams",
    ],
    afterLabel: "After",
    afterHeading: <>One Unified Data Layer<br />One Business View</>,
    afterDescription:
      "A governed SAP ECC + BW data foundation, modeled into a centralized Power BI layer — delivering a single, trusted view across sales, inventory, and financial performance. Real-time dashboards replace manual consolidation, enabling faster, insight-driven decisions across functions.",
    afterMetrics: [
      { v: "35%", s: "Reporting turnaround" },
      { v: "20%", s: "Working capital visibility" },
      { v: "15%", s: "Sales planning accuracy" },
    ],
    archEyebrow: "Data Architecture",
    archTitle: "SAP to CFO Screen — Governed & Live",
    pipeline: [
      { title: "SAP ECC", sub: "SOURCE\nTRANSACTIONAL" },
      { title: "SAP BW", sub: "WAREHOUSE\nM-CUBES" },
      { title: "Data Modeling Layer", sub: "STAR SCHEMA · DAX" },
      { title: "Power BI Dataset", sub: "GOVERNED · OPTIMIZED" },
      { title: "Executive Dashboards", sub: "SALES · OPS · CFO" },
    ],
    pipelineLabels: ["CDS VIEWS —\nSEMANTIC LAYER", "INCREMENTAL\nPIPELINE · ETL", "STRUCTURED\nSTORAGE", "DIRECTQUERY ·\nLIVE"],
    whatBuiltEyebrow: "What We Built — 22+ Power BI Dashboard Modules",
    whatBuiltTitle: "Complete Procurement & Logistics Intelligence",
    dashboardGroups: [
      { h: "Financial Statements", items: ["P&L", "Cash Flow", "Contribution"] },
      { h: "Cost & Operations", items: ["Plant", "Material", "Stock"] },
      { h: "Working Capital", items: ["Inventory", "Ageing", "Receivables"] },
      { h: "Revenue & KPIs", items: ["Sales", "Brand", "Customers", "DC Ops"] },
    ],
    impactHeading: "The Impact",
    impactMetrics: [
      { label: "REPORTING TIME", v: <>35{yellow("%")}</>, s: "Reporting Turnaround" },
      { label: "COST VISIBILITY", v: <>20{yellow("%")}</>, s: "Working Capital Visibility" },
      { label: "COST LEAKAGE", v: <>15{yellow("%")}</>, s: "Sales Planning Accuracy" },
      { label: "SOURCING SPEED", v: <>30{yellow("%")}</>, s: "Manual Reporting Effort" },
    ],
    outcomeHeading: "Outcome",
    outcome: (
      <>
        We now have a single, reliable view across sales, inventory, and financial performance - {yellow("enabling faster, more informed decisions across every level")} of the business.
      </>
    ),
    attribution: "LEADING PHARMA BASED COMPANY",
  },

  "fertis-sap-decision-intelligence": {
    slug: "fertis-sap-decision-intelligence",
    eyebrow: "Customer Success Story · Carbynetech",
    heroTitle: <>SAP S/4HANA RISE data<br />into decision-grade intelligence.</>,
    heroSubtitle:
      "A unified Power BI layer over CDS Views, OData and Azure — replacing fragmented Excel MIS with real-time Sales, Production and CFO reporting.",
    meta: [
      { h: "Business Context", t: <>Multi-plant fertilizer operations with complex {yellow("SAP financial structures")} needing unified reporting</> },
      { h: "The Challenge", t: <>Reporting locked in {yellow("SAP - no single source")} of truth, heavy manual MIS effort</> },
      { h: "Our Solution", t: <>Governed pipeline: {yellow("SAP → Azure → Power BI")} — real-time dashboards, zero manual work</> },
    ],
    painPointsLabel: "Pain Points",
    painPointsHeading: <>Finance Flying<br />Blind Across Ledgers</>,
    painPoints: [
      "Fragmented SAP reporting",
      "No real-time visibility",
      "Manual Excel-based MIS",
      "Delayed decision making",
      "Poor working capital tracking",
    ],
    afterLabel: "After",
    afterHeading: <>One Governed Data Pipeline<br />One Decision-Grade View</>,
    afterDescription:
      "Unified SAP S/4HANA RISE data into a centralized Power BI layer — delivering a single, real-time view across finance, sales, and procurement.",
    afterMetrics: [
      { v: "30%", s: "Faster reporting" },
      { v: "25%", s: "Better procurement visibility" },
      { v: "15%", s: "Improved forecast accuracy" },
    ],
    archEyebrow: "Data Architecture",
    archTitle: "SAP → Azure → Power BI",
    pipeline: [
      { title: "SAP S/4HANA RISE", sub: "SOURCE OF TRUTH" },
      { title: "CDS Views", sub: "MODELED SEMANTICS" },
      { title: "OData Extraction", sub: "SERVICE-ENABLED\nAPIS" },
      { title: "Azure Data Factory", sub: "ORCHESTRATION & ELT" },
      { title: "Azure SQL", sub: "CURATED WAREHOUSE" },
      { title: "Power BI", sub: "ROLE-BASED\nDASHBOARDS" },
    ],
    whatBuiltEyebrow: "What We Built — 16+ Power BI Dashboard Modules",
    whatBuiltTitle: "Delivered Power BI suite",
    dashboardGroups: [
      { h: "Financial Statements", items: ["P&L", "EBITDA / PBT", "Cost-to-Sales", "Group Revenue"] },
      { h: "Cost & Operations", items: ["PR / PO / GR", "Cycle Time", "Vendor Delays", "Material Spend"] },
      { h: "Working Capital & Ratios", items: ["Current / Quick / Cash", "Inventory Turn", "AR / AP", "Vendor Due Days"] },
      { h: "Revenue & Sales KPIs", items: ["Region Growth", "Top Customers", "Product Mix", "Target vs Variance", "Forecast"] },
    ],
    impactHeading: "The Impact",
    impactMetrics: [
      { label: "FASTER", v: <>30{yellow("%")}</>, s: "Reduction in reporting cycle time across finance & ops" },
      { label: "LOWER", v: <>25{yellow("%")}</>, s: "Procurement delays from PO-GR cycle visibility" },
      { label: "HIGHER", v: <>15{yellow("%")}</>, s: "Improvement in revenue visibility & forecast accuracy" },
      { label: "LESS", v: <>40{yellow("%")}</>, s: "Manual effort eliminated from MIS preparation" },
    ],
    outcomeHeading: "Outcome",
    outcome: (
      <>
        We moved from {yellow("chasing spreadsheets")} to opening a dashboard. {yellow("Sales, procurement and the CFO office")} now look at the same numbers at the same time. Carbynetech didn't just build reports, they shortened the distance between {yellow("SAP and a decision.")}
      </>
    ),
    attribution: "Head – Analytics, Agri-Input Manufacturing Company",
  },

  "finsights-multi-cloud-cost": {
    slug: "finsights-multi-cloud-cost",
    eyebrow: "Customer Success Story · Genpact India",
    heroTitle: <>FinSights FinOps Platform for Multi-Cloud<br />Cost Intelligence</>,
    heroSubtitle:
      "Real-time visibility across AWS, Azure, and GCP cloud spend — unified through Microsoft Fabric and surfaced in Power BI.",
    meta: [
      { h: "Business Context", t: <>Multi-cloud setup {yellow("(AWS, Azure, GCP)")} with large-scale {yellow("distributed spend and 200+ stakeholders.")}</> },
      { h: "The Challenge", t: <>Manual reconciliation, {yellow("no real-time visibility, fragmented billing,")} and no {yellow("unified cost")} governance.</> },
      { h: "Our Solution", t: <>FinInsights on Microsoft Fabric—unifying billing sources with {yellow("automated tracking")} and {yellow("role-based")} dashboards.</> },
    ],
    painPointsLabel: "Pain Points",
    painPointsHeading: <>Lack of Unified FinOps Governance</>,
    painPoints: [
      "Disconnected billing data across AWS, Azure, and GCP",
      "Manual reconciliation effort consuming multiple resources",
      "Delayed insights with T+2 days latency",
      "No centralized cost allocation model",
      "Limited visibility into optimization opportunities",
      "Lack of secure, role-based access for stakeholders",
    ],
    afterLabel: "After",
    afterHeading: <>One Unified FinOps Layer<br />One Real-Time Cost Cockpit</>,
    afterDescription:
      "Multi-cloud billing from AWS, Azure, and GCP is unified into a governed data pipeline on Microsoft Fabric—integrating all cost sources into a single semantic model, surfaced through live Power BI dashboards for finance, engineering, and leadership.",
    afterMetrics: [
      { v: "100%", s: "Unified cost visibility" },
      { v: "0", s: "Manual effort" },
      { v: "Real-Time", s: "Decision-ready insights" },
    ],
    archEyebrow: "Data Architecture",
    archTitle: "SAP → Azure → Power BI",
    pipeline: [
      { title: "Multi-Cloud Billing", sub: "AWS, AZURE, GCP" },
      { title: "Data Ingestion", sub: "ADF" },
      { title: "Lakehouse", sub: "MICROSOFT FABRIC" },
      { title: "Semantic Model", sub: "DAX" },
      { title: "Dashboards", sub: "POWER BI" },
      { title: "Access Control", sub: "RLS" },
    ],
    whatBuiltEyebrow: "What We Built — 20+ Power BI Dashboard Modules",
    whatBuiltTitle: "Power BI Categories",
    dashboardGroups: [
      { h: "Cloud Cost Overview", items: ["Spend", "Trends", "Forecast"] },
      { h: "Optimization & Savings", items: ["Idle", "Savings", "Efficiency"] },
      { h: "Billing & Allocation", items: ["Tags", "BU", "Chargeback"] },
      { h: "Governance & Security", items: ["RLS", "Access", "Compliance"] },
    ],
    impactHeading: "Delivered Impact",
    impactMetrics: [
      { label: "FASTER", v: <>80{yellow("%")}</>, s: "Reduction in data latency" },
      { label: "LOWER", v: <>100{yellow("%")}</>, s: "Manual reconciliation eliminated" },
      { label: "HIGHER", v: <>8{yellow("+")}</>, s: "Data sources unified" },
      { label: "LESS", v: <>0{yellow("%")}</>, s: "Access breaches reported" },
    ],
    outcomeHeading: "Outcome",
    outcome: (
      <>
        We now have a unified, real-time view of our {yellow("multi-cloud spend,")} eliminating manual reconciliation and enabling {yellow("faster, controlled cost decisions.")}
      </>
    ),
    attribution: "FINOPS LEADERSHIP · LEADING CONSULTING ORGANIZATION",
  },

  "supply-chain-unilever": {
    slug: "supply-chain-unilever",
    eyebrow: "Customer Success Story · leading global FMCG company",
    heroTitle: <>Supply Chain Intelligence<br />for Global FMCG Operations</>,
    heroSubtitle:
      "Unified visibility across supply chain finance, material costing, logistics, and pricing — delivered through an enterprise-grade Power BI analytics layer on SAP S/4HANA RISE.",
    meta: [
      { h: "Business Context", t: <>Large FMCG supply chain with complex costing and logistics. {yellow("High-volume data across plants,")} vendors, and distribution.</> },
      { h: "The Challenge", t: <>Fragmented reporting across functions. {yellow("No clear PPV and cost visibility.")} Manual financial reconciliation. Limited real-time insights.</> },
      { h: "Our Solution", t: <>Centralized {yellow("Power BI on SAP S/4HANA.")} Automated data pipelines. Unified supply chain analytics. Near real-time, role-based reporting.</> },
    ],
    painPointsLabel: "Pain Points",
    painPointsHeading: <>Fragmented Supply Chain & Financial Visibility</>,
    painPoints: [
      "Disconnected reporting across finance, logistics, and materials",
      "Lack of visibility into purchase price variance and cost drivers",
      "Manual effort in consolidating supply chain financial data",
      "Delayed reporting cycles impacting decision-making",
      "Limited tracking of logistics performance metrics",
      "Difficulty analyzing material cost fluctuations at SKU level",
    ],
    afterLabel: "After",
    afterHeading: <>Unified Intelligence<br />Real-Time Cockpit</>,
    afterDescription:
      "All finance, logistics, and material data is unified into a single SAP-driven analytics layer. Real-time dashboards replace fragmented reports, giving leadership, procurement, and operations one consistent view of cost, performance, and decisions.",
    afterMetrics: [
      { v: "100%", s: "Unified data visibility" },
      { v: "0", s: "Manual reconciliation" },
      { v: "Real-Time", s: "Decision-ready insights" },
    ],
    archEyebrow: "Data Architecture",
    archTitle: "Architecture Flow",
    pipeline: [
      { title: "SAP S/4HANA RISE", sub: "SOURCE - ERP" },
      { title: "SAP Jobs", sub: "SCHEDULES EXTRACTS" },
      { title: "Jenkins Automation", sub: "ORCHESTRATION - CI" },
      { title: "Azure SQL Database", sub: "STAGING - WAREHOUSE" },
      { title: "Power BI Semantic", sub: "MEASURES - DAX" },
      { title: "Power BI Dashboards", sub: "CONSUMPTION LAYER" },
    ],
    whatBuiltEyebrow: "What We Built — 20+ Power BI Dashboard Modules",
    whatBuiltTitle: "Power BI Categories",
    dashboardGroups: [
      { h: "Supply Chain Finance", items: ["Overheads", "Budget", "Cost"] },
      { h: "Material Ledger", items: ["Costing", "Inventory", "SKU"] },
      { h: "Logistics KPIs", items: ["Freight", "TAT", "Warehouse"] },
      { h: "Pricing & Sales", items: ["PPV", "Vendor", "Sales"] },
    ],
    impactHeading: "Delivered Impact",
    impactMetrics: [
      { label: "REPORTING CYCLE", v: <>35{yellow("%")}</>, s: "Faster turnaround across finance & logistics reporting" },
      { label: "COST VISIBILITY", v: <>25{yellow("%")}</>, s: "Improved transparency into cost drivers and variances" },
      { label: "MANUAL EFFORT", v: <>20{yellow("+")}</>, s: "Reduction in manual reconciliation across data sources" },
      { label: "DECISION SPEED", v: <>18{yellow("%")}</>, s: "Faster operational decisions through real-time insight" },
    ],
    outcomeHeading: "Outcome",
    outcome: (
      <>
        We now have a unified view across {yellow("supply chain finance, material costing,")} and {yellow("logistics, enabling")} faster and more informed operational decisions.
      </>
    ),
    attribution: "SUPPLY CHAIN INTELLIGENCE FOR GLOBAL FMCG OPERATIONS",
  },

  "enterprise-analytics-pharma": {
    slug: "enterprise-analytics-pharma",
    eyebrow: "Customer Success Story · leading pharmaceutical company",
    heroTitle: <>Enterprise Analytics<br />for Pharma Operations</>,
    heroSubtitle: "Unified visibility across procurement, sales, finance, and inventory performance.",
    meta: [
      { h: "Business Context", t: <>{yellow("Global pharma supply chain")} with complex compliance and high-volume data across procurement, sales, and inventory.</> },
      { h: "The Challenge", t: <>Fragmented reporting, no real-time {yellow("inventory visibility,")} and manual financial consolidation limiting insights.</> },
      { h: "Our Solution", t: <>Centralized {yellow("Power BI on SAP S/4HANA")} with automated pipelines and real-time, role-based analytics.</> },
    ],
    painPointsLabel: "Pain Points",
    painPointsHeading: <>Disconnected Operational & Financial Insights</>,
    painPoints: [
      "Fragmented reporting across procurement, sales, and finance",
      "Limited visibility into excess and ageing inventory",
      "Manual effort in preparing financial statements",
      "Delayed reporting cycles impacting decisions",
      "Lack of vendor and procurement performance insights",
      "Difficulty tracking working capital metrics",
    ],
    afterLabel: "After",
    afterHeading: <>Unified Supply Intelligence<br />Real-Time Cockpit</>,
    afterDescription:
      "All supply chain, finance, and operational data is unified into a single analytics layer powered by SAP and Power BI, eliminating fragmented systems and enabling real-time visibility, predictive insights, and faster, data-driven decisions across the enterprise.",
    afterMetrics: [
      { v: "100%", s: "End-to-end data visibility" },
      { v: "0", s: "Fragmented reporting" },
      { v: "Real-Time", s: "Actionable insights & decisions" },
    ],
    archEyebrow: "Data Architecture",
    archTitle: "Architecture Flow",
    pipeline: [
      { title: "SAP S/4HANA RISE", sub: "SOURCE_SYSTEM" },
      { title: "CDS Views", sub: "SEMANTIC_LAYER" },
      { title: "OData Extraction", sub: "PROTOCOL_API" },
      { title: "Azure Data Factory", sub: "PIPELINE_ETL" },
      { title: "Azure SQL Database", sub: "DATA_WAREHOUSE" },
      { title: "Power BI Dashboards", sub: "VISUALIZATION" },
    ],
    whatBuiltEyebrow: "What We Built — 20+ Power BI Dashboard Modules",
    whatBuiltTitle: "Dashboard Categories",
    dashboardGroups: [
      { h: "Supply Chain", items: ["Procurement", "Vendors", "Spend"] },
      { h: "Sales", items: ["Revenue", "Customers", "Growth"] },
      { h: "Finance", items: ["P&L", "Cash Flow", "Working Cap"] },
      { h: "Inventory KPIs", items: ["Ageing", "Excess", "Turnover"] },
    ],
    impactHeading: "Delivered Impact",
    impactMetrics: [
      { label: "REPORTING CYCLE", v: <>40{yellow("%")}</>, s: "Reporting Turnaround" },
      { label: "COST VISIBILITY", v: <>30{yellow("%")}</>, s: "Inventory Visibility" },
      { label: "MANUAL EFFORT", v: <>25{yellow("+")}</>, s: "Manual Reporting Effort" },
      { label: "DECISION SPEED", v: <>20{yellow("%")}</>, s: "Decision-Making Speed" },
    ],
    outcomeHeading: "Outcome",
    outcome: (
      <>
        We now have a {yellow("unified and reliable")} view across {yellow("procurement, sales, finance, and inventory,")} enabling faster and more informed operational decisions.
      </>
    ),
    attribution: "OPERATIONS LEADERSHIP · LEADING PHARMACEUTICAL COMPANY",
  },

  "dbmsc-steels-data-automation": {
    slug: "dbmsc-steels-data-automation",
    eyebrow: "Customer Success Story · LEADING STEEL MANUFACTURING ENTERPRISE",
    heroTitle: <>SAP-to-SQL Data Automation for Steel<br />Manufacturing Operations</>,
    heroSubtitle: "End-to-end data pipeline from SAP S/4HANA to Azure SQL — 19 automated reports, zero manual effort",
    meta: [
      { h: "Business Context", t: <>A leading steel manufacturer runs {yellow("large-scale procurement, inventory and finance operations")} on SAP S/4HANA.</> },
      { h: "The Challenge", t: <>Data locked in {yellow("SAP, no real-time visibility,")} manual reporting, and slow cross-functional insights.</> },
      { h: "Our Solution", t: <>Automated pipeline from {yellow("SAP → Azure → SQL,")} delivering 19 {yellow("real-time,")} structured reports across business units.</> },
    ],
    painPointsLabel: "Pain Points",
    painPointsHeading: <>Lack of Unified Supply Chain Intelligence</>,
    painPoints: [
      "No real-time access to SAP transactional data outside the system",
      "Manual data exports causing delays in routine reporting",
      "Inconsistent master data (materials, customers, vendors)",
      "Inventory and stock levels not visible to operations and finance",
      "No end-to-end tracking of purchase and sales cycles",
      "Manual credit & reconciliation; no single source of truth.",
    ],
    afterLabel: "After",
    afterHeading: <>Connected Supply Chain<br />Intelligence Hub</>,
    afterDescription:
      "All supply chain, finance, and operational data is seamlessly integrated into a unified analytics layer powered by SAP and Power BI—eliminating silos, enabling real-time visibility, predictive insights, and faster, data-driven decisions across the enterprise.",
    afterMetrics: [
      { v: "100%", s: "Unified data visibility" },
      { v: "0", s: "Data silos & fragmented systems" },
      { v: "Real-Time", s: "Insights & decision-making" },
    ],
    archEyebrow: "Data Architecture",
    archTitle: "Architecture Flow",
    pipeline: [
      { title: "SAP S/4HANA", sub: "SOURCE SYSTEM\nSAP ERP" },
      { title: "CDS Views", sub: "CORE DATA SERVICES\nABAP" },
      { title: "OData Services", sub: "REST API\nODATA REST" },
      { title: "Azure Data Factory", sub: "ORCHESTRATION\nETL/ELT" },
      { title: "Azure SQL", sub: "DESTINATION\nCLOUD DB" },
    ],
    whatBuiltEyebrow: "What We Built — 4+ Power BI Dashboard Modules",
    whatBuiltTitle: "Automated Report Modules",
    dashboardGroups: [
      { h: "Master Data", items: ["Material Master", "Customer Master", "Vendor Master"] },
      { h: "Inventory & Stock", items: ["Transactional Report", "Stock", "Storage", "Batch Char."] },
      { h: "Logistics - Inbound & Outbound", items: ["Inbound", "Outbound"] },
      { h: "Sales & Revenue", items: ["Sales Order", "Contract", "Quotation", "Inquiry", "Invoice", "Cust. Credit"] },
      { h: "Procurement & Finance", items: ["Purch. Order", "Purch. Req.", "Purch. Invoice", "Cust. Line Items", "Vendor Line Items"] },
    ],
    impactHeading: "Delivered Impact",
    impactMetrics: [
      { label: "REPORTS AUTOMATED", v: "19", s: "Fully automated SAP extracts - no manual intervention required" },
      { label: "PIPELINE STAGES", v: "05", s: "End-to-end stages from SAP source to Azure SQL destination" },
      { label: "DATA DOMAINS", v: "05", s: "Master Data, Inventory, Sales, Procurement, Logistics" },
      { label: "TIME SAVED", v: <>~80{yellow("%")}</>, s: "Reduction in manual reporting effort across business units" },
    ],
    outcomeHeading: "Outcome",
    outcome: (
      <>
        Before this solution, our teams spent days chasing data from SAP just to build basic reports. {yellow("Now the data flows automatically into Azure SQL every morning")} - purchase {yellow("orders, stock levels, customer balances")} - all in one place. Our operations and finance teams finally work from the same numbers.
      </>
    ),
    attribution: "OPERATIONS LEAD . LEADING STEEL MANUFACTURING ENTERPRISE",
  },
};

export const getCaseDetail = (slug: string) => caseDetails[slug];