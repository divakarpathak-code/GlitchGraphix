// Trail.tsx
import { useEffect } from "react";
import "../index.css";

export default function Trail() {
  useEffect(() => {
    const trailLength = 12;
    const trail: HTMLDivElement[] = [];

    let mouseX = 0;
    let mouseY = 0;
    let hasMoved = false; // 🔑 key fix

    // Create dots
    for (let i = 0; i < trailLength; i++) {
      const dot = document.createElement("div");
      dot.className = "trail-dot";
      dot.style.position = "fixed";
      dot.style.pointerEvents = "none";
      dot.style.width = "14px";
      dot.style.height = "14px";
      dot.style.borderRadius = "50%";
      dot.style.background = "#00eaff";
      dot.style.opacity = "0"; // 👈 hidden initially
      dot.style.boxShadow = "0 0 15px #00eaff";
      document.body.appendChild(dot);
      trail.push(dot);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // First mouse move → snap dots instantly
      if (!hasMoved) {
        hasMoved = true;
        trail.forEach((dot) => {
          dot.style.left = mouseX + "px";
          dot.style.top = mouseY + "px";
          dot.style.opacity = "1"; // 👈 appear only now
        });
      }
    };

    const animate = () => {
      if (!hasMoved) {
        requestAnimationFrame(animate);
        return;
      }

      let x = mouseX;
      let y = mouseY;

      trail.forEach((dot, i) => {
        dot.style.left = x + "px";
        dot.style.top = y + "px";

        const next = trail[i + 1] || trail[0];
        x += (next.offsetLeft - x) * 0.25;
        y += (next.offsetTop - y) * 0.25;

        dot.style.opacity = `${1 - i / trailLength}`;
        dot.style.transform = `scale(${1 - i / trailLength})`;
      });

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      trail.forEach(dot => dot.remove());
    };
  }, []);

  return null;
}
