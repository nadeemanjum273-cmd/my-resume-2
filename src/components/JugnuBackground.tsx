import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const JugnuBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 2000);
    camera.position.z = 600;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Stars Geometry
    const starsCount = 1800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starsCount * 3);
    const colors = new Float32Array(starsCount * 3);
    const scales = new Float32Array(starsCount);

    const starColorOptions = [
      new THREE.Color(0x2dd4bf), // Teal accent (DataCrumbs)
      new THREE.Color(0x38bdf8), // Sky Blue
      new THREE.Color(0x818cf8), // Indigo
      new THREE.Color(0xffffff), // Pure Crisp White
      new THREE.Color(0xa7f3d0), // Mint light
    ];

    for (let i = 0; i < starsCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1600;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1600;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1200;

      const col = starColorOptions[Math.floor(Math.random() * starColorOptions.length)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;

      scales[i] = Math.random() * 2.5 + 0.5;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Star particle texture
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, "rgba(255,255,255,1)");
      grad.addColorStop(0.3, "rgba(255,255,255,0.8)");
      grad.addColorStop(0.8, "rgba(255,255,255,0.1)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 4,
      vertexColors: true,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const starField = new THREE.Points(geometry, material);
    scene.add(starField);

    // Constellation / network lines connecting nearby key nodes
    const clusterCount = 45;
    const clusterGeo = new THREE.BufferGeometry();
    const clusterPos = new Float32Array(clusterCount * 3);
    for (let i = 0; i < clusterCount; i++) {
      clusterPos[i * 3] = (Math.random() - 0.5) * 900;
      clusterPos[i * 3 + 1] = (Math.random() - 0.5) * 900;
      clusterPos[i * 3 + 2] = (Math.random() - 0.5) * 500;
    }
    clusterGeo.setAttribute("position", new THREE.BufferAttribute(clusterPos, 3));

    const clusterMat = new THREE.PointsMaterial({
      size: 6,
      color: 0x2dd4bf,
      map: texture,
      transparent: true,
      opacity: 0.85,
    });
    const clusterPoints = new THREE.Points(clusterGeo, clusterMat);
    scene.add(clusterPoints);

    // Mouse parallax tracking
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.05;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.05;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Window resize handler
    const onResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // Animation Loop
    let frameId: number;
    const clock = new THREE.Clock();

    function animate() {
      frameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      starField.rotation.y = elapsedTime * 0.02 + mouseX * 0.001;
      starField.rotation.x = elapsedTime * 0.01 + mouseY * 0.001;

      clusterPoints.rotation.y = -elapsedTime * 0.03;
      clusterPoints.rotation.x = -elapsedTime * 0.015;

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      texture.dispose();
      clusterGeo.dispose();
      clusterMat.dispose();
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ display: "block" }}
      />
      {/* Ambient Glow Core Blurs */}
      <div className="fixed top-24 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-[60vh] right-10 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed bottom-10 left-1/3 w-[550px] h-[550px] bg-tertiary/10 rounded-full blur-[150px] pointer-events-none z-0" />
    </>
  );
};
