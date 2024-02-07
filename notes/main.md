# What We Are Building

- Next.js server with GraphQL completely typed end to end

## Description of the process

Nextjs server - endpoint into that using apollo server micro on top of that
defining the schema(datatypes and the resolvers) using the library Type-graphql(
which allows us to define the schema using typescript classes)
Then using the graphql-codegenerator to build out graphql request functions
we will send to the server using React-Query

## Components and Technologies Being Learned:

1. **Next.js**: A React framework that enables server-side rendering and provides a structure for building React applications.

2. **GraphQL**: A query language for APIs and a runtime for executing those queries with a type system you define for your data. It allows for more efficient data fetching by enabling clients to request only the data they need.

3. **Apollo Server Micro**: A lightweight GraphQL server implementation based on Micro, a minimalistic HTTP server framework for Node.js.

4. **TypeGraphQL**: A library that allows you to define GraphQL schemas using TypeScript classes, providing strong typing and better developer experience compared to traditional string-based schema definitions.

5. **GraphQL Code Generator**: A tool that generates TypeScript typings for GraphQL queries, mutations, and subscriptions based on your GraphQL schema and operations. It helps ensure type safety and auto-completion when working with GraphQL operations in TypeScript code.

6. **React-Query**: A library for managing and caching asynchronous data in React applications. It provides hooks for fetching and managing data from GraphQL and other APIs, with features like caching, automatic refetching, and pagination.
