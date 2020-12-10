import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  interviews: [
    {
      name: 'Randy Shao',
      company: 'Microsoft',
      role: 'Software Engineering Intern',
      dateOfInterview: '2020-08-31',
    },
    {
      name: 'Mark Zuckerberg',
      company: 'Facebook',
      role: 'Software Engineering Intern',
      dateOfInterview: '2020-08-30',
    },
    {
      name: 'Mark Zuckerberg',
      company: 'Facebook',
      role: 'Software Engineering Intern',
      dateOfInterview: '2020-08-30',
    },
    {
      name: 'Mark Zuckerberg',
      company: 'Facebook',
      role: 'Software Engineering Intern',
      dateOfInterview: '2020-08-30',
    },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ interviews: state.interviews }}>
      {children}
    </GlobalContext.Provider>
  );
};
