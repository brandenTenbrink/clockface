// Libraries
import React, {RefObject, createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, select, boolean} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {Heading, HeadingRef} from '..'

// Types
import {
  HeadingElement,
  Typeface,
  FontWeight,
  FlexDirection,
  ComponentSize,
} from '../../../Types'

// Notes
import HeadingReadme from './Heading.md'
import {FlexBox} from '../../FlexBox'

const headingStories = storiesOf('Components/Heading', module).addDecorator(
  withKnobs
)

headingStories.add(
  'Base',
  () => {
    const headingRef: RefObject<HeadingRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log('Heading', headingRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Heading
          ref={headingRef}
          element={
            HeadingElement[select('element', mapEnumKeys(HeadingElement), 'H1')]
          }
          appearance={
            HeadingElement[
              select(
                'appearance',
                {Inherit: '', ...mapEnumKeys(HeadingElement)},
                'Inherit'
              )
            ]
          }
          type={Typeface[select('type', mapEnumKeys(Typeface), 'Rubik')]}
          weight={
            FontWeight[select('weight', mapEnumKeys(FontWeight), 'Medium')]
          }
          underline={boolean('underline', false)}
          selectable={boolean('selectable', false)}
          onClick={() => alert('clicked')}
        >
          {text('text', 'Gigantic Mental Fortitude')}
        </Heading>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(HeadingReadme),
    },
  }
)

headingStories.add(
  'Collage',
  () => {
    return (
      <div className="story--example">
        <FlexBox direction={FlexDirection.Column} margin={ComponentSize.Large}>
          <Heading element={HeadingElement.H2} appearance={HeadingElement.H1}>
            Heading 1
          </Heading>
          <Heading element={HeadingElement.H2} appearance={HeadingElement.H2}>
            Heading 2
          </Heading>
          <Heading element={HeadingElement.H2} appearance={HeadingElement.H3}>
            Heading 3
          </Heading>
          <Heading element={HeadingElement.H2} appearance={HeadingElement.H4}>
            Heading 4
          </Heading>
          <Heading element={HeadingElement.H2} appearance={HeadingElement.H5}>
            Heading 5
          </Heading>
          <Heading element={HeadingElement.H2} appearance={HeadingElement.H6}>
            Heading 6
          </Heading>
        </FlexBox>
      </div>
    )
  },
  {
    readme: {
      content: marked(HeadingReadme),
    },
  }
)
