document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("shapeCanvas");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas });

    renderer.setSize(600, 600);
    document.getElementById("shape-container").appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(10, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x44aa88, wireframe: true });
    const sphere = new THREE.Mesh(geometry, material);

    scene.add(sphere);
    camera.position.z = 30;

    function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
});
