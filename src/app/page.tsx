"use client";

import MarqueeAnimation from "@/components/bundui/marquee-effect";
import { Center } from "@mantine/core";
import { useEffect } from "react";
import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";

export default function Home() {
  useEffect(() => {
    const handleResize = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const minHeightStyle = {
    minHeight: "calc(var(--vh, 1vh) * 100)",
  };

  return (
    <Center style={minHeightStyle} className="bg-black">
      <div className="flex flex-col items-center justify-center gap-4">
        <MarqueeAnimation
          direction="left"
          baseVelocity={-5}
          className="bg-gray-200 text-gray-950 py-2"
        >
          Coming Soon
        </MarqueeAnimation>
        <MarqueeAnimation
          direction="right"
          baseVelocity={-3}
          className="bg-gray-900 text-gray-200 py-2"
        >
          Coming Soon
        </MarqueeAnimation>
        <Button
          component="a"
          href="https://rfqma.xyz"
          color="black"
          fullWidth
          mt="md"
          radius="md"
          leftSection={<IconArrowLeft size={14} />}
        >
          rfqma.xyz
        </Button>
      </div>
    </Center>
  );
}
