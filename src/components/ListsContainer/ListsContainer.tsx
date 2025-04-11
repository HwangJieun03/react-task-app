import React, { FC } from "react";
import { IList } from "../../types";
import { listsContainer } from "./ListsContainer.css";

type TListContainerProps = {
  boardId: string;
  lists: IList[];
};
const ListsContainer: FC<TListContainerProps> = ({ lists, boardId }) => {
  return (
    <div className={listsContainer}>
      {lists.map((list) => (
        <List key={lists.listId} list={list} boardId={boardId} />
      ))}
      <ActionButton/>
    </div>
  );
};

export default ListsContainer;
