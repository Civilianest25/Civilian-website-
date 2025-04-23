import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-neutral-950 text-white p-4">
      <section className="text-center py-10">
        <h1 className="text-5xl font-bold tracking-wide">CIVILIAN</h1>
        <p className="text-xl mt-4 text-neutral-400">
          Fashion for the unheard. Art without words.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
        <Card className="bg-neutral-900 rounded-2xl shadow-xl">
          <CardContent className="p-4">
            <img
              src="/urban_echo_mockup.png"
              alt="Urban Echo Tee"
              className="rounded-xl"
            />
            <h2 className="text-2xl mt-4">Urban Echo Tee</h2>
            <p className="text-neutral-400">Oversized fit with abstract citywave art</p>
            <Button className="mt-4 w-full">Shop Now</Button>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 rounded-2xl shadow-xl">
          <CardContent className="p-4">
            <img
              src="/silent_signal_pants.png"
              alt="Silent Signal Pants"
              className="rounded-xl"
            />
            <h2 className="text-2xl mt-4">Silent Signal Pants</h2>
            <p className="text-neutral-400">Tapered cargos with stitched signal lines</p>
            <Button className="mt-4 w-full">Shop Now</Button>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 rounded-2xl shadow-xl">
          <CardContent className="p-4">
            <img
              src="/ghost_frame_jacket.png"
              alt="Ghost Frame Jacket"
              className="rounded-xl"
            />
            <h2 className="text-2xl mt-4">Ghost Frame Jacket</h2>
            <p className="text-neutral-400">Sketch-style motion art on cropped utility jacket</p>
            <Button className="mt-4 w-full">Shop Now</Button>
          </CardContent>
        </Card>
      </section>

      <section className="my-12 text-center">
        <h2 className="text-4xl font-bold mb-6">Try on the Fit</h2>
        <iframe
          src="/mannequin-designer.html"
          title="Mannequin Designer"
          className="w-full h-[600px] rounded-xl border-2 border-neutral-700"
        />
      </section>
    </main>
  );
};

export default HomePage;
