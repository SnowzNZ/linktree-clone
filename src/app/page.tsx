import Image from "next/image";
import data from "../../data.json";
import {
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react";
import LinkCard from "@/components/LinkCard";

export default function HomePage() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">
      <Image
        unoptimized
        priority
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 mb-8 text-xl text-white">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      <div className="flex items-center gap-4 mt-8 text-white">
        {data.socials.map((social) => (
          <a
            aria-label={`${social.title} link`}
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.href.includes("twitter") ? (
              <IconBrandTwitter color="white" size={35} />
            ) : social.href.includes("github") ? (
              <IconBrandGithub color="white" size={35} />
            ) : social.href.includes("instagram") ? (
              <IconBrandInstagram color="white" size={35} />
            ) : social.href.includes("youtube") ? (
              <IconBrandYoutube color="white" size={35} />
            ) : null}
          </a>
        ))}
      </div>
    </div>
  );
}
