import React from "react";
import { Header } from "semantic-ui-react";

interface PropTypes {
  title: string | JSX.Element;
}

const DetailItem: React.FC<PropTypes> = ({ title, children }) => {
  return (
    <article>
      <Header as={"h2"} size={"large"}>
        {title}
      </Header>

      {children}
    </article>
  );
};

export default DetailItem;
