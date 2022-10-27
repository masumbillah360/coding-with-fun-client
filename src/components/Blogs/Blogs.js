import React from 'react';

const Blogs = () => {
    return (
      <div>
        <div className="hero bg-base-100 my-5">
          <div className="grid grid-cols-8 justify-center items-center gap-5">
            <img
              src="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/cors_principle.png"
              className="w-full mx-auto col-span-8 md:col-span-3 rounded-lg order-2 md:shadow-2xl md:order-1"
              alt="blogPhoto"
            />
            <div className="col-span-8 md:col-span-5 order-1 md:order-2">
              <h1 className="text-3xl font-bold">what is cors?</h1>
              <p className="py-6">
                CORS stands for cross-origin resource sharing. Cross-Origin
                Resource Sharing (CORS) is an HTTP-header based mechanism that
                allows a server to indicate any origins (domain, scheme, or
                port) other than its own from which a browser should permit
                loading resources. CORS also relies on a mechanism by which
                browsers make a "preflight" request to the server hosting the
                cross-origin resource, in order to check that the server will
                permit the actual request. In that preflight, the browser sends
                headers that indicate the HTTP method and headers that will be
                used in the actual request.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-base-100 my-5">
          <div className="grid grid-cols-8 justify-center items-center gap-5">
            <div className="col-span-8 md:col-span-5">
              <div>
                <h1 className="text-3xl font-bold">
                  Why are you using firebase? What other options do you have to
                  implement authentication?
                </h1>
                <p className="py-6">
                  Firebase Authentication provides backend services, easy-to-use
                  SDKs, and ready-made UI libraries to authenticate users to
                  your app. It supports authentication using passwords, phone
                  numbers, popular federated identity providers like Google,
                  Facebook and Twitter, and more.
                </p>
                <p>
                  You can use Firebase Authentication to allow users to sign in
                  to your app using one or more sign-in methods, including email
                  address and password sign-in, and federated identity providers
                  such as Google Sign-in and Facebook Login. This tutorial gets
                  you started with Firebase Authentication by showing you how to
                  add email address and password sign-in to your app.
                </p>
              </div>
            </div>
            <img
              src="https://www.tristatetechnology.com/tristate-website/blog/wp-content/uploads/2019/06/firebase11.jpg"
              className="w-full col-span-8 md:col-span-3 mx-auto rounded-lg shadow-2xl"
              alt="blogPhoto"
            />
          </div>
        </div>
        <div className="hero bg-base-100 my-5">
          <div className="grid grid-cols-8 justify-center items-center gap-5">
            <img
              src="https://global-uploads.webflow.com/618fa90c201104b94458e1fb/6329be0175bf4fa87f03a7b9_Protected-Routes-and-Authentication-How-to-create-Protected-Routes-in-React-App_OG-Image.jpg"
              className="w-full col-span-8 md:col-span-3 mx-auto rounded-lg shadow-2xl order-2 md:order-1"
              alt="blogPhoto"
            />
            <div className="col-span-8 md:col-span-5 order-1 md:order-2">
              <h1 className="text-3xl font-bold">
                How does the private route work?
              </h1>
              <p className="py-6">
                This is a quick example of how to implement a private route
                component with React Router 6. The private route component is
                used to protect selected pages in a React app from
                unauthenticated users.
              </p>
              <p>
                The react private route component renders child components
                (children) if the user is logged in. If not logged in the user
                is redirected to the /login page with the return url passed in
                the location state property.
              </p>
            </div>
          </div>
        </div>

        <div className="hero bg-base-100 my-5">
          <div className="grid grid-cols-8 justify-center items-center gap-5">
            <div className="col-span-8 md:col-span-5">
              <h1 className="text-3xl font-bold">
                What is Node? How does Node work?
              </h1>
              <p className="py-6">
                Node.js is an open source server environment Node.js is free.
                Node.js runs on various platforms (Windows, Linux, Unix, Mac OS
                X, etc.) . Node.js uses JavaScript on the server.
              </p>
              <p>
                Node.js is an open-source backend javascript runtime
                environment. It is a used as backend service where javascript
                works on the server-side of the application. This way javascript
                is used on both frontend and backend. Node.js runs on chrome v8
                engine which converts javascript code into machine code, it is
                highly scalable, lightweight, fast, and data-intensive.
              </p>
              <p>Node.js basically works on two concept</p>
              <li>Asynchronous</li>
              <li>Non-blocking I/O</li>
              <p>
                Asynchronous: Asynchronous is executing a callback function. The
                moment we get the response from the other server or database it
                will execute a callback function. Callback functions are called
                as soon as some work is finished and this is because the node.js
                uses an event-driven architecture. The single thread doesn’t
                work with the request instead it sends the request to another
                system which resolves the request and it is accessible for
                another request.To implement the concept of the system to handle
                the request node.js uses the concept of Libuv.
              </p>
              <p>
                Libuv implements two extremely important features of node.js
              </p>
              <li>Event loop</li>
              <li>Thread pool</li>
            </div>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20210916203407/WorkingofNodejs1.png"
              className="w-full col-span-8 md:col-span-3 mx-auto rounded-lg shadow-2xl"
              alt="blogPhoto"
            />
          </div>
        </div>
      </div>
    );
};

export default Blogs;