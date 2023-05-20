import React from "react";
import setTitleName from "../hoooks/hooks";

const Blogs = () => {
  setTitleName('blogs')
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-3xl">
            Answers to Your Queries
          </h2>
          <div className="divide-y divide-gray-700">
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                What is an access token and refresh token? How do they work and
                where should we store them on the client-side?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                Access tokens and refresh tokens are essential components in
                authentication and authorization systems for web applications
                and APIs. An access token serves as a credential, enabling
                access to protected resources and is typically short-lived. In
                contrast, a refresh token allows for obtaining a new access
                token without requiring re-authentication and has a longer
                expiration time. It is crucial to store access tokens on the
                client-side, typically in memory or local storage, due to their
                short lifespan. However, refresh tokens, which grant ongoing
                access, should be securely stored on the server-side, such as
                encrypted databases. This approach ensures the integrity and
                security of the authentication process while providing a
                seamless user experience.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                Compare SQL and NoSQL databases
              </h3>
              <p className="md:pl-0 md:col-span-7">
                SQL and NoSQL databases have distinct characteristics.
                <li>
                  SQL : SQL databases follow a structured relational model,
                  relying on predefined schemas and tables.
                </li>
                <li>
                  NoSQL : NoSQL databases, embrace diverse data models, allowing
                  for flexibility in storing unstructured or semi-structured
                  data.
                </li>
                <li>
                  SQL enforces rigid schemas, while NoSQL offers schema
                  flexibility.
                </li>
                <li>
                  SQL databases scale vertically by adding resources to a single
                  server, while NoSQL databases excel at horizontal scalability.
                </li>
                <li>
                  SQL uses the declarative SQL query language, while NoSQL
                  databases have model-specific query languages.
                </li>
                <li>
                  SQL suits applications needing strong consistency and complex
                  transactions, while NoSQL is ideal for scalability and
                  handling unstructured or changing data.
                </li>
                <p>
                  Ultimately, the choice depends on specific requirements, with
                  SQL offering structure and NoSQL providing flexibility and
                  scalability.
                </p>
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                What is express js? What is Nest JS?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                {" "}
                <span className="font-semibold">Express JS</span> is a flexible
                and minimalistic Node.js web application framework that provides
                a range of features for web and mobile apps. It's unopinionated,
                allowing developers the freedom to implement code according to
                their needs. Powered by the Google V8 engine, it ensures high
                performance. With its lightweight nature and strong community
                support, finding resources and assistance is convenient.
                <p>
                  <span className="font-semibold">Nest JS</span> a rapidly
                  growing framework, builds upon Express to offer a more
                  scalable server-side application development approach. It
                  follows MVC architecture, utilizes TypeScript, and employs
                  dependency injection for component management. Both frameworks
                  offer comparable performance and scalability options.
                </p>
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                What is MongoDB aggregate and how does it work?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                Aggregation in MongoDB involves selecting and processing data
                from a collection to generate computed results. It combines
                values from multiple documents, performs operations like sum,
                average, minimum, and maximum, and returns a single result.
                MongoDB offers three approaches for aggregation: Aggregation
                Pipeline, Map-Reduce function, and Single-purpose aggregation.
                The Aggregation Pipeline consists of multiple stages where each
                stage takes input documents, performs operations, and passes the
                results to the next stage. It supports grouping and can be
                created using the aggregate() method. This method shares
                similarities with SQL's count(*) and group by operations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
