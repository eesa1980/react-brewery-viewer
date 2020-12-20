import React from "react";
import { Container, Dimmer, Divider, Header, Loader } from "semantic-ui-react";

interface PropTypes {
  title?: string | JSX.Element;
  subtitle?: string;
  isLoading?: boolean;
}

const Layout: React.FC<PropTypes> = ({
  children,
  title,
  isLoading = false,
  subtitle,
}) => {
  return (
    <Container>
      <Dimmer active={isLoading} page={true}>
        <Loader content="Loading" />
      </Dimmer>

      {title && (
        <Divider horizontal>
          <Header as="h1">{title}</Header>
        </Divider>
      )}

      {subtitle && (
        <Header as="p" textAlign={"center"}>
          {subtitle}
        </Header>
      )}

      {children}
    </Container>
  );
};

export default Layout;
