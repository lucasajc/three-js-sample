import { PCFSoftShadowMap, WebGLRenderer } from "three";

export const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFSoftShadowMap;

export default renderer;