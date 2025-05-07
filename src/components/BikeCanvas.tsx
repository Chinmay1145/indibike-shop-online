
import { useEffect, useRef } from "react";
import * as THREE from "three";

interface BikeCanvasProps {
  modelUrl?: string;
  className?: string;
}

export default function BikeCanvas({ className = "" }: BikeCanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Set up scene
    const scene = new THREE.Scene();
    scene.background = null;

    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    camera.position.y = 1;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    canvasRef.current.appendChild(renderer.domElement);

    // Simple bike geometry with multiple components
    // This is a very simplified bike representation
    const bikeGroup = new THREE.Group();
    
    // Frame
    const frameGeometry = new THREE.BoxGeometry(3, 0.1, 0.5);
    const frameMaterial = new THREE.MeshPhongMaterial({
      color: 0xe63946,
      shininess: 100,
    });
    const frame = new THREE.Mesh(frameGeometry, frameMaterial);
    frame.position.set(0, 0, 0);
    bikeGroup.add(frame);

    // Wheels
    const wheelGeometry = new THREE.TorusGeometry(0.7, 0.1, 16, 32);
    const wheelMaterial = new THREE.MeshPhongMaterial({
      color: 0x333333,
      shininess: 30,
    });
    
    const frontWheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
    frontWheel.position.set(-1.2, -0.5, 0);
    frontWheel.rotation.y = Math.PI / 2;
    bikeGroup.add(frontWheel);
    
    const backWheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
    backWheel.position.set(1.2, -0.5, 0);
    backWheel.rotation.y = Math.PI / 2;
    bikeGroup.add(backWheel);

    // Handlebars
    const handlebarGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.8, 16);
    const handlebarMaterial = new THREE.MeshPhongMaterial({
      color: 0x666666,
      shininess: 50,
    });
    const handlebar = new THREE.Mesh(handlebarGeometry, handlebarMaterial);
    handlebar.position.set(-1.5, 0.3, 0);
    handlebar.rotation.z = Math.PI / 2;
    bikeGroup.add(handlebar);

    // Seat
    const seatGeometry = new THREE.BoxGeometry(0.6, 0.1, 0.3);
    const seatMaterial = new THREE.MeshPhongMaterial({
      color: 0x111111,
      shininess: 20,
    });
    const seat = new THREE.Mesh(seatGeometry, seatMaterial);
    seat.position.set(0.8, 0.3, 0);
    bikeGroup.add(seat);

    // Add bike to scene
    bikeGroup.rotation.y = Math.PI / 4;
    scene.add(bikeGroup);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(-5, 3, 5);
    scene.add(pointLight);

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      bikeGroup.rotation.y += 0.005;
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!canvasRef.current) return;
      camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (canvasRef.current && renderer.domElement) {
        canvasRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
    };
  }, []);

  return <div ref={canvasRef} className={`bike-canvas-container ${className}`} />;
}
