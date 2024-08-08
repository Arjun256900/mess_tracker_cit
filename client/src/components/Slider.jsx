import React from "react";
import img5 from "../assets/img5.jpg";
import banner from "../assets/banner.jpg";
import "./Slider.css";
export default function Slider() {
  return (
    <>
      <img src={banner} class="banner" alt="..." />
      <h1 style={{ paddingTop: 10, marginLeft: 20 }}>North Indian</h1>
      <div className="flexy" style={{ marginLeft: 10 }}>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <img src={img5} class="card-img-top icons" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={img5} class="card-img-top icons" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={img5} class="card-img-top icons" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 style={{ paddingTop: 10, marginLeft: 20 }}>South Indian</h1>
      <div className="flexy" style={{ marginLeft: 10 }}>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <img src={img5} class="card-img-top icons" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={img5} class="card-img-top icons" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={img5} class="card-img-top icons" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.This content is little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
