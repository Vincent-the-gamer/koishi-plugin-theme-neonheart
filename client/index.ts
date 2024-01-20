import { Context } from '@koishijs/client'

import './index.scss'

export default function (ctx: Context) {
  ctx.theme({
    id: 'neonheart-light',
    name: 'NeonHeart Light',
  })
  ctx.theme({
    id: 'neonheart-dark',
    name: 'NeonHeart Dark',
  })
}
