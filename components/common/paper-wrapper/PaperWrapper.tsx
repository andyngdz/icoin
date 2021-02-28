import React from 'react'
import { Paper, PaperProps } from '@material-ui/core'

const PaperWrapper: React.FC<PaperProps> = ({
  className,
  ...restProps
}): React.ReactElement => {
  return <Paper className={className} {...restProps} />
}

export { PaperWrapper }
