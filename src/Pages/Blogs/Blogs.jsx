import React from 'react';

const Blogs = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-3xl">Answers to Your Queries</h2>
		<div className="divide-y divide-gray-700">
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
				<p className="md:pl-0 md:col-span-7">Access tokens and refresh tokens are essential in authentication systems for granting access to protected resources. The access token, a short-lived credential, allows users to access resources by including it in each request. Refresh tokens, with longer lifetimes, obtain new access tokens after expiration. Users send the refresh token to the authentication server for validation and issuance of a new access token. Refresh tokens enable prolonged user sessions, reducing the need for frequent authentication. Store refresh tokens securely on the client-side, typically in a secure HTTP-only cookie. Remember to implement additional security measures like HTTPS, CSRF protection, and proper token revocation.</p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">Compare SQL and NoSQL databases</h3>
				<p className="md:pl-0 md:col-span-7">SQL and NoSQL databases differ in their schema, data model, query language, scalability, and developer convenience. SQL databases have a predefined schema, use tables, and rely on SQL for interactions. They excel in complex queries and transactions, while being vertically scalable. NoSQL databases have dynamic schemas, supporting unstructured or semi-structured data in various formats like documents, key-value pairs, or graphs. They handle large volumes of data and scale horizontally, accommodating cheaper commodity servers. NoSQL databases facilitate frequent application changes, simplifying development. They offer flexible data models, fast queries, and ease of use, but the best choice depends on specific use cases and requirements.</p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">What is express js? What is Nest JS?</h3>
				<p className="md:pl-0 md:col-span-7"> <span className='font-semibold'>Express JS</span> is a flexible and minimalistic Node.js web application framework that provides a range of features for web and mobile apps. It's unopinionated, allowing developers the freedom to implement code according to their needs. Powered by the Google V8 engine, it ensures high performance. With its lightweight nature and strong community support, finding resources and assistance is convenient.
                 <p><span className='font-semibold'>Nest JS</span> a rapidly growing framework, builds upon Express to offer a more scalable server-side application development approach. It follows MVC architecture, utilizes TypeScript, and employs dependency injection for component management. Both frameworks offer comparable performance and scalability options.</p>
                </p>
				
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">What is MongoDB aggregate and how does it work?</h3>
				<p className="md:pl-0 md:col-span-7">Aggregation in MongoDB involves selecting and processing data from a collection to generate computed results. It combines values from multiple documents, performs operations like sum, average, minimum, and maximum, and returns a single result. MongoDB offers three approaches for aggregation: Aggregation Pipeline, Map-Reduce function, and Single-purpose aggregation. The Aggregation Pipeline consists of multiple stages where each stage takes input documents, performs operations, and passes the results to the next stage. It supports grouping and can be created using the aggregate() method. This method shares similarities with SQL's count(*) and group by operations.</p>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default Blogs;