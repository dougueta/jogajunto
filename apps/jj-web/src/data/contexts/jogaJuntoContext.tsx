/* eslint-disable no-sequences */
import React, { createContext, useState, FC, ReactNode } from 'react';
import { jogaJuntoContextState } from 'data/contexts/jogaJuntoContext';
import { match } from 'assert';

const contextDefaultValues: jogaJuntoContextState = {
  fut: [],
  player: [],
  match: [],
};

type jogaJuntoProps = {
  children: ReactNode;
};

type JogaJuntoType = {
  fut: string[];
  player: string[];
  match: string[];
  teste: string;
};

export const JogaJuntoContext =
  createContext<JogaJuntoType>(contextDefaultValues);

export const JogaJuntoProvider = ({ children }: jogaJuntoProps) => {
  return (
    <JogaJuntoContext.Provider
      value={{
        fut,
        player,
        match,
        teste,
      }}
    >
      {children}
    </JogaJuntoContext.Provider>
  );
};

export default JogaJuntoContext;
