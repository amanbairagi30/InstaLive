import React from 'react';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { AvatarCirclesDemo } from '../ui/avatar-demo';
import {
  Calendar,
  Eye,
  Globe,
  ThumbsUp,
  TrendingUp,
  Video,
} from 'lucide-react';
import GlowDiv from '../glow-div';

export default function Hero() {
  return (
    <>
      <div className="h-fit pb-32 w-full dark:bg-black bg-white  dark:bg-dot-white/[0.5] bg-dot-black/[0.2] relative flex">
        <div className="w-full absolute border-red-500 top-0 h-[10rem] bg-gradient-to-b from-background to-transparent z-[1]"></div>
        <div className="w-full absolute border-t-2 border-green-500 bottom-0 h-[5rem] backdrop-blur-sm bg-gradient-to-t from-background via-background/80 to-transparent z-[1]"></div>
        <div className="w-[90%] h-full absolute border-yellow-500 left-0  bg-gradient-to-r from-background via-background/80 to-transparent z-[1]"></div>
        <div className="w-[20%] h-full absolute border-yellow-500 right-0  bg-gradient-to-l from-background via-background/80 to-transparent z-[1]"></div>

        <main className="max-w-6xl relative z-20 w-full mx-auto">
          <div className="p-4">
            {/* Radial gradient for the container to give a faded look */}
            {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
            <div className="flex  flex-col gap-4 md:mx-10 items-start justify-center h-fit pt-14">
              <div className="font-primary text-4xl md:text-5xl lg:text-6xl flex flex-col text-center font-bold items-start">
                <div>Stream to your audience</div>
                <div>in a few clicks.</div>
              </div>
              <div className="w-full text-xs sm:text-sm md:w-[50%] text-left">
                Stream seamlessly with just a few clicks to YouTube , Twitch and
                Facebook , without much hassle.
              </div>
              <div className="flex items-center mt-2 gap-4">
                <Button className="">Stream Now</Button>
                <Button variant={'ghost'} className="flex items-center gap-2">
                  <span>Live Streams</span>
                  <span className="w-3 h-3 rounded-xl animate-pulse bg-red-500"></span>
                </Button>
              </div>
              <div className="mt-8">
                <div className="font-semibold flex items-center gap-2 mb-2 text-sm">
                  Treanding Stream <TrendingUp className="w-4 h-4" />
                </div>
                <div className="border-2 h-36 flex flex-col rounded-xl w-[22rem] px-2 py-2 bg-accent">
                  {/* <div className="flex items-center gap-4 my-2">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />{' '}
                <span className="text-xs">500+</span>
              </div>
              <div className="flex items-center gap-2">
                <ThumbsUp className="w-4 h-4" />{' '}
                <span className="text-xs">500+</span>
              </div>
            </div> */}
                  <div className="leading-tight flex-1">
                    <h3 className="font-semibold">
                      Reactions on Memes and Coding all night with folks
                    </h3>
                    <div className="text-xs flex items-center gap-2 mt-2 text-foreground/70">
                      <div>@mohitsaini</div>|
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" /> 16/12/2024
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <AvatarCirclesDemo />
                    <Button variant={'link'}>Watch now!</Button>
                  </div>
                </div>
              </div>
            </div>
            <GlowDiv>
              <Video className="text-black fill-black w-[5rem] h-[5rem]" />
            </GlowDiv>
          </div>
        </main>
      </div>
    </>
  );
}
