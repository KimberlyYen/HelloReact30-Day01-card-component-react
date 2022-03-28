import React from 'react'

export default function Header() {
    return (
    <div class="header">
        <div class="avatar">
          <img src="https://picsum.photos/id/50/50/50" alt="avatar" />
        </div>

        <div class="text">
          <div class="title">Stuar Manson</div>
          <div class="subtitle">Publicado hace 2 horas</div>
        </div>

        <div class="more">
          <img src="./src/images/more-vertical.png" alt="more" />
        </div>
    </div>
    )
}