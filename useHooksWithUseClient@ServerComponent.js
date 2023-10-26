"use client"; //Mark the component using the hook as a Client Component by adding 'use client' at the top of the file.

import { useEffect } from "react";

export default function Example() {
  useEffect(() => {
    console.log("in useEffect");
  });
  return <p>Hello world</p>;
}
