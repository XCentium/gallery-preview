import React from "react";
import Image from "next/image";

export default function GalleryPreview() {
  const data = [
    {
      type: "image",
      ratio: "4:3",
      url: "https://placehold.co/600x400",
      name: "product-image",
    },
    {
      type: "image",
      ratio: "3:4",
      url: "https://placehold.co/600x400",
      name: "1",
    },
    {
      type: "image",
      ratio: "3:4",
      url: "https://placehold.co/600x400",
      name: "2",
    },
    {
      type: "vimeo",
      ratio: "16:9",
      url: "https://player.vimeo.com/progressive_redirect/playback/912241060/rendition/1080p/file.mp4?loc=external&signature=fc8720d04f1cb4229331e27c7b101393d74825a470cf96688ee5fc4f5d2fa1b2",
      thumbnail: "16-9-video",
    },
    {
      type: "vimeo",
      ratio: "square",
      url: "https://player.vimeo.com/progressive_redirect/playback/912241060/rendition/1080p/file.mp4?loc=external&signature=fc8720d04f1cb4229331e27c7b101393d74825a470cf96688ee5fc4f5d2fa1b2",
      thumbnail: "square-video",
    },
    {
      type: "vimeo",
      ratio: "square",
      url: "https://player.vimeo.com/progressive_redirect/playback/912241060/rendition/1080p/file.mp4?loc=external&signature=fc8720d04f1cb4229331e27c7b101393d74825a470cf96688ee5fc4f5d2fa1b2",
      thumbnail: "square-video",
    },
    {
      type: "external",
      ratio: "16:9",
      url: "https://www.youtube.com/embed/WhY7uyc56ms?autoplay=0&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=WhY7uyc56ms",
      name: "16-9-video",
    },
    {
      type: "image",
      ratio: "9:16",
      url: "https://placehold.co/600x400",
      name: "9-16",
    },
    {
      type: "image",
      ratio: "9:16",
      url: "https://placehold.co/600x400",
      name: "9-16",
    },
  ];

  const isSpan2Cols = [2, 5, 8, 11, 14, 17];
  return (
    <div className="grid grid-cols-2">
      {data.map((item, index) => {
        return (
          <div key={index} className="relative">
            {item.type === "image" ? (
              <Image
                className={`${isSpan2Cols.includes(index) ? "col-span-2" : ""}`}
                src={item.url}
                height={400}
                width={600}
                alt={item.name}
              />
            ) : item.type === "vimeo" ? (
              <video
                className={`${
                  isSpan2Cols.includes(index) ? "col-span-2" : ""
                } object-cover`}
                src={item.url}
                poster={`https://placehold.co/600x400`}
                controls
              />
            ) : (
              <iframe
                src={item.url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        );
      })}
    </div>
  );
}
