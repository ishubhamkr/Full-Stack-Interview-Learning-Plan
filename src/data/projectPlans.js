// Project / Study plan for each of the 21 days
const PROJECT_PLANS = {
  day1: {
    title: 'Java Basics',
    goal: 'Understand the Java ecosystem, syntax fundamentals, and how the JVM executes code.',
    schedule: [
      { time: '9:00–10:30', activity: 'Read: JVM / JDK / JRE architecture & platform independence' },
      { time: '10:30–12:00', activity: 'Code: Write 5 small programs — primitives, access modifiers, static vs instance' },
      { time: '13:00–14:30', activity: 'Practice: Solve 10 basic Java problems on LeetCode / HackerRank' },
      { time: '14:30–16:00', activity: 'Review: Flashcard all 15 interview Q&As for Day 1' },
    ],
    resources: [
      { label: 'Oracle Java Docs — Language Basics', url: 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/' },
      { label: 'Baeldung — JVM, JRE, JDK', url: 'https://www.baeldung.com/jvm-vs-jre-vs-jdk' },
    ],
    tasks: [
      'Write a HelloWorld program and explain each keyword',
      'Implement a class with all 4 access modifier types',
      'Demonstrate autoboxing with Integer vs int',
      'Write a program using var (Java 10+) for local type inference',
    ],
    deliverable: 'A single Java file that demonstrates all basic concepts covered today.',
  },
  day2: {
    title: 'OOP Concepts',
    goal: 'Master encapsulation, inheritance, polymorphism, and abstraction with real code.',
    schedule: [
      { time: '9:00–10:30', activity: 'Read: 4 pillars of OOP — theory + examples' },
      { time: '10:30–12:00', activity: 'Code: Build a small class hierarchy (e.g. Shape → Circle / Rectangle)' },
      { time: '13:00–14:30', activity: 'Practice: Implement abstract class vs interface comparison' },
      { time: '14:30–16:00', activity: 'Review: All 15 Q&As, focus on method overloading vs overriding' },
    ],
    resources: [
      { label: 'Baeldung — Inheritance in Java', url: 'https://www.baeldung.com/java-inheritance' },
      { label: 'Baeldung — Abstract Class vs Interface', url: 'https://www.baeldung.com/java-abstract-class' },
    ],
    tasks: [
      'Build Animal → Dog/Cat hierarchy with overridden speak()',
      'Show runtime polymorphism using a List<Animal>',
      'Write an interface with a default method and implement it in 2 classes',
      'Demonstrate the Liskov Substitution Principle with a code example',
    ],
    deliverable: 'OOP mini-project: polymorphic payment system (Cash/Card/UPI).',
  },
  day3: {
    title: 'Java Core',
    goal: 'Deep-dive into exception handling, generics, and the core utility classes.',
    schedule: [
      { time: '9:00–10:30', activity: 'Read: Checked vs unchecked exceptions, try-with-resources' },
      { time: '10:30–12:00', activity: 'Code: Custom exception hierarchy with meaningful messages' },
      { time: '13:00–14:30', activity: 'Practice: Generic utility methods — swap, min, max' },
      { time: '14:30–16:00', activity: 'Review: 15 Q&As for Day 3' },
    ],
    resources: [
      { label: 'Oracle Generics Tutorial', url: 'https://docs.oracle.com/javase/tutorial/java/generics/' },
      { label: 'Baeldung — Exception Handling', url: 'https://www.baeldung.com/java-exceptions' },
    ],
    tasks: [
      'Implement a generic Pair<A,B> class',
      'Write a custom checked exception for a banking system',
      'Demonstrate try-with-resources using a file reader',
      'Chain exceptions: catch IOException, wrap in ServiceException',
    ],
    deliverable: 'Generic Stack<T> implementation with proper exception handling.',
  },
  day4: {
    title: 'JVM & Memory',
    goal: 'Understand heap/stack layout, GC algorithms, and how to tune JVM memory flags.',
    schedule: [
      { time: '9:00–10:30', activity: 'Read: Heap regions (Young/Old/Metaspace), GC roots' },
      { time: '10:30–12:00', activity: 'Lab: Run a memory-leak demo, observe with VisualVM' },
      { time: '13:00–14:30', activity: 'Practice: Set -Xmx/-Xms flags, compare G1 vs ZGC output' },
      { time: '14:30–16:00', activity: 'Review: All 15 Q&As for Day 4' },
    ],
    resources: [
      { label: 'Oracle — Java GC Tuning Guide', url: 'https://docs.oracle.com/en/java/javase/17/gctuning/' },
      { label: 'Baeldung — JVM Memory Model', url: 'https://www.baeldung.com/java-stack-heap' },
    ],
    tasks: [
      'Draw the JVM memory layout from memory',
      'Write a program that causes OutOfMemoryError, then fix it',
      'Explain the difference between Minor GC and Major GC',
      'Compare -XX:+UseG1GC vs -XX:+UseZGC for a high-throughput app',
    ],
    deliverable: 'One-page JVM tuning cheat sheet for production Spring Boot apps.',
  },
  day5: {
    title: 'Strings & Collections',
    goal: 'Master Java Collections Framework — internals, complexity, and choosing the right structure.',
    schedule: [
      { time: '9:00–10:30', activity: 'Read: HashMap internals — hash, bucket, treeify' },
      { time: '10:30–12:00', activity: 'Code: Implement a phone book using HashMap with collision handling demo' },
      { time: '13:00–14:30', activity: 'Practice: 15 collections-based LeetCode problems' },
      { time: '14:30–16:00', activity: 'Review: String pool, StringBuilder, all 15 Day 5 Q&As' },
    ],
    resources: [
      { label: 'Baeldung — HashMap in Java', url: 'https://www.baeldung.com/java-hashmap' },
      { label: 'Baeldung — String vs StringBuilder', url: 'https://www.baeldung.com/java-string-builder' },
    ],
    tasks: [
      'Explain HashMap rehashing with a whiteboard diagram',
      'Implement word frequency counter using HashMap',
      'Demonstrate LinkedHashMap preserving insertion order',
      'Compare ArrayList vs LinkedList with a benchmark',
    ],
    deliverable: 'Collections complexity cheat sheet + LRU Cache implementation.',
  },
  day6: {
    title: 'Java 8 Features',
    goal: 'Be fluent with lambdas, streams, Optional, and functional interfaces.',
    schedule: [
      { time: '9:00–10:30', activity: 'Read: Lambda syntax, method references, functional interfaces' },
      { time: '10:30–12:00', activity: 'Code: Refactor imperative code to stream pipelines' },
      { time: '13:00–14:30', activity: 'Practice: 10 stream transformation exercises' },
      { time: '14:30–16:00', activity: 'Review: Optional patterns, flatMap, all 15 Day 6 Q&As' },
    ],
    resources: [
      { label: 'Baeldung — Java 8 Stream Guide', url: 'https://www.baeldung.com/java-8-streams' },
      { label: 'Baeldung — Java Optional', url: 'https://www.baeldung.com/java-optional' },
    ],
    tasks: [
      'Filter a list of employees by salary > 50K using streams',
      'Group employees by department using Collectors.groupingBy',
      'Chain 3 Optional calls without null checks',
      'Implement a custom Collector',
    ],
    deliverable: 'Java 8 cheat sheet: lambda syntax, common stream ops, Optional patterns.',
  },
  day7: {
    title: 'Multithreading & Exceptions',
    goal: 'Write thread-safe code using locks, executors, and concurrency utilities.',
    schedule: [
      { time: '9:00–10:30', activity: 'Read: Thread lifecycle, synchronized, volatile, happens-before' },
      { time: '10:30–12:00', activity: 'Code: Producer-consumer using BlockingQueue' },
      { time: '13:00–14:30', activity: 'Practice: Implement thread-safe counter with AtomicInteger' },
      { time: '14:30–16:00', activity: 'Review: All 15 Day 7 Q&As, deadlock scenarios' },
    ],
    resources: [
      { label: 'Baeldung — Java Concurrency', url: 'https://www.baeldung.com/java-concurrency' },
      { label: 'Oracle — Concurrency Trail', url: 'https://docs.oracle.com/javase/tutorial/essential/concurrency/' },
    ],
    tasks: [
      'Demonstrate a deadlock with 2 threads and 2 locks',
      'Fix the deadlock using lock ordering',
      'Use ExecutorService to run 10 tasks in parallel',
      'Compare synchronized vs ReentrantLock',
    ],
    deliverable: 'Thread-safe bank account simulation with transfer, deposit, withdraw.',
  },
  day8: {
    title: 'Spring Core',
    goal: 'Understand the IoC container, DI patterns, AOP, and Spring bean lifecycle.',
    schedule: [
      { time: '9:00–10:30', activity: 'Read: IoC, DI types, bean scopes, lifecycle callbacks' },
      { time: '10:30–12:00', activity: 'Code: Build a Spring context from scratch with @Configuration' },
      { time: '13:00–14:30', activity: 'Practice: Write a @Aspect for method execution logging' },
      { time: '14:30–16:00', activity: 'Review: All 15 Day 8 Q&As, @Qualifier vs @Primary' },
    ],
    resources: [
      { label: 'Spring Docs — Core Container', url: 'https://docs.spring.io/spring-framework/docs/current/reference/html/core.html' },
      { label: 'Baeldung — Spring AOP', url: 'https://www.baeldung.com/spring-aop' },
    ],
    tasks: [
      'Wire 3 beans with constructor injection, validate in unit test',
      'Use @Conditional to swap bean based on profile',
      'Write @Around advice that logs method duration',
      'Demonstrate @Scope("prototype") vs singleton',
    ],
    deliverable: 'Small Spring app: order service with AOP logging + validation.',
  },
  day9: {
    title: 'Spring Boot & Microservices',
    goal: 'Build production-ready REST APIs and understand microservice communication patterns.',
    schedule: [
      { time: '9:00–10:30', activity: 'Read: Auto-configuration, starters, embedded server, actuator' },
      { time: '10:30–12:00', activity: 'Code: Full CRUD REST API with Spring Data JPA + H2' },
      { time: '13:00–14:30', activity: 'Practice: Add Feign client to call a second microservice' },
      { time: '14:30–16:00', activity: 'Review: Circuit breaker patterns, all 15 Day 9 Q&As' },
    ],
    resources: [
      { label: 'Spring Boot Reference Docs', url: 'https://docs.spring.io/spring-boot/docs/current/reference/html/' },
      { label: 'Baeldung — Spring Cloud OpenFeign', url: 'https://www.baeldung.com/spring-cloud-openfeign' },
    ],
    tasks: [
      'Build /api/products CRUD with validation and error handling',
      'Add Spring Security basic auth to all endpoints',
      'Write a Resilience4j circuit breaker around external call',
      'Expose /actuator/health with custom health indicator',
    ],
    deliverable: 'Two-service system: product-service + order-service communicating via Feign.',
  },
  day10: {
    title: 'DevOps & Production',
    goal: 'Containerize, monitor, and deploy a Spring Boot app with CI/CD pipeline.',
    schedule: [
      { time: '9:00–10:30', activity: 'Read: Docker multi-stage builds, Kubernetes basics, Helm charts' },
      { time: '10:30–12:00', activity: 'Code: Dockerize the Day 9 app, push to Docker Hub' },
      { time: '13:00–14:30', activity: 'Practice: Write a GitHub Actions CI pipeline' },
      { time: '14:30–16:00', activity: 'Review: Prometheus/Grafana metrics, all 15 Day 10 Q&As' },
    ],
    resources: [
      { label: 'Docker Best Practices', url: 'https://docs.docker.com/develop/develop-images/dockerfile_best-practices/' },
      { label: 'Spring Boot Actuator Metrics', url: 'https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html' },
    ],
    tasks: [
      'Write a multi-stage Dockerfile (build → run) under 200MB',
      'Create docker-compose.yml with app + postgres + redis',
      'Add GitHub Actions workflow: test → build → push image',
      'Expose custom Micrometer counter to Prometheus',
    ],
    deliverable: 'Fully containerized Day 9 app with Docker Compose + CI pipeline.',
  },
  day11: {
    title: 'React Fundamentals',
    goal: 'Get solid on JSX, component model, props, and the virtual DOM reconciliation.',
    schedule: [
      { time: '9:00–10:30', activity: 'Read: JSX compilation, virtual DOM, component tree' },
      { time: '10:30–12:00', activity: 'Code: Build a card list component with props and conditional rendering' },
      { time: '13:00–14:30', activity: 'Practice: Implement a filterable product grid' },
      { time: '14:30–16:00', activity: 'Review: All 15 Day 11 Q&As' },
    ],
    resources: [
      { label: 'React Docs — Describing the UI', url: 'https://react.dev/learn/describing-the-ui' },
      { label: 'React Docs — Rendering Lists', url: 'https://react.dev/learn/rendering-lists' },
    ],
    tasks: [
      'Create a Button component with 3 variants via props',
      'Build a UserCard with avatar, name, role — fully driven by props',
      'Implement a conditional banner: show only if user is admin',
      'List 100 items efficiently with stable key prop',
    ],
    deliverable: 'React product catalogue: list, filter by category, show details card.',
  },
  day12: {
    title: 'React Hooks',
    goal: 'Master useState, useEffect, and the rules of hooks with real patterns.',
    schedule: [
      { time: '9:00–10:30', activity: 'Read: Hooks rules, closure pitfalls, stale state' },
      { time: '10:30–12:00', activity: 'Code: Build a data-fetching component with loading/error states' },
      { time: '13:00–14:30', activity: 'Practice: Implement useLocalStorage custom hook' },
      { time: '14:30–16:00', activity: 'Review: All 15 Day 12 Q&As, cleanup in useEffect' },
    ],
    resources: [
      { label: 'React Docs — Built-in Hooks', url: 'https://react.dev/reference/react' },
      { label: 'useHooks — Custom Hook Recipes', url: 'https://usehooks.com/' },
    ],
    tasks: [
      'Implement a counter with stale closure bug, then fix it',
      'Fetch GitHub user data with loading/error/success states',
      'Write useDebounce custom hook',
      'Demonstrate cleanup: unsubscribe from setInterval in useEffect',
    ],
    deliverable: 'Weather dashboard: fetch + display + auto-refresh + error recovery.',
  },
  day13: {
    title: 'Advanced React Hooks & Patterns',
    goal: 'Use useReducer, useContext, useMemo, useCallback and compound component patterns.',
    schedule: [
      { time: '9:00–10:30', activity: 'Read: useReducer vs useState, Context pitfalls, memoization' },
      { time: '10:30–12:00', activity: 'Code: Build a shopping cart with useReducer' },
      { time: '13:00–14:30', activity: 'Practice: Implement Compound Component pattern (Tabs)' },
      { time: '14:30–16:00', activity: 'Review: All 15 Day 13 Q&As' },
    ],
    resources: [
      { label: 'React Docs — useReducer', url: 'https://react.dev/reference/react/useReducer' },
      { label: 'Kent C. Dodds — Compound Components', url: 'https://kentcdodds.com/blog/compound-components-with-react-hooks' },
    ],
    tasks: [
      'Refactor a useState-heavy form to useReducer',
      'Create a ThemeContext that avoids prop drilling',
      'Use useMemo to memoize a sorted list of 10000 items',
      'Build a Tabs compound component with Tabs.List + Tabs.Panel',
    ],
    deliverable: 'Shopping cart with useReducer, persisted to localStorage.',
  },
  day14: {
    title: 'React Lifecycle, Performance & State Management',
    goal: 'Optimize renders, lazy load components, and manage global state with Zustand or Redux Toolkit.',
    schedule: [
      { time: '9:00–10:30', activity: 'Read: React.memo, useCallback, React.lazy, Suspense' },
      { time: '10:30–12:00', activity: 'Code: Add code-splitting to Day 11 app with React.lazy' },
      { time: '13:00–14:30', activity: 'Practice: Set up Zustand store for auth + cart' },
      { time: '14:30–16:00', activity: 'Review: All 15 Day 14 Q&As' },
    ],
    resources: [
      { label: 'React Docs — Performance', url: 'https://react.dev/learn/render-and-commit' },
      { label: 'Zustand Docs', url: 'https://zustand-demo.pmnd.rs/' },
    ],
    tasks: [
      'Profile a component tree in React DevTools and find re-render culprits',
      'Wrap an expensive child with React.memo and verify render count',
      'Lazy-load a route-level component, add Suspense fallback',
      'Create a Zustand store with actions for auth (login/logout)',
    ],
    deliverable: 'Optimized Day 11 catalogue + Zustand global auth state.',
  },
  day15: {
    title: 'React Router & Data Fetching',
    goal: 'Build a multi-page SPA with React Router v6 and modern data-fetching patterns.',
    schedule: [
      { time: '9:00–10:30', activity: 'Read: React Router v6 — nested routes, loaders, actions' },
      { time: '10:30–12:00', activity: 'Code: Set up 4-page app (Home/Products/Cart/Profile)' },
      { time: '13:00–14:30', activity: 'Practice: Add react-query for server state' },
      { time: '14:30–16:00', activity: 'Review: All 15 Day 15 Q&As' },
    ],
    resources: [
      { label: 'React Router v6 Docs', url: 'https://reactrouter.com/en/main' },
      { label: 'TanStack Query Docs', url: 'https://tanstack.com/query/latest' },
    ],
    tasks: [
      'Build nested routes: /products and /products/:id',
      'Protect /profile with an auth guard redirect',
      'Use useInfiniteQuery for paginated product list',
      'Implement optimistic update on cart add with react-query',
    ],
    deliverable: 'Full SPA: Home, Product List (infinite scroll), Product Detail, Cart.',
  },
  day16: {
    title: 'React Forms, TypeScript & Testing',
    goal: 'Build typed, validated forms and write meaningful component tests.',
    schedule: [
      { time: '9:00–10:30', activity: 'Read: React Hook Form + Zod validation, TypeScript with React' },
      { time: '10:30–12:00', activity: 'Code: Registration form with RHF + Zod schema validation' },
      { time: '13:00–14:30', activity: 'Practice: Write 10 tests with Testing Library + Vitest' },
      { time: '14:30–16:00', activity: 'Review: All 15 Day 16 Q&As' },
    ],
    resources: [
      { label: 'React Hook Form Docs', url: 'https://react-hook-form.com/' },
      { label: 'Testing Library Docs', url: 'https://testing-library.com/docs/react-testing-library/intro/' },
    ],
    tasks: [
      'Add TypeScript to the Day 15 SPA',
      'Build a login form: email + password, Zod schema, error messages',
      'Test the login form: valid submit, invalid email, empty password',
      'Mock a fetch call in a test using MSW',
    ],
    deliverable: 'Fully tested, TypeScript-typed login + registration flow.',
  },
  day17: {
    title: 'GraphQL Fundamentals',
    goal: 'Understand the GraphQL type system, write schemas and resolvers from scratch.',
    schedule: [
      { time: '9:00–10:30', activity: 'Read: Types, queries, mutations, subscriptions, introspection' },
      { time: '10:30–12:00', activity: 'Code: Build a Node.js GraphQL server with Apollo Server 4' },
      { time: '13:00–14:30', activity: 'Practice: Query the server in GraphQL Playground' },
      { time: '14:30–16:00', activity: 'Review: All 15 Day 17 Q&As' },
    ],
    resources: [
      { label: 'GraphQL Official Docs', url: 'https://graphql.org/learn/' },
      { label: 'Apollo Server 4 Docs', url: 'https://www.apollographql.com/docs/apollo-server/' },
    ],
    tasks: [
      'Define a User type with query { users } and mutation { createUser }',
      'Implement nested resolvers: User → posts',
      'Add input validation in resolver, return meaningful error',
      'Test all queries via Apollo Explorer / GraphiQL',
    ],
    deliverable: 'Apollo Server with User + Post schema, all CRUD operations.',
  },
  day18: {
    title: 'GraphQL Intermediate',
    goal: 'Solve N+1 with DataLoader, implement pagination and authentication middleware.',
    schedule: [
      { time: '9:00–10:30', activity: 'Read: N+1 problem, DataLoader batching, cursor pagination' },
      { time: '10:30–12:00', activity: 'Code: Add DataLoader to Day 17 server' },
      { time: '13:00–14:30', activity: 'Practice: Implement cursor-based pagination on posts query' },
      { time: '14:30–16:00', activity: 'Review: Context, auth middleware, all 15 Day 18 Q&As' },
    ],
    resources: [
      { label: 'DataLoader GitHub', url: 'https://github.com/graphql/dataloader' },
      { label: 'GraphQL Pagination — Relay Spec', url: 'https://relay.dev/graphql/connections.htm' },
    ],
    tasks: [
      'Demonstrate N+1 with logging, then fix with DataLoader',
      'Add JWT auth: decode token in context, guard protected resolvers',
      'Implement first/after cursor pagination on posts',
      'Write integration test for a protected mutation',
    ],
    deliverable: 'Optimised Day 17 server with auth, DataLoader, cursor pagination.',
  },
  day19: {
    title: 'GraphQL Advanced',
    goal: 'Implement subscriptions, schema stitching, and performance caching strategies.',
    schedule: [
      { time: '9:00–10:30', activity: 'Read: Subscriptions over WebSocket, persisted queries, caching' },
      { time: '10:30–12:00', activity: 'Code: Add a real-time commentAdded subscription' },
      { time: '13:00–14:30', activity: 'Practice: Set up Apollo Client with InMemoryCache policies' },
      { time: '14:30–16:00', activity: 'Review: Schema directives, all 15 Day 19 Q&As' },
    ],
    resources: [
      { label: 'Apollo — Subscriptions', url: 'https://www.apollographql.com/docs/apollo-server/data/subscriptions/' },
      { label: 'Apollo — Caching', url: 'https://www.apollographql.com/docs/react/caching/overview/' },
    ],
    tasks: [
      'Implement commentAdded subscription with PubSub',
      'Connect React client to subscription, show live comment feed',
      'Add @deprecated directive to a field with migration note',
      'Configure InMemoryCache with keyFields for custom cache keys',
    ],
    deliverable: 'Live comment feed: React + Apollo subscription + optimistic update.',
  },
  day20: {
    title: 'Full-Stack Capstone: React + GraphQL + Java',
    goal: 'Wire a React front-end to a Spring for GraphQL back-end end-to-end.',
    schedule: [
      { time: '9:00–10:00', activity: 'Plan: Draw system diagram — React ↔ Apollo ↔ Spring GraphQL ↔ DB' },
      { time: '10:00–12:00', activity: 'Code: Spring Boot app with spring-boot-starter-graphql + JPA' },
      { time: '13:00–15:00', activity: 'Code: React app with Apollo Client, useQuery/useMutation' },
      { time: '15:00–16:00', activity: 'Review: All Day 20 Q&As, compare Apollo vs React Query vs SWR' },
    ],
    resources: [
      { label: 'Spring for GraphQL Docs', url: 'https://docs.spring.io/spring-graphql/docs/current/reference/html/' },
      { label: 'Apollo Client React Docs', url: 'https://www.apollographql.com/docs/react/' },
    ],
    tasks: [
      'Expose a GraphQL schema from Spring Boot with @SchemaMapping',
      'Add @MutationMapping for createProduct',
      'Connect Apollo Client React app to Spring endpoint',
      'Handle loading/error states, optimistic UI on add product',
    ],
    deliverable: 'Full-stack product CRUD: React + Apollo → Spring GraphQL → PostgreSQL.',
  },
  day21: {
    title: 'Apache Kafka & Distributed Messaging',
    goal: 'Design event-driven systems using Kafka topics, partitions, and consumer groups.',
    schedule: [
      { time: '9:00–10:30', activity: 'Read: Kafka architecture — broker, topic, partition, offset, ISR' },
      { time: '10:30–12:00', activity: 'Code: Start Kafka locally (KRaft mode), produce & consume messages' },
      { time: '13:00–14:30', activity: 'Practice: Implement Spring Kafka producer + consumer microservice' },
      { time: '14:30–16:00', activity: 'Review: Schema Registry, MirrorMaker 2, all 21 Day 21 Q&As' },
    ],
    resources: [
      { label: 'Apache Kafka Docs', url: 'https://kafka.apache.org/documentation/' },
      { label: 'Confluent — Kafka Tutorials', url: 'https://developer.confluent.io/tutorials/' },
      { label: 'Spring Kafka Docs', url: 'https://docs.spring.io/spring-kafka/docs/current/reference/html/' },
    ],
    tasks: [
      'Start Kafka in KRaft mode (no ZooKeeper), create a topic with 3 partitions',
      'Write a Spring Boot producer that sends OrderCreated events',
      'Write a Spring Boot consumer group (2 instances) processing those events',
      'Demonstrate partition rebalance by killing one consumer instance',
      'Set up Confluent Schema Registry with Avro schema for OrderCreated',
    ],
    deliverable: 'Event-driven order system: order-service (producer) → Kafka → fulfillment-service (consumer).',
  },
};

export default PROJECT_PLANS;
