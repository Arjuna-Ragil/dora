'use client'

import { useEffect, useRef } from "react"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import * as THREE from 'three';

export default function Background(){
    const canvasRef = useRef(null)

    useEffect(() => {
        let scene, camera, renderer, animationFrameId, control;

        const init = () => {
            scene = new THREE.Scene()
            camera = new THREE.PerspectiveCamera()
            camera.position.set(0, 5, 5)

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

            const gltfLoader = new GLTFLoader()

            gltfLoader.load('/3js/diningTable.glb', (gltf) => {
                const diningTable = gltf.scene
                diningTable.scale.set(5, 5, 5)
                scene.add(diningTable)
            })

            gltfLoader.load('/3js/coffeeCup.glb', (gltf) => {
                const coffee = gltf.scene
                coffee.position.set(0, 4, 0)
                scene.add(coffee)
            })

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
            cancelAnimationFrame(animationFrameId);
        };
    }, [])

    return(
        <canvas ref={canvasRef} className="h-screen w-full absolute"/>
    )
}