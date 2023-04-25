import React from 'react'
import { HStack, Spinner } from 'native-base';

export default function Loading() {
  return (
    <HStack space={8} justifyContent="center" alignItems="center" flex={1}>
      <Spinner color="warning.500" size="lg"/>
    </HStack>

  )
}