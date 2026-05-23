export type RoleSection = {
  heading: string;
  bullets: string[];
};

export type Role = {
  slug: string;
  title: string;
  experience: string;
  type: string;
  location: string;
  workMode: string;
  category: string;
  team: string;
  openings: number;
  postedDaysAgo: number;
  summary: string;
  highlights: string[];
  sections: RoleSection[];
};

export const roles: Role[] = [
  {
    slug: "sap-functional-lead",
    title: "SAP Functional Lead",
    experience: "Exp: 4y to 8y",
    type: "FullTime/Service",
    location: "Hyderabad, India",
    workMode: "Hybrid",
    category: "Engineering",
    team: "SAP Practice",
    openings: 2,
    postedDaysAgo: 4,
    summary:
      "Lead end-to-end SAP functional design across FI/CO, MM, SD, PP or HCM and shape solutions that move the needle for global enterprises.",
    highlights: [
      "Own a core SAP module end-to-end",
      "Mentor a team of 4–6 consultants",
      "Direct exposure to S/4HANA & BTP",
    ],
    sections: [
      {
        heading: "Functional Leadership",
        bullets: [
          "End-to-End Ownership: Lead the functional design and delivery of SAP solutions across one or more core modules (FI/CO, MM, SD, PP, HCM).",
          "Team Coordination: Guide junior consultants, manage functional workstreams, and ensure delivery alignment with project goals.",
          "Solution Architecture Input: Collaborate with technical and integration teams to design scalable, cross-functional solutions.",
        ],
      },
      {
        heading: "Business Process Expertise",
        bullets: [
          "Process Design & Optimization: Translate complex business requirements into efficient SAP processes.",
          "Fit-Gap Analysis: Lead workshops to assess standard SAP capabilities vs. custom requirements.",
          "Blueprinting & Documentation: Create detailed functional designs, process flows, and configuration documents.",
        ],
      },
      {
        heading: "Project Delivery & Methodology",
        bullets: [
          "Implementation Lifecycle Mastery across requirements, build, go-live and hyper care.",
          "Skilled with Agile and Waterfall delivery frameworks.",
          "Lead cutover planning, data migration and production deployment activities.",
        ],
      },
      {
        heading: "Tools & Platform Exposure",
        bullets: [
          "SAP S/4HANA expertise — Fiori apps and the deltas from ECC.",
          "Oversee functional testing, defect resolution and UAT.",
          "Drive change requests, incident resolution and continuous improvement.",
        ],
      },
    ],
  },
  {
    slug: "sap-mm-lead",
    title: "SAP MM Lead",
    experience: "Exp: 5y to 9y",
    type: "FullTime/Service",
    location: "Hyderabad, India",
    workMode: "Office",
    category: "Engineering",
    team: "SAP Logistics",
    openings: 1,
    postedDaysAgo: 7,
    summary:
      "Drive procurement, inventory and invoice verification design across S/4HANA programs for global manufacturing clients.",
    highlights: [
      "Lead MM rollouts across plants and geographies",
      "Own MRP, valuation and pricing strategy",
      "Partner with EWM, FI and SD leads",
    ],
    sections: [
      {
        heading: "Module Leadership",
        bullets: [
          "Lead end-to-end SAP MM implementations including procurement, inventory and invoice verification.",
          "Drive design and configuration for purchasing, MRP, pricing and material valuation.",
          "Define release strategies, account determination and split valuation models.",
        ],
      },
      {
        heading: "Cross-Module Integration",
        bullets: [
          "Coordinate integration with FI, SD, PP and WM/EWM workstreams.",
          "Partner with ABAP and BASIS teams on enhancements, IDOCs and interfaces.",
          "Own intercompany STO and subcontracting flows.",
        ],
      },
      {
        heading: "Delivery & Stakeholders",
        bullets: [
          "Run requirement workshops with procurement and supply chain leaders.",
          "Drive UAT, cutover and hyper care for global rollouts.",
          "Mentor junior MM consultants across multiple programs.",
        ],
      },
    ],
  },
  {
    slug: "sap-fico-consultant",
    title: "SAP FICO Consultant",
    experience: "Exp: 4y to 8y",
    type: "FullTime/Service",
    location: "Hyderabad, India",
    workMode: "Hybrid",
    category: "Engineering",
    team: "SAP Finance",
    openings: 3,
    postedDaysAgo: 2,
    summary:
      "Configure SAP Finance and Controlling on S/4HANA — GL, AP, AR, asset accounting, product costing and profitability analysis.",
    highlights: [
      "Hands-on with S/4HANA Universal Journal",
      "Design product costing & margin analysis",
      "Strong exposure to month-end close",
    ],
    sections: [
      {
        heading: "Finance Configuration",
        bullets: [
          "Configure GL, AP, AR, Asset Accounting and Bank Accounting in S/4HANA.",
          "Design organizational structures, document splitting and parallel ledgers.",
          "Implement tax procedures, withholding tax and localization requirements.",
        ],
      },
      {
        heading: "Controlling",
        bullets: [
          "Set up cost centers, internal orders, product costing and CO-PA.",
          "Build allocation cycles, settlement rules and profitability reporting.",
          "Support month-end and year-end close activities.",
        ],
      },
      {
        heading: "Integration & Reporting",
        bullets: [
          "Integrate FICO with MM, SD and PP for end-to-end financial visibility.",
          "Build Fiori dashboards and ad-hoc analytical queries.",
          "Coordinate with ABAP and BTP teams for custom enhancements.",
        ],
      },
    ],
  },
  {
    slug: "sap-ewm-consultant",
    title: "SAP EWM Consultant",
    experience: "Exp: 3y to 6y",
    type: "FullTime/Service",
    location: "Hyderabad, India",
    workMode: "Office",
    category: "Engineering",
    team: "SAP Logistics",
    openings: 2,
    postedDaysAgo: 5,
    summary:
      "Implement embedded and decentralized SAP EWM — inbound, outbound, slotting, picking and yard management for high-volume warehouses.",
    highlights: [
      "Embedded EWM on S/4HANA experience",
      "RF framework and labor management",
      "Integration with MFS and automation",
    ],
    sections: [
      {
        heading: "EWM Process Design",
        bullets: [
          "Configure inbound, outbound, internal warehouse and physical inventory processes.",
          "Design putaway, picking, packing and staging strategies.",
          "Set up storage types, bin structures and slotting rules.",
        ],
      },
      {
        heading: "Advanced Capabilities",
        bullets: [
          "RF framework configuration and screen personalization.",
          "Wave management, labor management and yard management.",
          "Integration with MFS, automated storage systems and conveyors.",
        ],
      },
      {
        heading: "Integration",
        bullets: [
          "ERP integration via qRFC and CIF for material, customer and order data.",
          "Coordinate with MM, SD and TM teams for end-to-end logistics flows.",
          "Drive cutover, data migration and warehouse go-live readiness.",
        ],
      },
    ],
  },
  {
    slug: "sap-ibp-consultant",
    title: "SAP IBP Consultant",
    experience: "Exp: 4y to 7y",
    type: "FullTime/Service",
    location: "Hyderabad, India",
    workMode: "Hybrid",
    category: "Engineering",
    team: "Supply Chain Planning",
    openings: 1,
    postedDaysAgo: 9,
    summary:
      "Design IBP planning models across Demand, Supply, S&OP and Response — driving better forecast accuracy and supply alignment.",
    highlights: [
      "Build planning areas and key figures",
      "Drive demand sensing & statistical forecasting",
      "Hands-on with Excel UI and Fiori",
    ],
    sections: [
      {
        heading: "Planning Model Design",
        bullets: [
          "Configure planning areas, time profiles, planning levels and key figures.",
          "Design master data, attributes and planning views in Excel UI and Fiori.",
          "Implement statistical forecasting and demand sensing algorithms.",
        ],
      },
      {
        heading: "S&OP and Supply",
        bullets: [
          "Build S&OP planning processes with scenarios and what-if analyses.",
          "Configure supply heuristics, optimizer and response planning.",
          "Define alerts, dashboards and analytics for planners.",
        ],
      },
      {
        heading: "Integration",
        bullets: [
          "Integrate IBP with S/4HANA via CI-DS and SDI.",
          "Coordinate with APO migration teams and downstream execution systems.",
          "Train business planners and own hyper care after go-live.",
        ],
      },
    ],
  },
  {
    slug: "abap-developer",
    title: "Senior ABAP Developer",
    experience: "Exp: 3y to 7y",
    type: "FullTime/Service",
    location: "Hyderabad, India",
    workMode: "Hybrid",
    category: "Engineering",
    team: "SAP Technical",
    openings: 4,
    postedDaysAgo: 1,
    summary:
      "Build ABAP and ABAP on HANA solutions — CDS views, AMDP, OData and Fiori extensions on S/4HANA.",
    highlights: [
      "Hands-on with CDS, AMDP and OData",
      "RAP / RESTful ABAP exposure",
      "Performance tuning on HANA",
    ],
    sections: [
      {
        heading: "Core Development",
        bullets: [
          "Build reports, enhancements, BADIs, user exits and workflows.",
          "Develop CDS views, AMDP procedures and OData services on HANA.",
          "Apply clean-core principles and side-by-side extensibility on BTP.",
        ],
      },
      {
        heading: "Integration & Fiori",
        bullets: [
          "Build IDOCs, RFCs, proxies and REST/SOAP integrations.",
          "Extend standard Fiori apps and build custom Fiori/UI5 apps.",
          "Work with CPI/PI for orchestrated integrations.",
        ],
      },
      {
        heading: "Quality & Performance",
        bullets: [
          "Tune SQL and ABAP for HANA — code pushdown, ATC and SCI compliance.",
          "Drive code reviews, unit testing and CI/CD with abapGit.",
          "Document technical designs and support functional consultants.",
        ],
      },
    ],
  },
  {
    slug: "data-engineer",
    title: "Senior Data Engineer",
    experience: "Exp: 4y to 8y",
    type: "FullTime/Service",
    location: "Hyderabad, India",
    workMode: "Hybrid",
    category: "Data",
    team: "Data Platform",
    openings: 3,
    postedDaysAgo: 3,
    summary:
      "Build large-scale data pipelines and lakehouse architectures on Azure / Databricks powering analytics and ML for enterprise clients.",
    highlights: [
      "Databricks, Spark and Delta Lake",
      "Azure Data Factory and Synapse",
      "Medallion lakehouse architecture",
    ],
    sections: [
      {
        heading: "Data Pipelines",
        bullets: [
          "Design and build batch and streaming pipelines using Spark, Kafka and ADF.",
          "Implement medallion architecture (bronze / silver / gold) on Delta Lake.",
          "Optimize jobs for cost, performance and reliability.",
        ],
      },
      {
        heading: "Modeling & Storage",
        bullets: [
          "Model dimensional and data vault structures for analytics consumption.",
          "Implement CDC patterns and slowly changing dimensions.",
          "Govern schemas, lineage and data quality with Unity Catalog.",
        ],
      },
      {
        heading: "Collaboration",
        bullets: [
          "Partner with analysts, ML engineers and business stakeholders.",
          "Establish CI/CD with Git, Azure DevOps and dbt.",
          "Mentor junior engineers and drive engineering standards.",
        ],
      },
    ],
  },
  {
    slug: "ml-engineer",
    title: "Machine Learning Engineer",
    experience: "Exp: 3y to 7y",
    type: "FullTime/Service",
    location: "Hyderabad, India",
    workMode: "Hybrid",
    category: "Data",
    team: "AI & ML",
    openings: 2,
    postedDaysAgo: 6,
    summary:
      "Build, deploy and operate ML and GenAI solutions — from feature engineering to MLOps on Azure ML and Databricks.",
    highlights: [
      "End-to-end model lifecycle ownership",
      "MLOps on Azure ML / Databricks",
      "GenAI & RAG production exposure",
    ],
    sections: [
      {
        heading: "Modeling",
        bullets: [
          "Build classical ML, deep learning and GenAI/RAG solutions.",
          "Engineer features, experiment with frameworks and tune models.",
          "Evaluate models with appropriate metrics and bias checks.",
        ],
      },
      {
        heading: "MLOps",
        bullets: [
          "Productionize models with MLflow, Azure ML and Databricks.",
          "Build CI/CD, monitoring, drift detection and retraining pipelines.",
          "Containerize and serve models via REST and batch endpoints.",
        ],
      },
      {
        heading: "Collaboration",
        bullets: [
          "Partner with data engineers, product owners and domain experts.",
          "Translate business problems into ML problem statements.",
          "Document experiments, decisions and model cards.",
        ],
      },
    ],
  },
  {
    slug: "power-bi-developer",
    title: "Power BI Developer",
    experience: "Exp: 3y to 6y",
    type: "FullTime/Service",
    location: "Hyderabad, India",
    workMode: "Office",
    category: "Analytics",
    team: "Analytics",
    openings: 2,
    postedDaysAgo: 8,
    summary:
      "Design and deliver enterprise Power BI dashboards backed by tuned data models, DAX and Power BI service governance.",
    highlights: [
      "Strong DAX and data modeling",
      "Row-level security & workspace governance",
      "Direct Lake / Fabric exposure a plus",
    ],
    sections: [
      {
        heading: "Reporting & Modeling",
        bullets: [
          "Build dashboards, paginated reports and KPI scorecards.",
          "Design star schemas, measures and calculation groups in DAX.",
          "Tune Power Query (M) transformations and refresh performance.",
        ],
      },
      {
        heading: "Platform & Governance",
        bullets: [
          "Configure workspaces, deployment pipelines and gateways.",
          "Implement RLS, OLS and tenant-level governance.",
          "Work with Microsoft Fabric, Direct Lake and Synapse where applicable.",
        ],
      },
      {
        heading: "Stakeholders",
        bullets: [
          "Partner with finance, supply chain and operations leaders.",
          "Translate vague asks into focused, measurable visualizations.",
          "Deliver training and adoption sessions for power users.",
        ],
      },
    ],
  },
  {
    slug: "react-developer",
    title: "React Front-End Developer",
    experience: "Exp: 2y to 5y",
    type: "FullTime/Service",
    location: "Hyderabad, India",
    workMode: "Hybrid",
    category: "Engineering",
    team: "Digital Apps",
    openings: 3,
    postedDaysAgo: 1,
    summary:
      "Build polished, accessible React applications backed by typed APIs, modern tooling and a shared design system.",
    highlights: [
      "React 18, TypeScript & Tailwind",
      "Design-system driven development",
      "Performance and accessibility minded",
    ],
    sections: [
      {
        heading: "Engineering",
        bullets: [
          "Build production React apps with TypeScript, Tailwind and modern routing.",
          "Implement state management, data fetching and form patterns thoughtfully.",
          "Maintain and extend a shared component library.",
        ],
      },
      {
        heading: "Quality & Performance",
        bullets: [
          "Write unit and component tests; uphold accessibility (WCAG AA).",
          "Profile and optimize Core Web Vitals.",
          "Participate in code reviews and pairing sessions.",
        ],
      },
      {
        heading: "Collaboration",
        bullets: [
          "Work closely with designers, product and back-end engineers.",
          "Translate Figma designs into pixel-correct, responsive UI.",
          "Contribute to architecture, tooling and DX improvements.",
        ],
      },
    ],
  },
];

export const getRoleBySlug = (slug: string) => roles.find((r) => r.slug === slug);
