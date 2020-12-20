import React from "react";
import { Button, Icon, Table } from "semantic-ui-react";
import { IBrewery } from "../../interface/IBrewery";
import Item from "./Item";

const Items: React.FC<{
  isLoading: boolean;
  breweries: IBrewery[];
  onClickShowMore: () => void;
}> = (props) => {
  return (
    <Table fixed striped padded color={"teal"}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Location</Table.HeaderCell>
          <Table.HeaderCell>Website</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.breweries?.map((brewery: IBrewery, i: number) => (
          <Item key={brewery + "-" + i} brewery={brewery} />
        ))}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell>
            <Button
              color={"teal"}
              loading={props.isLoading}
              icon
              labelPosition="right"
              disabled={
                props.breweries.length >= 100 || !!(props.breweries.length % 10)
              }
              onClick={props.onClickShowMore}
            >
              Show more <Icon name="arrow down" />
            </Button>
          </Table.HeaderCell>
          <Table.HeaderCell />
          <Table.HeaderCell />
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default Items;
