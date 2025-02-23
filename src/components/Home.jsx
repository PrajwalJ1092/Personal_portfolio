import React, { useEffect, useRef, useState } from "react";

const Typewriter = ({ texts, period }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(100);
  const [isPaused, setIsPaused] = useState(false);



  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setIsPaused(true);
        setTimeout(() => {
          setIsDeleting(true);
          setIsPaused(false);
        }, period);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(300);
      } else {
        // Add variable typing speed for more natural effect
        const baseSpeed = isDeleting ? 50 : 100;
        const variance = Math.random() * 50;
        setDelta(baseSpeed + variance);
      }
    };

    const timer = setTimeout(handleTyping, delta);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, delta, texts, period]);

  return (
    <span className="typewriter-text">
      {text}
      <span className={`cursor ${isPaused ? "blink" : ""}`}>|</span>
    </span>
  );
};

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    const particles = [];
    const particleCount = 50;
    const colors = ["#caf0f8", "#0077b6", "#023e8a", "#48cae4", "#ade8f4"];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 15 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        velocity: {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2,
        },
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle =
          particle.color +
          Math.floor(particle.opacity * 255)
            .toString(16)
            .padStart(2, "0");
        ctx.fill();

        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;

        if (
          particle.x + particle.radius > canvas.width ||
          particle.x - particle.radius < 0
        ) {
          particle.velocity.x = -particle.velocity.x;
        }

        if (
          particle.y + particle.radius > canvas.height ||
          particle.y - particle.radius < 0
        ) {
          particle.velocity.y = -particle.velocity.y;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      <div className="relative sigmar-regular z-10 flex flex-col lg:flex-row items-center justify-between px-6 py-10 lg:px-28 lg:py-20 min-h-screen">
        <div className="lg:w-1/2 text-center lg:text-left space-y-6 animate-fadeIn backdrop-blur-sm bg-white/10 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-medium text-[#48cae4]">
            I am Prajwal Jainkeri
          </h2>
          <div className="text-4xl lg:text-6xl font-medium text-[#48cae4]">
            <Typewriter
              texts={["Frontend Developer", "UI/UX Developer"]}
              period={2000}
            />
          </div>
          <p className="text-[#48cae4] max-w-lg text-xl mx-auto lg:mx-0">
            I break down complex user experience problems to create
            integrity-focused solutions that connect billions of people.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
            <a
              href="https://drive.google.com/file/d/1k3H0gds0B16hfi-xlJ8hbxb0LCbYZ7X_/view?usp=sharing"
              download
              className="px-6 py-3 bg-[#48cae4] text-white rounded-full hover:bg-[#48cae4] transition transform hover:scale-105"
            >
              Download CV
            </a>
            <a
              href="https://drive.google.com/file/d/1p4DI7dDTi5WifzTuhy5xQ7nrCtnA-tjv/view?usp=sharing"
              download
              className="px-6 py-3 border-2 border-[#48cae4] text-[#48cae4]] rounded-full hover:bg-[#48cae4] hover:text-white transition transform hover:scale-105"
            >
              Cover Letter
            </a>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
          <div className="rounded-full overflow-hidden w-60 h-60 lg:w-96 lg:h-96 shadow-xl animate-slideIn border-4 border-[#48cae4]">
          <img
  src="https://i.ibb.co/QFXCJP3y/image2.jpg"
  alt="Prajwal Jainkeri"
  className="object-cover w-full h-full"
/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
