import { Button, ButtonProps } from "@chakra-ui/react"
import React from "react";

type BasicButtonProps = {
    onClick?: () => void;
    children: React.ReactNode;
} & ButtonProps

const BasicButton = ({ onClick, children, ...rest }: BasicButtonProps) => {
    return (
        <Button bg={{ base: "gray.800", _hover: "gray.700" }}
        {...rest}
        onClick={onClick}>
            {children}
        </Button>
    );
};

export default BasicButton;