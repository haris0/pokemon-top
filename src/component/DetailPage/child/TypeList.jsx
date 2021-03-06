import React from 'react';
import {
  Box,
  Badge,
} from '@chakra-ui/react';
import {PokemonColors} from "../../../colors";

const TypeList = ({typeList}) => {
  return (
    <div>
      <Box {...type_box}>
        {typeList.map(type =>(
          <Badge {...bedge_type}
            bgColor={PokemonColors[type.type.name]}
            key={type.type.name}>
            {type.type.name}
          </Badge>
        ))}
      </Box>
    </div>
  );
};

export default TypeList;

const type_box = {
  textAlign:"center",
  marginBottom:"10px"
}

const bedge_type = {
  variant:"solid",
  margin:"5px",
  textTransform:"capitalize"
}
