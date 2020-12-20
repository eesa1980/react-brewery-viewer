import React from "react";
import { Link } from "react-router-dom";
import { IBrewery } from "../../interface/IBrewery";
import { Table } from "semantic-ui-react";
import Address from "../common/Address";

interface PropTypes {
  brewery: IBrewery;
}

const Item: React.FC<PropTypes> = ({ brewery }) => {
  return (
    <Table.Row>
      <Table.Cell selectable>
        <Link to={`/brewery-detail/${brewery.id}`}>
          <strong>{brewery.name}</strong>
        </Link>
      </Table.Cell>
      <Table.Cell selectable disabled={!brewery.latitude || !brewery.longitude}>
        <a
          href={`https://www.google.com/maps/place/${brewery.latitude} ${brewery.longitude}`}
          target="__blank"
        >
          <Address brewery={brewery} />
        </a>
      </Table.Cell>
      <Table.Cell selectable disabled={!brewery.website_url}>
        {brewery.website_url && (
          <a href={brewery.website_url} target="__blank">
            {brewery.website_url}
          </a>
        )}
      </Table.Cell>
    </Table.Row>
  );
};

export default Item;
