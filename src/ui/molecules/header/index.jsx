import React from "react";
import styled from "styled-components";

import { Box } from "../../atoms/box";
import { Container } from "../../atoms/container";
import { Flex } from "../../atoms/flex";
import { Typography } from "../../atoms/typography";

export const Header = () => {
  return (
    <Flex height={32} alignItems="center" bg="brand" borderBottom={1}>
      <Container>
        <Typography color="#fff">Logo</Typography>
      </Container>
    </Flex>
  );
};
