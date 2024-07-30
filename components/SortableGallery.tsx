"use client";
import SortableList, {SortableItem} from "react-easy-sort";
import {arrayMoveImmutable} from "array-move";
import React, {useState} from "react";
import Image from "next/image";

const SortableGallery = () => {
  const [items, setItems] = useState([
    {
      id: "1",
      type: "image",
      cols: "col-span-2",
      aspect: "aspect-[2/1]",
      url: "https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?cs=srgb&dl=pexels-fotios-photos-1107717.jpg&fm=jpg",
    },
    {
      id: "2",
      type: "image",
      cols: "col-span-1",
      aspect: "aspect-[1/1]",
      url: "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=",
    },
    {
      id: "6",
      type: "video",
      cols: "col-span-1",
      aspect: "aspect-[1/1]",
      url: "https://player.vimeo.com/progressive_redirect/playback/912241060/rendition/1080p/file.mp4?loc=external&signature=fc8720d04f1cb4229331e27c7b101393d74825a470cf96688ee5fc4f5d2fa1b2",
    },
    {
      id: "3",
      type: "image",
      cols: "col-span-1",
      aspect: "aspect-[1/1]",
      url: "https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png",
    },
    {
      id: "4",
      type: "image",
      cols: "col-span-1",
      aspect: "aspect-[1/1]",
      url: "https://images.photowall.com/products/42556/summer-landscape-with-river.jpg?h=699&q=85",
    },
    {
      id: "5",
      type: "video",
      cols: "col-span-2",
      aspect: "aspect-[2/1]",
      url: "https://player.vimeo.com/progressive_redirect/playback/912241060/rendition/1080p/file.mp4?loc=external&signature=fc8720d04f1cb4229331e27c7b101393d74825a470cf96688ee5fc4f5d2fa1b2",
    },
  ]);

  const onSortEnd = (oldIndex: number, newIndex: number) => {
    setItems((array) => arrayMoveImmutable(array, oldIndex, newIndex));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(items, null, 2));
    alert("Copied to clipboard!");
  };

  return (
    <div className="flex flex-row gap-16">
      <SortableList
        onSortEnd={onSortEnd}
        className="grid grid-cols-2 gap-4 w-1/2 h-fit"
        draggedItemClassName="dragged"
      >
        {items.map((item) =>
          item.type === "image" ? (
            <SortableItem key={item.id}>
              <div className={`item cursor-pointer relative ${item.aspect} ${item.cols}`}>
                <Image
                  src={item.url}
                  draggable="false"
                  alt={`Image ${item.id}`}
                  fill
                  className="object-cover h-full w-full"
                />
              </div>
            </SortableItem>
          ) : (
            <SortableItem key={item.id}>
              <div className={`item cursor-pointer relative ${item.aspect} ${item.cols}`}>
                <video controls className="h-full w-full object-cover">
                  <source src={item.url} type="video/mp4" />
                </video>
              </div>
            </SortableItem>
          )
        )}
      </SortableList>
      <pre className="p-4 text-wrap relative w-1/2 break-words bg-gray-100">
        <button className="absolute p-4 cursor-pointer hover:bg-gray-200 rounded top-5 right-5" onClick={copyToClipboard}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
            />
          </svg>
        </button>
        {JSON.stringify(items, null, 2)}
      </pre>
    </div>
  );
};

export default SortableGallery;
