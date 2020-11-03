import React from 'react';

export default function Slide() {
    return (
        <div class="capa">
            <div class="capa-mobile">
                <h3>
                    soluções criativas para o seu <b>negócio</b>.
                </h3>
            </div>
            <div class="slide">
                <div class="slide1"><span></span></div>
                <div class="slide2"><span></span></div>
                <div class="slide3"><span></span></div>
                <div class="slide4"><span></span></div>
                <div class="slide5"><span></span></div>
            </div>
            <div class="select-image">
                <i id="select-slide1" class="fas fa-circle" data-index="0"></i>
                <i id="select-slide2" class="far fa-circle" data-index="1"></i>
                <i id="select-slide3" class="far fa-circle" data-index="2"></i>
                <i id="select-slide4" class="far fa-circle" data-index="3"></i>
                <i id="select-slide5" class="far fa-circle" data-index="4"></i>
            </div>
        </div>
    )
}