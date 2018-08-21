import React from 'react'
import type { Node } from 'react'
import cx from 'classnames'

type PropsT = {
  children?: ?Node,
  className?: ?string,
}

export const PageDescription = ({ children, className, ...props }: PropsT) => (
  <p className={cx('PageDescription', className)} {...props}>
    {children}
  </p>
)

export default PageDescription
