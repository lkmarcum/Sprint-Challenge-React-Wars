import React from "react";
import { Card, Icon } from "semantic-ui-react";

const Card = (name, height, mass, hair, skin, eyes, birth, gender) => {
  <Card>
    <Card.Content>
      <Card.Header>
        <Icon name="user circle outline" />
        {name}
      </Card.Header>

      <Card.Description>
        <Icon name="arrows alternate vertical" />
        Height: {height} cm
      </Card.Description>
      <Card.Description>
        <Icon name="weight" />
        Mass: {mass} kg
      </Card.Description>
      <Card.Description>
        <Icon name="cut" />
        Hair: {hair}
      </Card.Description>
      <Card.Description>
        <Icon name="hand paper outline" />
        Skin: {skin}
      </Card.Description>
      <Card.Description>
        <Icon name="eye" />
        Eyes: {eyes}
      </Card.Description>
      <Card.Description>
        <Icon name="calendar alternate" />
        Birth year: {birth}
      </Card.Description>
      <Card.Description>
        <Icon name="venus mars" />
        Gender: {gender}
      </Card.Description>
    </Card.Content>
  </Card>;
};

export default Card;
