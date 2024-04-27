import {
  FC,
  PropsWithChildren,
  ReactElement,
  createContext,
  useState,
} from 'react';

export const TasksStatusChangeContext = createContext({
  updated: false,
  toggle: () => {},
});

export const TasksStatusChangeContextProvider: FC<PropsWithChildren> = (
  props,
): ReactElement => {
  const [updated, setUpdated] = useState(false);

  function toggleHandler() {
    updated ? setUpdated(false) : setUpdated(true);
  }

  return (
    <TasksStatusChangeContext.Provider
      value={{ updated, toggle: toggleHandler }}
    >
      {props.children}
    </TasksStatusChangeContext.Provider>
  );
};
