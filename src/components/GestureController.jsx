import React, { useEffect, useRef, useState } from "react";
import * as tmPose from "@teachablemachine/pose";

const MODEL_URL = "https://teachablemachine.withgoogle.com/models/BXl9HMm-2/";

const GestureSlideShow = ({ slides }) => {
  const webcamRef = useRef(null);
  const [prediction, setPrediction] = useState("Loading...");
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let lastActionTime = 0;
    let predictionBuffer = [];
    const PREDICTION_STABILITY_COUNT = 10;

    const loadModel = async () => {
      const modelURL = MODEL_URL + "model.json";
      const metadataURL = MODEL_URL + "metadata.json";
      const loadedModel = await tmPose.load(modelURL, metadataURL);

      const webcam = new tmPose.Webcam(400, 400, true);
      await webcam.setup();
      await webcam.play();
      webcamRef.current = webcam;

      const canvas = webcam.canvas;
      canvas.width = 400;
      canvas.height = 400;

      window.requestAnimationFrame(loop);

      async function loop() {
        webcam.update();
        await predict(loadedModel);
        window.requestAnimationFrame(loop);
      }

      async function predict(model) {
        const now = Date.now();
        const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
        const prediction = await model.predict(posenetOutput);

        const highest = prediction.reduce((max, p) =>
          p.probability > max.probability ? p : max
        );

        setPrediction(`${highest.className} (${(highest.probability * 100).toFixed(1)}%)`);

        if (highest.probability > 0.85) {
          predictionBuffer.push(highest.className);
          if (predictionBuffer.length > PREDICTION_STABILITY_COUNT) {
            predictionBuffer.shift();
          }

          const allSame = predictionBuffer.every(p => p === highest.className);
          if (allSame && now - lastActionTime > 2000) {
            if (highest.className === "Next Slide") {
              setCurrentSlide((prev) => (prev + 1) % slides.length);
            } else if (highest.className === "Previous Slide") {
              setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            }

            lastActionTime = now;
            predictionBuffer = [];
          }
        } else {
          predictionBuffer = [];
        }
      }
    };

    loadModel();
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-50 via-blue-100 to-indigo-100 px-6 py-10">
      <h1 className="text-5xl font-extrabold text-center mb-10 text-indigo-800 tracking-tight transition-all duration-500">
        Gesture-Controlled Slide Deck
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Webcam */}
        <div className="flex justify-center animate-fade-in">
          <canvas
            className="rounded-xl border-4 border-indigo-200 shadow-2xl transition-all duration-300"
            ref={(el) => {
              if (el && webcamRef.current) webcamRef.current.canvas = el;
            }}
          />
        </div>

        {/* Slide Info */}
        <div className="bg-white rounded-3xl shadow-lg p-8 transform transition-transform hover:scale-[1.02]">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
            {slides[currentSlide]?.title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {slides[currentSlide]?.content}
          </p>

          <div className="mt-6 text-gray-600 italic">
            Detected: <span className="font-bold text-indigo-700">{prediction}</span>
          </div>
        </div>
      </div>

      {/* Slide Dots */}
      <div className="mt-10 flex justify-center gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-full transition-colors duration-300 ${i === currentSlide ? "bg-indigo-700" : "bg-gray-300"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GestureSlideShow;
