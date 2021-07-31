import React from 'react';
import { Segment, Header, Image } from 'semantic-ui-react'


const PokedexHeader = ({name, author}) => {

  return (
      <Segment basic inverted padded='very' vertical>
           <Header as='h1'>This is a Header for {name} Pokedex!</Header>
           <Image centered src={'photo.jpg'} size={'small'}/>
           <Header as='h3'>Author: {author}</Header>
    </Segment>
  )

}

export default PokedexHeader