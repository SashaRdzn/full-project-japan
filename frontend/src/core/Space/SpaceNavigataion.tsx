import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./styles.module.scss";
import { Outlet, useNavigate } from "react-router-dom";
import { sections } from "../../shared/constants/constants";
const SpaceNavigataion = () => {
  const [activeSection, setActiveSection] = useState(null);
  const navigate = useNavigate();
  const sceneRef = useRef(null);
  const mountRef = useRef(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);

    // Размер галактики - 50% ширины экрана
    const galaxyWidth = window.innerWidth * 0.5;
    const galaxyHeight = window.innerHeight;
    renderer.setSize(galaxyWidth, galaxyHeight);
    mountRef.current.appendChild(renderer.domElement);

    sceneRef.current = {
      scene,
      camera,
      renderer,
      planetMeshes: [],
      stars: null,
    };

    // Солнце (центральный элемент)
    const sunGeometry = new THREE.SphereGeometry(1.0, 32, 32);
    const sunMaterial = new THREE.MeshStandardMaterial({
      color: 0xffb02e,
      emissive: 0xffb02e,
      emissiveIntensity: 0.8,
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Освещение
    const ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 0.5, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Орбиты
    const createOrbit = (radius) => {
      const orbitGeometry = new THREE.TorusGeometry(radius, 0.01, 16, 100);
      const orbitMaterial = new THREE.MeshBasicMaterial({
        color: 0x555555,
        transparent: true,
        opacity: 0.1,
      });
      const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
      orbit.rotation.x = Math.PI / 2;
      scene.add(orbit);
      return orbit;
    };

    createOrbit(2.5);
    createOrbit(4.0);

    const createText = (text, color = 0xffffff) => {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 128;
      const context = canvas.getContext("2d");
      context.font = "Bold 40px Arial";
      context.fillStyle = `rgb(${color >> 16}, ${(color >> 8) & 0xff}, ${
        color & 0xff
      })`;
      context.textAlign = "center";
      context.fillText(text, canvas.width / 2, canvas.height / 2);

      const texture = new THREE.CanvasTexture(canvas);
      const material = new THREE.SpriteMaterial({ map: texture });
      const sprite = new THREE.Sprite(material);
      sprite.scale.set(0.8, 0.4, 1);
      return sprite;
    };

    const planetMeshes = sections.map((section) => {
      const geometry = new THREE.SphereGeometry(section.radius, 16, 16);
      const material = new THREE.MeshStandardMaterial({
        color: section.color,
        roughness: 0.3,
        metalness: 0.1,
      });
      const mesh = new THREE.Mesh(geometry, material);

      const text = createText(section.name, 0xffffff);
      text.position.y = section.radius + 0.3;

      const group = new THREE.Group();
      group.add(mesh);
      group.add(text);

      scene.add(group);
      return { ...section, group, mesh };
    });

    sceneRef.current.planetMeshes = planetMeshes;

    // Звездный фон
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1,
      transparent: true,
      opacity: 0.8,
    });

    const starVertices = [];
    for (let i = 0; i < 2000; i++) {
      starVertices.push(
        THREE.MathUtils.randFloatSpread(1000),
        THREE.MathUtils.randFloatSpread(1000),
        THREE.MathUtils.randFloatSpread(1000)
      );
    }

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);
    sceneRef.current.stars = stars;

    // Позиция камеры - смещаем влево
    camera.position.z = 8;
    camera.position.y = 2;
    camera.position.x = 10; // Смещение камеры влево
    camera.lookAt(-2, 0, 0); // Смотрим в центр смещенной сцены

    // Обработка ресайза
    const handleResize = () => {
      const galaxyWidth = window.innerWidth * 0.5;
      const galaxyHeight = window.innerHeight;
      camera.aspect = galaxyWidth / galaxyHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(galaxyWidth, galaxyHeight);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    // Анимация
    const animate = () => {
      requestAnimationFrame(animate);

      planetMeshes.forEach((planet) => {
        // Увеличиваем угол для вращения
        planet.angle += 0.001; // Увеличьте или уменьшите значение для изменения скорости

        // Рассчитываем позицию планеты на орбите
        planet.group.position.x = Math.cos(planet.angle) * planet.distance; // Смещение вместе со сценой
        planet.group.position.z = Math.sin(planet.angle) * planet.distance;

        // Добавляем вращение планеты вокруг своей оси
        planet.mesh.rotation.y += 0.01; // Увеличьте или уменьшите значение для изменения скорости вращения
      });

      stars.rotation.y += 0.0002;
      renderer.render(scene, camera);
    };
    animate();

    // Обработка кликов
    const handleClick = (event) => {
      const rect = mountRef.current.getBoundingClientRect();
      const isInsideGalaxy =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (!isInsideGalaxy) return;

      const mouse = new THREE.Vector2(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(
        planetMeshes.map((p) => p.mesh)
      );

      if (intersects.length > 0) {
        const planet = planetMeshes.find(
          (p) => p.mesh === intersects[0].object
        );
        setActiveSection(planet.id);
        navigate(planet.id);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    if (!sceneRef.current) return;

    sceneRef.current.planetMeshes.forEach((planet) => {
      const intensity = planet.id === activeSection ? 0.5 : 0;
      planet.mesh.material.emissive = new THREE.Color(planet.color);
      planet.mesh.material.emissiveIntensity = intensity;
      planet.group.scale.setScalar(planet.id === activeSection ? 1.2 : 1);
    });
  }, [activeSection]);
  return (
    <div className={styles.cosmicContainer}>
      <div ref={mountRef} className={styles.galaxyPanel} />
      <div className={styles.contentPanel}>
        <Outlet />
        {/* Здесь отрисовываются страницы */}
      </div>
    </div>
  );
};
export default SpaceNavigataion;
