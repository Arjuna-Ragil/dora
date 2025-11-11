'use client'

import { useEffect, useRef } from "react"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { Reflector } from 'three/examples/jsm/objects/Reflector.js';
import * as THREE from 'three';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeBg(){
    const canvasRef = useRef(null)

    useEffect(() => {
        if (history.scrollRestoration) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);

        let scene, camera, renderer, animationFrameId, control;
        let doorMesh = null
        let cameraStartX = 30

        const init = () => {
            scene = new THREE.Scene()
            camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight)
            camera.position.set(cameraStartX, 5, 0)
            camera.lookAt(40, 5, 0)

            const canvas = canvasRef.current
            renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true})
            renderer.setSize(window.innerWidth, window.innerHeight)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

            const manager = new THREE.LoadingManager();

            manager.onLoad = () => {
                console.log("Semua aset selesai dimuat, membuat animasi scroll.");
                
                if (doorMesh) {
                    const tl = gsap.timeline();

                    tl.to(doorMesh.rotation, {
                        z: 0,
                        duration: 0, 
                        ease: "none"
                    });

                    tl.to(doorMesh.rotation, {
                        z: Math.PI / 2,
                        duration: 1,
                        ease: "none"
                    });

                    tl.to(camera.position, {
                        x: 10,
                        duration: 2,
                        ease: "none"
                    }, "<");

                    //favorit
                    tl.to(doorMesh.rotation, {
                        z: 0,
                        duration: 3,
                        ease: "none"
                    });

                    tl.to(camera.position, {
                        x: 0,
                        duration: 3,
                        ease: "none"
                    }, "<");

                    //spot
                    tl.to(camera.position, {
                        x: -15,
                        duration: 3,
                        ease: "none"
                    });

                    //promo
                    tl.to(camera.position, {
                        x: -26,
                        duration: 3,
                        ease: "none"
                    });

                    //search
                    tl.to(camera.position, {
                        x: -40,
                        duration: 3,
                        ease: "none"
                    });

                    ScrollTrigger.create({
                        animation: tl,    
                        trigger: "body",
                        start: "top top",    
                        end: "bottom bottom",  
                        scrub: 0.25            
                    });

                } else {
                    console.log("doorMesh tidak ditemukan, animasi scroll tidak dibuat.");
                }
            };

            scene.background = new THREE.Color(0xFFFFFF);

            //control = new OrbitControls(camera, renderer.domElement); //orbit control

            const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1)
            scene.add(ambientLight)

            const spotLight = new THREE.DirectionalLight(0xffffff, 5);

            spotLight.position.set(10, 5, 0); 
            scene.add(spotLight);

            const gltfLoader = new GLTFLoader(manager)

            const diningSetup = new THREE.Group()
            scene.add(diningSetup)

            gltfLoader.load('/3js/cheeseCake.glb', (gltf) => {
                const cake = gltf.scene
                cake.scale.set(0.3, 0.3, 0.3)
                cake.rotateX(-Math.PI / 1/8)
                cake.rotateZ(Math.PI / 1/8)
                cake.position.set(8.5, 4.7, 1.25)
                diningSetup.add(cake)
            })

            gltfLoader.load('/3js/coffeeCup.glb', (gltf) => {
                const coffee = gltf.scene
                coffee.scale.set(0.5, 0.5, 0.5)
                coffee.rotateX(Math.PI / 1/8)
                coffee.rotateZ(Math.PI / 1/8)
                coffee.position.set(-8.8, 4.8, -0.4)
                diningSetup.add(coffee)
            })

            gltfLoader.load('/3js/newspaper.glb', (gltf) => {
                const newspaper = gltf.scene
                newspaper.scale.set(0.07, 0.3, 0.05)
                newspaper.rotateX(-Math.PI / 2)
                newspaper.rotateZ(Math.PI / 2)
                newspaper.rotateZ(-Math.PI / 8)
                newspaper.position.set(-22, 5, 1)
                diningSetup.add(newspaper)
            })

            gltfLoader.load('/3js/pintuDoraemon.glb', (gltf) => {
                const pintu = gltf.scene
                pintu.rotation.y = Math.PI / 2
                pintu.scale.set(2, 2, 2)
                pintu.position.set(20, 4, 2)

                pintu.traverse((child) => {
                    if (child.name === 'Cube') { 
                        doorMesh = child;
                    }
                });
                scene.add(pintu)
            })

            function addStar(){
                const starGeometry = new THREE.SphereGeometry(0.1, 24, 24)
                const starMaterial = new THREE.MeshBasicMaterial({ color: 0x6298E5 })
                const star = new THREE.Mesh(starGeometry, starMaterial)

                const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(50))
                star.position.set(x, y, z)
                scene.add(star)
            }

            Array(100).fill().forEach(addStar)
        }

        const handleResize = () => {
            if (!camera || !renderer) return;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        const animate = () => {
            renderer.render(scene, camera)
            //control.update() //orbit control
            animationFrameId = requestAnimationFrame(animate)
        }

        window.addEventListener("resize", handleResize)
        init()
        animate()

        return () => {
            window.removeEventListener('resize', handleResize);
            ScrollTrigger.getAll().forEach(t => t.kill());
            cancelAnimationFrame(animationFrameId);
        };
    }, [])

    return(
        <>
            <canvas ref={canvasRef} className="h-screen w-full fixed bg-white"/>
        </>
    )
}