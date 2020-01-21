import React, { Component } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gltfPath from '/home/mateus/Documents/index/src/brain.glb'
import gltfCurves from '/home/mateus/Documents/index/src/names.glb'
import gltfBlocks from '/home/mateus/Documents/index/src/block.glb'
import { MaxEquation } from 'three';
import '../css/threedviewer.css'




class ThreeDViewer extends Component {
    eulerToDegree(euler) {
        return ((euler) / (2 * Math.PI)) * 360
    }
    componentDidMount() {
        let me = this
        this.mouse = { x: 0, y: 0 }

        const width = this.mount.clientWidth
        const height = this.mount.clientHeight
        this.screenSize = { x: width, y: height }
        this.scene = new THREE.Scene()

        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10000)
        this.camera.position.z = 5



        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

        this.renderer.setSize(width, height)
        this.renderer.setClearColor(0x5F3800, 0)

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
            this.scene.add(gltf.scene.children[0])
            console.log(gltf)
        }, console.log('loading'), function (error) {
            console.error(error)
        })

        this.loader.load(gltfCurves, (gltf) => {
            gltf.scene.children.forEach(element => {
                element.position.set(-2, 2, -3)
                element.scale.set(1, 1, 1)
                element.rotation.set(0, 0, 45)
                this.scene.add(element)
            });
        })

        this.loader.load(gltfBlocks, (gltf) => {
            gltf.scene.children.forEach(element => {
                element.position.set(9, -3, -1)
                element.scale.set(2, 2, 0.7)
                element.rotation.set(0, 25, 20)
                this.scene.add(element)
            });
        })


        let ballGeometry = new THREE.SphereGeometry(2, 8, 8)
        for (let x = 0; x < 100; x++) {
            let material2 = new THREE.MeshBasicMaterial(
                { color: "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16) }) }
            )


            var randomScale = 0
            randomScale = Math.random() * 0.1
            mesh = new THREE.Mesh(ballGeometry, material2)
            mesh.position.x = (Math.random() * (0 + 15)) - 15
            mesh.position.y = (Math.random() * (5 + 5)) - 5
            mesh.position.z = (Math.random() * (4 + 4)) - 5
            mesh.scale.set(randomScale, randomScale, randomScale)
            this.scene.add(mesh)
        }
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

    _onMouseMove = (e) => {
        this.mouse.x = (e.nativeEvent.screenX - (this.screenSize.x / 2)) * 0.003
        this.mouse.y = (e.nativeEvent.screenY - (this.screenSize.y / 2)) * 0.003
    }

    animate = () => {
        this.camera.position.x = this.mouse.x
        this.camera.position.y = this.mouse.y
        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)
    }

    renderScene = () => {
        this.renderer.render(this.scene, this.camera)
    }


    render() {
        return (
            < div
                className='gradientLimbo'
                onMouseMove={this._onMouseMove}
                style={{ width: '100%', height: '300px' }}
                ref={(mount) => { this.mount = mount }}
            />
        )
    }
}

export default ThreeDViewer