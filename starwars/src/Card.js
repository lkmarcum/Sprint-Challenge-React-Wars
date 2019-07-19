import React from "react";
import { Card, Icon, Divider } from "semantic-ui-react";

function PersonCard({ name, height, mass, hair, skin, eyes, birth, gender }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name="user circle outline" />
          {name}
        </Card.Header>
        <Divider />
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
          <Icon name="hand paper" />
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
    </Card>
  );
}

export default PersonCard;
