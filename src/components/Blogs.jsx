import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import ConsoleLog from "./ConsoleLog.js";

const Blogs = () => {
  const [postData, setPost] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);
  return (
    <main className="bg-[#0d2614] min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="border-b-2 border-[#a5946c] text-3xl mx-auto w-fit mt-10 mb-2">
          My Blogs!
        </h1>

        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4">
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="block hover:scale-105 duration-300 h-64 relative rounded shadow-md shadow-[#8b8574] border-2  leading-snug bg-white border-l-8 border-[#8b8574]"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full justify-end items-end pr-0 pb-4">
                      <h3 className="text-gray-800 text-lg font-bold px-3 py-4 bg-[#FFEAD7]  bg-opacity-75 ">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Blogs;
