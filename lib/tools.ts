export type Tool = {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
  tags: string[];
};

export const tools: Tool[] = [
  {
    id: "standard-demo",
    name: "CustomGPT Demo",
    description: "Learn what is possible out-of-the-box with CustomGPT.",
    url: "https://customgpt-demo.replit.app/",
    icon: "Bot",
    tags: ["chatbot", "demo", "customgpt"],
  },
  {
    id: "instant-viewer-demo",
    name: "CustomGPT Instant Viewer",
    description: "Test CustomGPT's Instant Viewer deployment method.",
    url: "https://instant-viewer-demo.replit.app",
    icon: "Zap",
    tags: ["instant", "viewer", "demo", "customgpt"],
  },
  {
    id: "multi-agent-dropdown",
    name: "Multi-Agent Live Chat",
    description: "Test a multi-agent chat and switch agents via a dropdown.",
    url: "https://dropdown-test.replit.app",
    icon: "Shuffle",
    tags: ["chatbot", "agents", "demo", "dropdown"],
  },
  {
    id: "web-search-mcp",
    name: "CustomGPT + Web Search MCP",
    description: "Demo of CustomGPT's MCP connection enabling web search.",
    url: "https://customgpt-web-search.replit.app",
    icon: "Globe",
    tags: ["mcp", "web", "search", "demo", "customgpt"],
  },
  {
    id: "ai-vision-mazda-hub",
    name: "CustomGPT AI Vision Demo",
    description: "AI Vision demo based on a Mazda hatchback hub.",
    url: "https://mazda-hatchback-hub.replit.app",
    icon: "Eye",
    tags: ["vision", "ai", "demo", "customgpt", "mazda", "hatchback"],
  },
  {
    id: "ai-search-functionality",
    name: "CustomGPT.ai Search",
    description: "Demo showcasing CustomGPT.ai's AI search deployment.",
    url: "https://customgpt.replit.app",
    icon: "Search",
    tags: ["search", "ai", "demo", "customgpt"],
  },
  {
    id: "nextgen-financial-research-tool",
    name: "NextGen Financial Research Tool",
    description:
      "A NextGen Agent for financial analysis and asset creation of public data.",
    url: "https://bobb0vkmzz.customgpt-agents.com",
    icon: "LineChart",
    tags: ["analytics", "financial", "nextgen", "personal"],
  },
  {
    id: "nextgen-financial-contract-analyst",
    name: "NextGen Financial Contract Analyst (Internal)",
    description:
      "A NextGen Agent loaded with sample financial spreadsheets and contracts for analytical usage.",
    url: "https://crystal-contract-chat.lovable.app/",
    icon: "FileSpreadsheet",
    tags: ["analytics", "financial", "contracts", "nextgen"],
  },
  {
    id: "needham-athletic-club",
    name: "Needham Athletic Club",
    description:
      "Website showcasing lead capture, webpage awareness, and an admin dashboard agent.",
    url: "https://needham-athletic-club.replit.app/",
    icon: "Dumbbell",
    tags: ["website", "lead capture", "admin", "dashboard", "demo"],
  },
];
