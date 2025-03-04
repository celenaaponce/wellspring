"use client";

import { Typography, Button } from "@material-tailwind/react";
import { Fragment } from "react";
import Image from "next/image";
import { SkillCard } from "@/components";

const SERVICES = [
  {
    title: "Individual Therapy",
    children: (
      <>
        {`Tailored session focused\non your personal\njourney and challenges.`
          .split("\n")
          .map((line, index) => (
            <Fragment key={index}>
              {line}
              <br />
            </Fragment>
          ))}
      </>
    ),
  },
  {
    title: "Group Therapy",
    children: (
      <>
        {`Supportive group\nsessions that foster\ncommunity and sharing`
          .split("\n")
          .map((line, index) => (
            <Fragment key={index}>
              {line}
              <br />
            </Fragment>
          ))}
      </>
    ),
  },
  {
    title: "Aftercare Support",
    children: (
      <>
        {`Continued guidance\nand support to help\nmaintain your recovery\npost-treatment`
          .split("\n")
          .map((line, index) => (
            <Fragment key={index}>
              {line}
              <br />
            </Fragment>
          ))}
      </>
    ),
  },
];

interface ServicesProps {
  id?: string; // Make the id optional
}

export function Services({ id }: ServicesProps) {
  return (
    <section id={id} className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            Our Services
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            At Well Spring, our primary specialty is treating substance use
            disorders. We understand that recovery is a journey that requires
            individualized care, and we are here to support you every step of
            the way. Our comprehensive treatment options are designed to address
            the unique needs of each client, fostering a path to healing and
            wellness. <br></br>
            <br></br> we provide compassionate and effective substance use treatment in Portland. 
            We believe in a supportive and personalized approach,
            helping individuals build a path toward lasting recovery.
            Our primary focus is on early intervention and 
            intensive outpatient care, ensuring accessible and flexible treatment options.

.
          </Typography>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          <Image
            width={1024}
            height={1024}
            alt="team work"
            src="/image/notgiveup.jpg"
            className="h-[30rem] w-full rounded-xl object-cover"
          />
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
      <div className="container mx-auto mb-20 text-center">
      <Typography
        variant="lead"
        className="mx-auto w-full !text-gray-500 lg:w-10/12"
      >
        At WellSpring, we are dedicated to empowering you with the tools and
        resources necessary for lasting change.<br/> Let us help you take the first
        step toward a healthier, more fulfilling life.
      </Typography>{" "}</div>
    </section>
  );
}

export default Services;
