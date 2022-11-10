import React from "react";

const Blogs = () => {
  return (
    <div className="p-10 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 my-10 grid grid-cols-1 gap-5">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Difference between SQL and NoSQL?
        </div>
        <div className="collapse-content">
          <ul>
            <li>
              SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called
              RDBMS or Relational Databases, whereas NoSQL is a Non-relational
              or Distributed Database.
            </li>
            <li>
              Comparing SQL vs NoSQL databases, SQL databases are table-based
              databases, whereas NoSQL databases can be document-based,
              key-value pairs, and graph databases.
            </li>
            <li>
              SQL databases are vertically scalable, while NoSQL databases are
              horizontally scalable.
            </li>
            <li>
              SQL databases have a predefined schema, whereas NoSQL databases
              use a dynamic schema for unstructured data.
            </li>
          </ul>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is JWT, and how does it work?
        </div>
        <div className="collapse-content">
          <p>
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely
            transmitting information between parties as JSON object.
          </p>
          <p>The way it works is given below:</p>
          <ul>
            <li>
              User sign-in using username and password or google/facebook.
            </li>
            <li>
              Authentication server verifies the credentials and issues a jwt
              signed using either a secret salt or a private key.
            </li>
            <li>
              User's Client uses the JWT to access protected resources by
              passing the JWT in HTTP Authorization header.
            </li>
            <li>
              Resource server then verifies the authenticity of the token using
              the secret salt/ public key.
            </li>
          </ul>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content">
          <ul>
            <li>
              Javascript is a programming language that is used for writing
              scripts on the website whereas NodeJS is a Javascript runtime
              environment.
            </li>
            <li>
              Javascript can only be run in the browsers. On the other hand, We
              can run Javascript outside the browser with the help of NodeJS.
            </li>
            <li>
              Javascript can run in any browser engine as like JS core in safari
              and Spidermonkey in Firefox. On the contrary, V8 is the Javascript
              engine inside of node.js that parses and runs Javascript.{" "}
            </li>
          </ul>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content">
          <p>
            NodeJS Web Server maintains a limited Thread Pool to provide
            services to client requests. Multiple clients make multiple requests
            to the NodeJS server. NodeJS receives these requests and places them
            into the EventQueue . NodeJS server has an internal component
            referred to as the EventLoop which is an infinite loop that receives
            requests and processes them. This EventLoop is single threaded. In
            other words, EventLoop is the listener for the EventQueue. So, we
            have an event queue where the requests are being placed and we have
            an event loop listening to these requests in the event queue. What
            happens next? The listener(the event loop) processes the request and
            if it is able to process the request without needing any blocking IO
            operations, then the event loop would itself process the request and
            sends the response back to the client by itself. If the current
            request uses blocking IO operations, the event loop sees whether
            there are threads available in the thread pool, picks up one thread
            from the thread pool and assigns the particular request to the
            picked thread. That thread does the blocking IO operations and sends
            the response back to the event loop and once the response gets to
            the event loop, the event loop sends the response back to the
            client.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
