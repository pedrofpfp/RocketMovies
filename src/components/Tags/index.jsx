import { Container } from './styles'

export function Tag({ title,icon: Icon, style, ...rest }) {
  return (
    <Container {...rest} style={style}>
      {title}
      {Icon && <Icon size={20}/>}
    </Container>
  )
}