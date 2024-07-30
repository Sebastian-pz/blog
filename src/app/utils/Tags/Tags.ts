const TAGS = {
  experience: "Experience",
  opinion: "Opinion",
  CI_CD: "CI/CD",
  fullstack: "Fullstack",
  project: "Project",
  cleanCode: "CleanCode",
  tools: "Tools",
  frontend: "Frontend",
  backend: "Backend",
  nestjs: "NestJS",
  nextjs: "NextJS",
  testing: "Testing",
  webSockets: "WebSockets",
  react: "React",
  express: "Express",
  docker: "Docker",
  microservice: "Microservice",
  kubernetes: "Kubernetes",
};

export function getTagValues(limit?: number) {
  const values = Object.values(TAGS);
  if (!limit) return values;
  return values.slice(0, limit);
}

export function getTagKeys(limit?: number) {
  const keys = Object.keys(TAGS);
  if (!limit) return keys;
  return keys.slice(0, limit);
}

export default TAGS;
