"use client";

import { Flex, TextField, Button } from "@radix-ui/themes";
import React from "react";

const Form = () => {
  return (
    <Flex>
      <form className="max-w-1/2 mx-auto flex-col gap-2">
        <label htmlFor="email">
          Email
          <TextField.Root
            id="email"
            className="w-[300px]"
            placeholder="Enter your email"
          />
        </label>
        <label htmlFor="name">
          Name
          <TextField.Root
            id="name"
            className="w-[300px]"
            placeholder="Enter your name"
          />
        </label>
        <Button>Button</Button>
      </form>
    </Flex>
  );
};

export default Form;
