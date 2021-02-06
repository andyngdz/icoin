import { CDN } from 'services'
import { Img } from 'react-image'
import { TSymbol } from 'types'

interface ISymbolIconProps extends TSymbol {
  className?: string
}

const SymbolIcon: React.FC<ISymbolIconProps> = ({
  className,
  symbol,
  name
}) => {
  return (
    <Img
      src={[CDN.getIcon(symbol.toLowerCase()), CDN.defaultIcon]}
      alt={name}
      className={className}
    />
  )
}

export { SymbolIcon }
