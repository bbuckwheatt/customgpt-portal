export type Tool = {
  id: string;
  name: string;
  description: string;
  url: string;
  emoji: string;
  tags: string[];
};

export const tools: Tool[] = [
  {
    id: "standard-demo",
    name: "CustomGPT Demo",
    description: "Learn what is possible out-of-the-box with CustomGPT.",
    url: "https://customgpt-demo.replit.app/",
    emoji: "🤖",
    tags: ["chatbot", "demo", "customgpt"],
  },
  {
    id: "roi-calculator",
    name: "CustomGPT ROI Calculator",
    description: "Estimate your ROI and payback with CustomGPT.",
    url: "https://customgpt-roi.replit.app/",
    emoji: "📈",
    tags: ["roi", "calculator", "customgpt"],
  },
  {
    id: "instant-viewer-demo",
    name: "CustomGPT Instant Viewer",
    description: "Test CustomGPT's Instant Viewer deployment method.",
    url: "https://instant-viewer-demo.replit.app",
    emoji: "⚡",
    tags: ["instant", "viewer", "demo", "customgpt"],
  },
  {
    id: "multi-agent-dropdown",
    name: "Multi-Agent Live Chat",
    description: "Test a multi-agent chat and switch agents via a dropdown.",
    url: "https://dropdown-test.replit.app",
    emoji: "🔀",
    tags: ["chatbot", "agents", "demo", "dropdown"],
  },
  {
    id: "web-search-mcp",
    name: "CustomGPT + Web Search MCP",
    description: "Demo of CustomGPT's MCP connection enabling web search.",
    url: "https://customgpt-web-search.replit.app",
    emoji: "🌐",
    tags: ["mcp", "web", "search", "demo", "customgpt"],
  },
  {
    id: "ai-vision-mazda-hub",
    name: "CustomGPT AI Vision Capability Demo",
    description: "AI Vision demo based on a Mazda hatchback hub.",
    url: "https://mazda-hatchback-hub.replit.app",
    emoji: "🚗",
    tags: ["vision", "ai", "demo", "customgpt", "mazda", "hatchback"],
  },
  {
    id: "ai-search-functionality",
    name: "CustomGPT.ai Search Functionality",
    description: "Demo showcasing CustomGPT.ai's AI search deployment.",
    url: "https://customgpt.replit.app",
    emoji: "🔍",
    tags: ["search", "ai", "demo", "customgpt"],
  },
  {
    id: "solostove-ecommerce",
    name: "Solo Stove E-commerce Demo",
    description: "CustomGPT e-commerce demo.",
    url: "https://solostove-demo.replit.app",
    emoji: "🛒",
    tags: ["ecommerce", "demo", "customgpt", "shopping"],
  },
  {
    id: "needham-athletic-club",
    name: "Needham Athletic Club",
    description:
      "Needham Athletic Club website, showcasing lead capture, webpage awareness, and an internal admin dashboard agent.",
    url: "https://needham-athletic-club.replit.app/",
    emoji: "🏋️",
    tags: ["website", "lead capture", "admin", "dashboard", "demo"],
  },
];
