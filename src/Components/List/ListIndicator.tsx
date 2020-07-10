import React, {FunctionComponent, useContext} from 'react'
import classnames from 'classnames'

// Contexts
import {ListItemContext} from './ListItem'
import {ListContext} from './List'

// Types
import {InfluxColors} from '../../Types'

// Styles
import './ListIndicator.scss'

export type ListIndicatorType = 'checkbox' | 'dot'

export interface ListIndicatorProps {
  /** Controls appearance of indicator */
  type: ListIndicatorType
}

export const ListIndicator: FunctionComponent<ListIndicatorProps> = ({
  type,
}) => {
  const {size, selected, listItemBackgroundColor} = useContext(ListItemContext)
  const {listContrastColor, listBackgroundColor} = useContext(ListContext)

  const indicatorClassname = classnames('cf-list-indicator', {
    'cf-list-indicator__selected': selected,
    [`cf-list-indicator__${type}`]: type,
    [`cf-list-indicator__${listContrastColor || 'light'}`]: true,
    'cf-list-indicator__special-contrast':
      listBackgroundColor === InfluxColors.Obsidian,
    [`cf-list-indicator__${size}`]: size,
  })

  let elementStyle

  if (listItemBackgroundColor && type === 'checkbox') {
    elementStyle = {
      backgroundColor: InfluxColors.White,
      boxShadow: `0 0 5px 1px ${listItemBackgroundColor}`,
    }
  }

  return (
    <div className={indicatorClassname}>
      <div className="cf-list-indicator--element" style={elementStyle} />
    </div>
  )
}

ListIndicator.displayName = 'ListIndicator'
