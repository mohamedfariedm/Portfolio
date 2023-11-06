import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import CanvasLoader from '../Loader'
const Computers = ({mobail}) => {

  const computer=useGLTF('./desktop_pc/scene.gltf')

  return(<mesh>
    <hemisphereLight intensity={1}
     groundColor="black" />
    <pointLight intensity={25} />
    <spotLight position={[-20,50,10]} angle={.25} penumbra={8} intensity={10} castShadow shadow-mapSize={1024} />
    <primitive
        object={computer.scene}
         scale={mobail?1.8 : 1.8}
        position={mobail? [1, -2, 1.5]:[1, -3.25, -1.25]}
         rotation={mobail?[0,.5, -0]:[0, .5, 0]}
    />
    </mesh>)
    
}


const ComputersCanvas = () => {
  const[mobail,setMobile]=useState(false)
  useEffect(()=>{
    const query=window.matchMedia('(max-width : 900px)');
    setMobile(query.matches);
    const handelMatch=(event)=>{
      setMobile(event.matches);
    }
    query.addEventListener('change',handelMatch)
    return()=>{
      query.removeEventListener('change',handelMatch)
    }
  },[])
    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{
                position: [20, 3, 0],
                fov: 25,
            }}
            gl={{ preserveDrawingBuffer: true, alpha: true }}>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers mobail={mobail} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};


export default ComputersCanvas