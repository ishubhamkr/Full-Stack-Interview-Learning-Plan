export const PLATFORM_PLAN = {
  1: {
    title: 'Cloud Platforms & Container Orchestration',
    goal: 'Understand the hosting and compute layer.',
    week: 'Week 1 — Infrastructure & Orchestration',
    sections: [
      {
        name: 'Azure Cloud (Primary)',
        emoji: '☁️',
        items: [
          'Azure fundamentals: Regions, Resource Groups, Subscriptions, RBAC',
          'Azure Portal, CLI (az), ARM templates basics',
          'Azure Networking: VNets, Subnets, NSGs, Private Endpoints',
        ],
        resources: [
          { name: 'AZ-900 Microsoft Learn Path', url: 'https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/', type: 'doc' },
        ],
      },
      {
        name: 'Kubernetes (AKS + HCC)',
        emoji: '⎈',
        items: [
          'Kubernetes core concepts: Pods, Deployments, Services, Ingress, ConfigMaps, Secrets',
          'kubectl CLI commands',
          'Helm charts (packaging K8s apps)',
          'AKS-specific: node pools, managed identity integration',
          'HCC K8s: same concepts, Optum-managed control plane',
        ],
        resources: [
          { name: 'Kubernetes Interactive Tutorial', url: 'https://kubernetes.io/docs/tutorials/', type: 'doc' },
          { name: 'Helm Documentation', url: 'https://helm.sh/docs/', type: 'doc' },
        ],
      },
      {
        name: 'AWS & GCP Basics',
        emoji: '🌐',
        items: [
          'S3, EC2, IAM (AWS) — understand enough to read configs',
          'GCS, GKE, IAM (GCP) — same',
          'Focus on storage and identity concepts only',
        ],
        resources: [
          { name: 'AWS Getting Started', url: 'https://aws.amazon.com/getting-started/', type: 'doc' },
          { name: 'GCP Fundamentals', url: 'https://cloud.google.com/docs/get-started', type: 'doc' },
        ],
      },
    ],
    handson: 'Deploy a simple containerized app on AKS using kubectl and a Helm chart.',
    prerequisites: [],
  },
  2: {
    title: 'Containers, CI/CD & DevOps Toolchain',
    goal: 'Understand how code goes from source to production.',
    week: 'Week 1 — Infrastructure & Orchestration',
    sections: [
      {
        name: 'Docker & Containers',
        emoji: '🐳',
        items: [
          'Dockerfile syntax, layers, multi-stage builds',
          'Image tagging and pushing to registries',
          'Container networking and volumes',
        ],
        resources: [
          { name: 'Docker Official Docs', url: 'https://docs.docker.com/get-started/', type: 'doc' },
        ],
      },
      {
        name: 'GitHub Enterprise Cloud',
        emoji: '🐙',
        items: [
          'Branching strategies (GitFlow, trunk-based)',
          'GitHub Actions: workflows, jobs, steps, secrets, environments',
          'Branch protection rules, CODEOWNERS',
          'Look at the uhcpp-actions-library and ci-workflows-demos repos in your workspace',
        ],
        resources: [
          { name: 'GitHub Actions Documentation', url: 'https://docs.github.com/en/actions', type: 'doc' },
        ],
      },
      {
        name: 'Terraform (IaC)',
        emoji: '🏗️',
        items: [
          'HCL syntax: resource, variable, output, module',
          'State management (remote state in Azure Storage)',
          'terraform init, plan, apply, destroy',
          'Azure provider resources: AKS, VNets, Key Vault',
        ],
        resources: [
          { name: 'Terraform Getting Started — Azure', url: 'https://developer.hashicorp.com/terraform/tutorials/azure-get-started', type: 'doc' },
        ],
      },
      {
        name: 'Artifactory',
        emoji: '📦',
        items: [
          'Docker registry concepts',
          'Pushing/pulling images, repository policies',
          'Integration with CI pipelines',
        ],
        resources: [
          { name: 'JFrog Artifactory Docs', url: 'https://jfrog.com/help/r/jfrog-artifactory-documentation', type: 'doc' },
        ],
      },
    ],
    handson: 'Write a GitHub Actions workflow that builds a Docker image, pushes to Artifactory, and deploys to AKS via Terraform.',
    prerequisites: [],
  },
  3: {
    title: 'Data Engineering & Analytics Stack',
    goal: 'Understand how data flows, is stored, and is processed.',
    week: 'Week 1 — Data & Analytics',
    sections: [
      {
        name: 'Kafka (Event Streaming)',
        emoji: '📨',
        items: [
          'Topics, Partitions, Consumer Groups, Offsets',
          'Producers and Consumers (Java/Python)',
          'Kafka Connect for integrations',
          'Schema Registry (Avro/JSON schemas)',
        ],
        resources: [
          { name: 'Apache Kafka Quickstart', url: 'https://kafka.apache.org/quickstart', type: 'doc' },
        ],
      },
      {
        name: 'Benthos (Data Pipeline Agent)',
        emoji: '🔀',
        items: [
          'Pipeline config (YAML): inputs, processors, outputs',
          'Connecting Kafka → transformations → sinks',
        ],
        resources: [
          { name: 'Benthos Documentation', url: 'https://www.benthos.dev/docs/', type: 'doc' },
        ],
      },
      {
        name: 'Postgres (Managed)',
        emoji: '🐘',
        items: [
          'SQL fundamentals + advanced: CTEs, window functions, indexes',
          'Connection pooling (PgBouncer)',
          'Schema migrations (Flyway/Liquibase — check your database-migration repo)',
        ],
        resources: [
          { name: 'PostgreSQL Documentation', url: 'https://www.postgresql.org/docs/', type: 'doc' },
        ],
      },
      {
        name: 'Snowflake',
        emoji: '❄️',
        items: [
          'Virtual warehouses, databases, schemas',
          'Snowflake SQL dialect',
          'Data sharing and cloning',
        ],
        resources: [
          { name: 'Snowflake Getting Started', url: 'https://docs.snowflake.com/en/user-guide-getting-started', type: 'doc' },
        ],
      },
      {
        name: 'Airflow & Azure Data Factory',
        emoji: '🌬️',
        items: [
          'DAGs in Airflow (Python-based orchestration)',
          'ADF pipelines, linked services, datasets, triggers',
        ],
        resources: [
          { name: 'Apache Airflow Documentation', url: 'https://airflow.apache.org/docs/', type: 'doc' },
          { name: 'Azure Data Factory Docs', url: 'https://learn.microsoft.com/en-us/azure/data-factory/', type: 'doc' },
        ],
      },
      {
        name: 'Data Lake Storage & Databricks',
        emoji: '🏞️',
        items: [
          'Storage hierarchy: containers/buckets, directories, files (ADLS, S3, GCS)',
          'Access control: SAS tokens, managed identity, IAM roles',
          'Spark fundamentals: DataFrames, transformations, actions',
          'Delta Lake (ACID transactions on data lakes)',
          'Notebooks vs Jobs in Databricks',
        ],
        resources: [
          { name: 'Azure Data Lake Storage Docs', url: 'https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction', type: 'doc' },
          { name: 'Databricks Getting Started', url: 'https://docs.databricks.com/en/getting-started/index.html', type: 'doc' },
        ],
      },
      {
        name: 'Unity Catalog / OneLake / Horizon',
        emoji: '🗂️',
        items: [
          'Data governance: catalogs, schemas, tables, lineage',
          'Fine-grained access control on data assets',
        ],
        resources: [
          { name: 'Unity Catalog Overview', url: 'https://docs.databricks.com/en/data-governance/unity-catalog/index.html', type: 'doc' },
        ],
      },
    ],
    handson: 'Build an Airflow DAG that reads from Kafka via Benthos, writes to ADLS, and queries it via Databricks.',
    prerequisites: [],
  },
  4: {
    title: 'Security, Identity & Secrets Management',
    goal: 'Understand how authentication, authorization, and secrets work end-to-end.',
    week: 'Week 1 — Security & Compliance',
    sections: [
      {
        name: 'Identity & Authentication',
        emoji: '🔐',
        items: [
          'Ping Identity — Optum IdP: OAuth 2.0, OIDC, SAML',
          'Azure EntraID — Cloud identity: App registrations, Service Principals, Managed Identity',
          'Siteminder — SSO/Federation: SP, IdP, assertions',
          'MFA — Step-up auth: TOTP, push notifications',
        ],
        resources: [
          { name: 'OAuth 2.0 Simplified', url: 'https://www.oauth.com/', type: 'doc' },
          { name: 'Azure Entra ID Docs', url: 'https://learn.microsoft.com/en-us/entra/identity/', type: 'doc' },
        ],
      },
      {
        name: 'Authorization',
        emoji: '🛡️',
        items: [
          'RBAC: Roles, Role Bindings (K8s + Azure + Snowflake)',
          'OAuth 2.0 flows: client credentials, auth code, device flow',
          'Scopes, claims, JWT decoding (jwt.io)',
        ],
        resources: [
          { name: 'JWT Decoder — jwt.io', url: 'https://jwt.io/', type: 'doc' },
        ],
      },
      {
        name: 'Secrets Management',
        emoji: '🔑',
        items: [
          'HashiCorp Vault: KV secrets, dynamic secrets, AppRole auth, K8s auth',
          'CyberArk: PAM — privileged session management, credential vaulting',
          'Never hardcode secrets — always inject via Vault or K8s Secrets',
        ],
        resources: [
          { name: 'HashiCorp Vault Getting Started', url: 'https://developer.hashicorp.com/vault/tutorials/getting-started', type: 'doc' },
        ],
      },
      {
        name: 'Security Scanning & Compliance',
        emoji: '🔍',
        items: [
          'Prisma Cloud: container image scanning, K8s admission control',
          'WAF: rules, OWASP ModSecurity Core Rule Set',
          'OWASP Top 10: SQL injection, XSS, broken auth, SSRF — know each with mitigations',
          'OCCrAM: Optum-specific compliance gates in CI pipelines',
        ],
        resources: [
          { name: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/', type: 'doc' },
          { name: 'Prisma Cloud Docs', url: 'https://docs.prismacloud.io/', type: 'doc' },
        ],
      },
    ],
    handson: 'Configure a Spring Boot app to authenticate with Vault using K8s ServiceAccount, retrieve a DB password at startup.',
    prerequisites: [],
  },
  5: {
    title: 'Microservices Architecture & API Layer',
    goal: 'Understand how services communicate and are exposed.',
    week: 'Week 1 — Services & APIs',
    sections: [
      {
        name: 'Microservices Patterns',
        emoji: '🧩',
        items: [
          'Service decomposition, bounded contexts',
          'Synchronous (REST, gRPC) vs Asynchronous (Kafka) communication',
          'Circuit breakers, retries, timeouts (resilience4j)',
          'Health checks, readiness/liveness probes',
        ],
        resources: [
          { name: 'Microservices.io Patterns', url: 'https://microservices.io/patterns/', type: 'doc' },
          { name: 'resilience4j Docs', url: 'https://resilience4j.readme.io/', type: 'doc' },
        ],
      },
      {
        name: 'Spring Boot (from your workspace)',
        emoji: '🌱',
        items: [
          'Look at src — understand the project structure',
          'Gradle multi-project builds (build.gradle, settings.gradle)',
          'Spring Security integration with OAuth2/Ping',
          'Actuator endpoints for health/metrics',
        ],
        resources: [
          { name: 'Spring Boot Reference Docs', url: 'https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/', type: 'doc' },
        ],
      },
      {
        name: 'API Gateway & Routing',
        emoji: '🔀',
        items: [
          'API Gateway: rate limiting, auth offloading, routing rules',
          'HA-Proxy / Traefik: reverse proxy config, SSL termination, load balancing',
          'F5 VIP: hardware load balancing — understand VIP concepts',
          'Cloudflare: DDoS protection, WAF, DNS proxying',
        ],
        resources: [
          { name: 'Traefik Documentation', url: 'https://doc.traefik.io/traefik/', type: 'doc' },
          { name: 'Cloudflare Learning Center', url: 'https://www.cloudflare.com/learning/', type: 'doc' },
        ],
      },
      {
        name: 'API Management',
        emoji: '📄',
        items: [
          'Common Swagger API (OpenAPI 3.0): spec-first design, openapi.yaml authoring',
          'Versioning strategies (/v1/, headers)',
          'Look at selfservice-uhcp-digitalsecurity-api-documentation in your workspace',
        ],
        resources: [
          { name: 'OpenAPI Specification', url: 'https://swagger.io/specification/', type: 'doc' },
          { name: 'Swagger Editor', url: 'https://editor.swagger.io/', type: 'doc' },
        ],
      },
    ],
    handson: 'Trace a single API request from Cloudflare → WAF → API Gateway → Traefik → AKS Pod → Vault → Postgres.',
    prerequisites: [],
  },
  6: {
    title: 'Observability, Monitoring & Incident Response',
    goal: 'Know how to observe, debug, and alert on running systems.',
    week: 'Week 1 — Observability',
    sections: [
      {
        name: 'Metrics & Dashboards',
        emoji: '📊',
        items: [
          'Azure Monitor: metrics, alerts, diagnostic settings, Log Analytics workspace',
          'Grafana: dashboard creation, PromQL queries, data source configuration',
          'Prometheus: scraping, recording rules, alert rules',
        ],
        resources: [
          { name: 'Grafana Getting Started', url: 'https://grafana.com/docs/grafana/latest/getting-started/', type: 'doc' },
          { name: 'Azure Monitor Docs', url: 'https://learn.microsoft.com/en-us/azure/azure-monitor/', type: 'doc' },
        ],
      },
      {
        name: 'Log Management',
        emoji: '📋',
        items: [
          'Splunk: search processing language (SPL), dashboards, alerts, forwarders',
          'Log shipping from K8s pods → Splunk (Fluentd/Fluent Bit)',
          'Structured logging best practices (JSON logs with correlation IDs)',
        ],
        resources: [
          { name: 'Splunk Search Tutorial', url: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchTutorial/WelcometotheSearchTutorial', type: 'doc' },
          { name: 'Fluent Bit Docs', url: 'https://docs.fluentbit.io/', type: 'doc' },
        ],
      },
      {
        name: 'Alerting & Incident Management',
        emoji: '🚨',
        items: [
          'PagerDuty: services, escalation policies, on-call schedules, runbooks',
          'Alert fatigue avoidance — SLO-based alerting',
          'Insights: event correlation, anomaly detection',
        ],
        resources: [
          { name: 'PagerDuty Best Practices', url: 'https://www.pagerduty.com/resources/learn/best-practices/', type: 'doc' },
        ],
      },
      {
        name: 'Distributed Tracing',
        emoji: '🔗',
        items: [
          'Trace IDs, span IDs — propagation across services',
          'OpenTelemetry basics',
          'Connecting traces to logs and metrics',
        ],
        resources: [
          { name: 'OpenTelemetry Docs', url: 'https://opentelemetry.io/docs/', type: 'doc' },
        ],
      },
    ],
    handson: 'Create a Grafana dashboard showing request rate, error rate, and p99 latency for one of the Spring Boot services. Set up a PagerDuty alert rule.',
    prerequisites: [],
  },
  7: {
    title: 'Governance, Compliance & Full Architecture Review',
    goal: 'Understand governance controls and trace full platform lifecycle.',
    week: 'Week 1 — Governance & Architecture',
    sections: [
      {
        name: 'Data Governance',
        emoji: '📚',
        items: [
          'Enterprise Data Catalog: metadata, lineage, data classification',
          'Unity Catalog: column-level security, audit logs',
          'Records Retention Schedule: data lifecycle policies, archival, deletion',
        ],
        resources: [
          { name: 'Unity Catalog Overview', url: 'https://docs.databricks.com/en/data-governance/unity-catalog/index.html', type: 'doc' },
        ],
      },
      {
        name: 'Source Code & Deployment Governance',
        emoji: '🔏',
        items: [
          'PADU: Optum\'s architectural review process — understand approval gates',
          'Branch policies, required PR reviewers, signed commits',
          'Deployment gates in GitHub Actions (environment approvals)',
        ],
        resources: [
          { name: 'GitHub Branch Protection Rules', url: 'https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches', type: 'doc' },
        ],
      },
      {
        name: 'HCP Console',
        emoji: '🖥️',
        items: [
          'Optum\'s internal admin portal — platform resource provisioning',
          'Understanding PRM (Platform Resource Manager) microservices model',
        ],
        resources: [],
      },
      {
        name: 'Full Platform Architecture Review',
        emoji: '🏛️',
        items: [
          'Developer → GitHub Enterprise → CI (GitHub Actions) → Build (Gradle/Maven)',
          'Scan (Prisma Cloud, OWASP) → Publish (Artifactory)',
          'Deploy (Helm + Terraform → AKS/HCC) → Identity (Ping/EntraID) → Secrets (Vault)',
          'Data (Kafka → Benthos → ADLS → Databricks → Snowflake)',
          'Observe (Splunk + Grafana + Azure Monitor → PagerDuty)',
          'Expose (Cloudflare → WAF → API Gateway → Traefik → Services)',
        ],
        resources: [],
      },
      {
        name: 'Workspace Deep Dive',
        emoji: '🔬',
        items: [
          'ci-workflows-demos — GitHub Actions patterns',
          'uhcpp-actions-library — reusable workflow library',
          'selfservice-uhcp-digitalsecurity-database-migration — DB migration pipeline',
          'selfservice-uhcp-digitalsecurity-access-api — Spring Boot microservice',
          'selfservice-uhcp-digitalsecurity-api-documentation — OpenAPI specs',
        ],
        resources: [],
      },
    ],
    handson: 'Draw the end-to-end architecture diagram. Walk through each workspace repo to identify real implementations of each layer.',
    prerequisites: [],
  },
};

export const PLATFORM_PREREQUISITES = [
  'Java 17+, Python 3.10+, Node.js 18+',
  'kubectl, helm, terraform, az CLI installed',
  'Docker Desktop running',
  'Access to GitHub Enterprise, Artifactory, and AKS cluster',
];

export const PLATFORM_SUMMARY = [
  { day: 1, focus: 'Cloud + Kubernetes',        deliverable: 'Deploy app on AKS with Helm' },
  { day: 2, focus: 'CI/CD + Docker + Terraform', deliverable: 'Full pipeline: build → push → deploy' },
  { day: 3, focus: 'Data Engineering',           deliverable: 'Kafka → ADLS → Databricks pipeline' },
  { day: 4, focus: 'Security & Identity',        deliverable: 'Vault + K8s auth + OWASP controls' },
  { day: 5, focus: 'Microservices + APIs',       deliverable: 'Trace full request path end-to-end' },
  { day: 6, focus: 'Observability',              deliverable: 'Grafana dashboard + PagerDuty alert' },
  { day: 7, focus: 'Governance + Full Review',   deliverable: 'Architecture diagram + repo walkthrough' },
];
