import React, { useMemo, useState } from 'react';
import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';



const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput 
        value={filter.query}
        onChange={(e) => setFilter({...filter, query: e.target.value})}
        placeholder="Search..."
      />

      <MySelect
        value = {filter.sort}
        options = {[
          {
            name: 'by title',
            val: 'title'
          },
          {
            name: 'by title, reverse',
            val: 'title-reverse'
          },
        ]}
        defaultVal = {"Sort: "}
        onChange = {selectedSort => setFilter({...filter, sort: selectedSort})}
      ></MySelect>
    </div>
  );
};

export default PostFilter;