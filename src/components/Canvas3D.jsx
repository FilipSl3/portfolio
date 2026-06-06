import { useEffect, useRef } from "react";

export default function Canvas3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    let disposed = false;
    let cleanup = null;

    (async () => {
      let THREE;
      try {
        THREE = await import("three");
      } catch {
        return; // chunk failed to load — leave the framed placeholder
      }
      if (disposed || !mountRef.current) return;

      try {
      let width = el.clientWidth || 400;
    let height = el.clientHeight || 400;

    const accent =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--accent")
        .trim() || "#4f8cff";
    const color = new THREE.Color(accent);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.z = 4.4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    el.appendChild(renderer.domElement);

    const group = new THREE.Group();
    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.5, 1),
      new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.55,
      })
    );
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.46, 1),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.07 })
    );
    const points = new THREE.Points(
      new THREE.IcosahedronGeometry(1.5, 1),
      new THREE.PointsMaterial({
        color,
        size: 0.055,
        transparent: true,
        opacity: 0.9,
      })
    );
    group.add(core, wire, points);
    scene.add(group);

    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    const onResize = () => {
      if (!mountRef.current) return;
      width = el.clientWidth;
      height = el.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    let raf;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      group.rotation.y += 0.0034;
      group.rotation.x += 0.0011;
      cx += (tx - cx) * 0.045;
      cy += (ty - cy) * 0.045;
      group.rotation.y += cx * 0.05;
      group.rotation.x += cy * 0.05;
      renderer.render(scene, camera);
    };
    tick();

      cleanup = () => {
        cancelAnimationFrame(raf);
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
        window.removeEventListener("resize", onResize);
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          if (o.material) o.material.dispose();
        });
        renderer.dispose();
        if (renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      };
      } catch {
        if (cleanup) cleanup();
      }
    })();

    return () => {
      disposed = true;
      if (cleanup) cleanup();
    };
  }, []);

  return <div className="absolute inset-0 z-[2] cursor-grab" ref={mountRef} />;
}
