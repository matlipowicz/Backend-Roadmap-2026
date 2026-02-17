export interface SubItem {
  id: string;
  label: string;
}

export interface LevelSection {
  level: "beginner" | "intermediate" | "advanced";
  labelPL: string;
  items: SubItem[];
}

export interface RoadmapLink {
  label: string;
  url: string;
}

export type CoursesLink = { label: string; url: string };
export interface LearningArea {
  id: number;
  title: string;
  coursesLink?: CoursesLink[];
  sections: LevelSection[];
  roadmapLinks: RoadmapLink[];
}

export const learningAreas: LearningArea[] = [
  {
    id: 1,
    title: "Node.js oraz Express.js",
    coursesLink: [
      { label: "Node.js + Express.js", url: "https://www.udemy.com/course/" },
    ],
    sections: [
      {
        level: "beginner",
        labelPL: "Podstawy",
        items: [
          { id: "1-b-1", label: "Node.js runtime i event loop" },
          { id: "1-b-2", label: "System modułów (CommonJS, ES Modules)" },
          {
            id: "1-b-3",
            label: "Asynchroniczność (callbacks, promises, async/await)",
          },
          {
            id: "1-b-4",
            label: "File System API i podstawowe operacje na plikach",
          },
          {
            id: "1-b-5",
            label: "Express.js podstawy: routing, middleware, request/response",
          },
          {
            id: "1-b-6",
            label: "Tworzenie prostych REST API (CRUD operations)",
          },
          {
            id: "1-b-7",
            label: "Obsługa JSON, query parameters, route parameters",
          },
        ],
      },
      {
        level: "intermediate",
        labelPL: "Rozwój",
        items: [
          { id: "1-i-1", label: "Streams i buffers w Node.js" },
          { id: "1-i-2", label: "Child processes i worker threads" },
          { id: "1-i-3", label: "Error handling i custom error middleware" },
          { id: "1-i-4", label: "Request validation (express-validator, Joi)" },
          {
            id: "1-i-5",
            label: "Authentication & Authorization (JWT, sessions)",
          },
          { id: "1-i-6", label: "File uploads i multer" },
          {
            id: "1-i-7",
            label: "Rate limiting i security best practices (helmet, cors)",
          },
          { id: "1-i-8", label: "Environment variables i konfiguracja (.env)" },
        ],
      },
      {
        level: "advanced",
        labelPL: "Zaawansowane",
        items: [
          {
            id: "1-a-1",
            label: "Performance optimization (clustering, caching)",
          },
          { id: "1-a-2", label: "Custom middleware patterns" },
          { id: "1-a-3", label: "WebSocket integration" },
          { id: "1-a-4", label: "Testing (Jest, Supertest)" },
          { id: "1-a-5", label: "API documentation (Swagger/OpenAPI)" },
          { id: "1-a-6", label: "Logging strategies (Winston, Morgan)" },
          { id: "1-a-7", label: "Graceful shutdown i health checks" },
        ],
      },
    ],
    roadmapLinks: [
      { label: "Node.js Roadmap", url: "https://roadmap.sh/nodejs" },
    ],
  },
  {
    id: 2,
    title: "NestJS",
    coursesLink: [
      {
        label: "NestJS",
        url: "https://www.udemy.com/course/nestjs-zero-to-hero/",
      },
    ],
    sections: [
      {
        level: "beginner",
        labelPL: "Podstawy",
        items: [
          {
            id: "2-b-1",
            label: "Architektura NestJS: Modules, Controllers, Providers",
          },
          { id: "2-b-2", label: "Dependency Injection i IoC container" },
          {
            id: "2-b-3",
            label: "Routing i decoratory (@Get, @Post, @Param, @Body)",
          },
          { id: "2-b-4", label: "DTOs (Data Transfer Objects) i validation" },
          { id: "2-b-5", label: "Podstawowe pipes i guards" },
          { id: "2-b-6", label: "Exception filters" },
          { id: "2-b-7", label: "Configuration module" },
        ],
      },
      {
        level: "intermediate",
        labelPL: "Rozwój",
        items: [
          { id: "2-i-1", label: "Custom decorators" },
          { id: "2-i-2", label: "Interceptors i middleware" },
          { id: "2-i-3", label: "Authentication (Passport.js integration)" },
          { id: "2-i-4", label: "Authorization (role-based access control)" },
          { id: "2-i-5", label: "TypeORM/Prisma integration" },
          { id: "2-i-6", label: "Validation pipes (class-validator)" },
          { id: "2-i-7", label: "Serialization i transformation" },
          { id: "2-i-8", label: "File upload handling" },
        ],
      },
      {
        level: "advanced",
        labelPL: "Zaawansowane",
        items: [
          { id: "2-a-1", label: "Microservices architecture" },
          { id: "2-a-2", label: "GraphQL integration" },
          { id: "2-a-3", label: "WebSockets i real-time communication" },
          { id: "2-a-4", label: "CQRS i Event Sourcing patterns" },
          { id: "2-a-5", label: "Custom guards i advanced authorization" },
          { id: "2-a-6", label: "Testing (unit, e2e, integration)" },
          { id: "2-a-7", label: "Performance optimization" },
          { id: "2-a-8", label: "Swagger/OpenAPI documentation" },
        ],
      },
    ],
    roadmapLinks: [],
  },
  {
    id: 3,
    title: "Bazy Danych: SQL (PostgreSQL) & NoSQL (MongoDB)",
    sections: [
      {
        level: "beginner",
        labelPL: "PostgreSQL - Podstawy",
        items: [
          { id: "3-b-1", label: "SQL basics: SELECT, INSERT, UPDATE, DELETE" },
          { id: "3-b-2", label: "Data types i constraints" },
          { id: "3-b-3", label: "WHERE, ORDER BY, LIMIT, OFFSET" },
          { id: "3-b-4", label: "INNER JOIN, LEFT JOIN" },
          {
            id: "3-b-5",
            label: "Podstawowe funkcje agregujące (COUNT, SUM, AVG)",
          },
          { id: "3-b-6", label: "GROUP BY i HAVING" },
          { id: "3-b-7", label: "Primary keys i foreign keys" },
        ],
      },
      {
        level: "intermediate",
        labelPL: "PostgreSQL - Rozwój",
        items: [
          { id: "3-i-1", label: "Complex JOINs (FULL OUTER, CROSS)" },
          {
            id: "3-i-2",
            label: "Subqueries i CTEs (Common Table Expressions)",
          },
          { id: "3-i-3", label: "Indexes i query optimization" },
          { id: "3-i-4", label: "Transactions i ACID properties" },
          { id: "3-i-5", label: "Views i materialized views" },
          { id: "3-i-6", label: "Window functions" },
          { id: "3-i-7", label: "Database normalization (1NF, 2NF, 3NF)" },
        ],
      },
      {
        level: "advanced",
        labelPL: "PostgreSQL - Zaawansowane",
        items: [
          { id: "3-a-1", label: "Stored procedures i functions" },
          { id: "3-a-2", label: "Triggers i events" },
          {
            id: "3-a-3",
            label: "Advanced indexing strategies (B-tree, GiST, GIN)",
          },
          { id: "3-a-4", label: "Partitioning i sharding" },
          { id: "3-a-5", label: "Full-text search" },
          { id: "3-a-6", label: "JSON/JSONB operations" },
          { id: "3-a-7", label: "Performance tuning i EXPLAIN ANALYZE" },
        ],
      },
      {
        level: "beginner",
        labelPL: "MongoDB - Podstawy",
        items: [
          { id: "3-mb-1", label: "Document model i collections" },
          {
            id: "3-mb-2",
            label: "CRUD operations (insertOne, find, updateOne, deleteOne)",
          },
          { id: "3-mb-3", label: "Query operators ($eq, $gt, $lt, $in)" },
          { id: "3-mb-4", label: "Podstawowe projection" },
          { id: "3-mb-5", label: "Sort, limit, skip" },
          { id: "3-mb-6", label: "Embedded documents vs references" },
        ],
      },
      {
        level: "intermediate",
        labelPL: "MongoDB - Rozwój",
        items: [
          { id: "3-mi-1", label: "Aggregation pipeline" },
          { id: "3-mi-2", label: "Indexing strategies" },
          { id: "3-mi-3", label: "Schema design patterns" },
          { id: "3-mi-4", label: "Data modeling best practices" },
          { id: "3-mi-5", label: "Transactions w MongoDB" },
          { id: "3-mi-6", label: "Text search" },
        ],
      },
      {
        level: "advanced",
        labelPL: "MongoDB - Zaawansowane",
        items: [
          { id: "3-ma-1", label: "Advanced aggregation operations" },
          { id: "3-ma-2", label: "Replication i replica sets" },
          { id: "3-ma-3", label: "Sharding strategies" },
          { id: "3-ma-4", label: "Performance optimization" },
          { id: "3-ma-5", label: "Change streams" },
          { id: "3-ma-6", label: "Geospatial queries" },
        ],
      },
    ],
    roadmapLinks: [
      { label: "SQL Roadmap", url: "https://roadmap.sh/sql" },
      { label: "PostgreSQL DBA", url: "https://roadmap.sh/postgresql-dba" },
      { label: "MongoDB Roadmap", url: "https://roadmap.sh/mongodb" },
    ],
  },
  {
    id: 4,
    title: "Praca z ORM (Prisma) oraz surowym SQL",
    sections: [
      {
        level: "beginner",
        labelPL: "Podstawy",
        items: [
          { id: "4-b-1", label: "Prisma Schema Language basics" },
          { id: "4-b-2", label: "Models i relations (1:1, 1:N, N:M)" },
          { id: "4-b-3", label: "Prisma Client API: CRUD operations" },
          { id: "4-b-4", label: "Prisma Migrate basics" },
          { id: "4-b-5", label: "Type safety i auto-completion" },
          { id: "4-b-6", label: "Basic queries i filtering" },
        ],
      },
      {
        level: "intermediate",
        labelPL: "Rozwój",
        items: [
          { id: "4-i-1", label: "Complex queries (nested reads/writes)" },
          { id: "4-i-2", label: "Transactions w Prisma" },
          { id: "4-i-3", label: "Aggregation operations" },
          { id: "4-i-4", label: "Raw SQL queries w Prisma" },
          { id: "4-i-5", label: "Migration strategies" },
          { id: "4-i-6", label: "Connection pooling" },
          { id: "4-i-7", label: "Seeding databases" },
        ],
      },
      {
        level: "advanced",
        labelPL: "Zaawansowane",
        items: [
          { id: "4-a-1", label: "Query optimization w Prisma" },
          { id: "4-a-2", label: "Custom middleware" },
          { id: "4-a-3", label: "Multi-schema databases" },
          { id: "4-a-4", label: "Raw SQL dla performance-critical queries" },
          { id: "4-a-5", label: "Database connection management" },
          { id: "4-a-6", label: "Prisma vs Raw SQL trade-offs" },
          { id: "4-a-7", label: "Advanced migration patterns" },
          { id: "4-a-8", label: "Testing strategies" },
        ],
      },
    ],
    roadmapLinks: [],
  },
  {
    id: 5,
    title: "DevOps & CI/CD: Docker & GitHub Workflows",
    sections: [
      {
        level: "beginner",
        labelPL: "Docker - Podstawy",
        items: [
          { id: "5-db-1", label: "Containers vs Virtual Machines" },
          { id: "5-db-2", label: "Docker images i containers" },
          { id: "5-db-3", label: "Dockerfile syntax" },
          {
            id: "5-db-4",
            label: "Basic docker commands (build, run, stop, ps)",
          },
          { id: "5-db-5", label: "Port mapping i volumes" },
          { id: "5-db-6", label: "Docker Hub i registry" },
        ],
      },
      {
        level: "intermediate",
        labelPL: "Docker - Rozwój",
        items: [
          { id: "5-di-1", label: "Multi-stage builds" },
          { id: "5-di-2", label: "Docker Compose basics" },
          { id: "5-di-3", label: "Networking w Docker" },
          { id: "5-di-4", label: "Volume management" },
          { id: "5-di-5", label: "Environment variables" },
          { id: "5-di-6", label: "Docker best practices" },
          { id: "5-di-7", label: "Image optimization" },
        ],
      },
      {
        level: "advanced",
        labelPL: "Docker - Zaawansowane",
        items: [
          { id: "5-da-1", label: "Docker Compose dla complex stacks" },
          { id: "5-da-2", label: "Docker networking modes" },
          { id: "5-da-3", label: "Security best practices" },
          { id: "5-da-4", label: "Health checks i restart policies" },
          { id: "5-da-5", label: "Docker logs i debugging" },
          { id: "5-da-6", label: "Container orchestration basics" },
        ],
      },
      {
        level: "beginner",
        labelPL: "GitHub Actions - Podstawy",
        items: [
          { id: "5-gb-1", label: "Workflow basics i YAML syntax" },
          { id: "5-gb-2", label: "Triggers (push, pull_request, schedule)" },
          { id: "5-gb-3", label: "Jobs i steps" },
          { id: "5-gb-4", label: "Actions marketplace" },
          { id: "5-gb-5", label: "Basic testing automation" },
        ],
      },
      {
        level: "intermediate",
        labelPL: "GitHub Actions - Rozwój",
        items: [
          { id: "5-gi-1", label: "Matrix builds" },
          { id: "5-gi-2", label: "Secrets management" },
          { id: "5-gi-3", label: "Artifact upload/download" },
          { id: "5-gi-4", label: "Caching dependencies" },
          { id: "5-gi-5", label: "Deployment workflows" },
          { id: "5-gi-6", label: "Environment protection rules" },
        ],
      },
      {
        level: "advanced",
        labelPL: "GitHub Actions - Zaawansowane",
        items: [
          { id: "5-ga-1", label: "Custom actions creation" },
          { id: "5-ga-2", label: "Reusable workflows" },
          { id: "5-ga-3", label: "Composite actions" },
          { id: "5-ga-4", label: "Advanced deployment strategies" },
          { id: "5-ga-5", label: "Integration testing w CI/CD" },
          { id: "5-ga-6", label: "Multi-environment deployments" },
        ],
      },
    ],
    roadmapLinks: [
      { label: "Docker Roadmap", url: "https://roadmap.sh/docker" },
    ],
    coursesLink: [
      {
        label: "Docker - JS Mystery",
        url: "https://www.youtube.com/watch?v=GFgJkfScVNU&t=26s",
      },
      {
        label: "Docker - Freecodecamp",
        url: "https://www.youtube.com/watch?v=fqMOX6JJhGo&t=1s",
      },
      {
        label: "Github Actions",
        url: "https://www.youtube.com/watch?v=Xwpi0ITkL3U",
      },
    ],
  },
  {
    id: 6,
    title: "Infrastructure as Code (IaC)",
    sections: [
      {
        level: "beginner",
        labelPL: "Podstawy",
        items: [
          { id: "6-b-1", label: "Koncepcja Infrastructure as Code" },
          { id: "6-b-2", label: "Terraform basics i HCL syntax" },
          { id: "6-b-3", label: "Providers i resources" },
          { id: "6-b-4", label: "Terraform init, plan, apply" },
          { id: "6-b-5", label: "State management basics" },
          { id: "6-b-6", label: "Variables i outputs" },
          {
            id: "6-b-7",
            label: "Basic resource types (compute, network, storage)",
          },
        ],
      },
      {
        level: "intermediate",
        labelPL: "Rozwój",
        items: [
          { id: "6-i-1", label: "Modules i code reusability" },
          { id: "6-i-2", label: "Remote state backends" },
          { id: "6-i-3", label: "Workspaces" },
          { id: "6-i-4", label: "Data sources" },
          { id: "6-i-5", label: "Provisioners" },
          { id: "6-i-6", label: "Dependencies i lifecycle" },
          { id: "6-i-7", label: "Terraform Cloud basics" },
        ],
      },
      {
        level: "advanced",
        labelPL: "Zaawansowane",
        items: [
          { id: "6-a-1", label: "Advanced module patterns" },
          { id: "6-a-2", label: "Dynamic blocks i for_each" },
          { id: "6-a-3", label: "State locking i collaboration" },
          { id: "6-a-4", label: "Import existing infrastructure" },
          { id: "6-a-5", label: "Testing infrastructure code" },
          { id: "6-a-6", label: "CI/CD integration dla IaC" },
          { id: "6-a-7", label: "Multi-cloud strategies" },
          { id: "6-a-8", label: "Security best practices" },
        ],
      },
    ],
    roadmapLinks: [],
    coursesLink: [
      {
        label: "Youtube - Freecodecamp",
        url: "https://www.youtube.com/watch?v=EtEb40LE5zQ",
      },
      {
        label: "Youtube - Terraform",
        url: "https://www.youtube.com/watch?v=7xngnjfIlK4",
      },
    ],
  },
  {
    id: 7,
    title: "Inżynieria Oprogramowania, Architektura i System Design",
    sections: [
      {
        level: "beginner",
        labelPL: "Podstawy",
        items: [
          { id: "7-b-1", label: "SOLID principles" },
          { id: "7-b-2", label: "DRY, KISS, YAGNI" },
          {
            id: "7-b-3",
            label: "Basic design patterns (Factory, Singleton, Strategy)",
          },
          { id: "7-b-4", label: "Code organization i separation of concerns" },
          { id: "7-b-5", label: "Clean Code principles" },
          { id: "7-b-6", label: "Version control best practices" },
          { id: "7-b-7", label: "Code review basics" },
        ],
      },
      {
        level: "intermediate",
        labelPL: "Rozwój",
        items: [
          {
            id: "7-i-1",
            label: "Advanced design patterns (Observer, Decorator, Adapter)",
          },
          { id: "7-i-2", label: "Architectural patterns (MVC, MVP, MVVM)" },
          { id: "7-i-3", label: "RESTful API design best practices" },
          { id: "7-i-4", label: "Scalability basics (horizontal vs vertical)" },
          { id: "7-i-5", label: "Caching strategies" },
          { id: "7-i-6", label: "Database design patterns" },
          { id: "7-i-7", label: "Testing strategies (unit, integration, e2e)" },
        ],
      },
      {
        level: "advanced",
        labelPL: "Zaawansowane",
        items: [
          { id: "7-a-1", label: "Microservices architecture" },
          { id: "7-a-2", label: "Event-driven architecture" },
          { id: "7-a-3", label: "CQRS i Event Sourcing" },
          { id: "7-a-4", label: "Load balancing strategies" },
          { id: "7-a-5", label: "CAP theorem i distributed systems" },
          { id: "7-a-6", label: "Message queues (RabbitMQ, Kafka)" },
          { id: "7-a-7", label: "API Gateway patterns" },
          { id: "7-a-8", label: "Service mesh concepts" },
          { id: "7-a-9", label: "Database sharding i replication" },
          { id: "7-a-10", label: "System design interview prep" },
        ],
      },
    ],
    roadmapLinks: [
      { label: "Design System", url: "https://roadmap.sh/design-system" },
      { label: "System Design", url: "https://roadmap.sh/system-design" },
      {
        label: "Software Architecture",
        url: "https://roadmap.sh/software-design-architecture",
      },
      { label: "API Design", url: "https://roadmap.sh/api-design" },
    ],
  },
  {
    id: 8,
    title: "Cloud & AI: AWS Cloud Practitioner & AWS AI Practitioner",
    sections: [
      {
        level: "beginner",
        labelPL: "AWS Cloud Practitioner - Podstawy",
        items: [
          { id: "8-cb-1", label: "Cloud computing concepts" },
          { id: "8-cb-2", label: "AWS global infrastructure" },
          { id: "8-cb-3", label: "Core services: EC2, S3, RDS" },
          { id: "8-cb-4", label: "IAM basics (users, groups, roles)" },
          { id: "8-cb-5", label: "VPC basics" },
          { id: "8-cb-6", label: "AWS pricing models" },
          { id: "8-cb-7", label: "AWS Support plans" },
        ],
      },
      {
        level: "intermediate",
        labelPL: "AWS Cloud Practitioner - Rozwój",
        items: [
          { id: "8-ci-1", label: "Lambda i serverless basics" },
          { id: "8-ci-2", label: "CloudWatch monitoring" },
          { id: "8-ci-3", label: "Auto Scaling" },
          { id: "8-ci-4", label: "Load Balancers (ALB, NLB)" },
          { id: "8-ci-5", label: "CloudFront CDN" },
          { id: "8-ci-6", label: "Route 53 DNS" },
          { id: "8-ci-7", label: "Security best practices" },
          { id: "8-ci-8", label: "Cost optimization strategies" },
        ],
      },
      {
        level: "advanced",
        labelPL: "AWS Cloud Practitioner - Zaawansowane",
        items: [
          { id: "8-ca-1", label: "Well-Architected Framework" },
          { id: "8-ca-2", label: "Compliance i governance" },
          { id: "8-ca-3", label: "Disaster recovery strategies" },
          { id: "8-ca-4", label: "Migration strategies" },
          { id: "8-ca-5", label: "Hybrid cloud architectures" },
          { id: "8-ca-6", label: "Exam preparation strategies" },
        ],
      },
      {
        level: "beginner",
        labelPL: "AWS AI Practitioner - Podstawy",
        items: [
          { id: "8-ab-1", label: "AI/ML fundamentals" },
          { id: "8-ab-2", label: "AWS AI services overview" },
          { id: "8-ab-3", label: "Amazon Rekognition basics" },
          { id: "8-ab-4", label: "Amazon Comprehend" },
          { id: "8-ab-5", label: "Amazon Translate" },
          { id: "8-ab-6", label: "Amazon Polly" },
          { id: "8-ab-7", label: "Responsible AI principles" },
        ],
      },
      {
        level: "intermediate",
        labelPL: "AWS AI Practitioner - Rozwój",
        items: [
          { id: "8-ai-1", label: "Amazon SageMaker basics" },
          { id: "8-ai-2", label: "Amazon Bedrock" },
          { id: "8-ai-3", label: "ML lifecycle" },
          { id: "8-ai-4", label: "Model training i deployment" },
          { id: "8-ai-5", label: "AI use cases i applications" },
          { id: "8-ai-6", label: "Data preparation for ML" },
        ],
      },
      {
        level: "advanced",
        labelPL: "AWS AI Practitioner - Zaawansowane",
        items: [
          { id: "8-aa-1", label: "Advanced SageMaker features" },
          { id: "8-aa-2", label: "MLOps practices" },
          { id: "8-aa-3", label: "Model optimization" },
          { id: "8-aa-4", label: "AI ethics i bias mitigation" },
          { id: "8-aa-5", label: "Cost optimization dla ML workloads" },
          { id: "8-aa-6", label: "Exam preparation strategies" },
        ],
      },
    ],
    roadmapLinks: [{ label: "AWS Roadmap", url: "https://roadmap.sh/aws" }],
    coursesLink: [
      {
        label: "AWS Cloud Practitioner",
        url: "https://www.udemy.com/course/aws-certified-cloud-practitioner-new/",
      },
      {
        label: "AWS AI Practitioner",
        url: "https://www.udemy.com/course/aws-ai-practitioner-certified/?couponCode=NVD20PMUS&utm_campaign=Search_Keyword_Alpha_Prof_la.ES_cc.ROW-Spanish&utm_source=google&utm_medium=paid-search&portfolio=ROW-Spanish&mx&utm_tactic=nb&utm_term=&utm_content=g&funnel=&test=&gad_source=1&gad_campaignid=21487757262&gbraid=0AAAAADROdO0-E4deaWKoZGIaB_LQcqMxM",
      },
    ],
  },
  {
    id: 9,
    title: "JavaScript i TypeScript",
    sections: [
      {
        level: "beginner",
        labelPL: "JavaScript - Podstawy",
        items: [
          { id: "9-jb-1", label: "Data types i variables (let, const, var)" },
          { id: "9-jb-2", label: "Operators i control flow" },
          { id: "9-jb-3", label: "Functions (declaration, expression, arrow)" },
          {
            id: "9-jb-4",
            label: "Arrays i array methods (map, filter, reduce)",
          },
          { id: "9-jb-5", label: "Objects i destructuring" },
          { id: "9-jb-6", label: "ES6+ features (spread, rest)" },
          { id: "9-jb-7", label: "Template literals" },
        ],
      },
      {
        level: "intermediate",
        labelPL: "JavaScript - Rozwój",
        items: [
          { id: "9-ji-1", label: "Closures i scope" },
          { id: "9-ji-2", label: "Prototypes i inheritance" },
          { id: "9-ji-3", label: "this keyword i binding" },
          {
            id: "9-ji-4",
            label: "Asynchronous JavaScript (callbacks, promises, async/await)",
          },
          { id: "9-ji-5", label: "Error handling (try/catch)" },
          { id: "9-ji-6", label: "Modules (import/export)" },
          { id: "9-ji-7", label: "Higher-order functions" },
          { id: "9-ji-8", label: "Event loop i call stack" },
        ],
      },
      {
        level: "advanced",
        labelPL: "JavaScript - Zaawansowane",
        items: [
          { id: "9-ja-1", label: "Advanced async patterns" },
          { id: "9-ja-2", label: "Generators i iterators" },
          { id: "9-ja-3", label: "Proxies i Reflect API" },
          { id: "9-ja-4", label: "Memory management" },
          { id: "9-ja-5", label: "Performance optimization" },
          { id: "9-ja-6", label: "Design patterns w JavaScript" },
          { id: "9-ja-7", label: "Functional programming concepts" },
        ],
      },
      {
        level: "beginner",
        labelPL: "TypeScript - Podstawy",
        items: [
          { id: "9-tb-1", label: "Type annotations" },
          {
            id: "9-tb-2",
            label: "Basic types (string, number, boolean, array)",
          },
          { id: "9-tb-3", label: "Interfaces" },
          { id: "9-tb-4", label: "Type aliases" },
          { id: "9-tb-5", label: "Union i intersection types" },
          { id: "9-tb-6", label: "Optional i readonly properties" },
          { id: "9-tb-7", label: "tsconfig.json basics" },
        ],
      },
      {
        level: "intermediate",
        labelPL: "TypeScript - Rozwój",
        items: [
          { id: "9-ti-1", label: "Generics" },
          { id: "9-ti-2", label: "Type guards i narrowing" },
          { id: "9-ti-3", label: "Utility types (Partial, Pick, Omit)" },
          { id: "9-ti-4", label: "Enums" },
          { id: "9-ti-5", label: "Advanced function types" },
          { id: "9-ti-6", label: "Modules i namespaces" },
          { id: "9-ti-7", label: "Decorators basics" },
        ],
      },
      {
        level: "advanced",
        labelPL: "TypeScript - Zaawansowane",
        items: [
          { id: "9-ta-1", label: "Advanced generics (constraints, inference)" },
          { id: "9-ta-2", label: "Conditional types" },
          { id: "9-ta-3", label: "Mapped types" },
          { id: "9-ta-4", label: "Template literal types" },
          { id: "9-ta-5", label: "Type manipulation" },
          { id: "9-ta-6", label: "Advanced decorators" },
          { id: "9-ta-7", label: "TypeScript compiler API" },
          { id: "9-ta-8", label: "Performance optimization" },
        ],
      },
    ],
    roadmapLinks: [
      { label: "JavaScript Roadmap", url: "https://roadmap.sh/javascript" },
      { label: "TypeScript Roadmap", url: "https://roadmap.sh/typescript" },
    ],
  },

  {
    id: 10,
    title: "Backend Development",
    sections: [],
    roadmapLinks: [
      { label: "Backend Roadmap", url: "https://roadmap.sh/backend" },
    ],
  },
];
