"use client";

import "regenerator-runtime/runtime";
import Image from "next/image";
import React, { useState, ChangeEvent } from 'react';
import TextArea from '../components/Inputs/TextArea';
import SpeechRecognitionComponent from '../components/SpeechRecognition/SpeechRecognition';
import { IconVolume } from '@tabler/icons-react';

export default function Home() {

  const [sourceText, setSourceText] = useState<string>("");

  const handleAudioPlayback = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div>
      <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 py-10 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-900">Velo<span className="text-[#f87315]">Translate</span></h1>
            <p className="mt-3 text-slate-700">VeloTranslate: Bridging Voices, Connecting Worlds</p>

            <div className="mt-7 st:mt-12 mx-auto max-w-3xl relative">
              <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <div className="relative z-10 flex flex-col space-x-3 border rounded-lg shadow-lg bg-white p-4 dark:bg-neutral-900 dark:border-gray-500 shadow-neutral-300">
                  <TextArea
                    id="source-language"
                    value={sourceText}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                      setSourceText(e.target.value);
                    }}
                    placeholder="Source Language"
                  />
                  <div className="flex flex-row justify-between w-full">
                    <span className="cursor-pointer flex space-x-2 flex-row">
                      <SpeechRecognitionComponent setSourceText={setSourceText} />
                      <IconVolume size={22}
                        onClick={() => handleAudioPlayback(sourceText)} />
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
