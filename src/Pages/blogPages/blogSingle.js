import React from "react";

const BlogSingle = () => {
  return (
    <>
      <div class="container mx-auto max-w-7xl p-2 md:p-10">
        <div class="grid gap-6 grid-cols-1 text-white md:grid-cols-4 md:grid-rows-2">
          <div class="relative p-10 rounded-xl bg-purple-700 md:col-span-2">
            <img
              src="images/bg-pattern-quotation.svg"
              alt=""
              class="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150"
            />
            <div class="flex z-10 space-x-4">
              <img
                src="images/image-daniel.jpg"
                alt=""
                class="w-10 h-10 rounded-full ring-2 ring-purple-300"
              />
              <div class="text-sm">
                <h4 class="opacity-90">Daniel Clifford</h4>
                <p class="opacity-50">Verified Graduate</p>
              </div>
            </div>

            <p class="relative z-10 mt-6 text-xl">
              I received a job offer mid-course, and the subjects I learned were
              current, if not more so, in the company I joined. I honestly feel
              I got every penny's worth.
            </p>

            <p class="mt-6 opacity-50 line-clamp-6">
              "I was an EMT for many years before I joined the bootcamp. I've
              been looking to make a transition and have heard some people who
              had an amazing experience here. I signed up for the free intro
              course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my
              life. Since completing the course, I've successfully switched
              careers, working as a Software Engineer at a VR startup. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ratione vero
              repudiandae, quasi atque officiis eum consectetur odio amet
              dolorem deleniti repellat expedita aut sunt laudantium cum itaque
              nam voluptatum quod! Quo totam sequi omnis deserunt? Sit nam
              molestiae excepturi, perspiciatis labore deleniti eum, eligendi
              quisquam quod sed nobis exercitationem tempora! "
            </p>
          </div>

          <div class="hidden p-10 rounded-xl text-gray-900 bg-white md:block md:row-span-2">
            <div class="flex space-x-4">
              <img
                src="images/image-kira.jpg"
                alt=""
                class="w-10 h-10 rounded-full ring-2 ring-purple-300"
              />
              <div class="text-sm">
                <h4 class="opacity-90">Kira Whittle</h4>
                <p class="opacity-50">Verified Graduate</p>
              </div>
            </div>

            <p class="mt-6 text-xl">
              Such a life-changing experience. Highly recommended!
            </p>

            <p class="mt-6 opacity-50">
              "Before joining the bootcamp, I've never written a line of code. I
              needed some structure from professionals who can help me learn
              programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the
              program. The entire curriculum and staff did not disappoint. They
              were very hands-on and I never had to wait long for assistance.
              The agile team project, in particular, was outstanding. It took my
              learning to the next level in a way that no tutorial could ever
              have. In fact, I've often referred to it during interviews as an
              example of my developent experience. It certainly helped me land a
              job as a full-stack developer after receiving multiple offers.
              100% recommend!"
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSingle;
