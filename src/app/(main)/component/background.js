'use client'

import { useEffect, useRef } from "react"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import * as THREE from 'three';
import gsap from "gsap";

export default function Background(){
    const canvasRef = useRef(null)

    useEffect(() => {
        let scene, camera, renderer, animationFrameId, control;
        let doorMesh = null

        const init = () => {
            scene = new THREE.Scene()
            camera = new THREE.PerspectiveCamera()
            camera.position.set(40, 5, 0)
            camera.lookAt(0, 4, 0)

            const canvas = canvasRef.current
            renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true})
            renderer.setSize(window.innerWidth, window.innerHeight)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

            //control = new OrbitControls(camera, renderer.domElement); //orbit control

            const gridHelper = new THREE.GridHelper(500, 50);
            scene.add(gridHelper);

            const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1)
            scene.add(ambientLight)

            const spotlight = new THREE.SpotLight(0xFFFFFF, 1000)
            spotlight.position.set(10, 10, 10)
            spotlight.lookAt(0, 0, 0)
            scene.add(spotlight)

            const hdrLoader = new HDRLoader()
            hdrLoader.load('/3js/skybox.hdr', (skybox) => {
                scene.background = skybox
                skybox.mapping = THREE.EquirectangularReflectionMapping
            })

            const gltfLoader = new GLTFLoader()

            gltfLoader.load('/3js/diningTable.glb', (gltf) => {
                const diningTable = gltf.scene
                diningTable.scale.set(5, 5, 5)
                scene.add(diningTable)
            })

            gltfLoader.load('/3js/coffeeCup.glb', (gltf) => {
                const coffee = gltf.scene
                coffee.scale.set(0.5, 0.5, 0.5)
                coffee.position.set(2.5, 3.7, -2)
                scene.add(coffee)
            })

            gltfLoader.load('/3js/cheeseCake.glb', (gltf) => {
                const cake = gltf.scene
                cake.scale.set(0.3, 0.3, 0.3)
                cake.position.set(2.5, 3.7, 1)
                scene.add(cake)
            })

            gltfLoader.load('/3js/newspaper.glb', (gltf) => {
                const newspaper = gltf.scene
                newspaper.scale.set(0.07, 0.3, 0.05)
                newspaper.position.set(-2.5, 3.7, -1.5)
                scene.add(newspaper)
            })

            gltfLoader.load('/3js/menu.glb', (gltf) => {
                const newspaper = gltf.scene
                newspaper.scale.set(1, 1, 1)
                newspaper.position.set(-7, -2.7, 1.5)
                scene.add(newspaper)
            })

            gltfLoader.load('/3js/pintuDoraemon.glb', (gltf) => {
                const pintu = gltf.scene
                pintu.rotation.y = Math.PI / 2
                pintu.scale.set(1.5,2,1.5)
                pintu.position.set(20, 4, 1.5)

                pintu.traverse((child) => {
                    if (child.name === 'Cube') { 
                        console.log("Menemukan mesh pintu:", child.name);
                        doorMesh = child;
                    }
                });
                scene.add(pintu)
            })
        }

        function openDoor(){
            setTimeout(() => {
                if (doorMesh && camera.position.x == 40) {
                    gsap.to(doorMesh.rotation, {
                        z: Math.PI / 2,
                        duration: 2,
                        ease: "power2.inOut"
                    })

                    gsap.to(camera.position, {
                        x: "-= 22",
                        duration: 2,
                        ease: "power2.inOut"
                    })
                } else {
                    console.log("pintu tidak dapat dibuka");    
                }
            }, 3000);
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
        window.addEventListener("click", openDoor)
        init()
        animate()

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [])

    return(
        <canvas ref={canvasRef} className="h-screen w-full absolute"/>
    )
}