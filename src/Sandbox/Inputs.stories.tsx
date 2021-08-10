// Libraries
import React from 'react'

// Storybook
import {storiesOf} from '@storybook/react'
import {FlexBox} from '../Components/FlexBox'
import {
  AlignItems,
  ButtonShape,
  ComponentSize,
  FlexDirection,
  HeadingElement,
  IconFont,
} from '../Types'

import {Button} from '../Components/Button/Composed/Button'
import {Input, RangeSlider} from '../Components/Inputs'
import {SelectDropdown} from '../Components/Dropdowns/Composed/SelectDropdown'
import {SelectGroup} from '../Components/SelectGroup'
import {TextBlock} from '../Components/TextBlock'
import {Heading} from '../Components/Typography'

const cardStories = storiesOf('Sandbox/Inputs', module)

cardStories.add('Collage', () => {
  const onChange = () => {
    // Nothing
  }

  return (
    <div className="story--example">
      <FlexBox
        direction={FlexDirection.Column}
        margin={ComponentSize.Large}
        alignItems={AlignItems.FlexStart}
      >
        {[
          ComponentSize.ExtraSmall,
          ComponentSize.Small,
          ComponentSize.Medium,
          ComponentSize.Large,
        ].map(size => {
          return (
            <div key={size.toString()}>
              <Heading element={HeadingElement.H2}>{size.toString()}</Heading>
              <FlexBox
                direction={FlexDirection.Row}
                margin={ComponentSize.Medium}
              >
                <Button text="Button" size={size} />
                <Input value="Input" size={size} onChange={onChange} />
                <SelectDropdown
                  options={['Select', 'Items']}
                  onSelect={onChange}
                  selectedOption={'Select'}
                  buttonSize={size}
                />
                <SelectGroup size={size}>
                  <SelectGroup.Option
                    id={`mode-${size.toString()}-1`}
                    active={true}
                    value="1"
                    name={`mode-${size.toString()}`}
                    onClick={onChange}
                  >
                    Select
                  </SelectGroup.Option>
                  <SelectGroup.Option
                    id={`mode-${size.toString()}-2`}
                    active={false}
                    value="2"
                    name={`mode-${size.toString()}`}
                    onClick={onChange}
                  >
                    Group
                  </SelectGroup.Option>
                </SelectGroup>
                <TextBlock text="TextBlock" size={size} />
                <RangeSlider
                  value={50}
                  min={0}
                  max={100}
                  onChange={onChange}
                  size={size}
                />
                <Button
                  icon={IconFont.Zap}
                  shape={ButtonShape.Square}
                  size={size}
                />
              </FlexBox>
            </div>
          )
        })}
      </FlexBox>
    </div>
  )
})
