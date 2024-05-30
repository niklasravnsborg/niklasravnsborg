import React from 'react'
import Ellipsis from '../Ellipsis'
import Card from '../Card'
import { shade } from 'polished'

const VideoCard = ({ youtubeId, color, name, date, bright }) => (
  <a
    href={`https://youtu.be/${youtubeId}`}
    target="_blank"
    rel="noreferrer"
    className="block"
  >
    <Card style={{ backgroundColor: color }}>
      <div
        className="relative pb-[56.25%]"
        style={{ backgroundColor: shade(0.2, color) }}
      >
        <img
          alt={name}
          src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
      </div>
      <div className={`mt-3 ${bright ? 'text-dark' : 'text-white'}`}>
        <Ellipsis className="font-medium">{name}</Ellipsis>
        <p className="text-sm italic opacity-60">{date}</p>
      </div>
    </Card>
  </a>
)

export default VideoCard
