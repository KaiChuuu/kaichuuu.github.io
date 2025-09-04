/*
Copyright (c) 2025 by Sarah Higley (https://codepen.io/smhigley/pen/gwYPvR)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/*
Falling leaves and tree parts are from cherry-blossom tile map.

Cherry blossom image by Freepik: 
https://www.freepik.com/free-vector/japanese-cherry-blossom-vector-graphic_38612354.htm

Used under Freepik’s Free License for personal projects. 
All rights reserved to the original author.
*/
/*
Grass floor tile map.

Grass-to-dirt seamless ground cross-section by Freepik:
https://www.freepik.com/free-vector/seamless-ground-grass-cross-sections-landscaping_188006625.htm

Used under Freepik’s Free License for personal projects. 
All rights reserved to the original author.
*/

import { useEffect, useRef } from "react";

import CherryBlossom from "@/assets/cherry-blossom.svg";
import CherryBlossom2 from "@/assets/cherry-blossom-2.svg";

const leafTypes = [
  {
    type: "cherry-blossom-1",
    src: CherryBlossom,
    className: "w-[850px] h-[835px]",
  },
  {
    type: "cherry-blossom-2",
    src: CherryBlossom2,
    className: "w-[921px] h-[778px]",
  },
];

type Leaf = {
  el: HTMLDivElement;
  x: number;
  y: number;
  z: number;
  rotation: { axis: "X" | "Y" | "Z"; value: number; speed: number; x?: number };
  xSpeedVariation: number;
  ySpeed: number;
};

class LeafScene {
  viewport: HTMLElement;
  world: HTMLDivElement;
  leaves: Leaf[] = [];
  width: number;
  height: number;
  timer: number = 0;

  options = {
    numLeaves: 20,
    wind: {
      magnitude: 1.2,
      maxSpeed: 12,
      duration: 300,
      start: 0,
      speed: (t: number, y: number) => 0,
    },
  };

  constructor(el: HTMLElement) {
    this.viewport = el;
    this.world = document.createElement("div");
    this.width = el.offsetWidth;
    this.height = el.offsetHeight;
  }

  _resetLeaf(leaf: Leaf) {
    leaf.x = this.width * 2 - Math.random() * this.width * 1.75;
    leaf.y = -10;
    leaf.z = Math.random() * 200;

    if (leaf.x > this.width) {
      leaf.x = this.width + 10;
      leaf.y = (Math.random() * this.height) / 2;
    }

    if (this.timer === 0) leaf.y = Math.random() * this.height;

    leaf.rotation.speed = Math.random() * 10;
    const randomAxis = Math.random();
    if (randomAxis > 0.5) leaf.rotation.axis = "X";
    else if (randomAxis > 0.25) {
      leaf.rotation.axis = "Y";
      leaf.rotation.x = Math.random() * 180 + 90;
    } else {
      leaf.rotation.axis = "Z";
      leaf.rotation.x = Math.random() * 360 - 180;
      leaf.rotation.speed = Math.random() * 3;
    }

    leaf.xSpeedVariation = Math.random() * 0.8 - 0.4;
    leaf.ySpeed = Math.random() + 1.5;

    return leaf;
  }

  _updateLeaf(leaf: Leaf) {
    const leafWindSpeed = this.options.wind.speed(
      this.timer - this.options.wind.start,
      leaf.y
    );
    const xSpeed = leafWindSpeed + leaf.xSpeedVariation;

    leaf.x -= xSpeed;
    leaf.y += leaf.ySpeed;
    leaf.rotation.value += leaf.rotation.speed;

    let t = `translateX(${leaf.x}px) translateY(${leaf.y}px) translateZ(${leaf.z}px) rotate${leaf.rotation.axis}(${leaf.rotation.value}deg)`;
    if (leaf.rotation.axis !== "X") t += ` rotateX(${leaf.rotation.x}deg)`;

    leaf.el.style.transform = t;

    if (leaf.x < -10 || leaf.y > this.height + 10) this._resetLeaf(leaf);
  }

  _updateWind() {
    if (
      this.timer === 0 ||
      this.timer > this.options.wind.start + this.options.wind.duration
    ) {
      this.options.wind.magnitude = Math.random() * this.options.wind.maxSpeed;
      this.options.wind.duration =
        this.options.wind.magnitude * 50 + (Math.random() * 20 - 10);
      this.options.wind.start = this.timer;

      const screenHeight = this.height;

      this.options.wind.speed = function (t: number, y: number) {
        const a =
          (this.magnitude / 2) * ((screenHeight - (2 * y) / 3) / screenHeight);
        return (
          a *
            Math.sin(((2 * Math.PI) / this.duration) * t + (3 * Math.PI) / 2) +
          a
        );
      };
    }
  }

  init() {
    for (let i = 0; i < this.options.numLeaves; i++) {
      const leaf: Leaf = {
        el: document.createElement("div"),
        x: 0,
        y: 0,
        z: 0,
        rotation: { axis: "X", value: 0, speed: 0 },
        xSpeedVariation: 0,
        ySpeed: 0,
      };
      this._resetLeaf(leaf);
      this.leaves.push(leaf);

      const leafType = leafTypes[Math.floor(Math.random() * leafTypes.length)];

      leaf.el.className = `absolute bg-no-repeat bg-cover ${leafType.className}`;
      leaf.el.style.backgroundImage = `url(${leafType.src})`;

      // Leaf style with background image
      // leaf.el.className = "absolute w-5 h-5 bg-no-repeat bg-cover";
      // leaf.el.style.backgroundImage = `url(${CherryBlossom})`;
      this.world.appendChild(leaf.el);
    }

    this.world.className = "leaf-scene absolute inset-0";
    this.viewport.appendChild(this.world);
    this.world.style.perspective = "800px";

    window.addEventListener("resize", () => {
      this.width = this.viewport.offsetWidth;
      this.height = this.viewport.offsetHeight;
    });
  }

  render() {
    this._updateWind();
    this.leaves.forEach((leaf) => this._updateLeaf(leaf));
    this.timer++;
    requestAnimationFrame(this.render.bind(this));
  }
}

export default function FallingLeaves() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new LeafScene(containerRef.current);
    scene.init();
    scene.render();

    return () => {
      containerRef.current?.replaceChildren(); // cleanup on unmount
    };
  }, []);

  return <div ref={containerRef} className="w-full h-screen relative"></div>;
}
