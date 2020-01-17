import React, { Component } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gltfPath from '/home/mateus/Documents/index/src/brain.glb'
import balls from '/home/mateus/Documents/index/src/balls.glb'




class ThreeDViewer extends Component {
    componentDidMount() {
        let me = this
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight

        this.scene = new THREE.Scene()

        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
        this.camera.position.z = 5



        this.renderer = new THREE.WebGLRenderer({ antialias: true })
        this.renderer.setSize(width, height)
        this.renderer.setClearColor(0xaaaaaa)
        this.mount.appendChild(this.renderer.domElement)

        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({ color: '#ffff00' })

        this.cube = new THREE.Mesh(geometry, material)

        this.light = new THREE.DirectionalLight(0xffffff, 1)
        this.light.position.x = -2
        this.scene.add(this.light)

        this.light2 = new THREE.DirectionalLight(0xffffff, 1)
        this.light2.position.x = 2
        this.scene.add(this.light2)

        var mesh
        this.loader = new GLTFLoader()
        this.loader.load(gltfPath, (gltf) => {
            console.log(gltf.scene.children[0])
            this.scene.add(gltf.scene.children[0])

        }, console.log('loading'), function (error) {
            console.error(error)
        })

        this.loader.load(balls, (gltf) => {
            gltf.scene.children.forEach((element) => {
                let material2 = new THREE.MeshBasicMaterial({ color: "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); }) })
                var randomScale = 0
                if (element.name.includes('ball') == true) {
                    randomScale = Math.random() * 0.1
                    mesh = new THREE.Mesh(element.geometry, material2)
                    mesh.position.x = (Math.random() * (0 + 10)) - 10
                    mesh.position.y = (Math.random() * (5 + 5)) - 5
                    mesh.scale.set(randomScale, randomScale, randomScale)
                    this.scene.add(mesh)
                    console.log('printed')
                }

            })

        }, console.log('loading'), function (error) {
            console.error(error)
        })


        this.start()
    }

    componentWillUnmount() {
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
    }

    start = () => {

        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }
    stop = () => {
        cancelAnimationFrame(this.frameId)
    }

    animate = () => {
        //this.camera.position.x += 0.01


        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)
    }

    renderScene = () => {
        this.renderer.render(this.scene, this.camera)
    }

    render() {
        return (
            < div
                style={{ width: '100%', height: '400px' }}
                ref={(mount) => { this.mount = mount }}
            />
        )
    }
}

export default ThreeDViewer