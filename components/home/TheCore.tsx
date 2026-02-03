"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Environment } from "@react-three/drei";
import * as THREE from "three";
import { Reveal } from "@/components/ui/Reveal";

function Globe() {
    const meshRef = useRef<THREE.Mesh>(null);
    const groupRef = useRef<THREE.Group>(null);

    // Auto-rotate
    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.1;
        }
    });

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < 1500; i++) {
            const theta = THREE.MathUtils.randFloatSpread(360);
            const phi = THREE.MathUtils.randFloatSpread(360);
            const r = 2.2; // Radius slightly larger than sphere

            const x = r * Math.sin(theta) * Math.cos(phi);
            const y = r * Math.sin(theta) * Math.sin(phi);
            const z = r * Math.cos(theta);

            temp.push(x, y, z);
        }
        return new Float32Array(temp);
    }, []);

    return (
        <group ref={groupRef}>
            {/* Main Sphere */}
            <mesh ref={meshRef}>
                <sphereGeometry args={[2, 64, 64]} />
                <meshStandardMaterial
                    color="#0a0a0a"
                    emissive="#111"
                    roughness={0.7}
                    metalness={0.8}
                    wireframe={false}
                />
            </mesh>

            {/* Wireframe Overlay */}
            <mesh>
                <sphereGeometry args={[2.01, 64, 64]} />
                <meshStandardMaterial
                    color="#D4AF37"
                    wireframe={true}
                    transparent
                    opacity={0.1}
                />
            </mesh>


            {/* Particles / Atmosphere */}
            <points>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particles.length / 3}
                        array={particles}
                        itemSize={3}
                        args={[particles, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.015}
                    color="#D4AF37"
                    transparent
                    opacity={0.6}
                    sizeAttenuation={true}
                />
            </points>

            {/* Jordan Marker (Approximate Position) */}
            <mesh position={[1.2, 0.8, 1.3]}>
                <sphereGeometry args={[0.05, 16, 16]} />
                <meshStandardMaterial color="#D4AF37" emissive="#D4AF37" emissiveIntensity={2} />
            </mesh>
        </group>
    );
}

import { COMPANY_DATA } from "@/lib/data";
import { useLanguage } from "@/app/providers";

export function TheCore() {
    const { language, t } = useLanguage();
    const { label, title, description } = COMPANY_DATA.homeComponents.theCore;

    return (
        <section className="h-[80vh] w-full bg-background relative overflow-hidden flex items-center justify-center border-y border-white/5">

            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
                    <ContextBridge>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={1} color="#D4AF37" />
                        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4A90E2" />

                        <Globe />

                        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
                    </ContextBridge>
                </Canvas>
            </div>

            <div className="container mx-auto px-4 relative z-10 pointer-events-none">
                <div className="max-w-xl">
                    <Reveal>
                        <h4 className="text-primary font-heading uppercase tracking-widest text-sm mb-4">
                            {t(label)}
                        </h4>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-none">
                            {t(title)}
                        </h2>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="text-white/60 text-lg leading-relaxed backdrop-blur-sm p-4 bg-black/20 rounded-lg border border-white/5">
                            {t(description)}
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

// Simple bridge to allow using context if needed inside Canvas, though we aren't using it yet.
const ContextBridge = ({ children }: { children: React.ReactNode }) => <>{children}</>;
