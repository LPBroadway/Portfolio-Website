import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import '../css/theme.css';

const STAR_COUNT = 1000;
const STAR_RADIUS = 15;

function Stars(props) {
    const ref = useRef();
    const starColor = useMemo(() => {
        const style = getComputedStyle(document.documentElement);
        return style.getPropertyValue('--text');
    })
    const starTexture = useLoader(THREE.TextureLoader, '/assets/star.svg');
    const particles = useMemo(() => {
        const positions = new Float32Array(STAR_COUNT * 3);

        for (let i = 0; i < STAR_COUNT; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * STAR_RADIUS;
            positions[i3 + 1] = (Math.random() - 0.5) * STAR_RADIUS;
            positions[i3 + 2] = (Math.random() - 0.5) * STAR_RADIUS;
        }

        return positions;
    }, []);

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta * 0.03;
        ref.current.rotation.y -= delta * 0.05;
    })

    return (
        <Points ref={ref} positions={particles} stride={3} frustumCulled={false} {...props}>
            <PointMaterial
                transparent
                color={starColor}
                size={0.09}
                sizeAttenuation={true}
                depthWrite={false}
                map={starTexture}
            />
        </Points>
    )
}

export default function Starfield() {
    return (
        <div className="starfield">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
        </div>
    )
}