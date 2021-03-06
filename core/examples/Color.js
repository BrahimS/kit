import React from 'react'
import { Button } from 'rebass'
import { Text, Measure } from '../src/ui'
import { Color } from '../src'

const indigo = [
  '#eaebfa',
  '#d2d5f6',
  '#b7bbf0',
  '#959ce9',
  '#6872e0',
  '#0011cc',
  '#000fb7',
  '#000da0',
  '#000a83',
  '#00075c'
]

const colors = {
  red: 'red',
  gray: {
    light: ['#fafafa', '#f5f5f5'],
    dark: ['#555', '#111']
  },
  brand: {
    black: 'black',
    white: 'white',
    tomato: 'tomato'
  }
}

export default () => (
  <React.Fragment>
    <Color colors={colors} />
    <Color.Group
      prefix='indigo'
      colors={indigo}
      lightText={indigo[0]}
      darkTex={indigo[7]}
    />
    <Color.Group prefix='indigo' flexDirection='column' colors={indigo} />
    <Color.Contrast bg='tomato' color='black'>
      <Text>Tomato + Black</Text>
      <Measure>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor porttitor urna, quis semper purus fringilla sed.
        Nullam vehicula in metus non sagittis. In ornare, augue quis sagittis consectetur, arcu velit varius ligula, id pharetra urna neque sed lacus.
        Mauris ullamcorper vehicula lectus eget tristique.
        Nullam dignissim elementum velit quis varius.
        Ut sit amet nisi massa.
        Curabitur tincidunt ligula vulputate feugiat semper.
      </Measure>
    </Color.Contrast>
  </React.Fragment>
)
