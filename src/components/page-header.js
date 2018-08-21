import React from 'react'
import type { Node } from 'react'
import cx from 'classnames'

type PropsT = {
  children?: ?Node,
  className?: ?string,
}

export const PageHeader = ({ children, className, ...props }: PropsT) => (
  <h1 className={cx('h1', className)} {...props}>
    {children}
  </h1>
)

export default PageHeader
